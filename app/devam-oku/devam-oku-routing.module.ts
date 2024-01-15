import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevamOkuPage } from './devam-oku.page';

const routes: Routes = [
  {
    path: '',
    component: DevamOkuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevamOkuPageRoutingModule {}
