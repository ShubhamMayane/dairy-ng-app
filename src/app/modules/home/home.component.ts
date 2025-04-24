import { Component } from '@angular/core';
import { HomeHeaderComponent } from "./components/home-header/home-header.component";
import { HomeAboutusComponent } from "./components/home-aboutus/home-aboutus.component";
import { HomeServicesComponent } from "./components/home-services/home-services.component";
import { HomeAllProductsComponent } from './components/home-all-products/home-all-products.component';
import { HomeOurAdvantagesComponent } from "./components/home-our-advantages/home-our-advantages.component";

@Component({
  selector: 'app-home',
  imports: [HomeHeaderComponent, HomeAboutusComponent, HomeServicesComponent, HomeAllProductsComponent, HomeOurAdvantagesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
