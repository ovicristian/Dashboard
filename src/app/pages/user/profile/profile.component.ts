import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { UserTabComponent } from '../../../components/user-tab/user-tab.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, DarkSidebarComponent, TopHeaderComponent, FooterComponent,UserTabComponent,LightgalleryModule,RouterLink],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  activeSidebar:boolean = true

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }

  experience = [
    {
      image:'assets/images/client/circle-logo.png',
      possition:'Senior Web Developer',
      experience:'3 Years Experience',
      name:'CircleCi',
      loction:'@London, UK'
    },
    {
      image:'assets/images/client/facebook-logo-2019.png',
      possition:'Web Designer',
      experience:'2 Years Experience',
      name:'Facebook',
      loction:'@Washington D.C, USA'
    },
    {
      image:'assets/images/client/spotify.png',
      possition:'UI Designer',
      experience:'2 Years Experience',
      name:'Spotify',
      loction:'@Perth, Australia'
    },
  ]

  portfolioData = [
    {
      image:'assets/images/portfolio/1.jpg',
      title:'Mockup Collection',
      name:'Abstract'
    },
    {
      image:'assets/images/portfolio/2.jpg',
      title:'Mockup Collection',
      name:'Abstract'
    },
    {
      image:'assets/images/portfolio/3.jpg',
      title:'Mockup Collection',
      name:'Abstract'
    },
    {
      image:'assets/images/portfolio/4.jpg',
      title:'Mockup Collection',
      name:'Abstract'
    },
    {
      image:'assets/images/portfolio/5.jpg',
      title:'Mockup Collection',
      name:'Abstract'
    },
    {
      image:'assets/images/portfolio/6.jpg',
      title:'Mockup Collection',
      name:'Abstract'
    },
  ]
}
