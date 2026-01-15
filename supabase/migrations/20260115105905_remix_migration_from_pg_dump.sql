CREATE EXTENSION IF NOT EXISTS "pg_graphql";
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";
CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";
CREATE EXTENSION IF NOT EXISTS "plpgsql";
CREATE EXTENSION IF NOT EXISTS "supabase_vault";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";
BEGIN;

--
-- PostgreSQL database dump
--


-- Dumped from database version 17.6
-- Dumped by pg_dump version 18.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--



SET default_table_access_method = heap;

--
-- Name: sales_leads; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sales_leads (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    whatsapp text NOT NULL,
    plan_selected text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT sales_leads_plan_selected_check CHECK ((plan_selected = ANY (ARRAY['mensal'::text, 'anual'::text])))
);


--
-- Name: sales_leads sales_leads_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sales_leads
    ADD CONSTRAINT sales_leads_pkey PRIMARY KEY (id);


--
-- Name: sales_leads Allow anonymous insert; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow anonymous insert" ON public.sales_leads FOR INSERT TO anon WITH CHECK (true);


--
-- Name: sales_leads Allow authenticated insert; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow authenticated insert" ON public.sales_leads FOR INSERT TO authenticated WITH CHECK (true);


--
-- Name: sales_leads Deny public delete; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Deny public delete" ON public.sales_leads FOR DELETE TO authenticated, anon USING (false);


--
-- Name: sales_leads Deny public select; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Deny public select" ON public.sales_leads FOR SELECT TO authenticated, anon USING (false);


--
-- Name: sales_leads Deny public update; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Deny public update" ON public.sales_leads FOR UPDATE TO authenticated, anon USING (false);


--
-- Name: sales_leads; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.sales_leads ENABLE ROW LEVEL SECURITY;

--
-- PostgreSQL database dump complete
--




COMMIT;