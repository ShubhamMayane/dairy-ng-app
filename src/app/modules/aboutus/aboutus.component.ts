import { Component } from '@angular/core';
import { AboutusHeaderComponent } from './components/aboutus-header/aboutus-header.component';
import { AboutusOurSponsorshipComponent } from "./components/aboutus-our-sponsorship/aboutus-our-sponsorship.component";
import { AboutusWhyChooseUsComponent } from "./components/aboutus-why-choose-us/aboutus-why-choose-us.component";
import { PhotoGallaryComponent } from "../shared/components/photo-gallery/photo-gallery.component";
import { CommonHeaderComponent } from "../shared/components/common-header/common-header.component";

import { HostListener, AfterViewInit } from '@angular/core';

import{Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  imports: [AboutusHeaderComponent, AboutusOurSponsorshipComponent, AboutusWhyChooseUsComponent, PhotoGallaryComponent, CommonHeaderComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

  headerData:any = {
    title: 'History of Our Farm',
    subTitle: 'About Us'
  };
  isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }


    ngAfterViewInit(): void 
    {

      // console.log("ngAfterViewInit() form blog is called.");
      
      if (this.isBrowser) 
      {
              this.checkAndRemoveAosAttributes(); // Initial check in case user reloads scrolled
      }
    }


      private checkAndRemoveAosAttributes(): void {
    
    
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    console.log(scrollTop);
    
    if (scrollTop > 200) {
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
        (el as HTMLElement).style.transition = 'none';
      });
    }
  }



}
