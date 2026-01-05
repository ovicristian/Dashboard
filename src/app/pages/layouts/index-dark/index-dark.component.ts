import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FeaturesComponent } from '../../../components/features/features.component';
import { AnalyticsComponent } from '../../../components/analytics/analytics.component';
import { CountryComponent } from '../../../components/country/country.component';
import { OrderComponent } from '../../../components/order/order.component';
import { ChatDataComponent } from '../../../components/chat-data/chat-data.component';
import { TopProductComponent } from '../../../components/top-product/top-product.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index-dark',
  standalone: true,
  imports: [CommonModule,DarkSidebarComponent,TopHeaderComponent,FeaturesComponent,AnalyticsComponent,CountryComponent,OrderComponent, ChatDataComponent, TopProductComponent, FooterComponent,RouterLink],
  templateUrl: './index-dark.component.html',
  styleUrls: ['./index-dark.component.scss']
})
export class IndexDarkComponent {
  htmlTag:any = document.getElementsByTagName("html")[0] 

  ngAfterViewInit(): void {
    this.htmlTag.classList.add("dark")[0];
  }

  activeSidebar:boolean = true
  ngOnInit() {
    // document.documentElement.setAttribute("dir", "rtl")
  }

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }

}
