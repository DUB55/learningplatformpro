-- File: scripts/migrate.sql
-- Run this in Supabase SQL editor (or via psql) to create baseline tables for Phase 1.

-- Enable pgcrypto for gen_random_uuid
create extension if not exists "pgcrypto";

-- profiles
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'student',
  created_at timestamptz default now()
);

-- subjects
create table if not exists subjects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  created_by uuid references profiles(id),
  created_at timestamptz default now()
);

-- chapters
create table if not exists chapters (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid references subjects(id) on delete cascade,
  title text not null,
  content text,
  "order" int default 0,
  created_at timestamptz default now()
);

-- resources (pdf/jpg/png/mp4/link)
create table if not exists resources (
  id uuid primary key default gen_random_uuid(),
  chapter_id uuid references chapters(id) on delete cascade,
  type text not null,
  url text not null,
  meta jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

-- leersets
create table if not exists leersets (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid references subjects(id),
  title text not null,
  created_by uuid references profiles(id),
  created_at timestamptz default now()
);

-- leerset_items
create table if not exists leerset_items (
  id uuid primary key default gen_random_uuid(),
  leerset_id uuid references leersets(id) on delete cascade,
  term text not null,
  definition text not null,
  images jsonb default '[]'::jsonb,
  created_at timestamptz default now()
);

-- srs_cards
create table if not exists srs_cards (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  leerset_item_id uuid references leerset_items(id),
  ease numeric default 2.5,
  interval int default 0,
  repetitions int default 0,
  due_at timestamptz default now(),
  lapses int default 0,
  suspended boolean default false,
  created_at timestamptz default now()
);

-- srs_reviews
create table if not exists srs_reviews (
  id uuid primary key default gen_random_uuid(),
  srs_card_id uuid references srs_cards(id),
  user_id uuid references profiles(id),
  quality int,
  created_at timestamptz default now()
);

-- calendar_events
create table if not exists calendar_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  title text not null,
  start_at timestamptz not null,
  end_at timestamptz,
  meta jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

-- Indexes
create index if not exists idx_srs_due_at on srs_cards (due_at);
create index if not exists idx_leerset_items_leerset on leerset_items (leerset_id);
