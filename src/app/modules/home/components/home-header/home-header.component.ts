import { Component, HostListener, OnInit,ElementRef, ViewChild, Renderer2, AfterViewInit} from '@angular/core';

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home-header',
  imports: [CommonModule,RouterModule],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css'
})
export class HomeHeaderComponent implements OnInit,AfterViewInit{
 @ViewChild('headerButton') headerButton!: ElementRef;


  isMobile = false;
  youtubeVideoLink:any="https://www.youtube.com/watch?v=H1JV9EUDC24";


  constructor(private renderer: Renderer2,@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.checkScreenSize(); // initial check
  }
 ngAfterViewInit(): void {
 this.checkScreenSize(); // initial check


 //logic to remove animation class once animation is done.
 this.renderer.listen(this.headerButton?.nativeElement, 'animationend', () => {
  this.renderer.removeClass(this.headerButton?.nativeElement, 'fade-up-on-load');
});

 }

   @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
 
  }



private checkScreenSize() {
  if (isPlatformBrowser(this.platformId)) {
    const width = window.innerWidth;

    if (width <= 600) {
      // ✅ Add AOS attributes for small screens

        if (this.headerButton?.nativeElement) //to avoid property can not read error. 
        {
             this.renderer.removeClass(this.headerButton?.nativeElement, 'fade-up-on-load');
            this.renderer.setAttribute(this.headerButton?.nativeElement, 'data-aos', 'fade-up');
            this.renderer.setAttribute(this.headerButton?.nativeElement, 'data-aos-duration', '1500');
           
        }
    } else {
      

        if (this.headerButton?.nativeElement) //to avoid property can not read error. 
          {

            // ✅ Remove AOS attributes and add class for on-load animation on large screens
            this.renderer.addClass(this.headerButton?.nativeElement, 'fade-up-on-load');
            this.renderer.removeAttribute(this.headerButton?.nativeElement, 'data-aos');
            this.renderer.removeAttribute(this.headerButton?.nativeElement, 'data-aos-duration');
            
        }
    }
  }
}



  
}
