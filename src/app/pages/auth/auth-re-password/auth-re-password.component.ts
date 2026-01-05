import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackToHomeComponent } from '../../../components/back-to-home/back-to-home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-re-password',
  standalone: true,
  imports: [CommonModule, BackToHomeComponent,RouterLink],
  templateUrl: './auth-re-password.component.html',
  styleUrls: ['./auth-re-password.component.scss']
})
export class AuthRePasswordComponent {
  date:any;
  ngOnInit(): void {
    this.date = new Date().getFullYear();
  }
}
