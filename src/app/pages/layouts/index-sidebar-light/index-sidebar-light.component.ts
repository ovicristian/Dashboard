import { CommonModule,  } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { CountUpModule } from 'ngx-countup';
import { AnalyticsComponent } from '../../../components/analytics/analytics.component';
import { FeaturesComponent } from '../../../components/features/features.component';
import { CountryComponent } from '../../../components/country/country.component';
import { OrderComponent } from '../../../components/order/order.component';
import { ChatDataComponent } from '../../../components/chat-data/chat-data.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { TopProductComponent } from '../../../components/top-product/top-product.component';
import { LightSidebarComponent } from '../../../components/sidebar/light-sidebar/light-sidebar.component';

@Component({
  selector: 'app-index-sidebar-light',
  standalone: true,
  imports: [CommonModule,TopHeaderComponent, CountUpModule,AnalyticsComponent,FeaturesComponent,CountryComponent,OrderComponent,ChatDataComponent,FooterComponent,TopProductComponent,LightSidebarComponent],
  templateUrl: './index-sidebar-light.component.html',
  styleUrls: ['./index-sidebar-light.component.scss']
})
export class IndexSidebarLightComponent {
  activeSidebar:boolean = true
  ngOnInit() {
  }

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }
}
