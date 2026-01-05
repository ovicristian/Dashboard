import {  Component, ElementRef, AfterViewInit } from '@angular/core';
import SimpleBar from 'simplebar';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-dark-sidebar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './dark-sidebar.component.html',
  styleUrls: ['./dark-sidebar.component.scss']

})
export class DarkSidebarComponent implements AfterViewInit {
  constructor(private el: ElementRef, private router : Router) {}

  ngAfterViewInit() {
    const element = this.el.nativeElement.querySelector('[simplebar]');
    if (element) {
      new SimpleBar(element);
    }

    feather.replace();
  }
  activeManu:string = '';
  manuOpen:string = ''

  ngOnInit(): void {
    this.activeManu = this.router.url;
    window.scrollTo(0, 0);
    this.manuOpen= this.activeManu
}
    manu:boolean = true;

    subManu(item:any){
      this.manu = !this.manu;  
      this.manuOpen = item
    }
}