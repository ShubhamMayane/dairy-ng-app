import { Component } from '@angular/core';
import { HomeHeaderComponent } from "./components/home-header/home-header.component";
import { HomeAboutusComponent } from "./components/home-aboutus/home-aboutus.component";
import { HomeServicesComponent } from "./components/home-services/home-services.component";
import { HomeAllProductsComponent } from './components/home-all-products/home-all-products.component';
import { HomeOurAdvantagesComponent } from "./components/home-our-advantages/home-our-advantages.component";


import { HomeTestimonialsComponent } from "./components/home-testimonials/home-testimonials.component";
import { HomeBlogAndNewsComponent } from "./components/home-blog-and-news/home-blog-and-news.component";
import { PhotoGallaryComponent } from '../shared/components/photo-gallery/photo-gallery.component';
import { HomePureBenifitsComponent } from './components/home-pure-benifits/home-pure-benifits.component';


import { HostListener, AfterViewInit } from '@angular/core';
import{Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [HomeHeaderComponent, HomeAboutusComponent, HomeServicesComponent, HomeAllProductsComponent, HomeOurAdvantagesComponent, HomePureBenifitsComponent, HomeTestimonialsComponent, HomeBlogAndNewsComponent, PhotoGallaryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) 
  {
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
    if (scrollTop > 300) {
      const aosElements = document.querySelectorAll('[data-aos]');
      aosElements.forEach(el => {
        (el as HTMLElement).removeAttribute('data-aos');
        (el as HTMLElement).removeAttribute('data-aos-delay');
        (el as HTMLElement).removeAttribute('data-aos-duration');
        (el as HTMLElement).removeAttribute('data-aos-offset');
        (el as HTMLElement).removeAttribute('data-aos-easing');
        (el as HTMLElement).removeAttribute('data-aos-anchor');
        (el as HTMLElement).removeAttribute('data-aos-anchor-placement');

          // Optional: Reset styles applied by AOS
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
        (el as HTMLElement).style.transition = 'none';
      });
    }
  }



}
