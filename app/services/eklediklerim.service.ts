import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EklediklerimService {
  private storageKey = 'eklenenKelimeler'; // localStorage key'i
  eklenenKelimeler: any[] = [];
  constructor() { }
  addToEklenenKelimeler(eklenenKelime: any) {
    this.eklenenKelimeler.push(eklenenKelime);
    this.saveToLocalStorage();
  }

  getEklenenKelimeler() {
    this.loadFromLocalStorage();
    return this.eklenenKelimeler;
  }
  private saveToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.eklenenKelimeler));
  }
  private loadFromLocalStorage() {
    const storedData = localStorage.getItem(this.storageKey);
    if (storedData) {
      this.eklenenKelimeler = JSON.parse(storedData);
    }
  }
}
