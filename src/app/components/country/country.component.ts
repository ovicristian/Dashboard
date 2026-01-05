import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
    isOpen:boolean = false;

    onModalClick(){
      this.isOpen=!this.isOpen;
    }
}
