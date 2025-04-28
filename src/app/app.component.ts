import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderContactDetailsComponent } from './modules/shared/components/header-contact-details/header-contact-details.component';
import { NavbarComponent } from "./modules/shared/components/navbar/navbar.component";
import { FooterComponent } from "./modules/shared/components/footer/footer.component";
import { BannerComponent } from './modules/shared/components/banner/banner.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderContactDetailsComponent, NavbarComponent, FooterComponent,BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dairy-ng-app';
}
