// @ts-nocheck
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-tab',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.scss']
})
export class UserTabComponent {

  constructor(private router : Router) {}
  current:string = ''
  ngOnInit() {
    this.current = this.router.url;
    }
    image:string = ''
    loadFile(event:any){
      this.image = document.getElementById(event.target.name);
      this.image.src = URL.createObjectURL(event.target.files[0]);
      this.image = this.image.src
    }
}
