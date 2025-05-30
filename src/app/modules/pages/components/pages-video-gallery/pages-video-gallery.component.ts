import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VideoSectionComponent } from "./components/video-section/video-section.component";
import { CommonHeaderComponent } from "../../../shared/components/common-header/common-header.component";



@Component({
  selector: 'app-pages-video-gallery',
  imports: [CommonModule, VideoSectionComponent, CommonHeaderComponent],
  templateUrl: './pages-video-gallery.component.html',
  styleUrl: './pages-video-gallery.component.css'
})
export class PagesVideoGalleryComponent {

  headerData:any = {
    title: 'Inside DK Dairy Farm',
    subTitle: 'Watch the Purity in Action'
  };
}
