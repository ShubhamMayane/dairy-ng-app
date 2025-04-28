import { Component } from '@angular/core';
import { AboutusHeaderComponent } from './components/aboutus-header/aboutus-header.component';
import { AboutusOurSponsorshipComponent } from "./components/aboutus-our-sponsorship/aboutus-our-sponsorship.component";
import { AboutusWhyChooseUsComponent } from "./components/aboutus-why-choose-us/aboutus-why-choose-us.component";
import { PhotoGallaryComponent } from "../shared/components/photo-gallery/photo-gallery.component";

@Component({
  selector: 'app-aboutus',
  imports: [AboutusHeaderComponent, AboutusOurSponsorshipComponent, AboutusWhyChooseUsComponent, PhotoGallaryComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

}
