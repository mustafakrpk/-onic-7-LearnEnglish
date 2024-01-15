import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HikayeModalPageRoutingModule } from './hikaye-modal-routing.module';

import { HikayeModalPage } from './hikaye-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HikayeModalPageRoutingModule
  ],
  declarations: [HikayeModalPage]
})
export class HikayeModalPageModule {}
