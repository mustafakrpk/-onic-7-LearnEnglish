import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EklediklerimPage } from './eklediklerim.page';

const routes: Routes = [
  {
    path: '',
    component: EklediklerimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EklediklerimPageRoutingModule {}
