import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { UserTabComponent } from '../../../components/user-tab/user-tab.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-notification',
  standalone: true,
  imports: [CommonModule, DarkSidebarComponent, TopHeaderComponent, UserTabComponent, FooterComponent,RouterLink],
  templateUrl: './profile-notification.component.html',
  styleUrls: ['./profile-notification.component.scss']
})
export class ProfileNotificationComponent {

  activeSidebar:boolean = true

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }

}
