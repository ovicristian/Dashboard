import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-email-password-reset',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './email-password-reset.component.html',
  styleUrls: ['./email-password-reset.component.scss']
})
export class EmailPasswordResetComponent {
  date:any = ''

  ngOnInit(): void {
   this.date=new Date().getFullYear()
  }
}
