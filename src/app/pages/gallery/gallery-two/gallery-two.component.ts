import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery-two',
  standalone: true,
  imports: [CommonModule, DarkSidebarComponent, TopHeaderComponent, FooterComponent,LightgalleryModule,RouterLink],
  templateUrl: './gallery-two.component.html',
  styleUrls: ['./gallery-two.component.scss']
})
export class GalleryTwoComponent {
  activeSidebar:boolean = true
  toggleClass(){
    this.activeSidebar=!this.activeSidebar;
  }

  portfolioData = [
    {
      image:'assets/images/portfolio/1.jpg',
      name:'Iphone mockup',
      title:'Branding',
      category:'branding'
    },
    {
      image:'assets/images/portfolio/2.jpg',
      name:'Iphone mockup',
      title:'Branding',
      category:'designing'
    },
    {
      image:'assets/images/portfolio/3.jpg',
      name:'Iphone mockup',
      title:'Branding',
      category:'photography'
    },
    {
      image:'assets/images/portfolio/4.jpg',
      name:'Iphone mockup',
      title:'Branding',
      category:'development'
    },
    {
      image:'assets/images/portfolio/5.jpg',
      name:'Iphone mockup',
      title:'Branding',
      category:'branding'
    },
    {
      image:'assets/images/portfolio/6.jpg',
      name:'Iphone mockup',
      title:'Branding',
      category:'branding'
    },
    {
      image:'assets/images/portfolio/7.jpg',
      name:'Iphone mockup',
      title:'Branding',
      category:'designing'
    },
    {
      image:'assets/images/portfolio/8.jpg',
      name:'Iphone mockup',
      title:'Branding',
      category:'development'
    },
    {
      image:'assets/images/portfolio/9.jpg',
      name:'Iphone mockup',
      title:'Branding',
      category:'photography'
    },
    {
      image:'assets/images/portfolio/21.jpg',
      name:'Iphone mockup',
      title:'Branding',
      category:'photography'
    },
    {
      image:'assets/images/portfolio/20.jpg',
      name:'Iphone mockup',
      title:'Branding',
      category:'designing'
    },
    {
      image:'assets/images/portfolio/22.jpg',
      name:'Iphone mockup',
      title:'Branding',
      category:'photography'
    },
    {
      image:'assets/images/portfolio/23.jpg',
      name:'Iphone mockup',
      title:'Branding',
      category:'development'
    },
    {
      image:'assets/images/portfolio/5.jpg',
      name:'Iphone mockup',
      title:'Branding',
      category:'branding'
    },
    {
      image:'assets/images/portfolio/6.jpg',
      name:'Iphone mockup',
      title:'Branding',
      category:'branding'
    },
  ]

  selectedCategory:any = null

  filteredData:any = this.portfolioData;
  matchCategory(category:any){
    this.selectedCategory = category
    this.filteredData = this.selectedCategory
    ? this.portfolioData.filter((item) => item.category === this.selectedCategory)
    : this.portfolioData;
  }
}
