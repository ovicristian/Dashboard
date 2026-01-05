import { AfterViewInit, Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import * as feather from 'feather-icons';
import { SwitcherComponent } from './components/switcher/switcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,SwitcherComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'techwind-admin';
  
  ngOnInit(): void {
    console.log('Dashboard App Initialized');
  }
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements
  OnInit, AfterViewInit {


  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    feather.replace();
  }

}
