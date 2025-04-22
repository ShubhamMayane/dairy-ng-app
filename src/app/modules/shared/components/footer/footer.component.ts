import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  workingTime:string="Mon - Thu 9:00 AM - 7:00 PM";
  facebookLink:string="https://www.facebook.com/";
  instagramLink:string="https://www.instagram.com/?hl=en";
  twitterLink:string="https://en.wikipedia.org/wiki/Twitter,_Inc.";
  linkedInLink:string="https://in.linkedin.com/";



  subscribeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }


  get email() {
    return this.subscribeForm.get('email')!;
  }
    
  onSubmit() {
    if (this.subscribeForm.valid) {
      const email = this.email.value;
      console.log('Subscribed with email:', email);
      alert(`Subscribed successfully with: ${email}`);

      // logic to reset all form 
      this.subscribeForm.reset();
    } else 
    {
      this.subscribeForm.markAllAsTouched();
    }


}
}
