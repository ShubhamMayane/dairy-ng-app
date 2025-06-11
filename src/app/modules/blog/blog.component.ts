import { Component } from '@angular/core';
import { CommonHeaderComponent } from '../shared/components/common-header/common-header.component';
import { BlogMainContentComponent } from "./components/blog-main-content/blog-main-content.component";
import { BlogRecentPostsComponent } from "./components/blog-recent-posts/blog-recent-posts.component";
import { HostListener, AfterViewInit } from '@angular/core';

import{Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [CommonHeaderComponent, BlogMainContentComponent, BlogRecentPostsComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements AfterViewInit {
  headerData:any = {
    title: 'Our Blog',
    subTitle: 'Importance of A2 Milk'
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
    if (scrollTop > 300) {
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
