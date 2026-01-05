// @ts-nocheck
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { UserTabComponent } from '../../../components/user-tab/user-tab.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-setting',
  standalone: true,
  imports: [CommonModule,DarkSidebarComponent, TopHeaderComponent, UserTabComponent,FooterComponent,RouterLink],
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.scss']
})
export class ProfileSettingComponent {
  activeSidebar:boolean = true

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }

  image:string = ''
    loadFile(event:any){
      this.image = document.getElementById(event.target.name);
      this.image.src = URL.createObjectURL(event.target.files[0]);
      this.image = this.image.src
    }

}
