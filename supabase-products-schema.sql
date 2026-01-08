-- Domus One - Products & Orders Schema
-- Run this in Supabase SQL Editor after the main schema

-- Enable UUID extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- PRODUCT CATEGORIES
-- ============================================
CREATE TABLE IF NOT EXISTS product_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    icon VARCHAR(100),
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- PRODUCTS
-- ============================================
CREATE TABLE IF NOT EXISTS products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category_id UUID REFERENCES product_categories(id) ON DELETE SET NULL,
    price DECIMAL(10,2) NOT NULL,
    discount_price DECIMAL(10,2),
    stock INTEGER DEFAULT 0,
    sku VARCHAR(100) UNIQUE,
    image_url TEXT,
    images JSONB, -- Array de URLs de imágenes adicionales: ["url1", "url2", ...]
    specifications JSONB, -- Especificaciones: {"peso": "1kg", "tamaño": "30x30cm", ...}
    active BOOLEAN DEFAULT true,
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- ORDERS
-- ============================================
CREATE TABLE IF NOT EXISTS orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_number VARCHAR(50) UNIQUE NOT NULL,
    
    -- Customer Information
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(20) NOT NULL,
    customer_address TEXT NOT NULL,
    customer_city VARCHAR(100),
    customer_notes TEXT,
    
    -- Order Totals
    subtotal DECIMAL(10,2) NOT NULL,
    delivery_fee DECIMAL(10,2) DEFAULT 0,
    total DECIMAL(10,2) NOT NULL,
    
    -- Payment & Status
    payment_method VARCHAR(50) DEFAULT 'cash_on_delivery',
    order_status VARCHAR(50) DEFAULT 'pending',
    -- Status options: pending, confirmed, preparing, shipped, delivered, cancelled
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- ORDER ITEMS
-- ============================================
CREATE TABLE IF NOT EXISTS order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE SET NULL,
    
    -- Snapshot of product at time of order (for historical purposes)
    product_name VARCHAR(255) NOT NULL,
    product_price DECIMAL(10,2) NOT NULL,
    product_image_url TEXT,
    
    -- Order details
    quantity INTEGER NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- ORDER STATUS HISTORY (Optional but useful)
-- ============================================
CREATE TABLE IF NOT EXISTS order_status_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    status VARCHAR(50) NOT NULL,
    notes TEXT,
    created_by VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- INDEXES
-- ============================================
CREATE INDEX IF NOT EXISTS idx_products_category_id ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_active ON products(active);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured);
CREATE INDEX IF NOT EXISTS idx_products_sku ON products(sku);

CREATE INDEX IF NOT EXISTS idx_orders_order_number ON orders(order_number);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(order_status);
CREATE INDEX IF NOT EXISTS idx_orders_customer_email ON orders(customer_email);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_order_items_product_id ON order_items(product_id);

CREATE INDEX IF NOT EXISTS idx_order_status_history_order_id ON order_status_history(order_id);

-- ============================================
-- TRIGGERS FOR UPDATED_AT
-- ============================================
CREATE TRIGGER update_product_categories_updated_at 
BEFORE UPDATE ON product_categories
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at 
BEFORE UPDATE ON products
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at 
BEFORE UPDATE ON orders
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- FUNCTION: Generate Order Number
-- ============================================
CREATE OR REPLACE FUNCTION generate_order_number()
RETURNS VARCHAR(50) AS $$
DECLARE
    new_number VARCHAR(50);
    counter INTEGER;
BEGIN
    -- Format: ORD-YYYYMMDD-XXXX (e.g., ORD-20260107-0001)
    SELECT COUNT(*) + 1 INTO counter
    FROM orders
    WHERE DATE(created_at) = CURRENT_DATE;
    
    new_number := 'ORD-' || TO_CHAR(CURRENT_DATE, 'YYYYMMDD') || '-' || LPAD(counter::TEXT, 4, '0');
    
    RETURN new_number;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- TRIGGER: Auto-generate Order Number
-- ============================================
CREATE OR REPLACE FUNCTION set_order_number()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.order_number IS NULL OR NEW.order_number = '' THEN
        NEW.order_number := generate_order_number();
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_order_number_trigger
BEFORE INSERT ON orders
FOR EACH ROW
EXECUTE FUNCTION set_order_number();

-- ============================================
-- FUNCTION: Update Product Stock
-- ============================================
CREATE OR REPLACE FUNCTION update_product_stock()
RETURNS TRIGGER AS $$
BEGIN
    -- When an order is created, reduce stock
    IF TG_OP = 'INSERT' THEN
        UPDATE products
        SET stock = stock - NEW.quantity
        WHERE id = NEW.product_id;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_product_stock_trigger
AFTER INSERT ON order_items
FOR EACH ROW
EXECUTE FUNCTION update_product_stock();

-- ============================================
-- SAMPLE DATA (Optional)
-- ============================================

-- Sample Categories
INSERT INTO product_categories (name, slug, description, icon) VALUES
('Limpieza', 'limpieza', 'Productos de limpieza para el hogar', 'droplet'),
('Jardinería', 'jardineria', 'Herramientas y productos para jardín', 'flower'),
('Pintura', 'pintura', 'Pinturas y accesorios para pintar', 'brush'),
('Plomería', 'plomeria', 'Herramientas y accesorios de plomería', 'wrench'),
('Electricidad', 'electricidad', 'Productos eléctricos para el hogar', 'zap')
ON CONFLICT (slug) DO NOTHING;

-- Sample Products
INSERT INTO products (name, description, category_id, price, stock, sku, active, featured) 
SELECT 
    'Detergente Multiusos 1L',
    'Detergente concentrado para limpieza general del hogar',
    id,
    15000,
    50,
    'PROD-001',
    true,
    true
FROM product_categories WHERE slug = 'limpieza'
ON CONFLICT (sku) DO NOTHING;

INSERT INTO products (name, description, category_id, price, discount_price, stock, sku, active, featured) 
SELECT 
    'Pala de Jardín Profesional',
    'Pala resistente de acero inoxidable con mango ergonómico',
    id,
    35000,
    29900,
    30,
    'PROD-002',
    true,
    true
FROM product_categories WHERE slug = 'jardineria'
ON CONFLICT (sku) DO NOTHING;

-- ============================================
-- VERIFY TABLES
-- ============================================
SELECT 'Products Schema Created Successfully!' as status;
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('product_categories', 'products', 'orders', 'order_items', 'order_status_history');
