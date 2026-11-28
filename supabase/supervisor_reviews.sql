-- Run this in your Supabase SQL Editor to set up the supervisor_reviews table

create table if not exists public.supervisor_reviews (
  id uuid primary key default gen_random_uuid(),
  project_title text not null,
  supervisor_name text not null,
  rating integer not null check (rating >= 1 and rating <= 5),
  supervisor_behaviour text not null check (supervisor_behaviour in ('Polite', 'Strict', 'Moody')),
  experience text not null,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now()
);

alter table public.supervisor_reviews enable row level security;

grant usage on schema public to anon, authenticated, service_role;
grant all privileges on table public.supervisor_reviews to service_role;
grant select on table public.supervisor_reviews to anon, authenticated;

-- Service role (server-side API) can insert/read/update all rows
create policy "Service role full access on supervisor_reviews"
  on public.supervisor_reviews
  for all
  to service_role
  using (true)
  with check (true);

-- Public visitors can only read approved reviews (pending and rejected stay hidden)
create policy "Public read approved supervisor_reviews"
  on public.supervisor_reviews
  for select
  to anon, authenticated
  using (status = 'approved');
