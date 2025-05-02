import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import { CommonHeaderComponent } from '../../../shared/components/common-header/common-header.component';
import { ProductOurShopComponent } from './components/product-our-shop/product-our-shop.component';
import { ProductOurPromoComponent } from "./components/product-our-promo/product-our-promo.component";

@Component({
  selector: 'app-pages-product',
  imports: [CommonModule, FormsModule, RatingModule, CommonHeaderComponent, ProductOurShopComponent, ProductOurPromoComponent],
  templateUrl: './pages-product.component.html',
  styleUrl: './pages-product.component.css'
})
export class PagesProductComponent {

  headerData:any = {
    title: 'All Products',
    subTitle: 'Dairy Product'
  };
}
