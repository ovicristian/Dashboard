-- Domus One - Sample Data for Testing
-- Run this AFTER creating the schema with supabase-schema.sql

-- Clear existing sample data (optional - use with caution in production)
-- DELETE FROM reviews;
-- DELETE FROM contact_requests;
-- DELETE FROM providers;
-- DELETE FROM services;
-- DELETE FROM users;

-- Insert comprehensive service catalog
INSERT INTO services (name, description, slug, icon, category, active) VALUES
    ('Plomería', 'Servicios profesionales de plomería para reparaciones e instalaciones en tu hogar o negocio', 'plomeria', 'wrench', 'hogar', true),
    ('Electricidad', 'Instalaciones eléctricas, reparaciones y mantenimiento con certificación profesional', 'electricidad', 'zap', 'hogar', true),
    ('Limpieza', 'Servicios de limpieza profunda para hogares, oficinas y espacios comerciales', 'limpieza', 'sparkles', 'hogar', true),
    ('Jardinería', 'Diseño, mantenimiento y cuidado de jardines y áreas verdes', 'jardineria', 'flower', 'exterior', true),
    ('Pintura', 'Servicios profesionales de pintura interior y exterior con garantía', 'pintura', 'paint-bucket', 'hogar', true),
    ('Carpintería', 'Fabricación e instalación de muebles a medida y reparaciones en madera', 'carpinteria', 'hammer', 'hogar', true),
    ('Cerrajería', 'Apertura de puertas, cambio de chapas y sistemas de seguridad 24/7', 'cerrajeria', 'key', 'seguridad', true),
    ('Aire Acondicionado', 'Instalación, mantenimiento y reparación de sistemas de climatización', 'aire-acondicionado', 'wind', 'hogar', true),
    ('Mudanzas', 'Servicios de mudanza local y nacional con embalaje y seguro', 'mudanzas', 'truck', 'transporte', true),
    ('Gas Natural', 'Instalación y mantenimiento de sistemas de gas natural certificados', 'gas-natural', 'flame', 'hogar', true),
    ('Albañilería', 'Construcción, remodelación y trabajos en obra de albañilería', 'albanileria', 'building', 'construccion', true),
    ('Vidriería', 'Instalación y reparación de vidrios, espejos y mamparas', 'vidrieria', 'glass-water', 'hogar', true),
    ('Fumigación', 'Control de plagas profesional con productos certificados', 'fumigacion', 'bug', 'hogar', true),
    ('Lavado de Alfombras', 'Limpieza profunda de alfombras, tapetes y muebles tapizados', 'lavado-alfombras', 'spray-can', 'limpieza', true),
    ('Herrería', 'Fabricación e instalación de rejas, portones y estructuras metálicas', 'herreria', 'shield', 'seguridad', true)
ON CONFLICT (slug) DO NOTHING;

-- Insert sample providers with realistic data
-- Plomería providers
INSERT INTO providers (name, service_id, description, email, phone, whatsapp, city, rating, active)
SELECT 
    'Juan Pérez - Plomería Express',
    s.id,
    'Plomero certificado con más de 15 años de experiencia. Especializado en reparaciones de emergencia, instalaciones sanitarias y sistemas de agua caliente. Atención 24/7.',
    'juan.perez@plomeriaexpress.com',
    '+573001234567',
    '+573001234567',
    'Bogotá',
    4.8,
    true
FROM services s WHERE s.slug = 'plomeria'
UNION ALL
SELECT 
    'Plomería Rápida S.A.S',
    s.id,
    'Empresa especializada en soluciones de plomería residencial y comercial. Contamos con equipo técnico certificado y garantía en todos nuestros trabajos.',
    'contacto@plomeriagrapida.com',
    '+573009876543',
    '+573009876543',
    'Medellín',
    4.9,
    true
FROM services s WHERE s.slug = 'plomeria';

