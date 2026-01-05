import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkSidebarComponent } from '../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../components/top-header/top-header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ui-components',
  standalone: true,
  imports: [CommonModule,DarkSidebarComponent,TopHeaderComponent,FooterComponent,RouterLink],
  templateUrl: './ui-components.component.html',
  styleUrls: ['./ui-components.component.scss']
})
export class UiComponentsComponent {
  activeSidebar:boolean = true
  toggleClass(){
    this.activeSidebar=!this.activeSidebar;
  }
  buttons = [
    {
      title:'Default Buttons',
      style:[
        {
          name:'Indigo',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md',
        },
        {
          name:'Emerald',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md',
        },
        {
          name:'Red',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md',
        },
        {
          name:'Yellow',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 text-white rounded-md',
        },
        {
          name:'Blue',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md',
        },
        {
          name:'Sky',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-sky-500 hover:bg-sky-600 border-sky-500 hover:border-sky-600 text-white rounded-md',
        },
        {
          name:'Cyan',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-cyan-500 hover:bg-cyan-600 border-cyan-500 hover:border-cyan-600 text-white rounded-md',
        },
        {
          name:'Orange',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md',
        },
        {
          name:'Purple',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-purple-600 hover:bg-purple-700 border-purple-600 hover:border-purple-700 text-white rounded-md',
        },
        {
          name:'Dark',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-800 hover:bg-gray-950 border-gray-800 hover:border-gray-950 text-white rounded-md',
        },
        {
          name:'Secondary',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-500 hover:bg-gray-600 border-gray-500 hover:border-gray-600 text-white rounded-md',
        },
        {
          name:'Light',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-50 hover:bg-gray-100 border-gray-50 hover:border-gray-100 text-slate-900 rounded-md',
        },
      ]
    },
    {
      title:'Rounded Buttons',
      style:[
        {
          name:'Indigo',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full',
        },
        {
          name:'Emerald',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-full',
        },
        {
          name:'Red',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-full',
        },
        {
          name:'Yellow',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 text-white rounded-full',
        },
        {
          name:'Blue',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-full',
        },
        {
          name:'Sky',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-sky-500 hover:bg-sky-600 border-sky-500 hover:border-sky-600 text-white rounded-full',
        },
        {
          name:'Cyan',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-cyan-500 hover:bg-cyan-600 border-cyan-500 hover:border-cyan-600 text-white rounded-full',
        },
        {
          name:'Orange',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-full',
        },
        {
          name:'Purple',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-purple-600 hover:bg-purple-700 border-purple-600 hover:border-purple-700 text-white rounded-full',
        },
        {
          name:'Dark',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-800 hover:bg-gray-950 border-gray-800 hover:border-gray-950 text-white rounded-full',
        },
        {
          name:'Secondary',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-500 hover:bg-gray-600 border-gray-500 hover:border-gray-600 text-white rounded-full',
        },
        {
          name:'Light',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-50 hover:bg-gray-100 border-gray-50 hover:border-gray-100 text-slate-900 rounded-full',
        },
      ]
    },
    {
      title:'Outline Buttons',
      style:[
        {
          name:'Indigo',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white rounded-md',
        },
        {
          name:'Emerald',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-emerald-600 border-emerald-600 text-emerald-600 hover:text-white rounded-md',
        },
        {
          name:'Red',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-red-600 border-red-600 text-red-600 hover:text-white rounded-md',
        },
        {
          name:'Yellow',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-yellow-500 border-yellow-500 text-yellow-500 hover:text-white rounded-md',
        },
        {
          name:'Blue',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-blue-600 border-blue-600 text-blue-600 hover:text-white rounded-md',
        },
        {
          name:'Sky',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-sky-500 border-sky-500 text-sky-500 hover:text-white rounded-md',
        },
        {
          name:'Cyan',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-cyan-500 border-cyan-500 text-cyan-500 hover:text-white rounded-md',
        },
        {
          name:'Orange',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-orange-600 border-orange-600 text-orange-600 hover:text-white rounded-md',
        },
        {
          name:'Purple',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-purple-600 border-purple-600 text-purple-600 hover:text-white rounded-md',
        },
        {
          name:'Dark',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-gray-800 border-gray-800 text-gray-800 dark:text-white hover:text-white rounded-md',
        },
        {
          name:'Secondary',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-gray-500 border-gray-500 text-gray-500 hover:text-white rounded-md',
        },
        {
          name:'Light',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-gray-100 border-gray-100 hover:border-gray-100 text-slate-900 dark:text-white dark:hover:text-slate-900 rounded-md',
        },
      ]
    },
    {
      title:'Outline Rounded Buttons',
      style:[
        {
          name:'Indigo',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white rounded-full',
        },
        {
          name:'Emerald',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-emerald-600 border-emerald-600 text-emerald-600 hover:text-white rounded-full',
        },
        {
          name:'Red',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-red-600 border-red-600 text-red-600 hover:text-white rounded-full',
        },
        {
          name:'Yellow',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-yellow-500 border-yellow-500 text-yellow-500 hover:text-white rounded-full',
        },
        {
          name:'Blue',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-blue-600 border-blue-600 text-blue-600 hover:text-white rounded-full',
        },
        {
          name:'Sky',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-sky-500 border-sky-500 text-sky-500 hover:text-white rounded-full',
        },
        {
          name:'Cyan',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-cyan-500 border-cyan-500 text-cyan-500 hover:text-white rounded-full',
        },
        {
          name:'Orange',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-orange-600 border-orange-600 text-orange-600 hover:text-white rounded-full',
        },
        {
          name:'Purple',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-purple-600 border-purple-600 text-purple-600 hover:text-white rounded-full',
        },
        {
          name:'Dark',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-gray-800 border-gray-800 text-gray-800 dark:text-white hover:text-white rounded-full',
        },
        {
          name:'Secondary',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-gray-500 border-gray-500 text-gray-500 hover:text-white rounded-full',
        },
        {
          name:'Light',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-gray-100 border-gray-100 hover:border-gray-100 text-slate-900 dark:text-white dark:hover:text-slate-900 rounded-full',
        },
      ]
    },
    {
      title:'Soft Buttons',
      style:[
        {
          name:'Indigo',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md',
        },
        {
          name:'Emerald',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md',
        },
        {
          name:'Red',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white rounded-md',
        },
        {
          name:'Yellow',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-yellow-500/5 hover:bg-yellow-500 border-yellow-500/10 hover:border-yellow-500 text-yellow-500 hover:text-white rounded-md',
        },
        {
          name:'Blue',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-blue-600/5 hover:bg-blue-600 border-blue-600/10 hover:border-blue-600 text-blue-600 hover:text-white rounded-md',
        },
        {
          name:'Sky',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-sky-500/5 hover:bg-sky-500 border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white rounded-md',
        },
        {
          name:'Cyan',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-cyan-500/5 hover:bg-cyan-500 border-cyan-500/10 hover:border-cyan-500 text-cyan-500 hover:text-white rounded-md',
        },
        {
          name:'Orange',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-orange-600/5 hover:bg-orange-600 border-orange-600/10 hover:border-orange-600 text-orange-600 hover:text-white rounded-md',
        },
        {
          name:'Purple',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-purple-600/5 hover:bg-purple-600 border-purple-600/10 hover:border-purple-600 text-purple-600 hover:text-white rounded-md',
        },
        {
          name:'Dark',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-800/5 hover:bg-gray-800 border-gray-800/10 hover:border-gray-800 text-gray-800 dark:text-white hover:text-white rounded-md',
        },
        {
          name:'Secondary',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-500/5 hover:bg-gray-500 border-gray-500/10 hover:border-gray-500 text-gray-500 hover:text-white rounded-md',
        },
        {
          name:'Light',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-50/5 hover:bg-gray-100 border-gray-50 dark:border-gray-100/5 hover:border-gray-100 text-slate-900 dark:text-white dark:hover:text-slate-900 rounded-md',
        },
      ]
    },
    {
      title:'Soft Rounded Buttons',
      style:[
        {
          name:'Indigo',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-full',
        },
        {
          name:'Emerald',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-full',
        },
        {
          name:'Red',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white rounded-full',
        },
        {
          name:'Yellow',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-yellow-500/5 hover:bg-yellow-500 border-yellow-500/10 hover:border-yellow-500 text-yellow-500 hover:text-white rounded-full',
        },
        {
          name:'Blue',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-blue-600/5 hover:bg-blue-600 border-blue-600/10 hover:border-blue-600 text-blue-600 hover:text-white rounded-full',
        },
        {
          name:'Sky',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-sky-500/5 hover:bg-sky-500 border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white rounded-full',
        },
        {
          name:'Cyan',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-cyan-500/5 hover:bg-cyan-500 border-cyan-500/10 hover:border-cyan-500 text-cyan-500 hover:text-white rounded-full',
        },
        {
          name:'Orange',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-orange-600/5 hover:bg-orange-600 border-orange-600/10 hover:border-orange-600 text-orange-600 hover:text-white rounded-full',
        },
        {
          name:'Purple',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-purple-600/5 hover:bg-purple-600 border-purple-600/10 hover:border-purple-600 text-purple-600 hover:text-white rounded-full',
        },
        {
          name:'Dark',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-800/5 hover:bg-gray-800 border-gray-800/10 hover:border-gray-800 text-gray-800 dark:text-white hover:text-white rounded-full',
        },
        {
          name:'Secondary',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-500/5 hover:bg-gray-500 border-gray-500/10 hover:border-gray-500 text-gray-500 hover:text-white rounded-full',
        },
        {
          name:'Light',
          class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-50/5 hover:bg-gray-100 border-gray-50 dark:border-gray-100/5 hover:border-gray-100 text-slate-900 dark:text-white dark:hover:text-slate-900 rounded-full',
        },
      ]
    },
  ]

