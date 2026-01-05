import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as feather from 'feather-icons';
@Component({
  selector: 'app-back-to-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './back-to-home.component.html',
  styleUrls: ['./back-to-home.component.scss']
})
export class BackToHomeComponent {
ngAfterViewInit(): void {
  feather.replace();
}
}
