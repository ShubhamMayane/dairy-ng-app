import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, OnInit, OnDestroy, HostListener, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-client-stories',
  imports: [RatingModule,CommonModule,FormsModule],
  templateUrl: './client-stories.component.html',
  styleUrl: './client-stories.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA ]
})
export class ClientStoriesComponent implements OnInit, OnDestroy {
  //  variables for rating compoenent 
    max = 5;
    rate = 5;
    isReadonly = true;
     @ViewChild('mySwiper') swiperEl!: ElementRef;

  
    constructor(private renderer: Renderer2, private el: ElementRef, @Inject(PLATFORM_ID) private platformId: any) { }

    ngOnInit(): void {
      // Check if we are in the browser environment before accessing window
      if (isPlatformBrowser(this.platformId)) {
        this.updateAttributes(window.innerWidth);  // Set attributes initially based on the current width
      }
    }
  



     ngAfterViewInit() {
      //logic to stop sliding when i hover the swiper container
      const swiperContainer = this.swiperEl.nativeElement;

    swiperContainer.addEventListener('mouseenter', () => {
      // console.log("mouse enetered");
      
      swiperContainer.swiper.autoplay.stop();
    });

    swiperContainer.addEventListener('mouseleave', () => {
      swiperContainer.swiper.autoplay.start();
    });
  }
    
    ngOnDestroy(): void {
      // Clean up any dynamic changes (if needed)
     
    }
  
    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.updateAttributes(event.target.innerWidth);
    }
  
                // slides-per-view="5"
                // slides-per-group="5"
  
    // Method to apply or remove attributes based on window size
    private updateAttributes(width: number): void {
      const element = this.el.nativeElement.querySelector('.client-feedback-slider');
      if (width > 1024) {
        this.renderer.setAttribute(element, 'slides-per-view', '4');
        this.renderer.setAttribute(element, 'slides-per-group', '4');
      } else if  (width >= 600){
        this.renderer.setAttribute(element, 'slides-per-view', '2');
        this.renderer.setAttribute(element, 'slides-per-group', '2');
      }else{
  
        this.renderer.setAttribute(element, 'slides-per-view', '1');
        this.renderer.setAttribute(element, 'slides-per-group', '1');
      }
    }
  
  
  }  