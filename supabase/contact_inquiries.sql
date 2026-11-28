-- Run this in your Supabase SQL Editor to set up contact form storage & table

create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  whatsapp text not null,
  service_required text not null,
  additional_remarks text,
  attachment_name text,
  attachment_url text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

alter table public.contact_inquiries enable row level security;

grant usage on schema public to service_role;
grant all privileges on table public.contact_inquiries to service_role;

-- Only service_role (server-side API) can insert/read inquiries
create policy "Service role full access on contact_inquiries"
  on public.contact_inquiries
  for all
  to service_role
  using (true)
  with check (true);

-- Optional: Create a bucket for contact file uploads
insert into storage.buckets (id, name, public)
values ('contact-attachments', 'contact-attachments', true)
on conflict (id) do nothing;
