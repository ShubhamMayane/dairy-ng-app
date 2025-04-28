import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'about-us',
        loadChildren: () => import('./modules/aboutus/aboutus.module').then(m => m.AboutusModule)
      }
];
