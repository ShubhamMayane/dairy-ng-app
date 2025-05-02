import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-our-shop',
  imports: [CommonModule,FormsModule,RatingModule],
  templateUrl: './product-our-shop.component.html',
  styleUrl: './product-our-shop.component.css'
})
export class ProductOurShopComponent {

  //following variables are for the rating component
  max = 5;
  rate = 2.5;
  isReadonly = true;


}
