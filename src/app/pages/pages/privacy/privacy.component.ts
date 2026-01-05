import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, DarkSidebarComponent, TopHeaderComponent, FooterComponent,RouterLink],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {
  activeSidebar:boolean = true
  toggleClass(){
    this.activeSidebar=!this.activeSidebar;
  }

  privacyData = [
    'Digital Marketing Solutions for Tomorrow','Our Talented & Experienced Marketing Agency','Create your own skin to match your brand','Digital Marketing Solutions for Tomorrow','Our Talented & Experienced Marketing Agency','Create your own skin to match your brand'
  ]
}
