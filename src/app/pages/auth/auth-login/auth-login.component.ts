import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackToHomeComponent } from '../../../components/back-to-home/back-to-home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  standalone: true,
  imports: [CommonModule, BackToHomeComponent,RouterLink],
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent {
  date:any;
  ngOnInit(): void {
    this.date = new Date().getFullYear();
  }
}
