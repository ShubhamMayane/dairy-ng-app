import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactusService } from '../../../../services/contactus.service';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-contactus-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contactus-form.component.html',
  styleUrl: './contactus-form.component.css'
})
export class ContactusFormComponent {
  form: FormGroup;
  result:any;
  //varibale for section 2
    emailId:string="sagardike92@gmail.com";
    phoneNumber:string="+91 8793760700 ";
    officeAddress:string="Opp gitanjalli bungalow biside PMC school In Lane prassndada jagtap office, Canal Rd, Hingane Khurd, Hingne Khurd, Pune, Maharashtra 411051";
    farmAddress:string="At post Ambegaon Khed Manchar, Bhimashankar karkhana Road, Manchar-01, Pune, India, Maharashtra";
    isButtonDisabled=false;


  constructor(private fb: FormBuilder,private cObj:ContactusService) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      comments: ['', Validators.required]
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.valid) {

      //first lets disable the button till the response came from the emailjs to avoid multiple clicks

      this.isButtonDisabled=true;

      console.log('Form Submitted:', this.form.value);

      console.log(this.form.value.firstName);


      //creating one js object send to email js api
     const templateParams = {
            from_name: `${this.form.value.firstName} ${this.form.value.lastName}`,
            from_email: this.form.value.email,
            subject: this.form.value.subject,
            message: this.form.value.comments,
            };

            emailjs.send("service_aefi1of","template_bqocxpl", templateParams,"9t7czFOwyJdsrKnoa")
            .then(() => { 
              
              
                 alert("Thank you for your enquiry!We've received your message and will get back to you shortly.");
                 this.isButtonDisabled=false;
                 this.form.reset();
            }, (err) => {
                alert('Failed to send email. Please try again.');
                 this.isButtonDisabled=false;
                console.error(err);
            });
        } 
    
        else 
        {

          this.form.markAllAsTouched();
      
        }
  }
}
