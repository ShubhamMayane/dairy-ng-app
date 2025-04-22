import { Component } from '@angular/core';

@Component({
  selector: 'app-header-contact-details',
  imports: [],
  templateUrl: './header-contact-details.component.html',
  styleUrl: './header-contact-details.component.css'
})
export class HeaderContactDetailsComponent {

  // variables for section 1

  workingTime:string="Mon - Thu 9:00 AM - 7:00 PM";
  facebookLink:string="https://www.facebook.com/";
  instagramLink:string="https://www.instagram.com/?hl=en";
  twitterLink:string="https://en.wikipedia.org/wiki/Twitter,_Inc.";
  linkedInLink:string="https://in.linkedin.com/";
    
  
  //varibale for section 2
    emailId:string="supportmoolydairy.com";
    phoneNumber:string="+ (100) 234-5678";
    farmAddress:string="99 Broklyn New Street, USA";




}
