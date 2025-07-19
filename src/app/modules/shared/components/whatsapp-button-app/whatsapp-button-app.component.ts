import { Component,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-whatsapp-button-app',
  imports: [CommonModule],
  templateUrl: './whatsapp-button-app.component.html',
  styleUrl: './whatsapp-button-app.component.css'
})
export class WhatsappButtonAppComponent {
 phoneNumber = '918793760700'; // Use international format, e.g., '15551234567'
  message = 'Hello, I would like to get in touch!';

  showFadeIn = false;
  showFadeOut = false;

    isVisible = false; // track current visibility

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Fade-in (entering view)
    if (scrollTop > 400 && !this.isVisible) {
      this.showFadeIn = true;
      this.showFadeOut = false;
      this.isVisible = true;
    }

    // Fade-out (leaving view)
    else if (scrollTop <= 400 && this.isVisible) {
      this.showFadeOut = true;
      this.showFadeIn = false;
      this.isVisible = false;
    }
  }
    openWhatsApp() {
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
    window.open(url, '_blank');
  }
}
