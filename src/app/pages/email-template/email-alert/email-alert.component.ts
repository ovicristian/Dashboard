import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-email-alert',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './email-alert.component.html',
  styleUrls: ['./email-alert.component.scss']
})
export class EmailAlertComponent {
  date:any = ''

  ngOnInit(): void {
   this.date=new Date().getFullYear()
  }
}
