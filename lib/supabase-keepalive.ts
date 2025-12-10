import { supabase } from "./supabase";

/**
 * Supabase 프로젝트가 일시 중지된 경우 자동으로 깨어나게 하는 함수
 * 앱이 로드될 때 호출하여 데이터베이스를 활성화합니다.
 */
export async function wakeUpSupabase() {
  try {
    // 여러 방법으로 데이터베이스를 깨웁니다
    // 1. auth.getSession() - 인증 세션 확인 (가장 가벼운 요청)
    const sessionResult = await supabase.auth.getSession();
    
    // 2. 실제 데이터베이스 쿼리 실행 (데이터베이스 연결 확인)
    // RLS 정책 때문에 에러가 발생할 수 있지만, 중요한 것은 연결 시도입니다
    try {
      await supabase
        .from('users')
        .select('id')
        .limit(1)
        .maybeSingle();
    } catch (dbError) {
      // 데이터베이스 쿼리 에러는 무시 (RLS 정책 또는 테이블 접근 권한 문제일 수 있음)
      // 중요한 것은 데이터베이스에 연결을 시도하는 것입니다
    }
    
    if (sessionResult.error) {
      console.warn("Supabase 연결 시도 중 오류:", sessionResult.error.message);
      // 에러가 발생해도 계속 시도 (프로젝트가 깨어나는 동안 시간이 걸릴 수 있음)
    } else {
      // 성공적으로 연결됨
      if (process.env.NODE_ENV === 'development') {
        console.log("Supabase Keep-Alive 성공");
      }
    }
    
    return { success: !sessionResult.error, error: sessionResult.error };
  } catch (error) {
    console.error("Supabase wake-up 실패:", error);
    return { success: false, error };
  }
}

/**
 * 주기적으로 Supabase를 깨우는 함수 (클라이언트 사이드)
 * 컴포넌트에서 useEffect로 사용
 */
export function useSupabaseKeepAlive(intervalMinutes: number = 10) {
  if (typeof window === "undefined") return;

  const intervalMs = intervalMinutes * 60 * 1000;

  // 초기 연결 시도
  wakeUpSupabase();

  // 주기적으로 연결 유지
  const intervalId = setInterval(() => {
    wakeUpSupabase();
  }, intervalMs);

  // 클린업 함수
  return () => clearInterval(intervalId);
}

