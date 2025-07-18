import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home-all-products',
  imports: [CommonModule, FormsModule, RatingModule],
  templateUrl: './home-all-products.component.html',
  styleUrl: './home-all-products.component.css',
})
export class HomeAllProductsComponent {
  max = 5;
  rate = 2.5;
  isReadonly = true;

  constructor(private router: Router) {}

  goToProductsPage() {
    this.router.navigate(['pages/product']);
  }
}
