-- Domus One - Supabase Database Schema
-- Run this in Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Services Table
CREATE TABLE IF NOT EXISTS services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    slug VARCHAR(255) UNIQUE NOT NULL,
    icon VARCHAR(100),
    category VARCHAR(100),
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Providers Table
CREATE TABLE IF NOT EXISTS providers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    service_id UUID REFERENCES services(id) ON DELETE CASCADE,
    description TEXT,
    email VARCHAR(255),
    phone VARCHAR(20),
    whatsapp VARCHAR(20),
    website VARCHAR(500),
    address TEXT,
    city VARCHAR(100),
    rating DECIMAL(2,1) DEFAULT 4.5,
    hourly_rate DECIMAL(10,2),
    logo_url TEXT,
    contact_data JSONB,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Users Table (for admin panel)
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255),
    role VARCHAR(50) DEFAULT 'user',
    avatar_url TEXT,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact Requests Table
CREATE TABLE IF NOT EXISTS contact_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    service_id UUID REFERENCES services(id),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Reviews Table (for future rating system)
CREATE TABLE IF NOT EXISTS reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    provider_id UUID REFERENCES providers(id) ON DELETE CASCADE,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    approved BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
CREATE INDEX IF NOT EXISTS idx_services_active ON services(active);
CREATE INDEX IF NOT EXISTS idx_providers_service_id ON providers(service_id);
CREATE INDEX IF NOT EXISTS idx_providers_active ON providers(active);
CREATE INDEX IF NOT EXISTS idx_contact_requests_status ON contact_requests(status);
CREATE INDEX IF NOT EXISTS idx_reviews_provider_id ON reviews(provider_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers for updated_at
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_providers_updated_at BEFORE UPDATE ON providers
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE providers ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Policies for services (public read, admin write)
CREATE POLICY "Services are viewable by everyone" ON services
    FOR SELECT USING (true);

CREATE POLICY "Services are insertable by authenticated users" ON services
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Services are updatable by authenticated users" ON services
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Services are deletable by authenticated users" ON services
    FOR DELETE USING (auth.role() = 'authenticated');

-- Policies for providers (public read, admin write)
CREATE POLICY "Providers are viewable by everyone" ON providers
    FOR SELECT USING (true);

CREATE POLICY "Providers are insertable by authenticated users" ON providers
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Providers are updatable by authenticated users" ON providers
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Providers are deletable by authenticated users" ON providers
    FOR DELETE USING (auth.role() = 'authenticated');

-- Policies for contact requests
CREATE POLICY "Anyone can insert contact requests" ON contact_requests
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact requests" ON contact_requests
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update contact requests" ON contact_requests
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Policies for reviews
CREATE POLICY "Reviews are viewable by everyone" ON reviews
    FOR SELECT USING (approved = true);

CREATE POLICY "Anyone can insert reviews" ON reviews
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated users can update reviews" ON reviews
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Insert sample data
INSERT INTO services (name, description, slug, icon, category) VALUES
    ('Plomería', 'Servicios profesionales de plomería para tu hogar', 'plomeria', 'wrench', 'hogar'),
    ('Electricidad', 'Instalaciones y reparaciones eléctricas', 'electricidad', 'zap', 'hogar'),
    ('Limpieza', 'Servicios de limpieza profesional', 'limpieza', 'sparkles', 'hogar'),
    ('Jardinería', 'Mantenimiento de jardines y áreas verdes', 'jardineria', 'flower', 'exterior'),
    ('Pintura', 'Servicios de pintura interior y exterior', 'pintura', 'paint-bucket', 'hogar')
ON CONFLICT (slug) DO NOTHING;

-- Insert sample providers (adjust service_id after services are created)
INSERT INTO providers (name, service_id, description, email, phone, whatsapp, rating)
SELECT 
    'Juan Pérez',
    s.id,
    'Plomero certificado con 10 años de experiencia',
    'juan@example.com',
    '+573001234567',
    '+573001234567',
    4.8
FROM services s WHERE s.slug = 'plomeria'
ON CONFLICT DO NOTHING;

INSERT INTO providers (name, service_id, description, email, phone, whatsapp, rating)
SELECT 
    'María López',
    s.id,
    'Electricista profesional con experiencia en instalaciones residenciales',
    'maria@example.com',
    '+573009876543',
    '+573009876543',
    4.9
FROM services s WHERE s.slug = 'electricidad'
ON CONFLICT DO NOTHING;

-- Create storage buckets (run these in Supabase Dashboard → Storage)
-- Bucket: 'service-icons' (for service icons)
-- Bucket: 'provider-images' (for provider profile images)
