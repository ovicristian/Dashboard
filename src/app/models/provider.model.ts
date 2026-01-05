export interface Provider {
  id: number;
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
