# tkLeen — Brand Assets v1.0

**보험·금융 실무를 위한 AI 워크플로우**

## 브랜드 이름

- **표기**: `tkLeen` (정식 표기, camelCase 형식)
- **발음**: 티-케이-린
- **금지 표기**: `TKLEEN`, `tkleen`, `TkLeen`, `Tkleen` 등 변형 금지
- 가운데 `L`은 항상 대문자, 나머지는 모두 소문자

## 폴더 구조

```
tkleen-brand-assets/
├── svg/          # 원본 SVG 11종
├── png/          # 사이즈별 PNG 60종 (16/32/64/128/256/512px + 락업 360/720/1440px)
├── preview/      # 시각 가이드 (preview/index.html)
└── README.md
```

## 컬러 시스템

| 이름       | HEX        | 용도                            |
|-----------|------------|--------------------------------|
| Ink       | `#0A0A0A`  | T · 본문 텍스트 · 1차 다크      |
| Sky Blue  | `#4A90C2`  | K · 'L' 액센트 · 브랜드 시그니처 |
| Deep Navy | `#1B2845`  | 앱 아이콘 컨테이너               |
| Cream     | `#FAFAF7`  | 배경 · 네거티브                 |

## 워드마크 사용 규칙

- 워드마크의 가운데 `L`은 **Sky Blue #4A90C2** 로 강조
- 나머지 `tk`와 `een`은 잉크색(또는 다크 배경에서는 크림색)
- 폰트: Fraunces (display, light 300 / regular 400)
- 단순 텍스트로 표기할 때는 색 강조 없이 `tkLeen`만 표기해도 무방

## 파일 목록

### 코어 마크 8종

| #   | 파일                            | 용도                                          |
|-----|--------------------------------|----------------------------------------------|
| 01  | primary-transparent.svg        | **메인 마크.** 홈페이지 헤더, 라이트 배경 전반    |
| 02  | reversed-transparent.svg       | 다크 배경용 (T가 크림색으로 전환)              |
| 03  | app-icon-navy.svg              | **기본 앱 아이콘** (iOS/Android/PWA)         |
| 04  | app-icon-ink.svg               | 대안 앱 아이콘 (더 모던한 톤)                  |
| 05  | app-icon-cream.svg             | 라이트 톤 앱 아이콘                            |
| 06  | outlined-frame.svg             | 테두리 강조 (뱃지, 인장, 인증 마크)             |
| 07  | circle-avatar.svg              | 소셜 프로필 (LinkedIn, X, GitHub, Slack)     |
| 08  | monochrome-ink.svg             | 1색 인쇄, 흑백 문서, 워터마크                  |

### 워드마크 락업 2종

| #   | 파일                              | 용도                          |
|-----|----------------------------------|------------------------------|
| 09  | lockup-horizontal-light.svg     | 라이트 배경 가로 락업          |
| 10  | lockup-horizontal-dark.svg      | 다크 배경 가로 락업            |

### Favicon

| #   | 파일             | 용도                  |
|-----|-----------------|----------------------|
| 11  | favicon.svg     | 브라우저 탭 아이콘    |

## 사용 가이드

### 홈페이지

```html
<!-- 라이트 헤더 -->
<img src="/assets/svg/01-primary-transparent.svg" alt="tkLeen" height="32">

<!-- 다크 헤더 -->
<img src="/assets/svg/02-reversed-transparent.svg" alt="tkLeen" height="32">

<!-- 워드마크 락업 -->
<img src="/assets/svg/09-lockup-horizontal-light.svg" alt="tkLeen" height="48">
```

### Favicon

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/png/11-favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/png/11-favicon-16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/png/03-app-icon-navy-256.png">
```

### PWA Manifest

```json
{
  "name": "tkLeen",
  "short_name": "tkLeen",
  "icons": [
    { "src": "/png/03-app-icon-navy-256.png", "sizes": "256x256", "type": "image/png" },
    { "src": "/png/03-app-icon-navy-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

### HTML로 직접 워드마크 표기

```html
<span class="brand">
  tk<span style="color: #4A90C2; font-weight: 400;">L</span>een
</span>
```

## 최소 사용 사이즈

- **마크 단독**: 16px (favicon 한계)
- **락업 (마크 + 워드마크)**: 너비 120px 이상
- **여백**: 마크 주변에 마크 너비의 25% 이상 확보

## 금지 사항

- 마크 비율 변형 금지 (가로/세로 stretch)
- K 색상을 임의로 변경 금지 (Sky Blue `#4A90C2` 고정)
- 마크 회전 금지
- 마크 위에 다른 그래픽 요소 겹치기 금지
- 브랜드명 표기 변경 금지 (`tkLeen` 형식 유지)
