import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackToHomeComponent } from '../../../components/back-to-home/back-to-home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-lock-screen',
  standalone: true,
  imports: [CommonModule, BackToHomeComponent,RouterLink],
  templateUrl: './auth-lock-screen.component.html',
  styleUrls: ['./auth-lock-screen.component.scss']
})
export class AuthLockScreenComponent {
  date:any;
  ngOnInit(): void {
    this.date = new Date().getFullYear();
  }
}
