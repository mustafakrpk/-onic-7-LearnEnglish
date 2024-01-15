import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hikayeler',
  templateUrl: './hikayeler.page.html',
  styleUrls: ['./hikayeler.page.scss'],
})
export class HikayelerPage implements OnInit {
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
  constructor(private router: Router) {}

  ngOnInit() {
  }
  gitAnaSayfa() {
    this.router.navigate(['/ana-sayfa']);
  }

  gosterHikaye(seviye: string) {
    if (seviye === 'Baslangic') {
      // Baslangic seviyesi hikayelerinin başlıklarını göstermek için uygun kodu ekleyin.
    } else if (seviye === 'Orta') {
      // Orta seviyesi hikayelerinin başlıklarını göstermek için uygun kodu ekleyin.
    } else if (seviye === 'Ileri') {
      // Ileri seviyesi hikayelerinin başlıklarını göstermek için uygun kodu ekleyin.
    }
  }

}
