# 🗄️ Guía de Configuración de Base de Datos Supabase

## 📋 Archivos SQL Incluidos

### 1. `supabase-schema.sql`
**Propósito:** Crear la estructura completa de la base de datos
- ✅ Tablas (services, providers, users, contact_requests, reviews)
- ✅ Índices para rendimiento
- ✅ Triggers para updated_at automático
- ✅ Row Level Security (RLS) policies
- ✅ Algunos datos de ejemplo básicos

### 2. `supabase-sample-data.sql` (NUEVO)
**Propósito:** Poblar la base de datos con datos de prueba realistas
- ✅ 15 servicios completos
- ✅ 10+ proveedores con información detallada
- ✅ 3 solicitudes de contacto de ejemplo
- ✅ 4 reseñas de clientes
- ✅ 2 usuarios administradores de prueba

---

## 🚀 Instrucciones de Instalación

### Paso 1: Crear Proyecto en Supabase
1. Ve a [supabase.com](https://supabase.com)
2. Crea una cuenta o inicia sesión
3. Click en **"New Project"**
4. Nombre: `domus-one` (o el que prefieras)
5. Database Password: **¡Guarda esta contraseña!**
6. Region: Elige la más cercana (Brazil para Latam)
7. Click **"Create new project"** (toma ~2 minutos)

### Paso 2: Ejecutar Schema (Base de Datos)
1. En tu proyecto de Supabase, ve a **SQL Editor** (icono de base de datos en el menú)
2. Click en **"+ New query"**
3. Abre el archivo `supabase-schema.sql` desde VS Code
4. **Copia todo el contenido** (Ctrl+A, Ctrl+C)
5. **Pega en el SQL Editor** de Supabase (Ctrl+V)
6. Click en **"Run"** (botón verde abajo a la derecha)
7. ✅ Deberías ver: "Success. No rows returned"

### Paso 3: Cargar Datos de Ejemplo
1. En el mismo SQL Editor, click en **"+ New query"** nuevamente
2. Abre el archivo `supabase-sample-data.sql` desde VS Code
3. **Copia todo el contenido** (Ctrl+A, Ctrl+C)
4. **Pega en el SQL Editor** de Supabase (Ctrl+V)
5. Click en **"Run"**
6. ✅ Al final verás una tabla con el conteo de registros:
   ```
   Services          | 15
   Providers         | 10+
   Users             | 2
   Contact Requests  | 3
   Reviews           | 4
   ```

### Paso 4: Crear Storage Buckets
1. Ve a **Storage** en el menú lateral
2. Click **"Create a new bucket"**
3. Crear primer bucket:
   - Name: `service-icons`
   - Public: ✅ Activar
   - Click **"Create bucket"**
4. Crear segundo bucket:
   - Name: `provider-images`
   - Public: ✅ Activar
   - Click **"Create bucket"**

### Paso 5: Obtener Credenciales
1. Ve a **Settings** → **API** (en el menú lateral)
2. Copia estos valores:
   ```
   Project URL: https://xxxxx.supabase.co
   anon public key: eyJhbGc...
   ```
3. **¡GUÁRDALOS!** Los necesitarás para configurar el Dashboard

### Paso 6: Configurar Autenticación
1. Ve a **Authentication** → **URL Configuration**
2. En **Redirect URLs**, agrega:
   ```
   http://localhost:4200/*
   https://tu-dashboard.netlify.app/*
   ```
3. Click **"Save"**

---

## 🔧 Configurar en el Proyecto

### Editar archivos de environment:

**Dashboard/src/environments/environment.ts** (desarrollo):
```typescript
export const environment = {
  production: false,
  supabase: {
    url: 'https://xxxxx.supabase.co',  // ← Tu Project URL
    anonKey: 'eyJhbGc...'                // ← Tu anon key
  }
};
```

**Dashboard/src/environments/environment.prod.ts** (producción):
```typescript
export const environment = {
  production: true,
  supabase: {
    url: 'https://xxxxx.supabase.co',  // ← Tu Project URL
    anonKey: 'eyJhbGc...'                // ← Tu anon key
  }
};
```

---

## ✅ Verificar Instalación

### Opción 1: Desde Supabase Dashboard
1. Ve a **Table Editor**
2. Verifica que existan estas tablas:
   - services (15 registros)
   - providers (10+ registros)
   - users (2 registros)
   - contact_requests (3 registros)
   - reviews (4 registros)

### Opción 2: Desde SQL Editor
Ejecuta esta query para ver el resumen:
```sql
SELECT 'Services' as table_name, COUNT(*) as count FROM services
UNION ALL
SELECT 'Providers', COUNT(*) FROM providers
UNION ALL
SELECT 'Users', COUNT(*) FROM users
UNION ALL
SELECT 'Contact Requests', COUNT(*) FROM contact_requests
UNION ALL
SELECT 'Reviews', COUNT(*) FROM reviews;
```

---

## 📊 Datos de Ejemplo Incluidos

### Servicios (15):
- Plomería, Electricidad, Limpieza
- Jardinería, Pintura, Carpintería
- Cerrajería, Aire Acondicionado, Mudanzas
- Gas Natural, Albañilería, Vidriería
- Fumigación, Lavado de Alfombras, Herrería

### Proveedores Destacados:
- **Juan Pérez - Plomería Express** (Bogotá) ⭐ 4.8
- **María López - Electricista** (Cali) ⭐ 4.9
- **Clean House** (Bogotá) ⭐ 4.8
- **Carlos Ramírez - Pintor** (Bogotá) ⭐ 4.9
- Y más...

### Usuarios Admin:
- `admin@domus.com` - Administrador principal
- `editor@domus.com` - Editor de contenido

> ⚠️ **Nota:** Estos usuarios solo existen en la tabla `users`. Para autenticación real, debes crearlos en **Authentication** → **Users** → **Add user**

---

## 🔒 Seguridad y Permisos

El schema incluye **Row Level Security (RLS)** configurado:

### Políticas Activas:
- ✅ **Lectura pública:** Cualquiera puede ver services, providers y reviews aprobadas
- ✅ **Escritura autenticada:** Solo usuarios autenticados pueden crear/editar/eliminar
- ✅ **Contact requests:** Cualquiera puede enviar, solo admins pueden ver
- ✅ **Reviews:** Cualquiera puede crear, solo admins pueden aprobar

---

## 🛠️ Próximos Pasos

1. ✅ Configurar credenciales en `environment.ts` y `environment.prod.ts`
2. ✅ Probar conexión ejecutando el Dashboard localmente
3. ✅ Crear tu primer usuario admin en Authentication
4. ✅ Probar CRUD de servicios y proveedores
5. ✅ Desplegar a Netlify

---

## 📞 Soporte

Si encuentras errores:
1. Verifica que ambos scripts se ejecutaron sin errores
2. Revisa los permisos RLS en **Authentication** → **Policies**
3. Verifica que las credenciales estén correctas en los archivos environment
4. Revisa la consola del navegador para errores de CORS o autenticación

---

## ⏱️ Tiempo Estimado

- Crear proyecto: 2-3 minutos
- Ejecutar schemas: 1 minuto
- Crear buckets: 1 minuto
- Configurar auth: 1 minuto
- Configurar proyecto: 2 minutos

**Total: ~7-10 minutos** ⚡

---

¡Tu base de datos Supabase está lista para usar! 🎉
