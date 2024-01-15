import { Component, OnInit } from '@angular/core';
import { HikayeModalPage } from '../hikaye-modal/hikaye-modal.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-baslangic',
  templateUrl: './baslangic.page.html',
  styleUrls: ['./baslangic.page.scss'],
})
export class BaslangicPage implements OnInit {
  hikayeler :any;

  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;

  }
  isModalOpen2 = false;
  setOpen2(isOpen2: boolean) {
    this.isModalOpen2 = isOpen2;
  }
  isModalOpen3 = false;
  setOpen3(isOpen3: boolean) {
    this.isModalOpen3 = isOpen3;
  }
  isModalOpen4 = false;
  setOpen4(isOpen4: boolean) {
    this.isModalOpen4 = isOpen4;
  }
  constructor(private modalController: ModalController) {}
 

  ngOnInit() {
    console.log("bilgi gelsin");

    fetch("http://localhost/api/hikayelerim.php").then(gelenVeri =>gelenVeri.json()).then(json=>{this.hikayeler =(json);
   // console.log(this.dersler);
    // mode: 'no-cors'
    console.log(this.hikayeler[3].baslangicHikaye);
    
  })
  }
  async openModal(hikaye: any) {
    const modal = await this.modalController.create({
      component: HikayeModalPage,
      componentProps: { hikaye: hikaye }
    });
    return await modal.present();
  }
 
}