  btnSize = [
    {
      name:'Small',
      class:'py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md'
    },
    {
      name:'Default',
      class:'py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md'
    },
    {
      name:'Large',
      class:'py-2.5 px-8 inline-block font-semibold tracking-wide border align-middle duration-500 text-lg text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md'
    },
  ]

  btnIcon = [
    {
      icon:'shopping-cart',
      style:'size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white'
    },
    {
      icon:'shopping-cart',
      style:'size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white'
    },
    {
      icon:'shopping-cart',
      style:'size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white'
    },
    {
      icon:'shopping-cart',
      style:'size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white'
    },
    {
      icon:'shopping-cart',
      style:'size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white'
    },
    {
      icon:'shopping-cart',
      style:'size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white'
    },
    {
      icon:'shopping-cart',
      style:'size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><i data-feather="shopping-cart'
    },
    {
      icon:'shopping-cart',
      style:'size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white'
    },
  ]

  badges = [
    {
      title:'Default Badges',
      style:[
        {
          name:'Indigo',
          class:'bg-indigo-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Emerald',
          class:'bg-emerald-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Red',
          class:'bg-red-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Yellow',
          class:'bg-yellow-500 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Blue',
          class:'bg-blue-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Sky',
          class:'bg-sky-500 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Cyan',
          class:'bg-cyan-500 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Orange',
          class:'bg-orange-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Purple',
          class:'bg-purple-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Dark',
          class:'bg-gray-800 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Secondary',
          class:'bg-gray-500 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Light',
          class:'bg-gray-50 text-slate-900 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        
      ]
    },
    {
      title:'Rounded Badges',
      style:[
        {
          name:'Indigo',
          class:'bg-indigo-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Emerald',
          class:'bg-emerald-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Red',
          class:'bg-red-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Yellow',
          class:'bg-yellow-500 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Blue',
          class:'bg-blue-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Sky',
          class:'bg-sky-500 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Cyan',
          class:'bg-cyan-500 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Orange',
          class:'bg-orange-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Purple',
          class:'bg-purple-600 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Dark',
          class:'bg-gray-800 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Secondary',
          class:'bg-gray-500 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Light',
          class:'bg-gray-50 text-slate-900 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        
      ]
    },
    {
      title:'Outline Badges',
      style:[
        {
          name:'Indigo',
          class:'bg-transparent border border-indigo-600 text-indigo-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Emerald',
          class:'bg-transparent border border-emerald-600 text-emerald-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Red',
          class:'bg-transparent border border-red-600 text-red-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Yellow',
          class:'bg-transparent border border-yellow-500 text-yellow-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Blue',
          class:'bg-transparent border border-blue-500 text-blue-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Sky',
          class:'bg-transparent border border-sky-500 text-sky-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Cyan',
          class:'bg-transparent border border-cyan-500 text-cyan-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Orange',
          class:'bg-transparent border border-orange-600 text-orange-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Purple',
          class:'bg-transparent border border-purple-600 text-purple-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Dark',
          class:'bg-transparent border border-gray-800 text-gray-800 dark:text-gray-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Secondary',
          class:'bg-transparent border border-gray-500 text-gray-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Light',
          class:'bg-transparent border border-gray-50 text-gray-50 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        
      ]
    },
    {
      title:'Outline Rounded Badges',
      style:[
        {
          name:'Indigo',
          class:'bg-transparent border border-indigo-600 text-indigo-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Emerald',
          class:'bg-transparent border border-emerald-600 text-emerald-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Red',
          class:'bg-transparent border border-red-600 text-red-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Yellow',
          class:'bg-transparent border border-yellow-500 text-yellow-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Blue',
          class:'bg-transparent border border-blue-500 text-blue-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Sky',
          class:'bg-transparent border border-sky-500 text-sky-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Cyan',
          class:'bg-transparent border border-cyan-500 text-cyan-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Orange',
          class:'bg-transparent border border-orange-600 text-orange-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Purple',
          class:'bg-transparent border border-purple-600 text-purple-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Dark',
          class:'bg-transparent border border-gray-800 text-gray-800 dark:text-gray-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Secondary',
          class:'bg-transparent border border-gray-500 text-gray-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Light',
          class:'bg-transparent border border-gray-50 text-gray-50 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        
      ]
    },
    {
      title:'Soft Badges',
      style:[
        {
          name:'Indigo',
          class:'bg-indigo-600/5 border border-indigo-600/5 text-indigo-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Emerald',
          class:'bg-emerald-600/5 border border-emerald-600/5 text-emerald-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Red',
          class:'bg-red-600/5 border border-red-600/5 text-red-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Yellow',
          class:'bg-yellow-500/5 border border-yellow-500/5 text-yellow-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Blue',
          class:'bg-blue-600/5 border border-blue-600/5 text-blue-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Sky',
          class:'bg-sky-500/5 border border-sky-500/5 text-sky-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Cyan',
          class:'bg-cyan-500/5 border border-cyan-500/5 text-cyan-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Orange',
          class:'bg-orange-600/5 border border-orange-600/5 text-orange-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Purple',
          class:'bg-purple-600/5 border border-purple-600/5 text-purple-600 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Dark',
          class:'bg-gray-800/5 border border-gray-800/5 text-gray-800 dark:text-gray-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Secondary',
          class:'bg-gray-500/5 border border-gray-500/5 text-gray-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        {
          name:'Light',
          class:'bg-gray-50/5 border border-gray-50/5 text-gray-900 dark:text-gray-500 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5'
        },
        
      ]
    },
    {
      title:'Soft Rounded Badges',
      style:[
        {
          name:'Indigo',
          class:'bg-indigo-600/5 border border-indigo-600/5 text-indigo-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Emerald',
          class:'bg-emerald-600/5 border border-emerald-600/5 text-emerald-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Red',
          class:'bg-red-600/5 border border-red-600/5 text-red-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Yellow',
          class:'bg-yellow-500/5 border border-yellow-500/5 text-yellow-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Blue',
          class:'bg-blue-600/5 border border-blue-600/5 text-blue-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Sky',
          class:'bg-sky-500/5 border border-sky-500/5 text-sky-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Cyan',
          class:'bg-cyan-500/5 border border-cyan-500/5 text-cyan-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Orange',
          class:'bg-orange-600/5 border border-orange-600/5 text-orange-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Purple',
          class:'bg-purple-600/5 border border-purple-600/5 text-purple-600 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Dark',
          class:'bg-gray-800/5 border border-gray-800/5 text-gray-800 dark:text-gray-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Secondary',
          class:'bg-gray-500/5 border border-gray-500/5 text-gray-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        {
          name:'Light',
          class:'bg-gray-50/5 border border-gray-50/5 text-gray-900 dark:text-gray-500 text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5'
        },
        
      ]
    },
    
  ]

  alerts = [
    {
      name:'A simple alert—check it out!',
      style:'relative px-4 py-2 rounded-md font-medium bg-indigo-600 border border-indigo-600 text-white block'
    },
    {
      name:'A simple alert—check it out!',
      style:'relative px-4 py-2 rounded-md font-medium bg-emerald-600 border border-emerald-600 text-white block'
    },
    {
      name:'A simple alert—check it out!',
      style:'relative px-4 py-2 rounded-md font-medium bg-yellow-500 border border-yellow-500 text-white block'
    },
    {
      name:'A simple alert—check it out!',
      style:'relative px-4 py-2 rounded-md font-medium bg-red-600 border border-red-600 text-white block'
    },
    {
      name:'A simple alert—check it out!',
      style:'relative px-4 py-2 rounded-md font-medium bg-sky-500 border border-sky-500 text-white block'
    },
    {
      name:'A simple alert—check it out!',
      style:'relative px-4 py-2 rounded-md font-medium bg-slate-900 border border-slate-900 text-white block'
    },
    {
      name:'A simple alert—check it out!',
      style:'relative px-4 py-2 rounded-md font-medium bg-gray-400 border border-gray-400 text-white block'
    },
  ]
  softAlerts = [
    {
      name:'A simple alert—check it out!',
      style:'relative px-4 py-2 rounded-md font-medium bg-indigo-600/10 border border-indigo-600/10 text-indigo-600 block'
    },
    {
      name:'A simple alert—check it out!',
      style:'relative px-4 py-2 rounded-md font-medium bg-emerald-600/10 border border-emerald-600/10 text-emerald-600 block'
    },
    {
      name:'A simple alert—check it out!',
      style:'relative px-4 py-2 rounded-md font-medium bg-yellow-500/10 border border-yellow-500/10 text-yellow-500 block'
    },
    {
      name:'A simple alert—check it out!',
      style:'relative px-4 py-2 rounded-md font-medium bg-red-600/10 border border-red-600/10 text-red-600 block'
    },
    {
      name:'A simple alert—check it out!',
      style:'relative px-4 py-2 rounded-md font-medium bg-sky-500/10 border border-sky-500/10 text-sky-500 block'
    },
    {
      name:'A simple alert—check it out!',
      style:'relative px-4 py-2 rounded-md font-medium bg-slate-900/10 border border-slate-900/10 text-slate-900 dark:text-white block'
    },
    {
      name:'A simple alert—check it out!',
      style:'relative px-4 py-2 rounded-md font-medium bg-gray-400/10 border border-gray-400/10 text-gray-400 block'
    },
  ]
  iconAlerts = [
    {
      name:'A simple alert—check it out!',
      style:'relative px-4 py-2 rounded-md font-medium bg-indigo-600/10 border border-indigo-600/10 text-indigo-600 block',
      icon:'uil uil-exclamation-circle me-1'
    },
    {
      name:'A simple alert—check it out!',
      style:'relative px-4 py-2 rounded-md font-medium bg-emerald-600/10 border border-emerald-600/10 text-emerald-600 block',
      icon:'uil uil-check-circle  me-1'
    },
    {
      name:'A simple alert—check it out!',
      style:'relative px-4 py-2 rounded-md font-medium bg-yellow-500/10 border border-yellow-500/10 text-yellow-500 block',
      icon:'uil uil-exclamation-triangle me-1'
    },
    {
      name:'A simple alert—check it out!',
      style:'relative px-4 py-2 rounded-md font-medium bg-red-600/10 border border-red-600/10 text-red-600 block',
      icon:'uil uil-exclamation-octagon me-1'
    },
    {
      name:'A simple alert—check it out!',
      style:'relative px-4 py-2 rounded-md font-medium bg-sky-500/10 border border-sky-500/10 text-sky-500 block',
      icon:'uil uil-info-circle me-1'
    },
  ]
  
  isDropdown:boolean = false;
  onDropdownClick(){
    this.isDropdown = !this.isDropdown;
  }
  isDropdown2:boolean = false;
  onDropdownClick2(){
    this.isDropdown2 = !this.isDropdown2;
  }
  isDropdown3:boolean = false;
  onDropdownClick3(){
    this.isDropdown3 = !this.isDropdown3;
  }
  isDropdown4:boolean = false;
  onDropdownClick4(){
    this.isDropdown4 = !this.isDropdown4;
  }
  isDropdown5:boolean = false;
  onDropdownClick5(){
    this.isDropdown5 = !this.isDropdown5;
  }
  isDropdown6:boolean = false;
  onDropdownClick6(){
    this.isDropdown6 = !this.isDropdown6;
  }
  isDropdown7:boolean = false;
  onDropdownClick7(){
    this.isDropdown7 = !this.isDropdown7;
  }
  isDropdown8:boolean = false;
  onDropdownClick8(){
    this.isDropdown8 = !this.isDropdown8;
  }
  isDropdown9:boolean = false;
  onDropdownClick9(){
    this.isDropdown9 = !this.isDropdown9;
  }
  isDropdown10:boolean = false;
  onDropdownClick10(){
    this.isDropdown10 = !this.isDropdown10;
  }
  isDropdown11:boolean = false;
  onDropdownClick11(){
    this.isDropdown11 = !this.isDropdown11;
  }
  isDropdown12:boolean = false;
  onDropdownClick12(){
    this.isDropdown12 = !this.isDropdown12;
  }
  isDropdown13:boolean = false;
  onDropdownClick13(){
    this.isDropdown13 = !this.isDropdown13;
  }
  isDropdown14:boolean = false;
  onDropdownClick14(){
    this.isDropdown14 = !this.isDropdown14;
  }
  isDropdown15:boolean = false;
  onDropdownClick15(){
    this.isDropdown15 = !this.isDropdown15;
  }
  isDropdown16:boolean = false;
  onDropdownClick16(){
    this.isDropdown16 = !this.isDropdown16;
  }
  isDropdown17:boolean = false;
  onDropdownClick17(){
    this.isDropdown17 = !this.isDropdown17;
  }
  isDropdown18:boolean = false;
  onDropdownClick18(){
    this.isDropdown18 = !this.isDropdown18;
  }
  isDropdown19:boolean = false;
  onDropdownClick19(){
    this.isDropdown19 = !this.isDropdown19;
  }
  isDropdown20:boolean = false;
  onDropdownClick20(){
    this.isDropdown20 = !this.isDropdown20;
  }

  textColor = [
    {
      name:'.text-indigo-600',
      style:'text-indigo-600'
    },
    {
      name:'.text-emerald-600',
      style:'text-emerald-600'
    },
    {
      name:'.text-red-600',
      style:'text-red-600'
    },
    {
      name:'.text-yellow-600',
      style:'text-yellow-600'
    },
    {
      name:'.text-amber-600',
      style:'text-amber-600'
    },
    {
      name:'.text-blue-600',
      style:'text-blue-600'
    },
    {
      name:'.text-sky-600',
      style:'text-sky-600'
    },
    {
      name:'.text-cyan-600',
      style:'text-cyan-600'
    },
    {
      name:'.text-orange-600',
      style:'text-orange-600'
    },
    {
      name:'.text-purple-600',
      style:'text-purple-600'
    },
    {
      name:'.text-slate-900',
      style:'text-slate-900'
    },
  ]

  bgColor = [
    {
      name:'.bg-indigo-600',
      style:'inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-indigo-600'
    },
    {
      name:'.bg-emerald-600',
      style:'inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-emerald-600'
    },
    {
      name:'.bg-red-600',
      style:'inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-red-600'
    },
    {
      name:'.bg-yellow-500',
      style:'inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-yellow-500'
    },
    {
      name:'.bg-blue-600',
      style:'inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-blue-600'
    },
    {
      name:'.bg-sky-500',
      style:'inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-sky-500'
    },
    {
      name:'.bg-cyan-500',
      style:'inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-cyan-500'
    },
    {
      name:'.bg-orange-600',
      style:'inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-orange-600'
    },
    {
      name:'.bg-purple-600',
      style:'inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-purple-600'
    },
    {
      name:'.bg-slate-800',
      style:'inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-slate-800'
    },
    {
      name:'.bg-slate-900',
      style:'inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-white bg-slate-900'
    },
    {
      name:'.bg-gray-50',
      style:'inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-slate-900 bg-gray-50'
    },
    {
      name:'.bg-white',
      style:'inline-block shadow dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5 text-slate-900 bg-white'
    },
  ]

  opacity = [
    {
      name:'.bg-indigo-600',
      style:'bg-indigo-600'
    },
    {
      name:'.bg-indigo-600 .opacity-95',
      style:'bg-indigo-600/95'
    },
    {
      name:'.bg-indigo-600 .opacity-90',
      style:'bg-indigo-600/90'
    },
    {
      name:'.bg-indigo-600 .opacity-85',
      style:'bg-indigo-600/85'
    },
    {
      name:'.bg-indigo-600 .opacity-80',
      style:'bg-indigo-600/80'
    },
    {
      name:'.bg-indigo-600 .opacity-75',
      style:'bg-indigo-600/75'
    },
    {
      name:'.bg-indigo-600 .opacity-70',
      style:'bg-indigo-600/70'
    },
    {
      name:'.bg-indigo-600 .opacity-65',
      style:'bg-indigo-600/65'
    },
    {
      name:'.bg-indigo-600 .opacity-60',
      style:'bg-indigo-600/60'
    },
    {
      name:'.bg-indigo-600 .opacity-55',
      style:'bg-indigo-600/55'
    },
    {
      name:'.bg-indigo-600 .opacity-50',
      style:'bg-indigo-600/50'
    },
    {
      name:'.bg-indigo-600 .opacity-45',
      style:'bg-indigo-600/45'
    },
    {
      name:'.bg-indigo-600 .opacity-40',
      style:'bg-indigo-600/40'
    },
    {
      name:'.bg-indigo-600 .opacity-35',
      style:'bg-indigo-600/35'
    },
    {
      name:'.bg-indigo-600 .opacity-30',
      style:'bg-indigo-600/30'
    },
    {
      name:'.bg-indigo-600 .opacity-25',
      style:'bg-indigo-600/25'
    },
    {
      name:'.bg-indigo-600 .opacity-20',
      style:'bg-indigo-600/20'
    },
    {
      name:'.bg-indigo-600 .opacity-15',
      style:'bg-indigo-600/15'
    },
    {
      name:'.bg-indigo-600 .opacity-10',
      style:'bg-indigo-600/10'
    },
    {
      name:'.bg-indigo-600 .opacity-5',
      style:'bg-indigo-600/5'
    },
    {
      name:'.bg-indigo-600 .opacity-0',
      style:'bg-indigo-600/0'
    },
  ]

  accordianData = [
    {
     id:1,
     title:'How does it work ?', 
     desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
      id:2,
      title:'Do I need a designer to use Techwind ?', 
      desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
     },
     {
      id:3,
      title:'What do I need to do to start selling ?', 
      desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
     },
     {
      id:4,
      title:'What happens when I receive an order ?', 
      desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
     },
  ]
  activeIndex:number=1;

  onAccordionClick(index:number){
    this.activeIndex = index 
  }

  activeTab:number = 1;
  onTabClick(index:number){
    this.activeTab = index ;
  }

  activeTab2:number = 1;
  onTabClick2(index:number){
    this.activeTab2 = index ;
  }

  shadow = [
    {
      name:'.shadow',
      style:'shadow'
    },
    {
      name:'.shadow-sm',
      style:'shadow-sm'
    },
    {
      name:'.shadow-md',
      style:'shadow-md'
    },
    {
      name:'.shadow-lg',
      style:'shadow-lg'
    },
    {
      name:'.shadow-xl',
      style:'shadow-xl'
    },
    {
      name:'.shadow-2xl',
      style:'shadow-2xl'
    },
    {
      name:'.shadow-none',
      style:'shadow-none'
    },
  ]

  borders = [
    {
      name:'.border-0',
      style:'border-0'
    },
    {
      name:'.border-2',
      style:'border-2'
    },
    {
      name:'.border-4',
      style:'border-4'
    },
    {
      name:'.border-8',
      style:'border-8'
    },
    {
      name:'.border',
      style:'border'
    },
    {
      name:'.border-t',
      style:'border-t'
    },
    {
      name:'.border-s',
      style:'border-s'
    },
    {
      name:'.border-b',
      style:'border-b'
    },
    {
      name:'.border-e',
      style:'border-e'
    },
    {
      name:'.border-x',
      style:'border-x'
    },
    {
      name:'.border-y',
      style:'border-y'
    },
  ]

  borderStyle = [
    {
      name:'.border-solid',
      style:'border-solid border-2'
    },
    {
      name:'.border-dashed',
      style:'border-dashed border-2'
    },
    {
      name:'.border-dotted',
      style:'border-dotted border-2'
    },
    {
      name:'.border-double',
      style:'border-double border-4'
    },
  ]

  borderRadious = [
    {
      name:'.rounded-none',
      style:'rounded-none'
    },
    {
      name:'.rounded-sm',
      style:'rounded-sm'
    },
    {
      name:'.rounded',
      style:'rounded'
    },
    {
      name:'.rounded-md',
      style:'rounded-md'
    },
    {
      name:'.rounded-lg',
      style:'rounded-lg'
    },
    {
      name:'.rounded-xl',
      style:'rounded-xl'
    },
    {
      name:'.rounded-2xl',
      style:'rounded-2xl'
    },
    {
      name:'.rounded-3xl',
      style:'rounded-3xl'
    },
    {
      name:'.rounded-full',
      style:'rounded-full'
    },
  ]
  isModalOpen:boolean = false;

  modalHandler(){
    this.isModalOpen = !this.isModalOpen;
  }

  heading = [
    {
      name:'(.text-xs)',
      style:'text-xs'
    },
    {
      name:'(.text-sm)',
      style:'text-sm'
    },
    {
      name:'(.text-base)',
      style:'text-base'
    },
    {
      name:'(.text-lg)',
      style:'text-lg'
    },
    {
      name:'(.text-xl)',
      style:'text-xl'
    },
    {
      name:'(.text-2xl)',
      style:'text-2xl'
    },
    {
      name:'(.text-3xl)',
      style:'text-3xl'
    },
    {
      name:'(.text-4xl)',
      style:'text-4xl'
    },
    {
      name:'(.text-5xl)',
      style:'text-5xl'
    },
    {
      name:'(.text-6xl)',
      style:'text-6xl'
    },
    {
      name:'(.text-7xl)',
      style:'text-7xl'
    },
    {
      name:'(.text-8xl)',
      style:'text-8xl'
    },
    {
      name:'(.text-9xl)',
      style:'text-9xl'
    },
  ]

  fontWeight = [
    {
      title1:'.font-thin',
      title2:': The quick brown fox jumps over the lazy dog.',
      style:'font-thin'
    },
    {
      title1:'.font-extralight',
      title2:': The quick brown fox jumps over the lazy dog.',
      style:'font-extralight'
    },
    {
      title1:'.font-light',
      title2:': The quick brown fox jumps over the lazy dog.',
      style:'font-light'
    },
    {
      title1:'.font-normal',
      title2:': The quick brown fox jumps over the lazy dog.',
      style:'font-normal'
    },
    {
      title1:'.font-medium',
      title2:': The quick brown fox jumps over the lazy dog.',
      style:'font-medium'
    },
    {
      title1:'.font-semibold',
      title2:': The quick brown fox jumps over the lazy dog.',
      style:'font-semibold'
    },
    {
      title1:'.font-bold',
      title2:': The quick brown fox jumps over the lazy dog.',
      style:'font-bold'
    },
    {
      title1:'.font-extrabold',
      title2:': The quick brown fox jumps over the lazy dog.',
      style:'font-extrabold'
    },
  ]
}
