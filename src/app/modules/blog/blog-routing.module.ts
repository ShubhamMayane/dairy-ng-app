import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';

const routes: Routes = [ {
    path: '',
    component:BlogComponent,//  <---ithe main component chya class che nav lihayache
    children: [
    {
      path: 'post',
      component: BlogPostComponent,
    },
  ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
