import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IleriPage } from './ileri.page';

const routes: Routes = [
  {
    path: '',
    component: IleriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IleriPageRoutingModule {}
