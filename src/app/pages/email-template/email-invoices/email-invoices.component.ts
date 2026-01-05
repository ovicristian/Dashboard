import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-email-invoices',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './email-invoices.component.html',
  styleUrls: ['./email-invoices.component.scss']
})
export class EmailInvoicesComponent {
  date:any = ''

  ngOnInit(): void {
   this.date=new Date().getFullYear()
  }
}
