# AI 4 Insurance — 웹사이트 리디자인 기획서

> 대상: `ai4insurance.com`
> 목적: v0 기반 단일 롱페이지를 **모던·심플**한 구조로 재설계
> 작업 환경: Claude Code (Next.js App Router)
> 톤: 조용한 전문가 (quiet expert) — 화려함보다 명료함, 근거 기반 신뢰

---

## 0. 한 줄 진단

현재 사이트는 **교육 플랫폼 + 도구 허브 + 전문가 프로필 + 자료실 + 문의**를 한 페이지에 평면으로 쌓아, 가장 강한 자산(30년 재보험 실무 · 보험계리사 · 논문 8편)이 묻혀 있다. 위계를 세우고, 신뢰를 앞세우고, 중복을 제거하는 것이 이번 리디자인의 핵심이다.

---

## 1. 핵심 전략 — 무엇을 앞세울 것인가

이 사이트의 진짜 차별점은 "AI 보험 교육"이라는 흔한 카피가 아니라 **검증된 전문가가 직접 만든 실무 도구와 교육**이라는 사실이다. 따라서 메시지 순서를 다음으로 재배치한다.

1. **전문성(Authority)** — 인태교: 코리안리 30년, 보험계리사, 경영학 박사, 논문 8편 (KCI 다수)
2. **도구(Products)** — Life Matrix Flow · Insure Auto Flow · DFA Auto Flow · Reserve Matrix Flow
3. **교육(Learning)** — 보험 배움 마당 4개 과정
4. **자료(Insights)** — 실무 자료/블로그
5. **연결(Contact)**

> 카피 원칙: 추상적 슬로건("보험의 미래를 만드는…")은 줄이고, **검증 가능한 사실**(근무 연수, 논문, 자격)로 신뢰를 만든다. 이것이 "조용한 전문가" 톤의 핵심이다.

---

## 2. 정보 구조 (IA)

단일 롱페이지의 피로감을 없애되, 사이트 규모상 과한 멀티페이지도 피한다.
**하이브리드 구조**: 강력한 랜딩(앵커 내비) + 깊이가 필요한 3개 전용 페이지.

```
/                      랜딩 (Hero → 도구 → 신뢰 → 교육 → 자료 → CTA)
/products              도구 4종 상세 (각 카드 → 외부 플랫폼 링크)
/learning              보험 배움 마당 (4개 과정 + 신청)
/about                 인태교 프로필 (경력 타임라인 + 연구실적 전체)
/insights              실무 자료/블로그 목록
/insights/[slug]       개별 글
/contact               문의 폼
```

- 헤더 내비: `소개 · 도구 · 배움 마당 · 자료실 · 문의` + 우측 `로그인` / 강조 CTA `도구 둘러보기`
- 랜딩의 각 섹션은 전용 페이지의 요약본 → "자세히 보기"로 연결 (DRY: 콘텐츠를 한 번만 작성하고 재사용)
- 모바일: 햄버거 → 풀스크린 시트 메뉴

---

## 3. 디자인 시스템

### 3.1 컬러 — 절제된 금융/학술 팔레트

| 토큰 | HEX | 용도 |
|------|-----|------|
| `--bg` | `#FAFAF8` | 배경 (웜 오프화이트, 에디토리얼) |
| `--ink` | `#0F1115` | 본문 텍스트 |
| `--navy` | `#1B2845` | 다크 섹션·푸터·구조색 |
| `--accent` | `#4A90C2` | 강조 1색만 (CTA·링크·포인트) |
| `--muted` | `#6B7280` | 보조 텍스트 |
| `--border` | `#E8E6E0` | 경계선·카드 테두리 |

> **단색 강조 원칙**: 액센트는 `#4A90C2`(스카이 블루) 하나만 사용. 데이터/AI 느낌을 위해 차트·다이어그램에만 차분한 보조색(예: `#7BA88F` 세이지) 허용. 이 액센트는 tkLeen 제품군(Life Matrix Flow 등)과 색을 맞춰 **생태계 일관성**을 줄 수 있음 — 원하면 tkLeen 브랜드 토큰과 통일.

### 3.2 타이포그래피

