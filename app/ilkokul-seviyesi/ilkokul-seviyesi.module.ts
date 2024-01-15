import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlkokulSeviyesiPageRoutingModule } from './ilkokul-seviyesi-routing.module';

import { IlkokulSeviyesiPage } from './ilkokul-seviyesi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlkokulSeviyesiPageRoutingModule
  ],
  declarations: [IlkokulSeviyesiPage]
})
export class IlkokulSeviyesiPageModule {}
