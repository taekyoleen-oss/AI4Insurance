import { Container } from "@/components/layout/container"

const STATEMENT =
  "30년 재보험 현장에서 다듬은 계리의 언어를, 실무자가 내일 아침 바로 쓸 수 있는 도구와 교육으로 옮깁니다."

// 스크롤 진행에 따라 단어가 차례로 채워지는 선언문 (globals.css .statement / .fill-word)
export function Statement() {
  const words = STATEMENT.split(" ")
  const last = words.length - 1

  return (
    <section aria-label="AI 4 Insurance가 하는 일" className="statement relative bg-navy text-navy-foreground">
      <div className="statement-sticky flex items-center py-32">
        <Container>
          <p className="ml-auto max-w-[20ch] text-right text-[clamp(2.25rem,5.6vw,5.5rem)] font-light leading-[1.14] tracking-[-0.045em] sm:max-w-[17ch]">
            {words.map((w, i) => (
              <span key={i} className="fill-word" style={{ "--p": i / last } as React.CSSProperties}>
                {w}
                {i < last ? " " : ""}
              </span>
            ))}
          </p>
        </Container>
      </div>
    </section>
  )
}
