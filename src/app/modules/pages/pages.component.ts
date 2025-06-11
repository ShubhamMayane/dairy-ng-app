import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HostListener, AfterViewInit } from '@angular/core';

import{Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-pages',
  imports: [RouterOutlet],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent implements AfterViewInit {

    isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }


     ngAfterViewInit(): void 
    {

      console.log("ngAfterViewInit() form blog is called.");
      
      if (this.isBrowser) 
      {
              this.checkAndRemoveAosAttributes(); // Initial check in case user reloads scrolled
      }
    }


    
  private checkAndRemoveAosAttributes(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 100) {
      const aosElements = document.querySelectorAll('[data-aos]');
      aosElements.forEach(el => {
        el.removeAttribute('data-aos');
        el.removeAttribute('data-aos-delay');
        el.removeAttribute('data-aos-duration');
        el.removeAttribute('data-aos-offset');
        el.removeAttribute('data-aos-easing');
        el.removeAttribute('data-aos-anchor');
        el.removeAttribute('data-aos-anchor-placement');

        // Optional: Reset styles applied by AOS
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
      });
    }
  }
}
