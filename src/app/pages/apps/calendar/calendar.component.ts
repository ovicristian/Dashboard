import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, DarkSidebarComponent, TopHeaderComponent, FooterComponent,RouterLink],
  templateUrl: './calendar.component.html',
  styleUrls:[ './calendar.component.scss']
})
export class CalendarComponent  implements OnInit, AfterViewInit  {

  activeSidebar:boolean = true

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initializeCalendar();
  }

  private initializeCalendar(): void {
    $('#calendar').fullCalendar({
      // FullCalendar options and events go here
      // Example:
      header: {
        left: 'prev,next today addevent',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      events: [
       
      ]
    });
  }

}
