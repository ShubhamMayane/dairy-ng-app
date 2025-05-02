import { Component } from '@angular/core';
import { CommonHeaderComponent } from '../../../shared/components/common-header/common-header.component';
import { PricingPackagesComponent } from "./components/pricing-packages/pricing-packages.component";
import { ClientStoriesComponent } from "../../../shared/components/client-stories/client-stories.component";

@Component({
  selector: 'app-pages-pricing',
  imports: [CommonHeaderComponent, PricingPackagesComponent, ClientStoriesComponent],
  templateUrl: './pages-pricing.component.html',
  styleUrl: './pages-pricing.component.css'
})
export class PagesPricingComponent {
  headerData:any = {
    title: 'Pricing and Plans',
    subTitle: 'Special Offers'
  };
}
