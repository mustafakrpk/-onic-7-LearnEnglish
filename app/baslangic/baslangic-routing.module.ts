import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaslangicPage } from './baslangic.page';

const routes: Routes = [
  {
    path: '',
    component: BaslangicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaslangicPageRoutingModule {}
