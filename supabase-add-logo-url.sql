-- Migration: Add logo_url to providers table
-- Run this in Supabase SQL Editor

-- Add logo_url column to providers table
ALTER TABLE providers 
ADD COLUMN IF NOT EXISTS logo_url TEXT;

-- Add comment to explain the field
COMMENT ON COLUMN providers.logo_url IS 'URL del logo o imagen del proveedor almacenada en Supabase Storage';
