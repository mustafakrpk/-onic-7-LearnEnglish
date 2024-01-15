import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'hikayeler',
    loadChildren: () => import('./hikayeler/hikayeler.module').then( m => m.HikayelerPageModule)
  },
  {
    path: 'baslangic',
    loadChildren: () => import('./baslangic/baslangic.module').then( m => m.BaslangicPageModule)
  },
  {
    path: 'orta',
    loadChildren: () => import('./orta/orta.module').then( m => m.OrtaPageModule)
  },
  {
    path: 'ileri',
    loadChildren: () => import('./ileri/ileri.module').then( m => m.IleriPageModule)
  },
 {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'eklediklerim',
    loadChildren: () => import('./eklediklerim/eklediklerim.module').then(m => m.EklediklerimPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
 // Diğer sayfa tanımları
 { path: 'baslangic', loadChildren: () => import('./baslangic/baslangic.module').then(m => m.BaslangicPageModule) },
 { path: 'orta', loadChildren: () => import('./orta/orta.module').then(m => m.OrtaPageModule) },
 { path: 'ileri', loadChildren: () => import('./ileri/ileri.module').then(m => m.IleriPageModule) },
  {
    path: 'ilkokul-seviyesi',
    loadChildren: () => import('./ilkokul-seviyesi/ilkokul-seviyesi.module').then( m => m.IlkokulSeviyesiPageModule)
  },
  {
    path: 'devam-oku',
    loadChildren: () => import('./devam-oku/devam-oku.module').then( m => m.DevamOkuPageModule)
  },
  {
    path: 'hikaye-modal',
    loadChildren: () => import('./hikaye-modal/hikaye-modal.module').then( m => m.HikayeModalPageModule)
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },

 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
