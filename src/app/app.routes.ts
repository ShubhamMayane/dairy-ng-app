import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'about-us',
        loadChildren: () => import('./modules/aboutus/aboutus.module').then(m => m.AboutusModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('./modules/contactus/contactus.module').then(m => m.ContactusModule)
    },
    {
      path: 'pages',
      loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule)
    },
    {
      path: 'blog',
      loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
    }

];
