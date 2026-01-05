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
import { ColorSidebarComponent } from '../../../components/sidebar/color-sidebar/color-sidebar.component';

@Component({
  selector: 'app-index-sidebar-colored',
  standalone: true,
  imports: [CommonModule,TopHeaderComponent, CountUpModule,AnalyticsComponent,FeaturesComponent,CountryComponent,OrderComponent,ChatDataComponent,FooterComponent,TopProductComponent,ColorSidebarComponent],
  templateUrl: './index-sidebar-colored.component.html',
  styleUrls: ['./index-sidebar-colored.component.scss']
})
export class IndexSidebarColoredComponent {
  activeSidebar:boolean = true
  ngOnInit() {
  }

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }
}
