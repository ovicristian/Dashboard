import {  Component, ElementRef, AfterViewInit } from '@angular/core';
import SimpleBar from 'simplebar';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-light-sidebar',
  standalone: true,
  imports: [CommonModule,CommonModule],
  templateUrl: './light-sidebar.component.html',
  styleUrls: ['./light-sidebar.component.scss']
})
export class LightSidebarComponent implements AfterViewInit {
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