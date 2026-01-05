import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule,DarkSidebarComponent, TopHeaderComponent, FooterComponent,RouterLink],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent {
  activeSidebar:boolean = true

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }

  commentsData = [
    {
      image:'assets/images/client/01.jpg',
      name:'Calvin Carlo',
      time:'13th March 2024 at 01:00 pm',
      desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
    {
      image:'assets/images/client/02.jpg',
      name:'Calvin Carlo',
      time:'5th May 2024 at 10:00 am',
      desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
    {
      image:'assets/images/client/03.jpg',
      name:'Calvin Carlo',
      time:'19th June 2024 at 09:00 am',
      desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
    {
      image:'assets/images/client/04.jpg',
      name:'Calvin Carlo',
      time:'20th June 2024 at 01:30 pm',
      desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
  ]

  recentPost = [
    {
      image:'assets/images/blog/06.jpg',
      title:'Consultant Business',
      date:'13th Sep 2023'
    },
    {
      image:'assets/images/blog/07.jpg',
      title:'Grow Your Business',
      date:'29th Nov 2023'
    },
    {
      image:'assets/images/blog/08.jpg',
      title:'Look On The Glorious Balance',
      date:'29th Dec 2023'
    },
  ]

  social = [
    'facebook', 'instagram', 'twitter', 'linkedin', 'github', 'youtube', 'gitlab'
  ]

  tag = [
    'Business', 'Finance', 'Marketing', 'Fashion', 'Bride', 'Lifestyle', 'Travel', 'Beauty', 'Video', 'Audio'
  ]
}
