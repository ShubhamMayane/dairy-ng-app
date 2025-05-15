import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {


  private baseUrl = 'http://localhost:5203/api/Enquiry'; // mock API
   constructor(private http: HttpClient) {}

 

  submitEnquiryData(enquiryObj:any): Observable<any> 
  {

      console.log("function in service called");
      
        return this.http.post(this.baseUrl, enquiryObj);
  }

   fetchEnquiries(): Observable<any> 
     {
         return this.http.get(this.baseUrl);
     }
  

}
