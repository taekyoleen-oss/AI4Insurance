import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { contactSchema } from "@/lib/contact-schema"

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, message: "잘못된 요청입니다." }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: parsed.error.issues[0]?.message ?? "입력값을 확인해주세요." },
      { status: 422 },
    )
  }

  const { name, email, company, message } = parsed.data

  const { error } = await supabase.from("inquiries").insert({
    name,
    email,
    company: company || null,
    message,
  })

  if (error) {
    console.error("문의 저장 실패:", error.message)
    return NextResponse.json(
      { success: false, message: "전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요." },
      { status: 500 },
    )
  }

  return NextResponse.json({ success: true, message: "문의가 성공적으로 전송되었습니다." })
}
