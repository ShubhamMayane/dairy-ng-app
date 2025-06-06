import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  constructor(public router: Router) {}
  
  // Helper method to check active route
  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }

}
