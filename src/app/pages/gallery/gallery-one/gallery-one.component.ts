import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery-one',
  standalone: true,
  imports: [CommonModule, DarkSidebarComponent, TopHeaderComponent, FooterComponent,LightgalleryModule,RouterLink],
  templateUrl: './gallery-one.component.html',
  styleUrls: ['./gallery-one.component.scss']
})
export class GalleryOneComponent {
  activeSidebar:boolean = true
  toggleClass(){
    this.activeSidebar=!this.activeSidebar;
  }

  portfolioData = [
    {
      image:'assets/images/portfolio/1.jpg',
      name:'Mockup Collection',
      title:'Abstract'
    },
    {
      image:'assets/images/portfolio/2.jpg',
      name:'Mockup Collection',
      title:'Abstract'
    },
    {
      image:'assets/images/portfolio/3.jpg',
      name:'Mockup Collection',
      title:'Abstract'
    },
    {
      image:'assets/images/portfolio/4.jpg',
      name:'Mockup Collection',
      title:'Abstract'
    },
    {
      image:'assets/images/portfolio/5.jpg',
      name:'Mockup Collection',
      title:'Abstract'
    },
    {
      image:'assets/images/portfolio/6.jpg',
      name:'Mockup Collection',
      title:'Abstract'
    },
    {
      image:'assets/images/portfolio/7.jpg',
      name:'Mockup Collection',
      title:'Abstract'
    },
    {
      image:'assets/images/portfolio/8.jpg',
      name:'Mockup Collection',
      title:'Abstract'
    },
    {
      image:'assets/images/portfolio/20.jpg',
      name:'Mockup Collection',
      title:'Abstract'
    },
    {
      image:'assets/images/portfolio/21.jpg',
      name:'Mockup Collection',
      title:'Abstract'
    },
    {
      image:'assets/images/portfolio/9.jpg',
      name:'Mockup Collection',
      title:'Abstract'
    },
    {
      image:'assets/images/portfolio/22.jpg',
      name:'Mockup Collection',
      title:'Abstract'
    },
    {
      image:'assets/images/portfolio/23.jpg',
      name:'Mockup Collection',
      title:'Abstract'
    },
    {
      image:'assets/images/portfolio/1.jpg',
      name:'Mockup Collection',
      title:'Abstract'
    },
    {
      image:'assets/images/portfolio/4.jpg',
      name:'Mockup Collection',
      title:'Abstract'
    },
  ]
}
