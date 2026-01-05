import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule,DarkSidebarComponent,TopHeaderComponent,FooterComponent,RouterLink],
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent {
  activeSidebar:boolean = true
  toggleClass(){
    this.activeSidebar=!this.activeSidebar;
  }
  restrictions = [
    'Digital Marketing Solutions for Tomorrow','Our Talented & Experienced Marketing Agency','Create your own skin to match your brand','Digital Marketing Solutions for Tomorrow','Our Talented & Experienced Marketing Agency','Create your own skin to match your brand'
  ]

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

  onTabClick(index: number) {
   this.activeIndex = index
  }

}