-- Electricidad providers
INSERT INTO providers (name, service_id, description, email, phone, whatsapp, city, rating, active)
SELECT 
    'María López - Electricista Profesional',
    s.id,
    'Electricista certificada con 12 años de experiencia en instalaciones residenciales. Especializada en sistemas de iluminación LED, automatización del hogar y paneles solares.',
    'maria.lopez@electricpro.com',
    '+573112345678',
    '+573112345678',
    'Cali',
    4.9,
    true
FROM services s WHERE s.slug = 'electricidad'
UNION ALL
SELECT 
    'ElectroServicios del Norte',
    s.id,
    'Empresa con 20 años en el mercado. Ofrecemos instalaciones eléctricas, mantenimiento preventivo y correctivo, certificados de conformidad y asesoría técnica.',
    'info@electroservicios.com',
    '+573123456789',
    '+573123456789',
    'Barranquilla',
    4.7,
    true
FROM services s WHERE s.slug = 'electricidad';

-- Limpieza providers
INSERT INTO providers (name, service_id, description, email, phone, whatsapp, city, rating, active)
SELECT 
    'Clean House - Limpieza Profesional',
    s.id,
    'Servicios de limpieza integral para hogares y oficinas. Utilizamos productos ecológicos y biodegradables. Personal capacitado y con experiencia.',
    'contacto@cleanhouse.com',
    '+573134567890',
    '+573134567890',
    'Bogotá',
    4.8,
    true
FROM services s WHERE s.slug = 'limpieza'
UNION ALL
SELECT 
    'Limpieza Total Express',
    s.id,
    'Especialistas en limpieza profunda, limpieza post-construcción y mantenimiento de espacios comerciales. Disponibilidad inmediata.',
    'info@limpiezatotal.com',
    '+573145678901',
    '+573145678901',
    'Medellín',
    4.6,
    true
FROM services s WHERE s.slug = 'limpieza';

-- Jardinería providers
INSERT INTO providers (name, service_id, description, email, phone, whatsapp, city, rating, active)
SELECT 
    'Jardines Verdes S.A.S',
    s.id,
    'Diseño y mantenimiento de jardines con más de 10 años de experiencia. Ofrecemos poda, fertilización, control de plagas y paisajismo profesional.',
    'ventas@jardinesverdes.com',
    '+573156789012',
    '+573156789012',
    'Cali',
    4.7,
    true
FROM services s WHERE s.slug = 'jardineria';

-- Pintura providers
INSERT INTO providers (name, service_id, description, email, phone, whatsapp, city, rating, active)
SELECT 
    'Carlos Ramírez - Pintor Profesional',
    s.id,
    'Pintor con 18 años de experiencia en pintura residencial y comercial. Trabajo limpio, puntual y con garantía. Presupuesto sin compromiso.',
    'carlos@pinturaexpress.com',
    '+573167890123',
    '+573167890123',
    'Bogotá',
    4.9,
    true
FROM services s WHERE s.slug = 'pintura'
UNION ALL
SELECT 
    'Pinturas Arcoíris',
    s.id,
    'Empresa especializada en pintura decorativa, impermeabilización y trabajos en altura. Utilizamos pinturas de primera calidad.',
    'info@pinturasarcoiris.com',
    '+573178901234',
    '+573178901234',
    'Medellín',
    4.8,
    true
FROM services s WHERE s.slug = 'pintura';

-- Carpintería provider
INSERT INTO providers (name, service_id, description, email, phone, whatsapp, city, rating, active)
SELECT 
    'Carpintería El Roble',
    s.id,
    'Fabricación de muebles a medida, closets, cocinas integrales y reparaciones en madera. Diseños modernos y clásicos con maderas de primera calidad.',
    'ventas@carpinteriaelroble.com',
    '+573189012345',
    '+573189012345',
    'Bogotá',
    4.8,
    true
FROM services s WHERE s.slug = 'carpinteria';

-- Cerrajería provider
INSERT INTO providers (name, service_id, description, email, phone, whatsapp, city, rating, active)
SELECT 
    'Cerrajería 24 Horas',
    s.id,
    'Servicio de cerrajería de emergencia las 24 horas. Apertura de puertas, cambio de chapas, duplicado de llaves y sistemas de seguridad.',
    'emergencias@cerrajeria24h.com',
    '+573190123456',
    '+573190123456',
    'Bogotá',
    4.7,
    true
