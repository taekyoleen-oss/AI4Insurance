"use client";

import { useEffect } from "react";
import { wakeUpSupabase } from "@/lib/supabase-keepalive";

/**
 * Supabase Keep-Alive 컴포넌트
 * 페이지가 로드될 때마다 Supabase 연결을 유지합니다.
 */
export function SupabaseKeepAlive() {
  useEffect(() => {
    // 페이지 로드 시 즉시 Supabase 깨우기
    wakeUpSupabase();

    // 5분마다 Keep-Alive 실행
    const interval = setInterval(() => {
      wakeUpSupabase();
    }, 5 * 60 * 1000); // 5분

    return () => {
      clearInterval(interval);
    };
  }, []);

  // 이 컴포넌트는 UI를 렌더링하지 않습니다
  return null;
}







