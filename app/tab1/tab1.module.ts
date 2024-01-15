import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { RouterModule, Routes } from '@angular/router';

import { Tab1PageRoutingModule } from './tab1-routing.module';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    RouterModule.forChild(routes),
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
