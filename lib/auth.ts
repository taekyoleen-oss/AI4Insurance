import { supabase } from "./supabase";

// 회원가입
export async function signUp(
  email: string,
  password: string,
  name: string,
  organization?: string,
  bio?: string
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name: name,
        organization: organization || null,
        bio: bio || null,
      },
      // 개발 환경에서 이메일 인증 우회
      // emailRedirectTo: undefined,
    },
  });
  return { data, error };
}

// 로그인
export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

// 로그아웃
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

// 현재 사용자 확인
export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

// 개발용: 이메일 인증 우회 (관리자 권한으로 사용자 활성화)
export async function confirmUserEmail(email: string) {
  // 이 함수는 Supabase 대시보드에서 수동으로 실행하거나
  // Supabase 서비스 키를 사용하여 실행해야 합니다
  console.log(`개발용: ${email} 사용자의 이메일 인증을 수동으로 확인하세요.`);
  console.log(
    "Supabase 대시보드 > Authentication > Users에서 수동으로 확인하거나"
  );
  console.log("이메일 인증을 비활성화하세요.");
}
