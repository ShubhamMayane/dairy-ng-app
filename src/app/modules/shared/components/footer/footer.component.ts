import { Component } from '@angular/core';
import {   ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
 import{AfterViewInit, ElementRef, ViewChild } from '@angular/core';



@Component({
  selector: 'app-footer',
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent  implements AfterViewInit  {
  workingTime:string="Mon - Thu 9:00 AM - 7:00 PM";
  facebookLink:string="https://www.facebook.com/DKDairyfarmpune/";
  instagramLink:string="https://www.instagram.com/dkdairyfarmpune/";
  twitterLink:string="https://x.com/DairyDk/";
  linkedInLink:string="https://in.linkedin.com/in/dkdairyfarmpune";
    


    emailId:string="sagardike92@gmail.com";
    phoneNumber:string="+91 8793760700 ";
    farmAddress:string="At Post Ambegaon Khed Manchar,Bhimashankar Karkhana Road, Manchar-01,Pune 411051";
    officeAddress:string="Opp gitanjalli bungalow biside PMC school In Lane prassndada jagtap office, Canal Rd, Hingane Khurd, Hingne Khurd, Pune, Maharashtra 411051";

  @ViewChild('shakeTarget') shakeTarget!: ElementRef;
  isVisible = false;



  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  //1
    ngAfterViewInit() 
    {

          if (isPlatformBrowser(this.platformId) && 'IntersectionObserver' in window) 
          {
                    const observer = new IntersectionObserver(
                      ([entry]) => {
                        if (entry.isIntersecting && !this.isVisible) {
                          this.isVisible = true; // Trigger animation
                        }
                      },
                      { threshold: 0.6 } // Trigger when 60% visible
                    );

                    observer.observe(this.shakeTarget.nativeElement);
          }
    }


//2 scrol to op
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll
    });
  }





    


}

