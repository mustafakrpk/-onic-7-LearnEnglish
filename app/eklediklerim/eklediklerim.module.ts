import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EklediklerimPageRoutingModule } from './eklediklerim-routing.module';

import { EklediklerimPage } from './eklediklerim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EklediklerimPageRoutingModule
  ],
  declarations: [EklediklerimPage]
})
export class EklediklerimPageModule {}
