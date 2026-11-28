-- Run this in your Supabase SQL Editor to set up the student_remarks table

create table if not exists public.student_remarks (
  id uuid primary key default gen_random_uuid(),
  student_name text not null,
  project_name text not null,
  project_type text not null check (project_type in ('CS519', 'CS619')),
  remarks text not null,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now()
);

alter table public.student_remarks enable row level security;

grant usage on schema public to anon, authenticated, service_role;
grant all privileges on table public.student_remarks to service_role;
grant select on table public.student_remarks to anon, authenticated;

-- Service role (server-side API) can insert/read/update all rows
create policy "Service role full access on student_remarks"
  on public.student_remarks
  for all
  to service_role
  using (true)
  with check (true);

-- Public visitors can only read approved remarks (pending and rejected stay hidden)
create policy "Public read approved student_remarks"
  on public.student_remarks
  for select
  to anon, authenticated
  using (status = 'approved');
