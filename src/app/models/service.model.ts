export interface Service {
  id: string;  // UUID from Supabase
  name: string;
  description: string;
}

// API Response interface
export interface ServicesApiResponse {
  message: string;
  data: Service[];
  note: string;
}
