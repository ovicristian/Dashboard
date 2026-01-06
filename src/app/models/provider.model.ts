export interface Provider {
  id: string;  // UUID from Supabase
  name: string;
  service: string;
  rating: number;
}

// API Response interface
export interface ProvidersApiResponse {
  message: string;
  data: Provider[];
  note: string;
}
