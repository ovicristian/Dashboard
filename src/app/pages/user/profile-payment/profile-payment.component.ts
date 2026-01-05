import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { UserTabComponent } from '../../../components/user-tab/user-tab.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-payment',
  standalone: true,
  imports: [CommonModule,DarkSidebarComponent,TopHeaderComponent,UserTabComponent, FooterComponent,RouterLink],
  templateUrl: './profile-payment.component.html',
  styleUrls: ['./profile-payment.component.scss']
})
export class ProfilePaymentComponent {
  activeSidebar:boolean = true

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }

  paymentMethod = [
    {
      image:'assets/images/payments/visa.png',
      title:'Visa ending in 4578',
      date:'Expires in 13th March 2024'
    },
    {
      image:'assets/images/payments/american-ex.png',
      title:'American Express ending in 4578',
      date:'Expires in 5th May 2024'
    },
    {
      image:'assets/images/payments/discover.png',
      title:'Discover ending in 4578',
      date:'Expires in 19th June 2024'
    },
    {
      image:'assets/images/payments/master-card.png',
      title:'Master Card ending in 4578',
      date:'Expires in 20th June 2024'
    },
  ]

  isOpen:boolean = false

  onModalClick(){
    this.isOpen=!this.isOpen
  }
}
