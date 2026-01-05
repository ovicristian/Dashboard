# Script de preparación para Deploy de Dashboard en Netlify (PowerShell)

Write-Host "🚀 Preparando Dashboard para Netlify con Supabase..." -ForegroundColor Green

# Verificar directorio
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: Ejecuta este script desde la carpeta Dashboard/" -ForegroundColor Red
    exit 1
}

Write-Host "`n📦 Instalando dependencias..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error instalando dependencias" -ForegroundColor Red
    exit 1
}

# Verificar si Supabase está instalado
Write-Host "`n🔍 Verificando Supabase..." -ForegroundColor Yellow
$packageJson = Get-Content "package.json" -Raw | ConvertFrom-Json
$hasSupabase = $packageJson.dependencies.'@supabase/supabase-js'

if (-not $hasSupabase) {
    Write-Host "📦 Instalando @supabase/supabase-js..." -ForegroundColor Yellow
    npm install @supabase/supabase-js
}

Write-Host "✅ Supabase instalado" -ForegroundColor Green

Write-Host "`n🏗️  Intentando build de producción..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Build exitoso!" -ForegroundColor Green
    
    # Verificar que la carpeta de build existe
    if (Test-Path "dist/techwind-admin/browser") {
        Write-Host "✅ Carpeta de build verificada: dist/techwind-admin/browser/" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Advertencia: No se encontró dist/techwind-admin/browser/" -ForegroundColor Yellow
    }
    
    Write-Host "`n📋 Próximos pasos para desplegar Dashboard:" -ForegroundColor Cyan
    Write-Host "═══════════════════════════════════════════════" -ForegroundColor Cyan
    
    Write-Host "`n🗄️  PASO 1: Configurar Supabase" -ForegroundColor Magenta
    Write-Host "─────────────────────────────────" -ForegroundColor Magenta
    Write-Host "1. Ve a https://supabase.com y crea una cuenta (GRATIS)" -ForegroundColor White
    Write-Host "2. Crear nuevo proyecto: 'domus-one'" -ForegroundColor White
    Write-Host "3. Anota las credenciales:" -ForegroundColor White
    Write-Host "   • Project URL: https://xxx.supabase.co" -ForegroundColor Gray
    Write-Host "   • Anon Key: eyJhbG..." -ForegroundColor Gray
    Write-Host "4. SQL Editor → Ejecutar el archivo: supabase-schema.sql" -ForegroundColor White
    Write-Host "5. Storage → Crear buckets:" -ForegroundColor White
    Write-Host "   • service-icons (público)" -ForegroundColor Gray
    Write-Host "   • provider-images (público)" -ForegroundColor Gray
    
    Write-Host "`n🌐 PASO 2: Deploy en Netlify" -ForegroundColor Magenta
    Write-Host "──────────────────────────────" -ForegroundColor Magenta
    Write-Host "Opción A - Con Git (Recomendado):" -ForegroundColor White
    Write-Host "• Ve a https://app.netlify.com" -ForegroundColor White
    Write-Host "• Click 'Add new site' → 'Import an existing project'" -ForegroundColor White
    Write-Host "• Build command: npm run build" -ForegroundColor White
    Write-Host "• Publish directory: dist/techwind-admin/browser" -ForegroundColor White
    
    Write-Host "`nOpción B - Con CLI:" -ForegroundColor White
    Write-Host "npm install -g netlify-cli" -ForegroundColor Gray
    Write-Host "netlify login" -ForegroundColor Gray
    Write-Host "netlify init" -ForegroundColor Gray
    Write-Host "netlify deploy --prod" -ForegroundColor Gray
    
    Write-Host "`n🔑 PASO 3: Variables de Entorno en Netlify" -ForegroundColor Magenta
    Write-Host "────────────────────────────────────────────" -ForegroundColor Magenta
    Write-Host "(Site settings → Environment variables)" -ForegroundColor Gray
    
    if (Test-Path ".env.production.example") {
        Write-Host ""
        $envContent = Get-Content ".env.production.example" -Raw
        Write-Host $envContent -ForegroundColor Yellow
    }
    
    Write-Host "`n📁 Archivos importantes creados:" -ForegroundColor Cyan
    Write-Host "• supabase-schema.sql - Schema de base de datos" -ForegroundColor White
    Write-Host "• src/app/services/supabase.service.ts - Servicio de Supabase" -ForegroundColor White
    Write-Host "• netlify.toml - Configuración de Netlify" -ForegroundColor White
    Write-Host "• .env.production.example - Template de variables" -ForegroundColor White
    
} else {
    Write-Host "`n❌ Build falló. Revisa los errores arriba." -ForegroundColor Red
    Write-Host "`nProblemas comunes:" -ForegroundColor Yellow
    Write-Host "• Errores de TypeScript" -ForegroundColor White
    Write-Host "• Dependencias faltantes" -ForegroundColor White
    Write-Host "• Errores en componentes" -ForegroundColor White
    exit 1
}

Write-Host "`n🎉 Dashboard listo para Netlify!" -ForegroundColor Green
Write-Host "📖 Ver: ../DEPLOYMENT_CHECKLIST.md para guía completa" -ForegroundColor Cyan
