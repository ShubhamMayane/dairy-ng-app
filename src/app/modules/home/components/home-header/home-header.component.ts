import { Component, HostListener, OnInit,ElementRef, ViewChild, Renderer2, AfterViewInit} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
@Component({
  selector: 'app-home-header',
  imports: [],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css'
})
export class HomeHeaderComponent implements OnInit,AfterViewInit{
 @ViewChild('headerButton') headerButton!: ElementRef;


 isMobile = false;


  constructor(private renderer: Renderer2,@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.checkScreenSize(); // initial check
  }
 ngAfterViewInit(): void {
 this.checkScreenSize(); 

 }

   @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }



private checkScreenSize() {
  if (isPlatformBrowser(this.platformId)) {
    const width = window.innerWidth;

    if (width <= 1024) {
      // ✅ Add AOS attributes for small screens
      this.renderer.setAttribute(this.headerButton.nativeElement, 'data-aos', 'fade-up');
      this.renderer.setAttribute(this.headerButton.nativeElement, 'data-aos-duration', '1500');
      this.renderer.removeClass(this.headerButton.nativeElement, 'fade-up-on-load');
    } else {
      // ✅ Remove AOS attributes and add class for on-load animation on large screens
      this.renderer.removeAttribute(this.headerButton.nativeElement, 'data-aos');
      this.renderer.removeAttribute(this.headerButton.nativeElement, 'data-aos-duration');
      this.renderer.addClass(this.headerButton.nativeElement, 'fade-up-on-load');
    }
  }
}

  openLink() {
   
    window.open('https://www.youtube.com', '_blank'); // Opens in a new tab
    // OR use: window.location.href = 'https://www.openai.com'; // Same tab
  }


  
}
