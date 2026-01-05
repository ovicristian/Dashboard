import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { UserTabComponent } from '../../../components/user-tab/user-tab.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import * as feather from 'feather-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-social',
  standalone: true,
  imports: [CommonModule, DarkSidebarComponent, TopHeaderComponent, UserTabComponent, FooterComponent,RouterLink],
  templateUrl: './profile-social.component.html',
  styleUrls: ['./profile-social.component.scss']
})
export class ProfileSocialComponent {
  activeSidebar:boolean = true

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }
  ngAfterViewInit() {
    feather.replace();
  }

  socialData = [
    {
      name:'Twitter',
      icon:'twitter',
      title:'Twitter Profile Name',
      desc:'Add your Twitter username (e.g. jennyhot).'
    },
    {
      name:'Facebook',
      icon:'facebook',
      title:'Facebook Profile Name',
      desc:'Add your Facebook username (e.g. jennyhot).'
    },
    {
      name:'Instagram',
      icon:'instagram',
      title:'Instagram Profile Name',
      desc:'Add your Instagram username (e.g. jennyhot).'
    },
    {
      name:'Linkedin',
      icon:'linkedin',
      title:'Linkedin Profile Name',
      desc:'Add your Linkedin username (e.g. jennyhot).'
    },
    {
      name:'Youtube',
      icon:'youtube',
      title:'Youtube Profile Name',
      desc:'Add your Youtube username (e.g. jennyhot).'
    },
  ]
}
