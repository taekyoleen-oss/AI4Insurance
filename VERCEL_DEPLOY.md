# Vercel 배포 가이드

## 현재 상태
- ✅ 모든 변경 사항이 GitHub에 푸시됨
- ✅ `vercel.json` 설정 파일 준비됨
- ⚠️ Vercel 프로젝트 연결 필요

## Vercel 배포 방법

### 방법 1: Vercel 대시보드에서 연결 (권장)

1. [Vercel 대시보드](https://vercel.com/dashboard)에 로그인
2. "Add New Project" 클릭
3. GitHub 저장소 선택: `taekyoleen-oss/AI4Insurance`
4. 프로젝트 설정 확인:
   - Framework Preset: Next.js (자동 감지)
   - Root Directory: `./` (기본값)
   - Build Command: `npm run build` (자동 설정됨)
   - Output Directory: `.next` (자동 설정됨)
5. Environment Variables 설정 (필요한 경우):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. "Deploy" 클릭

**이후 자동 배포:**
- `main` 브랜치에 푸시할 때마다 자동으로 배포됩니다.

### 방법 2: Vercel CLI 사용

터미널에서 다음 명령어 실행:

```bash
# 1. Vercel 로그인
npx vercel login

# 2. 프로젝트 연결
npx vercel link

# 3. 프로덕션 배포
npx vercel --prod
```

## 최근 커밋 내역

다음 변경 사항들이 배포 대기 중입니다:

1. **모바일 네비게이션 스크롤 수정** (e68469d)
   - 모바일에서 섹션으로 스크롤이 정상 작동하도록 수정

2. **Supabase Keep-Alive 메커니즘** (3ed9f3b)
   - 데이터베이스 자동 재활성화 기능 추가

3. **InsureAutoFlow 플랫폼 링크** (48d881f)
   - 프로필 위에 플랫폼 소개 문구 및 링크 추가

## 배포 후 확인 사항

1. 모바일에서 네비게이션 메뉴 클릭 시 섹션으로 정상 스크롤되는지 확인
2. Supabase 데이터베이스가 자동으로 활성화되는지 확인
3. InsureAutoFlow 링크가 정상 작동하는지 확인

