import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HikayelerPage } from './hikayeler.page';

const routes: Routes = [
  {
    path: '',
    component: HikayelerPage
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HikayelerPageRoutingModule {}
