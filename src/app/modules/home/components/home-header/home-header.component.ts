import { Component, HostListener, OnInit,ElementRef, ViewChild, Renderer2, AfterViewInit} from '@angular/core';

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

declare const bootstrap: any;
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
 
 
  this.checkScreenSize(); // initial check the size or the width of a screen 



 //logic to remove animation class once animation is done.
 this.renderer.listen(this.headerButton?.nativeElement, 'animationend', () => {
  this.renderer.removeClass(this.headerButton?.nativeElement, 'fade-up-on-load');
});



  //logic to start the slide of caraousal when load the component

   if (isPlatformBrowser(this.platformId)) {
    
          const myCarouselEl = document.querySelector('#carouselExample');
        if (myCarouselEl) {

          console.log("sliding is going to start");
          
          const carousel = new bootstrap.Carousel(myCarouselEl, {
            interval: 3000, // Optional: Set your interval here
            ride: 'carousel', // Start auto-cycling
            pause: false     // Don't pause on hover
          });
          carousel.cycle(); // <-- Manually start sliding
        }

   }


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
