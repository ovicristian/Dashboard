export interface Order {
  id: string;
  order_number: string;
  
  // Customer info
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  
  // Totals
  total_amount: number;
  
  // Payment & Status
  payment_method: string;
  status: OrderStatus;
  notes?: string;
  
  // Items (populated from join)
  items?: OrderItem[];
  
  // Status history
  status_history?: OrderStatusHistory[];
  
  // Timestamps
  created_at: string;
  updated_at?: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  product_name: string;
  price: number;
  quantity: number;
  created_at?: string;
}

export interface OrderStatusHistory {
  id: string;
  order_id: string;
  status: OrderStatus;
  notes?: string;
  created_by?: string;
  created_at: string;
}

export type OrderStatus = 
  | 'pending'      // Pendiente
  | 'confirmed'    // Confirmado
  | 'preparing'    // En preparación
  | 'shipped'      // Enviado
  | 'delivered'    // Entregado
  | 'cancelled';   // Cancelado

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  pending: 'Pendiente',
  confirmed: 'Confirmado',
  preparing: 'En preparación',
  shipped: 'Enviado',
  delivered: 'Entregado',
  cancelled: 'Cancelado'
};

export const ORDER_STATUS_COLORS: Record<OrderStatus, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-blue-100 text-blue-800',
  preparing: 'bg-purple-100 text-purple-800',
  shipped: 'bg-indigo-100 text-indigo-800',
  delivered: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800'
};

export interface OrdersApiResponse {
  orders: Order[];
  total: number;
}

export interface CreateOrderRequest {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  customer_city?: string;
  customer_notes?: string;
  delivery_fee?: number;
  items: {
    product_id: string;
    quantity: number;
  }[];
}
