import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaslangicPageRoutingModule } from './baslangic-routing.module';

import { BaslangicPage } from './baslangic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaslangicPageRoutingModule
  ],
  declarations: [BaslangicPage]
})
export class BaslangicPageModule {}
