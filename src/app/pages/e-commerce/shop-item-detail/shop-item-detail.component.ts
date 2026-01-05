import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { tns } from 'tiny-slider/src/tiny-slider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop-item-detail',
  standalone: true,
  imports: [CommonModule, DarkSidebarComponent, TopHeaderComponent, FooterComponent,RouterLink],
  templateUrl: './shop-item-detail.component.html',
  styleUrls: ['./shop-item-detail.component.scss']
})
export class ShopItemDetailComponent {
  slider: any;

  ngAfterViewInit() {
    const sliderContainer = document.querySelector('.tiny-single-item');
    if (sliderContainer) {
      this.slider = tns({
        container: '.tiny-single-item',
        items: 1,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 16,
      });
    }
  }

  activeSidebar:boolean = true
  toggleClass(){
    this.activeSidebar=!this.activeSidebar;
  }

  activeTab:number = 1

  onTabClick(index:number){
    this.activeTab = index
  }

  commentsData = [
    {
      image:'assets/images/client/01.jpg',
      name:'Calvin Carlo',
      date:'13th March 2023 at 01:00 pm',
      desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
    {
      image:'assets/images/client/02.jpg',
      name:'Calvin Carlo',
      date:'05th May 2023 at 10:00 am',
      desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
    {
      image:'assets/images/client/03.jpg',
      name:'Calvin Carlo',
      date:'19th June 2023 at 09:00 am',
      desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
    {
      image:'assets/images/client/04.jpg',
      name:'Calvin Carlo',
      date:'20th June 2023 at 01:30 pm',
      desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
  ]

  productImage = [
    'assets/images/shop/single/single-2.jpg','assets/images/shop/single/single-3.jpg','assets/images/shop/single/single-4.jpg','assets/images/shop/single/single-5.jpg','assets/images/shop/single/single-6.jpg'
  ]
}
