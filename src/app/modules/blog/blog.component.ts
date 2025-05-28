import { Component } from '@angular/core';
import { CommonHeaderComponent } from '../shared/components/common-header/common-header.component';
import { BlogMainContentComponent } from "./components/blog-main-content/blog-main-content.component";
import { BlogRecentPostsComponent } from "./components/blog-recent-posts/blog-recent-posts.component";

@Component({
  selector: 'app-blog',
  imports: [CommonHeaderComponent, BlogMainContentComponent, BlogRecentPostsComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  headerData:any = {
    title: 'Our Blog',
    subTitle: 'Importance of A2 Milk'
  };
}
