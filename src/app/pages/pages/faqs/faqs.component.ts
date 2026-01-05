import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule,DarkSidebarComponent,TopHeaderComponent,FooterComponent,RouterLink],
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent {
  activeSidebar:boolean = true
  toggleClass(){
    this.activeSidebar=!this.activeSidebar;
  }

  faqData = [
    {
      id:1,
      title:'How does it work ?',
      desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
      id:2,
      title:'Do I need a designer to use Techwind ?',
      desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
      id:3,
      title:'What do I need to do to start selling ?',
      desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
      id:4,
      title:'What happens when I receive an order ?',
      desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
  ]

  activeIndex:number = 1
  openAccordion(index: number) {
    this.activeIndex  = index;
  }

  activeIndex2:number = 1
  openAccordion2(index: number) {
    this.activeIndex2  = index;
  }
  activeIndex3:number = 1
  openAccordion3(index: number) {
    this.activeIndex3  = index;
  }
  activeIndex4:number = 1
  openAccordion4(index: number) {
    this.activeIndex4  = index;
  }

  isModal:boolean = false;
  onModalClick(){
    this.isModal=!this.isModal
  }
}
