import { Component, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import {
  AfterViewInit,

  ElementRef,
  Inject,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  HostListener
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-product-our-shop',
  imports: [CommonModule,FormsModule,RatingModule],
  templateUrl: './product-our-shop.component.html',
  styleUrl: './product-our-shop.component.css'
})
export class ProductOurShopComponent implements AfterViewInit{

  //following variables are for the rating component
  max = 5;
  rate = 2.5;
  isReadonly = true;


       @ViewChildren('aosDiv', { read: ElementRef }) aosDivs!: QueryList<ElementRef>;
      isBrowser: boolean;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object) 
  {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }


    ngAfterViewInit(): void {
        if (this.isBrowser) {
          this.setAosAttributes(window.innerWidth);
        }
      }

      @HostListener('window:resize', ['$event'])
      onResize(event: Event): void {
        if (this.isBrowser) {
          const width = (event.target as Window).innerWidth;
          this.setAosAttributes(width);
        }
      }

      private setAosAttributes(width: number): void {

          /*
          logic to when browser width is <=600px then jya element la aosDiv ha template reference apply kelay tya element
          la data-aos-anchor-placement="top-bottom" ha attribute apply kar else if browser width is >600 then apply following attirbute
          data-aos-anchor-placement="center-bottom"  that's it.
         */
        const value = width <= 600 ? 'top-bottom' : 'center-bottom';
        this.aosDivs.forEach(div => {
          this.renderer.setAttribute(div.nativeElement, 'data-aos-anchor-placement', value);
        });
      }

}
