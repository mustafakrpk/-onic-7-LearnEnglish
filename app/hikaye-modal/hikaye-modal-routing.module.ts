import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HikayeModalPage } from './hikaye-modal.page';

const routes: Routes = [
  {
    path: '',
    component: HikayeModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HikayeModalPageRoutingModule {}
