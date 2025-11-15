/**
 * 모바일 네비게이션 테스트 스크립트
 * Puppeteer를 사용하여 모바일 뷰포트에서 네비게이션 메뉴가 제거되었는지 확인
 */

const puppeteer = require('puppeteer');

async function testMobileNavigation() {
  console.log('🚀 모바일 네비게이션 테스트 시작...\n');
  
  const browser = await puppeteer.launch({
    headless: false, // 브라우저를 보면서 테스트
    defaultViewport: {
      width: 375, // iPhone SE 크기
      height: 667,
      isMobile: true,
      hasTouch: true,
    },
  });

  try {
    const page = await browser.newPage();
    
    // User-Agent를 모바일로 설정
    await page.setUserAgent(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
    );

    console.log('📱 모바일 뷰포트로 설정 완료 (375x667)');
    
    // 로컬 개발 서버에 접속
    await page.goto('http://localhost:3000', {
      waitUntil: 'networkidle2',
      timeout: 30000,
    });

    console.log('✅ 페이지 로드 완료\n');

    // 네비게이션 메뉴 버튼들이 없는지 확인
    const navButtons = await page.$$eval('nav button', (buttons) => {
      return buttons
        .filter(btn => {
          const text = btn.textContent || '';
          return text.includes('소개') || 
                 text.includes('보험 배움 마당') || 
                 text.includes('커뮤니티') || 
                 text.includes('문의');
        })
        .map(btn => btn.textContent);
    });

    if (navButtons.length === 0) {
      console.log('✅ 성공: 모바일에서 네비게이션 메뉴 버튼이 제거되었습니다.');
    } else {
      console.log('❌ 실패: 다음 메뉴 버튼들이 여전히 표시되고 있습니다:');
      navButtons.forEach(btn => console.log(`   - ${btn}`));
    }

    // 로고와 인증 버튼이 있는지 확인
    const logo = await page.$('nav button[class*="flex items-center gap-2"]');
    const authButton = await page.$('nav button[class*="ghost"], nav [role="button"]');

    if (logo) {
      console.log('✅ 로고 버튼이 정상적으로 표시됩니다.');
    } else {
      console.log('⚠️  로고 버튼을 찾을 수 없습니다.');
    }

    if (authButton) {
      console.log('✅ 인증 버튼이 정상적으로 표시됩니다.');
    } else {
      console.log('⚠️  인증 버튼을 찾을 수 없습니다.');
    }

    // 스크린샷 저장
    await page.screenshot({ 
      path: 'mobile-navigation-test.png',
      fullPage: false,
    });
    console.log('\n📸 스크린샷 저장: mobile-navigation-test.png');

    // 3초 대기하여 시각적으로 확인
    console.log('\n⏳ 3초 후 브라우저를 닫습니다...');
    await page.waitForTimeout(3000);

  } catch (error) {
    console.error('❌ 테스트 중 오류 발생:', error.message);
    if (error.message.includes('net::ERR_CONNECTION_REFUSED')) {
      console.log('\n💡 개발 서버가 실행 중인지 확인하세요: npm run dev');
    }
  } finally {
    await browser.close();
    console.log('\n✅ 테스트 완료');
  }
}

// Puppeteer가 설치되어 있는지 확인
try {
  require.resolve('puppeteer');
  testMobileNavigation().catch(console.error);
} catch (e) {
  console.log('⚠️  Puppeteer가 설치되어 있지 않습니다.');
  console.log('📦 설치 중... npm install puppeteer --save-dev');
  console.log('\n💡 또는 수동으로 확인하세요:');
  console.log('   1. npm run dev 실행');
  console.log('   2. 브라우저에서 http://localhost:3000 접속');
  console.log('   3. 개발자 도구 (F12) → 디바이스 툴바 (Ctrl+Shift+M)');
  console.log('   4. 모바일 뷰포트로 전환하여 확인');
}

