import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-faq-accordion',
  imports: [CommonModule,RouterModule],
  templateUrl: './faq-accordion.component.html',
  styleUrl: './faq-accordion.component.css'
})
export class FaqAccordionComponent {
 // Tracks the open state of each accordion section
 activeIndex: number | null = 0;

 constructor(){

  this.toggleSection(1);
 }

 toggleSection(index: number): void {
   this.activeIndex = this.activeIndex === index ? null : index;
 }
}
