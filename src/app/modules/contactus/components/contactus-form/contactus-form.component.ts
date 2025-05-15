import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactusService } from '../../../../services/contactus.service';
import { log } from 'console';


@Component({
  selector: 'app-contactus-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contactus-form.component.html',
  styleUrl: './contactus-form.component.css'
})
export class ContactusFormComponent {
  form: FormGroup;
  result:any;

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
      console.log('Form Submitted:', this.form.value);

      console.log(this.form.value.firstName);

      //because in the bakcend application in model there is we use Hungarian notation
      //creating one js object send to api
      let objToApi={

        FirstName:this.form.value.firstName,
        LastName:this.form.value.lastName,
        Email:this.form.value.email,
        Subject:this.form.value.subject,
        Comment:this.form.value.comments,
       };


      //calling a function is service to call the api of type post.
       
      
    
      //method 1 to call the function defined in the service which internally call the api

        this.cObj.submitEnquiryData(objToApi).subscribe(res => {
        this.result = res;
        console.log(this.result);
        alert("Thanks "+ this.result.firstName+" for contacting us we will get back to you soon");
        

      });

      //method 2:if you want to implement a error handling then you can use following syntax

    //   this.cObj.submitEnquiryData(objToApi).subscribe({
    //   next: (res) => {
    //     this.result = res;
       
    //   },
    //   error: (err) => {
    //     console.error(err);
     
    //   }
    // });




       this.form.reset(); //this is a logic to clear all entered data in the form 
    } else {
      this.form.markAllAsTouched();
      
    }
  }
}
