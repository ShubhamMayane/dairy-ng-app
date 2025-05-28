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
  facebookLink:string="https://www.facebook.com/DKDairyfarmpune/";
  instagramLink:string="https://www.instagram.com/dkdairyfarmpune/";
  twitterLink:string="https://x.com/DairyDk/";
  linkedInLink:string="https://in.linkedin.com/in/dkdairyfarmpune";
    


    emailId:string="sagardike92@gmail.com";
    phoneNumber:string="+91 8793760700 ";
    farmAddress:string="At Post Ambegaon Khed Manchar,Bhimashankar Karkhana Road, Manchar-01,Pune 411051";


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
