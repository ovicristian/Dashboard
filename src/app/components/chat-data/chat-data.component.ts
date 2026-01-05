import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chat-data',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './chat-data.component.html',
  styleUrls: ['./chat-data.component.scss']
})
export class ChatDataComponent {
  isOpen:boolean = false

  onModalClick(){
    this.isOpen=!this.isOpen;
  }
}
