import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TranslatorService } from './services/translator.service';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

register();
@NgModule({
  declarations: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [

     FormsModule,
      ReactiveFormsModule,
       HttpClientModule,
        BrowserModule,
         IonicModule.forRoot(),
          AppRoutingModule,
           RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
      }
      
    ]),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    TranslatorService
  ],
  bootstrap: [AppComponent],

  
})

export class AppModule {}


