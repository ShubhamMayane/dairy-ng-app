import { Component } from '@angular/core';
import { CommonHeaderComponent } from "../shared/components/common-header/common-header.component";
import { ContactusFormComponent } from "./components/contactus-form/contactus-form.component";
import { ContactusMapComponent } from "./components/contactus-map/contactus-map.component";

@Component({
  selector: 'app-contactus',
  imports: [CommonHeaderComponent, ContactusFormComponent, ContactusMapComponent],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  headerData:any = {
    title: 'Get In Touch',
    subTitle: 'Contact Us'
  };

}
