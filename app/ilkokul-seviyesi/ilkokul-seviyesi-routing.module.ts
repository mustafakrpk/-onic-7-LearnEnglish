import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlkokulSeviyesiPage } from './ilkokul-seviyesi.page';

const routes: Routes = [
  {
    path: '',
    component: IlkokulSeviyesiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlkokulSeviyesiPageRoutingModule {}
