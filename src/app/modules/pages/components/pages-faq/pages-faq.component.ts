import { Component } from '@angular/core';
import { CommonHeaderComponent } from "../../../shared/components/common-header/common-header.component";

@Component({
  selector: 'app-pages-faq',
  imports: [CommonHeaderComponent],
  templateUrl: './pages-faq.component.html',
  styleUrl: './pages-faq.component.css'
})
export class PagesFaqComponent {
  headerData:any = {
    title: 'Know Better',
    subTitle: 'Questions / Answers'
  };

}
