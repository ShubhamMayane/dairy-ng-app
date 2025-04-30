import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-header',
  imports: [],
  templateUrl: './common-header.component.html',
  styleUrl: './common-header.component.css'
})
export class CommonHeaderComponent {

  @Input() parentData: { title: string; subTitle: string;} | undefined;

}
