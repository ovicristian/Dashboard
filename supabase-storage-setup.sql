-- Supabase Storage Setup for Provider Logos
-- Run these commands in Supabase SQL Editor

-- Create storage bucket for provider logos (if not exists)
INSERT INTO storage.buckets (id, name, public)
VALUES ('provider-logos', 'provider-logos', true)
ON CONFLICT (id) DO NOTHING;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Authenticated users can upload provider logos" ON storage.objects;
DROP POLICY IF EXISTS "Public can view provider logos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update provider logos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete provider logos" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can upload provider logos" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can update provider logos" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can delete provider logos" ON storage.objects;

-- Allow anyone (authenticated or not) to upload provider logos
-- This is useful for development, but in production you should restrict to authenticated users
CREATE POLICY "Anyone can upload provider logos"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'provider-logos');

-- Allow public read access to provider logos
CREATE POLICY "Public can view provider logos"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'provider-logos');

-- Allow anyone to update provider logos
CREATE POLICY "Anyone can update provider logos"
ON storage.objects FOR UPDATE
USING (bucket_id = 'provider-logos');

-- Allow anyone to delete provider logos
CREATE POLICY "Anyone can delete provider logos"
ON storage.objects FOR DELETE
USING (bucket_id = 'provider-logos');

-- Verify the bucket exists and is public
SELECT * FROM storage.buckets WHERE id = 'provider-logos';

-- Verify policies are created
SELECT * FROM pg_policies WHERE tablename = 'objects' AND schemaname = 'storage';

