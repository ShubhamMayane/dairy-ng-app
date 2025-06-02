import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';





@Component({
  selector: 'app-video-section',
  imports: [CommonModule],
  templateUrl: './video-section.component.html',
  styleUrl: './video-section.component.css'
})
export class VideoSectionComponent {
  videos: string[] = [
            '/videos/video-1.mp4',
            '/videos/video-2.mp4',
            '/videos/video-1.mp4',
            '/videos/video-2.mp4'
            
        ];

  selectedIndex: number | null = null;

 //1
        openViewer(index: number) 
        {

          console.log(index);
          
          this.selectedIndex = index;
        }

    //2
        closeViewer() 
        {
              this.selectedIndex = null;
        }


    //3

        prevVideo() 
        {
          if (this.selectedIndex !== null) 
          {
            this.selectedIndex = (this.selectedIndex - 1 + this.videos.length) % this.videos.length;
          }
        }
    //4
        nextVideo() {
          if (this.selectedIndex !== null) 
          {
            this.selectedIndex = (this.selectedIndex + 1) % this.videos.length;
          }
        }

}
