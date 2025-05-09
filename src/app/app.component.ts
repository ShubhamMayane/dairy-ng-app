import { Component, Inject, PLATFORM_ID, HostListener, OnInit,AfterViewInit} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderContactDetailsComponent } from './modules/shared/components/header-contact-details/header-contact-details.component';
import { NavbarComponent } from "./modules/shared/components/navbar/navbar.component";
import { FooterComponent } from "./modules/shared/components/footer/footer.component";
import { BannerComponent } from './modules/shared/components/banner/banner.component';
import { MobileNavbarComponent } from "./modules/shared/components/mobile-navbar/mobile-navbar.component";

import { Injectable } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderContactDetailsComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    MobileNavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'dairy-ng-app';
  isMobile: boolean = false;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {

    if (this.isBrowser) {
      this.checkScreenSize();
    }

    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        // duration: 1000,   // set aos-duration=1000 to all element jyanna aapan aos che animation lavala aahe
        once: true           // yane kay hoil ki sarva elements he ekdach animate kele jatil
      });

  }
  }



//event handler function which gets called when you resize the browser size
  @HostListener('window:resize', [])
  onResize() {
    if (this.isBrowser) {
      this.checkScreenSize();
    }
  }

  checkScreenSize() {
    if (this.isBrowser) {
      this.isMobile = window.innerWidth <=1024;
      console.log('isMobile:', this.isMobile);
    }
    else{

      this.isMobile=false;
    }
  }

 
}