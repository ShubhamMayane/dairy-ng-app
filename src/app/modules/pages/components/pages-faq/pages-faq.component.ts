import { Component } from '@angular/core';
import { CommonHeaderComponent } from "../../../shared/components/common-header/common-header.component";
import { CommonModule } from '@angular/common';
import { FaqAccordionComponent } from "./components/faq-accordion/faq-accordion.component";
import { ClientStoriesComponent } from '../../../shared/components/client-stories/client-stories.component';
@Component({
  selector: 'app-pages-faq',
  imports: [CommonModule, CommonHeaderComponent, FaqAccordionComponent,ClientStoriesComponent],
  templateUrl: './pages-faq.component.html',
  styleUrl: './pages-faq.component.css'
})
export class PagesFaqComponent {
  headerData:any = {
    title: 'Know Better',
    subTitle: 'Questions / Answers'
  };
 
}