- **디스플레이(serif)**: `Fraunces` — 헤드라인. 학술적 권위 + 에디토리얼 무드 ("조용한 전문가"에 적합)
- **본문(KR)**: `Pretendard` / **본문(EN)**: `Inter`
- **메타(mono)**: `JetBrains Mono` — 과정 난이도·날짜·태그·라벨 (uppercase, letter-spacing 0.12em)

스케일(데스크톱): H1 56–64px / H2 36px / H3 24px / Body 17px / Caption 14px. 줄간격 본문 1.7. **여백을 디자인 요소로** — 섹션 상하 패딩 96–128px.

### 3.3 레이아웃 & 컴포넌트

- 컨테이너 max-width 1200px, 본문 텍스트 블록은 680px로 제한 (가독성)
- **도구 4종 = 벤토 그리드** (Life Matrix / Insure Auto / DFA는 활성, Reserve Matrix는 "준비중" 톤다운)
- 카드: 얇은 테두리 + 미세 호버 리프트(`translateY(-4px)`, shadow), 라운드 12–16px
- 신뢰 섹션: 숫자 스트립 (`30년 실무` · `논문 8편` · `보험계리사` · `4개 자동화 도구`)
- 추상 일러스트 대신 **실제 도구 UI 스크린샷/짧은 루프 영상** 사용 (2026 트렌드)

### 3.4 모션 (절제)

목적 있는 미세 모션만. 스크롤 진입 시 fade+slide(8–16px, 0.4s), CTA 호버 펄스, 카드 호버 리프트. 과한 패럴랙스·자동재생 캐러셀 지양. `prefers-reduced-motion` 존중.

---

## 4. 페이지별 구성

### 4.1 랜딩 `/`

**① Hero**
- 좌측 정렬 헤드라인(Fraunces): "보험 실무를, 데이터로 다시 설계합니다" *(슬로건보다 구체적)*
- 서브카피 1–2줄 + CTA 2개: `도구 둘러보기`(primary) · `교육 과정 보기`(ghost)
- 우측: 대표 도구 UI 미리보기(스크린샷) 또는 절제된 데이터 그리드 그래픽
- 하단 신뢰 스트립: `코리안리 30년 · 보험계리사 · KCI 논문 8편`

**② 도구 미리보기 (벤토)**
- 4개 카드 요약 + "도구 전체 보기" → `/products`
- 각 카드: 이름 · 한 줄 설명 · 상태 배지 · 화살표

**③ 신뢰 / 전문가**
- 인태교 한 단락 소개 + 핵심 지표 + "프로필 보기" → `/about`
- 최신 논문 2–3편 미니 인용 (학술 신뢰)

**④ 교육 하이라이트**
- 4개 과정 중 2개 카드 + "배움 마당 전체" → `/learning`

**⑤ 자료실 프리뷰**
- 최신 글 3개 → `/insights`

**⑥ CTA 밴드 (navy 배경, reversed)**
- "실무 적용이 궁금하신가요?" + 문의 버튼

### 4.2 도구 `/products`
4개 도구 상세 카드 (이름·설명·핵심 기능 3개·스크린샷·외부 링크). Reserve Matrix는 "준비중" 상태로 시각적 톤다운.

| 도구 | 설명 | 링크 |
|------|------|------|
| Life Matrix Flow | 생명보험료 산출 자동화 | life-matrix-flow.vercel.app |
| Insure Auto Flow | E2E 머신러닝 자동화 | insureautoflow.com |
| DFA Auto Flow | 동적재무분석(DFA) 자동화 | dfaautoflow.com |
| Reserve Matrix Flow | 지급준비금 추정 (준비중) | — |

### 4.3 배움 마당 `/learning`
4개 과정 카드 — 난이도 배지(초급/중급) · 기간(mono) · 설명 · 신청 CTA. 필터(난이도/주제) 선택.

### 4.4 소개 `/about`
- 인태교 프로필 + 핵심 지표
- **경력 타임라인** (1996→현재, 세로 타임라인 UI)
- **연구실적** 전체 8편 (저널·연도, KCI 표기) — 학술 신뢰의 핵심 자산이므로 깔끔한 리스트로
- 전문 분야 태그 그리드

