import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HikayelerPageRoutingModule } from './hikayeler-routing.module';

import { HikayelerPage } from './hikayeler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HikayelerPageRoutingModule
  ],
  declarations: [HikayelerPage]
})
export class HikayelerPageModule {}
