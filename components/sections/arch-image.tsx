import Image from "next/image"

const captions = ["1996년부터 재보험 실무", "한양대학교 보험계리학과 겸임교수"]

// 아치형으로 시작해 스크롤하면 화면 전체로 펼쳐지는 이미지 (globals.css .arch / .arch-media)
export function ArchImage() {
  return (
    <section aria-label="서울 남산의 해질녘 풍경" className="arch relative bg-navy">
      <div className="arch-media relative h-[78svh] min-h-[460px] overflow-hidden sm:h-[92svh]">
        <Image
          src="/images/seoul-namsan.jpg"
          alt="해질녘 남산타워와 서울 도심 빌딩"
          fill
          sizes="100vw"
          className="object-cover object-[50%_42%]"
        />
        <ul className="absolute bottom-6 right-5 flex flex-wrap justify-end gap-2 sm:bottom-10 sm:right-12">
          {captions.map((c) => (
            <li key={c} className="chip bg-[#0f1c2e]/80 text-white backdrop-blur-sm">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
