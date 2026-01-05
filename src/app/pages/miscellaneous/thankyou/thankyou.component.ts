import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackToHomeComponent } from '../../../components/back-to-home/back-to-home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  standalone: true,
  imports: [CommonModule, BackToHomeComponent,RouterLink],
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent {

}
