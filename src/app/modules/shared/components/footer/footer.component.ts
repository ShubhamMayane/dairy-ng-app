import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  workingTime:string="Mon - Thu 9:00 AM - 7:00 PM";
  facebookLink:string="https://www.facebook.com/";
  instagramLink:string="https://www.instagram.com/?hl=en";
  twitterLink:string="https://en.wikipedia.org/wiki/Twitter,_Inc.";
  linkedInLink:string="https://in.linkedin.com/";
    
}
