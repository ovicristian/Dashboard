import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [CommonModule,DarkSidebarComponent,TopHeaderComponent,FooterComponent,RouterLink],
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent {
  activeSidebar:boolean = true
  toggleClass(){
    this.activeSidebar=!this.activeSidebar;
  }

  invoiceData = [ 
    {
      no:'#tw001',
      image:'assets/images/client/01.jpg',
      name:'Howard Tanner',
      phone:'(+12)85-4521-7568',
      amount:'$253',
      date:'13th Sep 2023',
      status:'Unpaid'
    },
    {
      no:'#tw002',
      image:'assets/images/client/02.jpg',
      name:'Wendy Filson',
      phone:'(+12)85-4521-7568',
      amount:'$482',
      date:'29th Nov 2023',
      status:'Paid'
    },
    {
      no:'#tw003',
      image:'assets/images/client/03.jpg',
      name:'Faye Bridger',
      phone:'(+12)85-4521-7568',
      amount:'$546',
      date:'29th Dec 2023',
      status:'Unpaid'
    },
    {
      no:'#tw004',
      image:'assets/images/client/04.jpg',
      name:'Ronald Curtis',
      phone:'(+12)85-4521-7568',
      amount:'$154',
      date:'13th March 2023',
      status:'Paid'
    },
    {
      no:'#tw005',
      image:'assets/images/client/05.jpg',
      name:'Melissa Hibner',
      phone:'(+12)85-4521-7568',
      amount:'$458',
      date:'5th May 2023',
      status:'Unpaid'
    },
    {
      no:'#tw006',
      image:'assets/images/client/06.jpg',
      name:'Randall Case',
      phone:'(+12)85-4521-7568',
      amount:'$548',
      date:'19th June 2023',
      status:'Paid'
    },
    {
      no:'#tw007',
      image:'assets/images/client/07.jpg',
      name:'Jerry Morena',
      phone:'(+12)85-4521-7568',
      amount:'$658',
      date:'20th June 2023',
      status:'Paid'
    },
    {
      no:'#tw008',
      image:'assets/images/client/08.jpg',
      name:'Lester McNally',
      phone:'(+12)85-4521-7568',
      amount:'$457',
      date:'1st Aug 2023',
      status:'Paid'
    },
  ]
}
