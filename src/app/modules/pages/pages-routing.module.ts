import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PagesFaqComponent } from './components/pages-faq/pages-faq.component';
import { PagesPricingComponent } from './components/pages-pricing/pages-pricing.component';
import { PagesProductComponent } from './components/pages-product/pages-product.component';
import { PagesTeamComponent } from './components/pages-team/pages-team.component';

const routes: Routes = [
  {
    path: '',
    component:PagesComponent,//  <---ithe main component chya class che nav lihayache
    children: [
    {
      path: 'faq',
      component: PagesFaqComponent,
    },
    {
      path: 'pricing',
      component: PagesPricingComponent,
    },
    {
      path: 'product',
      component: PagesProductComponent,
    },
    {
      path: 'team',
      component: PagesTeamComponent,
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }


