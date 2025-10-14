-- 회원가입을 위한 사용자 테이블 생성
-- 데이터베이스명: insurance_education_db

-- 사용자 테이블 생성
CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    organization VARCHAR(200),
    bio TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 이메일 인덱스 생성 (로그인 성능 향상)
CREATE INDEX idx_users_email ON users(email);

-- 생성일 인덱스 생성 (최신 가입자 조회 성능 향상)
CREATE INDEX idx_users_created_at ON users(created_at);

-- 업데이트 시간 자동 갱신을 위한 트리거 함수
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 업데이트 시간 자동 갱신 트리거
CREATE TRIGGER update_users_updated_at 
    BEFORE UPDATE ON users 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- 테이블 코멘트 추가
COMMENT ON TABLE users IS '회원가입을 위한 사용자 정보 테이블';
COMMENT ON COLUMN users.id IS '사용자 고유 식별자 (UUID)';
COMMENT ON COLUMN users.name IS '사용자 이름 (필수)';
COMMENT ON COLUMN users.email IS '사용자 이메일 (필수, 고유값)';
COMMENT ON COLUMN users.password IS '사용자 비밀번호 (필수, 해시값)';
COMMENT ON COLUMN users.organization IS '소속 조직명 (선택사항)';
COMMENT ON COLUMN users.bio IS '자기소개 (선택사항)';
COMMENT ON COLUMN users.created_at IS '계정 생성일시';
COMMENT ON COLUMN users.updated_at IS '정보 수정일시';
