import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackToHomeComponent } from '../../../components/back-to-home/back-to-home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule, BackToHomeComponent,RouterLink],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
date:any;
ngOnInit(): void {
  this.date = new Date().getFullYear();
}
}
