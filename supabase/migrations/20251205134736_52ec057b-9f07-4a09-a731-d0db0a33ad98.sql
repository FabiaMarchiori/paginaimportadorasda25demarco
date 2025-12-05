-- Add restrictive SELECT policy - deny all reads by default
-- Only service role (backend) can read this data
CREATE POLICY "Deny public select" 
ON public.sales_leads 
FOR SELECT 
TO anon, authenticated
USING (false);

-- Deny UPDATE for all users (only service role can update)
CREATE POLICY "Deny public update" 
ON public.sales_leads 
FOR UPDATE 
TO anon, authenticated
USING (false);

-- Deny DELETE for all users (only service role can delete)
CREATE POLICY "Deny public delete" 
ON public.sales_leads 
FOR DELETE 
TO anon, authenticated
USING (false);