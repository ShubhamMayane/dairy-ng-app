import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus.component';

const routes: Routes = [
  {
    path: '',
    component:ContactusComponent,        //  <---ithe main component chya class che nav lihayache
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactusRoutingModule { }
