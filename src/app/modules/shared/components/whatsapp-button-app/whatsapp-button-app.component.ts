import { Component,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-whatsapp-button-app',
  imports: [CommonModule],
  templateUrl: './whatsapp-button-app.component.html',
  styleUrl: './whatsapp-button-app.component.css'
})
export class WhatsappButtonAppComponent {
 phoneNumber = '9637983156'; // Use international format, e.g., '15551234567'
  message = 'Hello, I would like to get in touch!';

  showFadeIn = false;
  showFadeOut = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 400 && !this.showFadeIn) {
      this.showFadeIn = true;
      this.showFadeOut = false;
    } else if (scrollTop <= 400 && !this.showFadeOut) {
      this.showFadeOut = true;
      this.showFadeIn = false;
    }
  }
    openWhatsApp() {
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
    window.open(url, '_blank');
  }
}
