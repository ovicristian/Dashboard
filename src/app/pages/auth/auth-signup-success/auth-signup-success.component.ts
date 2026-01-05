import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackToHomeComponent } from '../../../components/back-to-home/back-to-home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-signup-success',
  standalone: true,
  imports: [CommonModule,BackToHomeComponent,RouterLink],
  templateUrl: './auth-signup-success.component.html',
  styleUrls: ['./auth-signup-success.component.scss']
})
export class AuthSignupSuccessComponent {
  date:any;
  ngOnInit(): void {
    this.date = new Date().getFullYear();
  }
}
