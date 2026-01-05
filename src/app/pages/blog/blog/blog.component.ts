// @ts-nocheck
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { UserTabComponent } from '../../../components/user-tab/user-tab.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule,DarkSidebarComponent,  TopHeaderComponent, UserTabComponent, FooterComponent,RouterLink],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  activeSidebar:boolean = true

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }

  blogData = [
    {
      image:'assets/images/blog/01.jpg',
      title:'Design your apps in your own way',
      desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
      image:'assets/images/blog/02.jpg',
      title:'How apps is changing the IT world',
      desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
      image:'assets/images/blog/03.jpg',
      title:'Smartest Applications for Business',
      desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
      image:'assets/images/blog/04.jpg',
      title:'Mobile Marketing, Its Synthes and 2021 Offer Prognosis',
      desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
      image:'assets/images/blog/05.jpg',
      title:'Stop Worrying About Deadlines! We Got You Covered',
      desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
      image:'assets/images/blog/06.jpg',
      title:'Change Your Strategy: Find a Business Consultant',
      desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
      image:'assets/images/blog/07.jpg',
      title:'Everything About Financial Modeling',
      desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
      image:'assets/images/blog/08.jpg',
      title:'On the other hand we provide denounce',
      desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
  ]
  isOpen:boolean = false

  isModalOpen(){
    this.isOpen= !this.isOpen;
  }

  image:string = ''
  loadFile(event:any){
    this.image = document.getElementById(event.target.name);
    this.image.src = URL.createObjectURL(event.target.files[0]);
    this.image = this.image.src
  }
}
