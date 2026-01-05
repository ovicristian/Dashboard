// @ts-nocheck
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, DarkSidebarComponent, TopHeaderComponent, FooterComponent,RouterLink],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  activeSidebar:boolean = true

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }

  image:string = ''
  loadFile(event:any){
    this.image = document.getElementById(event.target.name);
    this.image.src = URL.createObjectURL(event.target.files[0]);
    this.image = this.image.src
  }
  
  isOpen:boolean = false

  isModalOpen(){
    this.isOpen = !this.isOpen
  }

  productData = [
    {
      image:'assets/images/shop/items/s1.jpg',
      tag:'New',
      name:'Branded T-Shirt',
      descAmount:'$16.00',
      amount:'$21.00',
    },
    {
      image:'assets/images/shop/items/s2.jpg',
      tag:'Featured',
      name:'Shopping Bag',
      descAmount:'$16.00',
      amount:'$21.00',
    },
    {
      image:'assets/images/shop/items/s3.jpg',
      tag:'',
      name:'Elegent Watch',
      descAmount:'$16.00',
      amount:'$21.00',
    },
    {
      image:'assets/images/shop/items/s4.jpg',
      tag:'',
      name:'Casual Shoes',
      descAmount:'$16.00',
      amount:'$21.00',
    },
    {
      image:'assets/images/shop/items/s5.jpg',
      tag:'New',
      name:'Earphones',
      descAmount:'$16.00',
      amount:'$21.00',
    },
    {
      image:'assets/images/shop/items/s6.jpg',
      tag:'',
      name:'Elegent Mug',
      descAmount:'$16.00',
      amount:'$21.00',
    },
    {
      image:'assets/images/shop/items/s7.jpg',
      tag:'',
      name:'Sony Headphones',
      descAmount:'$16.00',
      amount:'$21.00',
    },
    {
      image:'assets/images/shop/items/s8.jpg',
      tag:'Sale',
      name:'Wooden Stools',
      descAmount:'$16.00',
      amount:'$21.00',
    },
    {
      image:'assets/images/shop/items/s13.jpg',
      tag:'',
      name:'Wooden Chair',
      descAmount:'$16.00',
      amount:'$21.00',
    },
    {
      image:'assets/images/shop/items/s14.jpg',
      tag:'',
      name:'Women Block Heels',
      descAmount:'$16.00',
      amount:'$21.00',
    },
  ]
}
