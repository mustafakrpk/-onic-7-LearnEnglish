import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevamOkuPageRoutingModule } from './devam-oku-routing.module';

import { DevamOkuPage } from './devam-oku.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevamOkuPageRoutingModule
  ],
  declarations: [DevamOkuPage]
})
export class DevamOkuPageModule {}
