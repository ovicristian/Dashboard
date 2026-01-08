import { Injectable } from '@angular/core';
import { Order, OrderStatus, CreateOrderRequest } from '../models/order.model';
import { SupabaseService } from './supabase.service';

export interface OrdersApiResponse {
  orders: Order[];
  total: number;
}

@Injectable({ providedIn: 'root' })
export class OrdersService {
  constructor(private supabaseService: SupabaseService) {}

  async getOrders(page: number = 1, limit: number = 10, status?: OrderStatus): Promise<OrdersApiResponse> {
    try {
      const response = await this.supabaseService.getOrders(status);
      const orders = (response.data || []) as Order[];
      return { orders, total: orders.length };
    } catch (error) {
      console.error('Error fetching orders:', error);
      return { orders: [], total: 0 };
    }
  }

  async getOrderById(id: string): Promise<Order> {
    try {
      const response = await this.supabaseService.getOrderById(id);
      if (response.data) {
        return response.data as Order;
      }
      throw new Error('Order not found');
    } catch (error) {
      console.error('Error fetching order:', error);
      throw error;
    }
  }

  async getOrderByNumber(orderNumber: string): Promise<Order> {
    try {
      const response = await this.supabaseService.getOrderByNumber(orderNumber);
      if (response.data) {
        return response.data as Order;
      }
      throw new Error('Order not found');
    } catch (error) {
      console.error('Error fetching order:', error);
      throw error;
    }
  }

  async createOrder(orderData: CreateOrderRequest): Promise<any> {
    return await this.supabaseService.createOrder(orderData);
  }

  async updateOrderStatus(id: string, status: OrderStatus, notes?: string): Promise<any> {
    return await this.supabaseService.updateOrderStatus(id, status, notes);
  }

  async deleteOrder(id: string): Promise<any> {
    return await this.supabaseService.deleteOrder(id);
  }

  async getOrderStats(): Promise<any> {
    return await this.supabaseService.getOrderStats();
  }
}
