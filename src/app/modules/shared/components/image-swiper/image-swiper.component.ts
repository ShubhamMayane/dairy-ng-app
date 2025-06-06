import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, OnInit, OnDestroy, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-swiper',
  imports: [RatingModule,CommonModule,FormsModule],
  templateUrl: './image-swiper.component.html',
  styleUrl: './image-swiper.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA ]
})
export class ImageSwiperComponent  implements OnInit
{

  selectedIndex: number | null = null;

              images: string[] = 
              [
                'images/image-slider-images/image-1.jpg',
                'images/image-slider-images/image-2.jpg',
                'images/image-slider-images/image-3.jpg',
                'images/image-slider-images/image-1.jpg',
                'images/image-slider-images/image-2.jpg',
                'images/image-slider-images/image-3.jpg',
               ];



  constructor(private renderer: Renderer2, private el: ElementRef, @Inject(PLATFORM_ID) private platformId: any) { }
  ngOnInit(): void {
    // Check if we are in the browser environment before accessing window
    if (isPlatformBrowser(this.platformId)) {
      this.updateAttributes(window.innerWidth);  // Set attributes initially based on the current width
    }
  }




  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateAttributes(event.target.innerWidth);
  }

              // slides-per-view="5"
              // slides-per-group="5"

  // Method to apply or remove attributes based on window size
  private updateAttributes(width: number): void {
    const element = this.el.nativeElement.querySelector('.myCompaniesSwiper');
    if (width >= 1024) {
      this.renderer.setAttribute(element, 'slides-per-view', '3');
      this.renderer.setAttribute(element, 'slides-per-group', '1');
    } else if(width>600) {
      this.renderer.setAttribute(element, 'slides-per-view', '2');
      this.renderer.setAttribute(element, 'slides-per-group', '1');
    }else if(width<600) {
      this.renderer.setAttribute(element, 'slides-per-view', '1');
      this.renderer.setAttribute(element, 'slides-per-group', '1');
    }
  }


   //1.to open image viewer
            openViewer(index: number) 
            {
              console.log(index);
              
                this.selectedIndex = index;
            }


            //2.to close opened image viewer
            closeViewer() 
            {
                this.selectedIndex = null;
            }


            //3.to go to prev image
            prevImage() 
            {
                if (this.selectedIndex !== null) {
                this.selectedIndex = (this.selectedIndex - 1 + this.images.length) % this.images.length;
                }
            }

            //4.to go to next image
            nextImage() {
                if (this.selectedIndex !== null) {
                this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
                }
            }


}
