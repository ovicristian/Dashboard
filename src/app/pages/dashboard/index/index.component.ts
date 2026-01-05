import { CommonModule,  } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { CountUpModule } from 'ngx-countup';
import { AnalyticsComponent } from '../../../components/analytics/analytics.component';
import { FeaturesComponent } from '../../../components/features/features.component';
import { CountryComponent } from '../../../components/country/country.component';
import { OrderComponent } from '../../../components/order/order.component';
import { ChatDataComponent } from '../../../components/chat-data/chat-data.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { TopProductComponent } from '../../../components/top-product/top-product.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule,DarkSidebarComponent,TopHeaderComponent, CountUpModule,AnalyticsComponent,FeaturesComponent,CountryComponent,OrderComponent,ChatDataComponent,FooterComponent,TopProductComponent,RouterLink],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  
  activeSidebar:boolean = true
  ngOnInit() {
  }

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }

}


