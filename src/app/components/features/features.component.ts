import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, CountUpModule,RouterLink],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

}