### 4.5 자료실 `/insights`
카드 그리드 (카테고리·날짜·제목·요약·태그). 카테고리 필터(excel-python / analysis 등).

### 4.6 문의 `/contact`
폼(이름·이메일·회사·내용) + 연락처/운영시간 카드. 폼은 Supabase 또는 Resend로 전송.

---

## 5. 레퍼런스 & 적용 포인트

| 사이트 | 차용 포인트 |
|--------|------------|
| **Linear** | 절제된 다크 섹션, 정밀한 타이포, 미세 모션 |
| **Asana** | 명료함 우선, 넉넉한 여백, 페르소나별 경로 분리 내비 |
| **Stripe** | 복잡한 제품을 깔끔한 다이어그램·위계로 설명 |
| **Vercel** | 미니멀 헤더, 강한 단색 강조, 벤토 그리드 |
| **Centrifuge(핀테크)** | 다크 배경 + 정밀 타입, **지표·실적을 초반에 노출**해 신뢰 형성 |

> 2026 핵심 트렌드 반영: 명료함 > 스펙터클, 목적 있는 미세 모션, 추상 일러스트 대신 실제 UI, 더 적은 링크·명확한 CTA·sticky 헤더·앵커 내비.

---

## 6. 기술 스택 & 구현 메모

- **프레임워크**: Next.js 14/15 App Router + TypeScript
- **스타일**: Tailwind CSS + shadcn/ui (TweakCN로 테마 토큰 관리)
- **폰트**: `next/font` — Fraunces, Inter, JetBrains Mono (Google), Pretendard (cdn.jsdelivr.net)
- **애니메이션**: Framer Motion (스크롤 리빌·호버), `prefers-reduced-motion` 가드
- **콘텐츠**: 도구/과정/연구실적은 우선 `content/*.ts` 정적 데이터로 분리 (추후 Supabase/CMS 전환 용이)
- **자료실**: MDX 또는 Supabase 테이블
- **문의 폼**: Supabase Insert 또는 Resend 이메일
- **배포**: Vercel
- **SEO**: `generateMetadata`, OG 이미지, sitemap, 한국어 meta. v0 잔재 메타 제거.
- **접근성**: 시맨틱 헤딩 위계, 대비 AA, 키보드 포커스, alt 텍스트

### 디렉터리(예시)
```
app/
  layout.tsx            # 폰트·헤더·푸터
  page.tsx              # 랜딩
  products/page.tsx
  learning/page.tsx
  about/page.tsx
  insights/page.tsx
  insights/[slug]/page.tsx
  contact/page.tsx
components/
  layout/{Header,Footer,Container}.tsx
  sections/{Hero,ProductBento,Authority,LearningPreview,InsightsPreview,CtaBand}.tsx
  ui/...                # shadcn
content/
  products.ts learning.ts research.ts insights/
lib/ styles/globals.css (토큰)
```

---

## 7. Claude Code 작업 순서

1. **프로젝트 셋업** — Next.js + TS + Tailwind + shadcn 초기화, 폰트 등록, `globals.css`에 §3.1 컬러 토큰 정의
2. **레이아웃** — Header(sticky·앵커 내비) + Footer + Container, 모바일 시트 메뉴
3. **콘텐츠 데이터화** — `content/*.ts`에 도구 4종·과정 4개·연구실적 8편 입력
4. **랜딩 섹션 구현** — Hero → ProductBento → Authority → LearningPreview → InsightsPreview → CtaBand (Framer Motion 스크롤 리빌)
5. **전용 페이지** — /products, /learning, /about(타임라인), /insights
6. **문의 폼** — Supabase/Resend 연동 + 검증·성공 토스트
7. **다듬기** — 반응형 QA, 접근성, SEO 메타·OG, Lighthouse 점검 후 Vercel 배포

---

## 8. 빠른 결정이 필요한 항목

- [ ] **액센트 컬러**: `#4A90C2` 유지(tkLeen 생태계 통일) vs 새 색
- [ ] **다크 모드** 지원 여부
- [ ] **자료실** 정적 MDX vs Supabase
- [ ] **로그인/회원가입** 이번 범위 포함 여부 (현재 헤더에 존재)
- [ ] Hero 비주얼: 실제 도구 스크린샷 확보 가능 여부
