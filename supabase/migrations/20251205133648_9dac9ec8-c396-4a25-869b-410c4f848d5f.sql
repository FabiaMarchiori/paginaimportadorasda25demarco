-- Create table for sales leads
CREATE TABLE public.sales_leads (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    plan_selected TEXT NOT NULL CHECK (plan_selected IN ('mensal', 'anual')),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.sales_leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert leads (no read access for privacy)
CREATE POLICY "Allow anonymous insert" 
ON public.sales_leads 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Allow authenticated users to insert leads
CREATE POLICY "Allow authenticated insert" 
ON public.sales_leads 
FOR INSERT 
TO authenticated
WITH CHECK (true);