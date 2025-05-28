import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header-contact-details',
  imports: [CommonModule,RouterModule],
  templateUrl: './header-contact-details.component.html',
  styleUrl: './header-contact-details.component.css'
})
export class HeaderContactDetailsComponent {

  // variables for section 1

  workingTime:string="Mon - Thu 9:00 AM - 7:00 PM";
  facebookLink:string="https://www.facebook.com/DKDairyfarmpune/";
  instagramLink:string="https://www.instagram.com/dkdairyfarmpune/";
  twitterLink:string="https://x.com/DairyDk/";
  linkedInLink:string="https://in.linkedin.com/in/dkdairyfarmpune";
    
  
  //varibale for section 2
    emailId:string="sagardike92@gmail.com";
    phoneNumber:string="+91 8793760700 ";
    farmAddress:string="At Post Ambegaon Khed Manchar,Bhimashankar Karkhana Road, Manchar-01,Pune 411051";


    // farmAddress:string="At Post Ambegaon Khed Manchar,Bhimashankar Karkhana Road, Manchar-01,Pune 411051";




}
