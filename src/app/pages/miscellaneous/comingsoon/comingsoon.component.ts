 // @ts-nocheck
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackToHomeComponent } from '../../../components/back-to-home/back-to-home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comingsoon',
  standalone: true,
  imports: [CommonModule, BackToHomeComponent,RouterLink],
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.scss']
})
export class ComingsoonComponent {
dates:any;
ngOnInit(): void {
 
  this.dates = new Date().getFullYear()
}

date: any;
now: any;
targetDate: any = new Date(2024, 9, 11);
targetTime: any = this.targetDate.getTime();
difference: number;
days= ''
hours = ''
minutes = ''
seconds = ''

ngAfterViewInit() {
  setInterval(() => {
    this.tickTock();
    this.difference = this.targetTime - this.now;
    this.difference = this.difference / (1000 * 60 * 60 * 24);
  }, 1000);

}

tickTock() {
  this.date = new Date();
  this.now = this.date.getTime();
  this.days = Math.floor(this.difference);
  this.hours = 23 - this.date.getHours();
  this.minutes = 60 - this.date.getMinutes();
  this.seconds = 60 - this.date.getSeconds();
}
}
