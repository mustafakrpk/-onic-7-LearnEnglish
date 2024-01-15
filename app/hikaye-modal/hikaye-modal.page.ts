import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-hikaye-modal',
  templateUrl: './hikaye-modal.page.html',
  styleUrls: ['./hikaye-modal.page.scss'],
})
export class HikayeModalPage implements OnInit {
  @Input() hikaye: any;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  closeModal() {
    this.modalController.dismiss();
  }
}
