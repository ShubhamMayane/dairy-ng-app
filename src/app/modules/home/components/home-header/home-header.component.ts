import { Component } from '@angular/core';

@Component({
  selector: 'app-home-header',
  imports: [],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css'
})
export class HomeHeaderComponent {


  openLink() {
   
    window.open('https://www.youtube.com', '_blank'); // Opens in a new tab
    // OR use: window.location.href = 'https://www.openai.com'; // Same tab
  }
}
