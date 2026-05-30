"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { contactSchema, type ContactInput } from "@/lib/contact-schema"

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  })

  const onSubmit = async (values: ContactInput) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      const data = await res.json()
      if (!res.ok || !data.success) {
        throw new Error(data.message ?? "전송에 실패했습니다.")
      }
      toast.success("문의가 전송되었습니다. 빠른 시일 내 답변드리겠습니다.")
      reset()
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "전송 중 오류가 발생했습니다.")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="이름" required error={errors.name?.message}>
          <Input id="name" placeholder="홍길동" aria-invalid={!!errors.name} {...register("name")} />
        </Field>
        <Field id="email" label="이메일" required error={errors.email?.message}>
          <Input id="email" type="email" placeholder="hong@example.com" aria-invalid={!!errors.email} {...register("email")} />
        </Field>
      </div>

      <Field id="company" label="회사명" error={errors.company?.message}>
        <Input id="company" placeholder="소속 회사명 (선택)" {...register("company")} />
      </Field>

      <Field id="message" label="문의 내용" required error={errors.message?.message}>
        <Textarea
          id="message"
          rows={6}
          placeholder="교육 과정·도구 도입·데이터 컨설팅 등 궁금한 점을 자세히 적어주세요."
          aria-invalid={!!errors.message}
          {...register("message")}
        />
      </Field>

      <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
        {isSubmitting ? "전송 중…" : "문의 보내기"}
        <Send className="h-4 w-4" />
      </Button>
    </form>
  )
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label} {required && <span className="text-brand">*</span>}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}
