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

@Component({
  selector: 'app-index-rtl',
  standalone: true,
  imports: [CommonModule,DarkSidebarComponent,TopHeaderComponent,FeaturesComponent,AnalyticsComponent,CountryComponent,OrderComponent, ChatDataComponent, TopProductComponent, FooterComponent],
  templateUrl: './index-rtl.component.html',
  styleUrls: ['./index-rtl.component.scss']
})
export class IndexRtlComponent {
  activeSidebar:boolean = true
  ngOnInit() {
    document.documentElement.setAttribute("dir", "rtl")
  }

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }
}
