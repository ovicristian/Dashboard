import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [CommonModule,DarkSidebarComponent, TopHeaderComponent, FooterComponent,RouterLink],
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent {
  activeSidebar:boolean = true
  toggleClass(){
    this.activeSidebar=!this.activeSidebar;
  }
}
