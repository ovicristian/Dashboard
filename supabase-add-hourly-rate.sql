-- Migration: Add hourly_rate to providers table
-- Run this in Supabase SQL Editor

-- Add hourly_rate column to providers table
ALTER TABLE providers 
ADD COLUMN IF NOT EXISTS hourly_rate DECIMAL(10,2);

-- Add comment to explain the field
COMMENT ON COLUMN providers.hourly_rate IS 'Precio por hora del proveedor en la moneda local';

-- Create index for filtering/sorting by price
CREATE INDEX IF NOT EXISTS idx_providers_hourly_rate ON providers(hourly_rate);
