-- ============================================================
-- AI 4 Insurance — 문의(inquiries) 테이블
-- Supabase SQL Editor에서 실행하세요.
-- ============================================================

create table if not exists public.inquiries (
    id uuid default gen_random_uuid() primary key,
    name varchar(100) not null,
    email varchar(255) not null,
    company varchar(200),
    message text not null,
    created_at timestamptz default now()
);

create index if not exists idx_inquiries_created_at on public.inquiries (created_at desc);

comment on table public.inquiries is 'AI 4 Insurance 웹사이트 문의 폼 제출 내역';

-- ------------------------------------------------------------
-- RLS: 익명(anon) 사용자는 insert만 허용, 조회/수정/삭제는 차단.
-- 관리자는 Supabase 대시보드(service_role)에서 열람.
-- ------------------------------------------------------------
alter table public.inquiries enable row level security;

drop policy if exists "anon can insert inquiries" on public.inquiries;
create policy "anon can insert inquiries"
    on public.inquiries
    for insert
    to anon
    with check (true);
