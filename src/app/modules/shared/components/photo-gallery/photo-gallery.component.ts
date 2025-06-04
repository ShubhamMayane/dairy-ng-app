import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-our-gallery',
  imports: [CommonModule],
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.css'
})
export class PhotoGallaryComponent 
{
    selectedIndex: number | null = null;
    images: string[] = 
              [
                'images/gallery-images/gallery-img-left-1.jpg',
                'images/gallery-images/gallery-img-left-2.jpg',
                'images/gallery-images/gallery-img-left-3.jpg',
                'images/gallery-images/gallery-img-right-1.jpg',
                'images/gallery-images/gallery-img-right-2.jpg',
                'images/gallery-images/gallery-img-right-3.jpg'
               
               ];

 //1.to open image viewer
            openViewer(index: number) 
            {
              console.log(index);
              
                this.selectedIndex = index;
            }


            //2.to close opened image viewer
            closeViewer() 
            {
                this.selectedIndex = null;
            }


            //3.to go to prev image
            prevImage() 
            {
                if (this.selectedIndex !== null) {
                this.selectedIndex = (this.selectedIndex - 1 + this.images.length) % this.images.length;
                }
            }

            //4.to go to next image
            nextImage() {
                if (this.selectedIndex !== null) {
                this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
                }
            }
}
