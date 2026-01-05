import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackToHomeComponent } from '../../../components/back-to-home/back-to-home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  standalone: true,
  imports: [CommonModule, BackToHomeComponent,RouterLink],
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent {
  date:any;
  ngOnInit(): void {
    this.date = new Date().getFullYear();
  }
}
