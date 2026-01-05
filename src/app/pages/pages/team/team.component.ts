import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, TopHeaderComponent, DarkSidebarComponent, FooterComponent,RouterLink],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  activeSidebar:boolean = true
  toggleClass(){
    this.activeSidebar=!this.activeSidebar;
  }

  teamData = [
    {
      image:'assets/images/client/01.jpg',
      name:'Jack John',
      possition:'Designer'
    },
    {
      image:'assets/images/client/02.jpg',
      name:'Krista John',
      possition:'Designer'
    },
    {
      image:'assets/images/client/03.jpg',
      name:'Roger Jackson',
      possition:'Designer'
    },
    {
      image:'assets/images/client/04.jpg',
      name:'Johnny English',
      possition:'Designer'
    },
    {
      image:'assets/images/client/05.jpg',
      name:'Jack John',
      possition:'Designer'
    },
    {
      image:'assets/images/client/06.jpg',
      name:'Krista John',
      possition:'Designer'
    },
    {
      image:'assets/images/client/07.jpg',
      name:'Roger Jackson',
      possition:'Designer'
    },
    {
      image:'assets/images/client/08.jpg',
      name:'Johnny English',
      possition:'Designer'
    },
    {
      image:'assets/images/client/09.jpg',
      name:'Jack John',
      possition:'Designer'
    },
    {
      image:'assets/images/client/10.jpg',
      name:'Krista John',
      possition:'Designer'
    },
    {
      image:'assets/images/client/11.jpg',
      name:'Roger Jackson',
      possition:'Designer'
    },
    {
      image:'assets/images/client/12.jpg',
      name:'Johnny English',
      possition:'Designer'
    },
  ]
}
