import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, OnInit, OnDestroy, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {AfterViewInit,ViewChild} from '@angular/core';
@Component({
  selector: 'app-home-testimonials',
  imports: [RatingModule,CommonModule,FormsModule,RouterModule],
  templateUrl: './home-testimonials.component.html',
  styleUrl: './home-testimonials.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeTestimonialsComponent  implements OnInit {
  max = 5;
  rate = 5;
  isReadonly = true;


  @ViewChild('swiperRef', { static: false }) swiperElement!: ElementRef;


  constructor(private renderer: Renderer2, private el: ElementRef, @Inject(PLATFORM_ID) private platformId: any) {}
  
  
  ngOnInit(): void {
    // Check if we are in the browser environment before accessing window
    if (isPlatformBrowser(this.platformId)) {
      this.updateAttributes(window.innerWidth);  // Set attributes initially based on the current width
    }
  }

  //logic to stop a swiper auto play when we hover the swiper element -start

 ngAfterViewInit() {
    const swiperContainer = this.swiperElement.nativeElement;

    if (!swiperContainer.swiper) {
      swiperContainer.addEventListener('swiperinit', () => {
        this.setupHoverEvents(swiperContainer);
      });
    } else {
      this.setupHoverEvents(swiperContainer);
    }
  }


  setupHoverEvents(container: any) {
    const swiper = container.swiper;

    container.addEventListener('mouseenter', () => {
      console.log("mouseenter fired");
      swiper?.autoplay?.stop();
    });

    container.addEventListener('mouseleave', () => {
      console.log("mouseleave fired");
      swiper?.autoplay?.start();
    });
  }
  //logic to stop a swiper auto play when we hover the swiper element -end


//to handle browser size reduce or increase event 

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateAttributes(event.target.innerWidth);
  }

              // slides-per-view="5"
              // slides-per-group="5"

  // Method to apply or remove attributes based on window size
  private updateAttributes(width: number): void {
    const companySlider = this.el.nativeElement.querySelector('.myCompaniesSwiper');
    const feedbackSlider=this.el.nativeElement.querySelector('.mySwiper');
    
    if (width >= 1024) {
      this.renderer.setAttribute(companySlider, 'slides-per-view', '5');  //to show 5 slides per view
      this.renderer.setAttribute(companySlider, 'slides-per-group', '5');
      this.renderer.setAttribute(feedbackSlider, 'navigation','true');   //to show prev and next button

    } else {
      this.renderer.setAttribute(companySlider, 'slides-per-view', '2');
      this.renderer.setAttribute(companySlider, 'slides-per-group', '2');
      this.renderer.setAttribute(feedbackSlider, 'navigation','false');//to hide prev and show button
    
    }
  }



 
}