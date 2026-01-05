# 🚀 Guía Rápida: Supabase para Dashboard

## ¿Qué es Supabase?

Supabase es una alternativa open-source a Firebase que te da:
- ✅ Base de datos PostgreSQL
- ✅ Autenticación de usuarios
- ✅ Storage de archivos
- ✅ APIs automáticas
- ✅ Real-time subscriptions
- ✅ **100% GRATIS para empezar**

---

## 📋 Setup Rápido (10 minutos)

### Paso 1: Crear Cuenta

1. Ve a [supabase.com](https://supabase.com)
2. Click **"Start your project"**
3. Sign up con GitHub o email
4. ✅ Cuenta creada (gratis)

### Paso 2: Crear Proyecto

1. Click **"New Project"**
2. Configuración:
   - **Name:** `domus-one`
   - **Database Password:** (Anota esta contraseña)
   - **Region:** South America (sao1) o US East
   - **Pricing Plan:** Free
3. Click **"Create new project"**
4. Espera ~2 minutos mientras se crea

### Paso 3: Obtener Credenciales

Una vez creado el proyecto:

1. Ve a **Settings** (⚙️) → **API**
2. Copia y guarda:
   ```
   Project URL: https://xxxxx.supabase.co
   anon public key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

### Paso 4: Crear Base de Datos

1. Ve a **SQL Editor** (</> icono)
2. Click **"New query"**
3. Copia y pega TODO el contenido de `supabase-schema.sql`
4. Click **"Run"** (▶️)
5. ✅ Deberías ver: "Success. No rows returned"

### Paso 5: Verificar Tablas

1. Ve a **Table Editor** (🗂️ icono)
2. Deberías ver:
   - ✅ services
   - ✅ providers
   - ✅ users
   - ✅ contact_requests
   - ✅ reviews

### Paso 6: Configurar Storage

1. Ve a **Storage** (📦 icono)
2. Click **"Create a new bucket"**
3. Crear:
   - **Name:** `service-icons`
   - **Public:** ✅ Activado
   - Click **"Create bucket"**
4. Repetir para:
   - **Name:** `provider-images`
   - **Public:** ✅ Activado

### Paso 7: Configurar Autenticación

1. Ve a **Authentication** (👤 icono) → **Providers**
2. Asegúrate de que **Email** esté habilitado
3. En **URL Configuration**:
   - **Site URL:** `https://tu-dashboard.netlify.app`
   - **Redirect URLs:** 
     ```
     https://tu-dashboard.netlify.app/**
     http://localhost:4200/**
     ```

---

## 🔑 Usar Credenciales en Dashboard

### En Desarrollo Local:

Crea `Dashboard/src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  supabaseUrl: 'https://xxxxx.supabase.co',
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
};
```

### En Netlify (Producción):

Añade en **Site settings** → **Environment variables**:

```
NG_APP_SUPABASE_URL=https://xxxxx.supabase.co
NG_APP_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 🧪 Probar Conexión

### 1. Insertar Datos de Prueba

En SQL Editor:

```sql
-- Ver servicios
SELECT * FROM services;

-- Ver proveedores
SELECT * FROM providers;
```

### 2. Probar en Dashboard

El servicio `supabase.service.ts` ya está creado con métodos para:

```typescript
// Obtener servicios
const { data, error } = await this.supabaseService.getServices();

// Crear servicio
const { data, error } = await this.supabaseService.createService({
  name: 'Nuevo Servicio',
  description: 'Descripción',
  slug: 'nuevo-servicio'
});

// Actualizar
await this.supabaseService.updateService(id, { name: 'Actualizado' });

// Eliminar
await this.supabaseService.deleteService(id);
```

---

## 📊 Límites Plan Gratuito

**Supabase Free Tier:**
- ✅ Database: 500 MB
- ✅ Storage: 1 GB
- ✅ Bandwidth: 2 GB/mes
- ✅ Auth users: Unlimited
- ✅ API requests: Unlimited

**Suficiente para:**
- Proyecto en desarrollo
- MVP/Prototipo
- ~1000 usuarios
- ~10,000 filas en database

---

## 🔒 Seguridad (Row Level Security)

El schema ya incluye políticas de seguridad:

- **Público puede:**
  - ✅ Ver servicios y proveedores
  - ✅ Enviar formularios de contacto
  - ✅ Ver reviews aprobadas

- **Usuarios autenticados pueden:**
  - ✅ Crear/Editar/Eliminar servicios
  - ✅ Crear/Editar/Eliminar proveedores
  - ✅ Ver y gestionar contactos
  - ✅ Aprobar/Eliminar reviews

---

## 🆘 Solución de Problemas

### Error: "Failed to fetch"
- Verifica que copiaste correctamente la URL y Key
- Revisa la consola del navegador para más detalles

### Error: "row-level security policy"
- Las políticas RLS están activas
- Asegúrate de estar autenticado para operaciones de admin

### Error: "relation does not exist"
- El schema no se ejecutó correctamente
- Vuelve a ejecutar `supabase-schema.sql`

### No puedo ver las tablas
- Espera que el proyecto termine de crearse
- Refresca la página de Supabase
- Ejecuta nuevamente el schema

---

## 📚 Recursos

- [Documentación oficial](https://supabase.com/docs)
- [Guía de Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)

---

## ✅ Checklist de Setup

- [ ] Cuenta de Supabase creada
- [ ] Proyecto creado
- [ ] Credenciales copiadas
- [ ] Schema SQL ejecutado
- [ ] Tablas verificadas (5 tablas)
- [ ] Storage buckets creados (2 buckets)
- [ ] Autenticación configurada
- [ ] Variables en Netlify configuradas

---

**¡Listo!** Tu Dashboard ya puede usar Supabase 🎉
