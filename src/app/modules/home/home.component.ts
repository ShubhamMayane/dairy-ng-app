import { Component } from '@angular/core';
import { HomeHeaderComponent } from "./components/home-header/home-header.component";
import { HomeAboutusComponent } from "./components/home-aboutus/home-aboutus.component";
import { HomeServicesComponent } from "./components/home-services/home-services.component";
import { HomeAllProductsComponent } from './components/home-all-products/home-all-products.component';
import { HomeOurAdvantagesComponent } from "./components/home-our-advantages/home-our-advantages.component";
import { HomeOurProgramsComponent } from "./components/home-our-programs/home-our-programs.component";
import { HomeOurGallaryComponent } from "./components/home-our-gallery/home-our-gallery.component";
import { HomeTestimonialsComponent } from "./components/home-testimonials/home-testimonials.component";
import { HomeBlogAndNewsComponent } from "./components/home-blog-and-news/home-blog-and-news.component";


@Component({
  selector: 'app-home',
  imports: [HomeHeaderComponent, HomeAboutusComponent, HomeServicesComponent, HomeAllProductsComponent, HomeOurAdvantagesComponent, HomeOurProgramsComponent, HomeOurGallaryComponent, HomeTestimonialsComponent, HomeBlogAndNewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
