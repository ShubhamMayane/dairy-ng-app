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
export class AppComponent implements OnInit,AfterViewInit {
  title = 'dairy-ng-app';
  isMobile: boolean = false;
  isBrowser: boolean;
private shouldDisableAOS = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private router: Router) 
  {
    this.isBrowser = isPlatformBrowser(this.platformId);

  }

  ngOnInit() {

    if (this.isBrowser) 
    {
      this.checkScreenSize();

      //code to check browser scroll
      this.shouldDisableAOS = window.scrollY > 100;
    }
  }



  ngAfterViewInit() 
  {


    //  if (this.shouldDisableAOS) 
    //     {
    //         // Ensure AOS styles don’t leave elements stuck
    //         // this.forceShowAosElements();
    //     }


     if (isPlatformBrowser(this.platformId)) 
    {
      AOS.init({
        
        // disable: () => this.shouldDisableAOS,  // logic for  if scroll is >10 rhen disable all aos animation
          once:true
        // duration: 1000,   // set aos-duration=1000 to all element jyanna aapan aos che animation lavala aahe
        // once: true           // yane kay hoil ki sarva elements he ekdach animate kele jatil
      });


       

    }
  }



  // private forceShowAosElements(): void {

  //   console.log("forceShowAosElements() is");
    
  //   const elements = document.querySelectorAll('[data-aos]');
  //   elements.forEach(el => {
  //     (el as HTMLElement).style.opacity = '1';
  //     (el as HTMLElement).style.transform = 'none'
     

      
  //   });
  //}


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