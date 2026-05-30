# AI 4 Insurance — 리디자인 설계 명세 (Design Spec)

> 작성일: 2026-05-30
> 근거 기획서: `ai4insurance-redesign-plan.md`
> 톤: 조용한 전문가(quiet expert) — 명료함·근거 기반 신뢰

## 0. 확정된 결정 (사용자 승인)

| 항목 | 결정 |
|------|------|
| 작업 범위 | **전체 멀티페이지 한 번에** (7개 라우트 신규 구축) |
| 로그인/인증 | **완전 제거** (자료실 전면 공개) |
| 다크 모드 | **라이트 + 다크 토글** |
| 강조 색 | **네이비(#1B2845) + 스카이블루(#4A90C2)** |
| 브랜드 아이콘 | 사용자가 파일 직접 제공 → `/public/brand-icon.svg` 통합 지점 |
| 문의 폼 | Supabase `inquiries` 테이블 insert (route handler) |

## 1. 기술 현실 (기획서 대비 차이)

- **Tailwind v4** — 설정은 `app/globals.css`의 CSS 변수 + `@theme inline`. (별도 `tailwind.config` 없음)
- 이미 설치됨: `next-themes@0.4.6`, `components/theme-provider.tsx`, shadcn/ui 전체, `lib/supabase.ts`, `lib/markdown.ts`.
- 추가 설치: `framer-motion`(스크롤 리빌). 폰트는 `next/font/google`(Fraunces, Inter, JetBrains_Mono) + Pretendard CDN.
- Next.js 14.2.16 App Router, React 18.

## 2. 정보 구조 (라우트)

```
/                              랜딩
/products                      도구 4종 상세
/learning                      교육 4과정
/about                         인태교 프로필 + 경력 타임라인 + 논문 8편 + 전문분야
/insights                      자료실 목록 (lib/markdown 재사용)
/insights/[category]/[slug]    개별 글
/insights/category/[category]  카테고리 필터
/insights/tag/[tag]            태그 필터
/contact                       문의 폼
```

- 기존 `/blog`, `/category/[category]`, `/tag/[tag]`는 **`/insights`로 이전**하고 구 경로는 리다이렉트(`next.config.mjs` redirects)로 보존.
- `lib/markdown.ts`는 그대로 재사용 — **블로그 콘텐츠(10개 카테고리) 손실 0**.

## 3. 디자인 시스템

### 3.1 컬러 토큰 (globals.css, oklch)
라이트/다크 양쪽 정의. 핵심 매핑:
- `--bg` 웜 오프화이트 `#FAFAF8` (다크: 네이비 계열)
- `--ink` 본문 `#0F1115`
- `--navy` `#1B2845` (다크 섹션·푸터·구조)
- `--accent` `#4A90C2` (CTA·링크·포인트 — 단색)
- `--muted` `#6B7280`, `--border` `#E8E6E0`
- shadcn 토큰(`--primary`, `--accent`, `--card` 등)을 위 팔레트로 재매핑.

### 3.2 타이포그래피
- 디스플레이(serif): **Fraunces** — 헤드라인
- 본문 KR: **Pretendard** / EN: **Inter**
- 메타 mono: **JetBrains Mono** — 날짜·난이도·태그·라벨(uppercase, tracking 0.12em)
- 스케일: H1 56–64 / H2 36 / H3 24 / Body 17 / Caption 14. 본문 줄간격 1.7. 섹션 패딩 96–128px.

### 3.3 레이아웃·컴포넌트
- 컨테이너 max-w 1200px, 본문 텍스트 블록 680px.
- 도구 4종 = 벤토 그리드(Life Matrix·Insure Auto·DFA 활성, Reserve Matrix "준비중" 톤다운).
- 카드: 얇은 테두리 + 미세 호버 리프트(translateY(-4px)+shadow), radius 12–16px.
- 신뢰 숫자 스트립: `코리안리 30년 · 보험계리사 · KCI 논문 8편 · 자동화 도구 4종`.

### 3.4 모션
스크롤 진입 fade+slide(8–16px, 0.4s), CTA 호버, 카드 리프트. 과한 패럴랙스/자동 캐러셀 지양. `prefers-reduced-motion` 존중.

## 4. 컴포넌트 구조

```
components/
  layout/{Header,Footer,Container,ThemeToggle,BrandIcon}.tsx
  sections/{Hero,ProductBento,Authority,LearningPreview,InsightsPreview,CtaBand}.tsx
  ui/...                       (기존 shadcn 유지)
content/
  products.ts courses.ts research.ts profile.ts site.ts
```

- **Header**: sticky, 앵커/라우트 내비(`소개·도구·배움 마당·자료실·문의`) + ThemeToggle + 강조 CTA(`도구 둘러보기`). 모바일 햄버거 → 시트. 로그인 버튼 제거.
- **BrandIcon**: `/public/brand-icon.svg`를 `next/image` 또는 `<img>`로 렌더, 파일 부재 시 fallback 워드마크. 헤더·푸터·favicon 공통.
- **Footer**: 실제 정보로 재작성(인태교/도구/자료실/문의 링크) + 바이브코딩랩 푸터(전역 규칙) 선택 삽입.

## 5. 콘텐츠 데이터 (실제 값 보존)

`content/*.ts`로 추출 — **현재 사이트의 실제 텍스트를 1:1 보존**:
- `products.ts`: Life Matrix Flow(life-matrix-flow.vercel.app), Insure Auto Flow(insureautoflow.com), DFA Auto Flow(dfaautoflow.com), Reserve Matrix Flow(준비중).
- `courses.ts`: 4개 과정(엑셀365 통계 기초 / 일반보험 모델링 / 데이터 사이언스 / 엑셀-파이썬) — 난이도·기간·개요·대상·준비·커리큘럼 전체.
- `research.ts`: 논문 8편(2022.12 ~ 2026.1, 저널·권호·KCI 표기).
- `profile.ts`: 경력 타임라인(1996~현재) + 주요 성과 + 전문분야 태그 + 소개/철학.

## 6. 인증 제거 범위

- 삭제: `contexts/auth-context.tsx`, `lib/auth.ts`, `components/auth-dialog.tsx`, 네비 로그인 UI, 커뮤니티 로그인 게이트.
- `layout.tsx`에서 `AuthProvider` 제거, `ThemeProvider`로 교체.
- 유지: `lib/supabase.ts`(문의 저장), `supabase-keepalive.tsx`(무료 플랜 일시정지 방지).
- `mobile-*`(중복 모바일 컴포넌트), `services-section-old.tsx`, `committed_nav.tsx`, `temp_nav_committed.tsx`, `test-mobile-navigation.js` 등 잔재 정리.

## 7. 문의 폼 백엔드

- `app/api/contact/route.ts` (POST) → `lib/supabase.ts` anon 클라이언트로 `inquiries` 테이블 insert. Zod 검증.
- 제공 SQL(`output/contact_table.sql` 또는 명세에 인라인): `inquiries(id, name, email, company, message, created_at)` + RLS(anon insert만 허용).
- 폼: react-hook-form + zod + sonner 토스트.

## 8. SEO·접근성

- `layout.tsx` metadata 재작성(한국어, v0 잔재 `generator: v0.app` 제거), `generateMetadata` per page, OG 이미지, sitemap.
- 시맨틱 헤딩 위계, 대비 AA, 키보드 포커스, alt 텍스트, `lang="ko"`.

## 9. 구현 순서

1. 디자인 토큰(globals.css) + 폰트(layout) + ThemeProvider/ThemeToggle
2. 콘텐츠 데이터화(`content/*.ts`)
3. 레이아웃(Header/Footer/Container/BrandIcon)
4. 랜딩 섹션 6종 + Framer Motion 리빌
5. 전용 페이지 /products /learning /about(타임라인)
6. /insights 이전 + 재스타일 + 리다이렉트
7. /contact + Supabase route handler + SQL
8. 인증 제거 + 잔재 정리
9. SEO·메타·OG·sitemap, 반응형/접근성 QA, 빌드 검증

## 10. 검증 기준

- `pnpm build` 성공(타입 에러 0).
- 모든 라우트 200, 구 `/blog`·`/category`·`/tag` 리다이렉트 동작.
- 블로그 글 렌더 정상(한글 슬러그 포함).
- 라이트/다크 토글 정상, 대비 AA.
- 모바일/데스크톱 반응형 정상.
