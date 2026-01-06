-- Migration: Provider - Services Many-to-Many Relationship
-- Run this in Supabase SQL Editor

-- Create provider_services junction table
CREATE TABLE IF NOT EXISTS provider_services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    provider_id UUID NOT NULL REFERENCES providers(id) ON DELETE CASCADE,
    service_id UUID NOT NULL REFERENCES services(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(provider_id, service_id)
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_provider_services_provider ON provider_services(provider_id);
CREATE INDEX IF NOT EXISTS idx_provider_services_service ON provider_services(service_id);

-- Migrate existing data from providers.service_id to provider_services
INSERT INTO provider_services (provider_id, service_id)
SELECT id, service_id 
FROM providers 
WHERE service_id IS NOT NULL
ON CONFLICT (provider_id, service_id) DO NOTHING;

-- Optional: Remove service_id column from providers table after migration
-- (Keep commented for now in case rollback is needed)
-- ALTER TABLE providers DROP COLUMN IF EXISTS service_id;

-- Add comment
COMMENT ON TABLE provider_services IS 'Junction table for many-to-many relationship between providers and services';
