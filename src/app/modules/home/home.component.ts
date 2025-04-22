import { Component } from '@angular/core';
import { HomeHeaderComponent } from "./components/home-header/home-header.component";
import { HomeAboutusComponent } from "./components/home-aboutus/home-aboutus.component";

@Component({
  selector: 'app-home',
  imports: [HomeHeaderComponent, HomeAboutusComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
