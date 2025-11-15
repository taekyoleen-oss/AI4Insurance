import { supabase } from "./supabase";

/**
 * Supabase 프로젝트가 일시 중지된 경우 자동으로 깨어나게 하는 함수
 * 앱이 로드될 때 호출하여 데이터베이스를 활성화합니다.
 */
export async function wakeUpSupabase() {
  try {
    // 간단한 쿼리를 실행하여 데이터베이스를 깨웁니다
    // auth.getSession()은 가벼운 요청이므로 적합합니다
    const { data, error } = await supabase.auth.getSession();
    
    if (error) {
      console.warn("Supabase 연결 시도 중 오류:", error.message);
      // 에러가 발생해도 계속 시도 (프로젝트가 깨어나는 동안 시간이 걸릴 수 있음)
    } else {
      console.log("Supabase 연결 성공");
    }
    
    return { success: !error, error };
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

