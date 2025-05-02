import { Component } from '@angular/core';
import { CommonHeaderComponent } from "../../../shared/components/common-header/common-header.component";
import { CommonModule } from '@angular/common';
import { FaqAccordionComponent } from "./components/faq-accordion/faq-accordion.component";
import { FaqClientStoriesComponent } from "./components/faq-client-stories/faq-client-stories.component";
@Component({
  selector: 'app-pages-faq',
  imports: [CommonModule, CommonHeaderComponent, FaqAccordionComponent, FaqClientStoriesComponent],
  templateUrl: './pages-faq.component.html',
  styleUrl: './pages-faq.component.css'
})
export class PagesFaqComponent {
  headerData:any = {
    title: 'Know Better',
    subTitle: 'Questions / Answers'
  };
 
}
