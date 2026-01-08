export interface Provider {
  id: string;  // UUID from Supabase
  name: string;
  service: string;
  rating: number;
  hourly_rate?: number;  // Precio por hora (opcional)
  logo_url?: string;  // URL del logo del proveedor
}

// API Response interface
export interface ProvidersApiResponse {
  message: string;
  data: Provider[];
  note: string;
}
