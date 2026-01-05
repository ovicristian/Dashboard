export interface Service {
  id: number;
  name: string;
  description: string;
}

// API Response interface
export interface ServicesApiResponse {
  message: string;
  data: Service[];
  note: string;
}
