
import { EklediklerimService } from '../services/eklediklerim.service'; // Hizmeti ekleyin

import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  dersler: any;
@ViewChild('swiper')
swiperRef:ElementRef | undefined;
swiper?:Swiper;
eklenenKelimeler: any[] = [];

constructor(private router: Router,private toastController: ToastController,private eklediklerimService: EklediklerimService) {}


  ngOnInit() {
    this.fetchWords();
  }

  fetchWords() {
    fetch("http://localhost/api/derslerim.php")
      .then((gelenVeri) => gelenVeri.json())
      .then((json) => {
        this.dersler = json;
      //  this.initSwiper(); // Swiper'ı başlat
      });
  }

 
swiperReady(){
  this.swiper=this.swiperRef?.nativeElement.swiper;
}
goNext(){
  this.swiper?.slideNext();
}
goPrev(){
  this.swiper?.slidePrev();
}
  swiperSlideChanged(dersler: any) {
    console.log('slide changed', dersler);
  }

  goToEklediklerimPage(eklenenKelime: any) {
    this.eklediklerimService.addToEklenenKelimeler(eklenenKelime); // Servise eklenen kelimeleri ekle
    this.router.navigate(['/eklediklerim']);
  }
  async showAddedToFavoritesToast() {
    const toast = await this.toastController.create({
      message: 'Kelime eklediklerinize eklendi!',
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }
  addToEklediklerim(ders: any) {
    this.eklenenKelimeler.push(ders);
    this.showAddedToFavoritesToast();
  }
  async addToFavorites(ders: any) {
    const toast = await this.toastController.create({
      message: 'Kelime eklediklerinize eklendi!',
      duration: 2000,
      position: 'top',
      color: 'success',
    });
    toast.present();
  }
  
}



