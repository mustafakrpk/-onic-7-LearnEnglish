import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EklediklerimService } from '../services/eklediklerim.service'; // Hizmeti ekleyin

@Component({
  selector: 'app-eklediklerim',
  templateUrl: './eklediklerim.page.html',
  styleUrls: ['./eklediklerim.page.scss'],
})
export class EklediklerimPage implements OnInit {

  eklenenKelimeler: any[] = []; // Eksik olan satır

  constructor(private route: ActivatedRoute,private eklediklerimService: EklediklerimService) { }

  ngOnInit() {
    this.eklenenKelimeler = this.eklediklerimService.getEklenenKelimeler();
  }

}
