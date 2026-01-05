import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserTabComponent } from '../../../components/user-tab/user-tab.component';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-billing',
  standalone: true,
  imports: [CommonModule,UserTabComponent,DarkSidebarComponent,TopHeaderComponent,FooterComponent,RouterLink],
  templateUrl: './profile-billing.component.html',
  styleUrls: ['./profile-billing.component.scss']
})
export class ProfileBillingComponent {
  activeSidebar:boolean = true

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }

}
