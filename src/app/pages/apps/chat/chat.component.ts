import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule,DarkSidebarComponent,TopHeaderComponent,FooterComponent,RouterLink],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  activeSidebar:boolean = true
  ngOnInit() {
  }

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }

  chatData = [
    {
      image:'assets/images/client/09.jpg',
      status:'online',
      name:'Christopher',
      time:'10 Min',
      msg:'Hello',
      bage:'2',
      active:true,
    },
    {
      image:'assets/images/client/01.jpg',
      status:'offline',
      name:'Dr. Cristino',
      time:'20 Min',
      msg:'Hi, How are you?',
      bage:null,
      active:false,
    },
    {
      image:'assets/images/client/03.jpg',
      status:'offline',
      name:'Faye',
      time:'30 Min',
      msg:'Heyy',
      bage:null,
      active:false,
    },
    {
      image:'assets/images/client/04.jpg',
      status:'offline',
      name:'Ronald',
      time:'2 Hours',
      msg:'Hey, How are you sir?',
      bage:null,
      active:false,
    },
    {
      image:'assets/images/client/11.jpg',
      status:'online',
      name:'Melissa',
      time:'3 Hours',
      msg:'Good Afternoon',
      bage:null,
      active:false,
    },
    {
      image:'assets/images/client/12.jpg',
      status:'online',
      name:'Elsie',
      time:'10 Hours',
      msg:'Good Morning sir, how can i help you?',
      bage:null,
      active:false,
    },
    {
      image:'assets/images/client/07.jpg',
      status:'online',
      name:'Jerry',
      time:'16 Hours',
      msg:'Please give me appointment',
      bage:null,
      active:false,
    },
    {
      image:'assets/images/client/13.jpg',
      status:'offline',
      name:'Louis',
      time:'1 Days',
      msg:'Hii',
      bage:null,
      active:false,
    },
    {
      image:'assets/images/client/06.jpg',
      status:'offline',
      name:'Randall',
      time:'2 Days',
      msg:'Hello Sir',
      bage:null,
      active:false,
    },
    {
      image:'assets/images/client/10.jpg',
      status:'offline',
      name:'Mary',
      time:'3 Days',
      msg:'How are you sir?',
      bage:null,
      active:false,
    },
    {
      image:'assets/images/client/08.jpg',
      status:'online',
      name:'Lester',
      time:'4 Days',
      msg:'Hello please give me answer.',
      bage:null,
      active:false,
    },
  ]

  isOpen:boolean = false;

  onModalClick(){
    this.isOpen=!this.isOpen;
  }

}
