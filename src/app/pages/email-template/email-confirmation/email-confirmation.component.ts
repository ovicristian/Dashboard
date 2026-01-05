import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-email-confirmation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.scss']
})
export class EmailConfirmationComponent {
 date:any = ''

 ngOnInit(): void {
  this.date=new Date().getFullYear()
 }
}
