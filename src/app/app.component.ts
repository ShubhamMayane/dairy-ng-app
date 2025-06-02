import { Component, Inject, PLATFORM_ID, HostListener, OnInit,AfterViewInit} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderContactDetailsComponent } from './modules/shared/components/header-contact-details/header-contact-details.component';
import { NavbarComponent } from "./modules/shared/components/navbar/navbar.component";
import { FooterComponent } from "./modules/shared/components/footer/footer.component";
import { BannerComponent } from './modules/shared/components/banner/banner.component';
import { MobileNavbarComponent } from "./modules/shared/components/mobile-navbar/mobile-navbar.component";

import { Router, NavigationEnd } from '@angular/router';



import * as AOS from 'aos';
import { WhatsappButtonAppComponent } from "./modules/shared/components/whatsapp-button-app/whatsapp-button-app.component";

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
    MobileNavbarComponent,
    WhatsappButtonAppComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'dairy-ng-app';
  isMobile: boolean = false;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private router: Router) {
    this.isBrowser = isPlatformBrowser(this.platformId);


    ///logic to scroll till top when we render another route in the applicaiton -start
    //  this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     window.scrollTo({ top: 0, behavior: 'auto' });
    //   }
    // });

     ///logic to scroll till top when we render another route in the applicaiton -end
  }

  ngOnInit() {

    if (this.isBrowser) {
      this.checkScreenSize();
    }

    if (isPlatformBrowser(this.platformId)) {
      AOS.init({

         once:true

        // duration: 1000,   // set aos-duration=1000 to all element jyanna aapan aos che animation lavala aahe
        // once: true           // yane kay hoil ki sarva elements he ekdach animate kele jatil
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