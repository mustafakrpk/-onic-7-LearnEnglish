import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IleriPageRoutingModule } from './ileri-routing.module';

import { IleriPage } from './ileri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IleriPageRoutingModule
  ],
  declarations: [IleriPage]
})
export class IleriPageModule {}
