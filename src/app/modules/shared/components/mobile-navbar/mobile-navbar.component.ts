import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


declare var bootstrap: any; // Needed if using Bootstrap 5 and no types
@Component({
  selector: 'app-mobile-navbar',
  imports: [CommonModule,RouterModule],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.css'
})
export class MobileNavbarComponent {

  isNavbarOpen = false;

  closeNavbar() {
    // alert("clicked");
    const navbar = document.getElementById('navbarSupportedContent');
    if (navbar?.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbar) || new bootstrap.Collapse(navbar, { toggle: false });
      bsCollapse.hide();
      this.isNavbarOpen = !this.isNavbarOpen;
    }
  }



  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