FROM services s WHERE s.slug = 'cerrajeria';

-- Aire Acondicionado provider
INSERT INTO providers (name, service_id, description, email, phone, whatsapp, city, rating, active)
SELECT 
    'ClimaTec Colombia',
    s.id,
    'Instalación y mantenimiento de equipos de aire acondicionado. Servicio técnico autorizado de las principales marcas. Garantía y repuestos originales.',
    'servicio@climatec.com',
    '+573101234567',
    '+573101234567',
    'Barranquilla',
    4.9,
    true
FROM services s WHERE s.slug = 'aire-acondicionado';

-- Insert sample contact requests
INSERT INTO contact_requests (name, email, phone, service_id, message, status)
SELECT 
    'Pedro Sánchez',
    'pedro.sanchez@email.com',
    '+573001112222',
    s.id,
    'Necesito una cotización para reparar una fuga en el baño principal. Es urgente.',
    'pending'
FROM services s WHERE s.slug = 'plomeria'
UNION ALL
SELECT 
    'Ana García',
    'ana.garcia@email.com',
    '+573003334444',
    s.id,
    'Me gustaría agendar una limpieza profunda de mi apartamento de 80m2. ¿Cuál es el costo?',
    'pending'
FROM services s WHERE s.slug = 'limpieza'
UNION ALL
SELECT 
    'Luis Martínez',
    'luis.martinez@email.com',
    '+573005556666',
    s.id,
    'Necesito instalar dos tomas eléctricas adicionales en mi oficina. ¿Pueden cotizar?',
    'contacted'
FROM services s WHERE s.slug = 'electricidad';

-- Insert sample reviews
INSERT INTO reviews (provider_id, user_name, user_email, rating, comment, approved)
SELECT 
    p.id,
    'Roberto Díaz',
    'roberto@email.com',
    5,
    'Excelente servicio! Muy profesional y puntual. Solucionó el problema de la fuga en menos de una hora.',
    true
FROM providers p WHERE p.name LIKE '%Juan Pérez%'
UNION ALL
SELECT 
    p.id,
    'Carolina Ruiz',
    'carolina@email.com',
    5,
    'Muy recomendado. Trabajo impecable en la instalación eléctrica de mi casa nueva. Cumplió con todos los tiempos.',
    true
FROM providers p WHERE p.name LIKE '%María López%'
UNION ALL
SELECT 
    p.id,
    'Jorge Morales',
    'jorge@email.com',
    4,
    'Buen servicio de limpieza. El personal fue amable y profesional. Solo un pequeño detalle en una ventana pero lo corrigieron enseguida.',
    true
FROM providers p WHERE p.name LIKE '%Clean House%'
UNION ALL
SELECT 
    p.id,
    'Valentina Castro',
    'valentina@email.com',
    5,
    'Quedé encantada con el trabajo de pintura. Los colores quedaron perfectos y el trabajo fue muy limpio. Totalmente recomendado!',
    true
FROM providers p WHERE p.name LIKE '%Carlos Ramírez%';

-- Insert a sample admin user (for testing)
-- Note: This creates a user entry, but Supabase authentication is separate
INSERT INTO users (email, full_name, role, active) VALUES
    ('admin@domus.com', 'Administrador Domus', 'admin', true),
    ('editor@domus.com', 'Editor de Contenido', 'editor', true)
ON CONFLICT (email) DO NOTHING;

-- Summary query to verify data
SELECT 
    'Services' as table_name, 
    COUNT(*) as count 
FROM services
UNION ALL
SELECT 
    'Providers', 
    COUNT(*) 
FROM providers
UNION ALL
SELECT 
    'Users', 
    COUNT(*) 
FROM users
UNION ALL
SELECT 
    'Contact Requests', 
    COUNT(*) 
FROM contact_requests
UNION ALL
SELECT 
    'Reviews', 
    COUNT(*) 
FROM reviews;
