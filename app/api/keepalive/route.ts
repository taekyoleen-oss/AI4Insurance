import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/**
 * Supabase 프로젝트를 깨우기 위한 API 엔드포인트
 * Vercel Cron Jobs나 외부 서비스에서 주기적으로 호출할 수 있습니다.
 * 
 * 사용 예시:
 * - Vercel Cron: 매시간 호출
 * - cron-job.org: 매 30분마다 호출
 */
export async function GET() {
  try {
    // 간단한 쿼리로 데이터베이스를 깨웁니다
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.warn("Supabase keep-alive 오류:", error.message);
      return NextResponse.json(
        {
          success: false,
          error: error.message,
          message: "Supabase 연결에 실패했습니다. 프로젝트가 일시 중지되었을 수 있습니다.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Supabase 연결 성공",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Keep-alive 실패:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        message: "Keep-alive 요청 처리 중 오류가 발생했습니다.",
      },
      { status: 500 }
    );
  }
}

