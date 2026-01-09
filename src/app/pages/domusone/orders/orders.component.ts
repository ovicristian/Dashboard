import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { OrdersService } from '../../../services/orders.service';
import { EmailNotificationService } from '../../../services/email-notification.service';
import { Order, OrderItem, OrderStatus } from '../../../models/order.model';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FormsModule, DarkSidebarComponent, TopHeaderComponent, FooterComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  filteredOrders: Order[] = [];
  selectedOrder: Order | null = null;
  activeSidebar: boolean = true;
  
  // Filters
  selectedStatus: OrderStatus | 'all' = 'all';
  searchTerm: string = '';
  
  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  
  // Modals
  showDetailModal: boolean = false;
  showStatusModal: boolean = false;
  
  // Status update
  newStatus: OrderStatus = 'pending';
  statusNotes: string = '';
  
  // Loading
  loading: boolean = false;
  
  // Status options
  statusOptions: { value: OrderStatus; label: string; color: string }[] = [
    { value: 'pending', label: 'Pendiente', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'confirmed', label: 'Confirmado', color: 'bg-blue-100 text-blue-800' },
    { value: 'preparing', label: 'En preparación', color: 'bg-indigo-100 text-indigo-800' },
    { value: 'shipped', label: 'Enviado', color: 'bg-purple-100 text-purple-800' },
    { value: 'delivered', label: 'Entregado', color: 'bg-green-100 text-green-800' },
    { value: 'cancelled', label: 'Cancelado', color: 'bg-red-100 text-red-800' }
  ];

  constructor(
    private ordersService: OrdersService,
    private emailService: EmailNotificationService
  ) {}

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }

  ngOnInit(): void {
    this.loadOrders();
  }

  async loadOrders(): Promise<void> {
    try {
      this.loading = true;
      const response = await this.ordersService.getOrders(
        this.currentPage,
        this.itemsPerPage,
        this.selectedStatus !== 'all' ? this.selectedStatus : undefined
      );
      
      this.orders = response.orders;
      this.totalItems = response.total;
      this.applyFilters();
    } catch (error) {
      console.error('Error loading orders:', error);
      alert('Error al cargar las órdenes');
    } finally {
      this.loading = false;
    }
  }

  applyFilters(): void {
    let filtered = [...this.orders];
    
    // Filter by search term (order number, customer name, email)
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(order =>
        order.order_number.toLowerCase().includes(term) ||
        order.customer_name.toLowerCase().includes(term) ||
        order.customer_email.toLowerCase().includes(term)
      );
    }
    
    this.filteredOrders = filtered;
  }

  onStatusFilterChange(): void {
    this.currentPage = 1;
    this.loadOrders();
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  async viewOrderDetail(order: Order): Promise<void> {
    try {
      // Load full order details including items
      const fullOrder = await this.ordersService.getOrderById(order.id);
      this.selectedOrder = fullOrder;
      this.showDetailModal = true;
    } catch (error) {
      console.error('Error loading order details:', error);
      alert('Error al cargar los detalles de la orden');
    }
  }

  openStatusModal(order: Order): void {
    this.selectedOrder = order;
    this.newStatus = order.status;
    this.statusNotes = '';
    this.showStatusModal = true;
  }

  async updateOrderStatus(): Promise<void> {
    if (!this.selectedOrder) return;
    
    try {
      this.loading = true;
      
      // Actualizar el estado en la base de datos
      await this.ordersService.updateOrderStatus(
        this.selectedOrder.id,
        this.newStatus,
        this.statusNotes
      );
      
      // Enviar email de notificación (no bloqueante)
      this.emailService.sendOrderStatusUpdate(
        {
          order_number: this.selectedOrder.order_number,
          customer_name: this.selectedOrder.customer_name,
          customer_email: this.selectedOrder.customer_email,
          customer_phone: this.selectedOrder.customer_phone,
          customer_address: this.selectedOrder.customer_address,
          payment_method: this.selectedOrder.payment_method,
          total: this.selectedOrder.total,
          subtotal: this.selectedOrder.subtotal,
          delivery_fee: this.selectedOrder.delivery_fee,
          items: this.selectedOrder.items,
          created_at: this.selectedOrder.created_at,
          customer_notes: this.selectedOrder.customer_notes,
          order_status: this.newStatus
        } as any,
        this.newStatus,
        this.statusNotes
      ).subscribe({
        next: (response) => {
          if (response.success) {
            console.log('✅ Email de actualización enviado correctamente');
          } else {
            console.warn('⚠️ No se pudo enviar el email:', response.error);
          }
        },
        error: (err) => console.error('❌ Error al enviar email:', err)
      });
      
      alert('Estado actualizado correctamente y email enviado al cliente');
      this.closeStatusModal();
      await this.loadOrders();
    } catch (error) {
      console.error('Error updating order status:', error);
      alert('Error al actualizar el estado');
    } finally {
      this.loading = false;
    }
  }

  closeDetailModal(): void {
    this.showDetailModal = false;
    this.selectedOrder = null;
  }

  closeStatusModal(): void {
    this.showStatusModal = false;
    this.selectedOrder = null;
    this.statusNotes = '';
  }

  getStatusBadgeClass(status: OrderStatus): string {
    const option = this.statusOptions.find(opt => opt.value === status);
    return option ? option.color : 'bg-gray-100 text-gray-800';
  }

  getStatusLabel(status: OrderStatus): string {
    const option = this.statusOptions.find(opt => opt.value === status);
    return option ? option.label : status;
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(amount);
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Pagination
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get paginatedOrders(): Order[] {
    return this.filteredOrders;
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadOrders();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadOrders();
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.loadOrders();
  }

  get displayPages(): number[] {
    const pages: number[] = [];
    const maxPages = 5;
    let start = Math.max(1, this.currentPage - Math.floor(maxPages / 2));
    let end = Math.min(this.totalPages, start + maxPages - 1);
    
    if (end - start < maxPages - 1) {
      start = Math.max(1, end - maxPages + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  }

  getOrderItemsTotal(items: OrderItem[]): number {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}
