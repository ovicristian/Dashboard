import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  orderData = [
    {
      no:1,
      id:'#tw001',
      date:'13th Sep 2023',
      price:'$253',
      status:'Delivered'
    },
    {
      no:2,
      id:'#tw002',
      date:'29th Nov 2023',
      price:'$123',
      status:'New Order'
    },
    {
      no:3,
      id:'#tw003',
      date:'29th Dec 2023',
      price:'$245',
      status:'Return'
    },
    {
      no:4,
      id:'#tw004',
      date:'13th Mar 2023',
      price:'$157',
      status:'Cancel'
    },
    {
      no:5,
      id:'#tw005',
      date:'5th May 2023',
      price:'$62',
      status:'New Order'
    },
    {
      no:6,
      id:'#tw006',
      date:'19th June 2023',
      price:'$456',
      status:'Delivered'
    },
    {
      no:7,
      id:'#tw007',
      date:'20th June 2023',
      price:'$478',
      status:'Delivered'
    },
  ]

}
