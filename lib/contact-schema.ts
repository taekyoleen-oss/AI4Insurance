import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().trim().min(1, "이름을 입력해주세요.").max(100),
  email: z.string().trim().email("올바른 이메일 주소를 입력해주세요.").max(255),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(5, "문의 내용을 5자 이상 입력해주세요.").max(5000),
})

export type ContactInput = z.infer<typeof contactSchema>
