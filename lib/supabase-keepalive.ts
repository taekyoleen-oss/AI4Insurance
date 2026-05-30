import { supabase } from "./supabase";

/**
 * Supabase 프로젝트가 일시 중지된 경우 자동으로 깨어나게 하는 함수
 * 앱이 로드될 때 호출하여 데이터베이스를 활성화합니다.
 */
export async function wakeUpSupabase() {
  try {
    // auth.getSession() - 인증 세션 확인 (가장 가벼운 요청, 테이블 비의존)
    // 인증 기능은 제거되었지만, 이 호출만으로 Supabase 프로젝트를 깨우기에 충분합니다.
    const sessionResult = await supabase.auth.getSession();

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

