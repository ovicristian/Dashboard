// @ts-nocheck

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';

import { CKEditorModule } from 'ng2-ckeditor';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-email',
  standalone: true,
  imports: [CommonModule, DarkSidebarComponent, TopHeaderComponent,FooterComponent,CKEditorModule,RouterLink],
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {

  editorConfig = {
    stylesSet: [
      {
        name: 'Custom Style',
        element: 'span',
        styles: {
          'color': 'red',
          'font-weight': 'bold'
        }
      }
    ]
  };

  activeSidebar:boolean = true

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }

  activeTab:number = 1;

  onTabClick(index:number){
    this.activeTab = index
  }

  inboxData = [
    {
      icon:'mdi mdi-star-outline text-[18px] text-slate-400 align-middle',
      name:'Calvin Carlo',
      subject:'Techwind Customization',
      time:'03:05PM'
    },
    {
      icon:'mdi mdi-star-outline text-[18px] text-slate-400 align-middle',
      name:'Madeleine Jackson',
      subject:'User-friendly value-added application 😊',
      time:'12:00PM'
    },
    {
      icon:'mdi mdi-star text-[18px] text-yellow-500 align-middle',
      name:'Sherrie Miller',
      subject:'Focused impactful open system 📷 😃',
      time:'8hours ago'
    },
    {
      icon:'mdi mdi-star-outline text-[18px] text-slate-400 align-middle',
      name:'John Belgrave',
      subject:'Profound systemic alliance 🎉 🎊',
      time:'20hours ago'
    },
    {
      icon:'mdi mdi-star-outline text-[18px] text-slate-400 align-middle',
      name:'Jimmy Bojorquez',
      subject:'Organized value-added model',
      time:'1st August 2023'
    },
    {
      icon:'mdi mdi-star-outline text-[18px] text-slate-400 align-middle',
      name:'Louise Stewart',
      subject:'Waterfall Model Update',
      time:'31st August 2023'
    },
    {
      icon:'mdi mdi-star-outline text-[18px] text-slate-400 align-middle',
      name:'Kelly Hair',
      subject:'Company Report',
      time:'20th June 2023'
    },
    {
      icon:'mdi mdi-star text-[18px] text-yellow-500 align-middle',
      name:'Ester Casella',
      subject:'Theme Update',
      time:'19th June 2023'
    },
    {
      icon:'mdi mdi-star text-[18px] text-yellow-500 align-middle',
      name:'Richard Benavides',
      subject:'Your product has been updated!',
      time:'5th May 2023'
    },
    {
      icon:'mdi mdi-star-outline text-[18px] text-slate-400 align-middle',
      name:'Calvin Hudson',
      subject:'ThemeForest Sale',
      time:'13th March 2023'
    },
  ]

  starred = [
    {
      icon:'mdi mdi-star text-[18px] text-yellow-500 align-middle',
      name:'Sherrie Miller',
      subject:'Focused impactful open system 📷 😃',
      time:'8hours ago'
    },
    {
      icon:'mdi mdi-star text-[18px] text-yellow-500 align-middle',
      name:'Ester Casella',
      subject:'Theme Update',
      time:'19th June 2023'
    },
    {
      icon:'mdi mdi-star text-[18px] text-yellow-500 align-middle',
      name:'Richard Benavides',
      subject:'Your product has been updated!',
      time:'5th May 2023'
    },
  ]

  isCompose:boolean =  false;

  onComposeClick(){
    this.isCompose= !this.isCompose;
  }

  isModal:boolean = false

  onModalClick(){
    this.isModal = !this.isModal;
  }

}
