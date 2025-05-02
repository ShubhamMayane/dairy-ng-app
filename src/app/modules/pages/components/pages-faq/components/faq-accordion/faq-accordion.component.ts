import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-accordion',
  imports: [CommonModule],
  templateUrl: './faq-accordion.component.html',
  styleUrl: './faq-accordion.component.css'
})
export class FaqAccordionComponent {
 // Tracks the open state of each accordion section
 activeIndex: number | null = 0;

 toggleSection(index: number): void {
   this.activeIndex = this.activeIndex === index ? null : index;
 }
}
