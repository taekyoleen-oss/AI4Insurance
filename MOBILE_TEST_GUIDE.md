# 모바일 네비게이션 테스트 가이드

## 변경 사항
모바일 버전에서 상단 네비게이션 메뉴(소개, 보험 배움 마당, 커뮤니티, 문의)를 제거했습니다.
이제 모바일에서는 로고와 인증 버튼만 표시됩니다.

## 테스트 방법

### 방법 1: 브라우저 개발자 도구 사용 (가장 간단)

1. 개발 서버 실행:
   ```bash
   npm run dev
   ```

2. 브라우저에서 `http://localhost:3000` 접속

3. 개발자 도구 열기:
   - Chrome/Edge: `F12` 또는 `Ctrl+Shift+I`
   - Firefox: `F12` 또는 `Ctrl+Shift+I`
   - Safari: `Cmd+Option+I`

4. 디바이스 툴바 활성화:
   - Chrome/Edge: `Ctrl+Shift+M` 또는 툴바에서 📱 아이콘 클릭
   - Firefox: `Ctrl+Shift+M`
   - Safari: 개발자 메뉴에서 "반응형 디자인 모드" 선택

5. 모바일 뷰포트 선택:
   - iPhone SE (375x667)
   - iPhone 12/13 (390x844)
   - Galaxy S20 (360x800)
   - 또는 원하는 모바일 기기 선택

6. 확인 사항:
   - ✅ 상단에 로고만 표시되는지 확인
   - ✅ "소개", "보험 배움 마당", "커뮤니티", "문의" 버튼이 없는지 확인
   - ✅ 인증 버튼(로그인/로그아웃)이 오른쪽에 표시되는지 확인
   - ✅ MobileLinksCard를 통해 섹션으로 이동할 수 있는지 확인

### 방법 2: Puppeteer 자동 테스트

1. Puppeteer 설치:
   ```bash
   npm install puppeteer --save-dev
   ```

2. 테스트 실행:
   ```bash
   node test-mobile-navigation.js
   ```

3. 결과 확인:
   - 콘솔에 테스트 결과 출력
   - `mobile-navigation-test.png` 스크린샷 생성

### 방법 3: 실제 모바일 기기에서 테스트

1. 개발 서버를 네트워크에 노출:
   ```bash
   npm run dev
   ```
   서버가 `http://localhost:3000`에서 실행됩니다.

2. 같은 네트워크의 모바일 기기에서 접속:
   - PC의 로컬 IP 주소 확인 (예: `192.168.1.100`)
   - 모바일 브라우저에서 `http://192.168.1.100:3000` 접속
   - 또는 Vercel 배포 URL 사용

## 예상 결과

### 모바일 (md 미만, < 768px)
- ✅ 로고 버튼 (왼쪽)
- ✅ 인증 버튼 (오른쪽)
- ❌ 네비게이션 메뉴 버튼 없음

### 데스크톱 (md 이상, ≥ 768px)
- ✅ 로고 버튼 (왼쪽)
- ✅ 네비게이션 메뉴 버튼 (중앙)
- ✅ 인증 버튼 (오른쪽)

## 문제 해결

### 네비게이션 메뉴가 여전히 표시되는 경우:
1. 브라우저 캐시 삭제: `Ctrl+Shift+Delete` (Chrome)
2. 하드 리프레시: `Ctrl+F5` 또는 `Ctrl+Shift+R`
3. 개발 서버 재시작

### 모바일 뷰포트가 적용되지 않는 경우:
1. Tailwind CSS의 `md:` 브레이크포인트 확인 (768px)
2. 브라우저 개발자 도구에서 실제 뷰포트 크기 확인
3. `components/navigation.tsx`의 `md:hidden` 클래스 확인

