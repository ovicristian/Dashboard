// @ts-nocheck
import { CommonModule } from '@angular/common';
import { Component,HostListener} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-switcher',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent {
 ngAfterViewInit() {
  
 }
htmlTag:any = document.getElementsByTagName("html")[0] 
@HostListener('window:scroll')
onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
        this.windowScrolled = true;
        document.getElementById('back-to-top').classList.add('block');
        document.getElementById('back-to-top').classList.remove('hidden');
    } 
   else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
        this.windowScrolled = false;
        document.getElementById('back-to-top').classList.add('hidden');
        document.getElementById('back-to-top').classList.remove('block');
    }
}
scrollToTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        window.scrollTo(0, 0);
    }
}
 changeTheme(){
        if (this.htmlTag.className.includes("dark")) {
              this.htmlTag.className = 'light'
        } else {
              this.htmlTag.className = 'dark'
        }
 }

 changeLayout(layout:string, event:any){
  event.preventDefault();
    if(layout === "LTR"){
        this.htmlTag.dir = "ltr"
    }
    else{
        this.htmlTag.dir = "rtl"
    }
 }

}