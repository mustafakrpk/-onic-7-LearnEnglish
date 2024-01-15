import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { TranslatorService } from '../services/translator.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']


})
export class Tab1Page {
  translatedWord: string = '';
  wordToTranslate: string = '';
  textToTranslate: string = '';
  translatedText: string = '';
  translationForm: FormGroup;
  randomKelime: any={}; // Rastgele kelimenin saklanacağı değişken
 dersler: any;
 @ViewChild(IonContent) content: IonContent | undefined;
  kategoriler: string[] = [];
  menuOpened = false;
  menuController: any;
  
 // translationForm: any;
  constructor(private router: Router,
     private menuCtrl: MenuController,
     private translatorService: TranslatorService,
     private httpClient: HttpClient,
     private formBuilder: FormBuilder) { 
      this.translationForm = this.formBuilder.group({
    wordToTranslate: ['']
  });}

  ngOnInit() {
    this.fetchWords(); // Kelimeleri başlangıçta yükleyin
  }
 fetchWords() {
    fetch("http://localhost/api/derslerim.php")
      .then((gelenVeri) => gelenVeri.json())
      .then((json) => {
        this.dersler = json;
        this.getRandomWord(); // İlk rastgele kelimeyi alın
      });
  }

  getRandomWord() {
    if (this.dersler && this.dersler.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.dersler.length);
      this.randomKelime = this.dersler[randomIndex];
    }}
  selectedCategory: string = 'tumKelimeler'; // Varsayılan bir kategori seçimi

  gitHikayelerPage() {
    this.router.navigate(['/hikayeler']); // "yeni-sayfa" URL'sine yönlendirme yapar
 
  }
  goToIlkokulSeviyesi() {
    this.router.navigate(['/ilkokul-seviyesi']); // İlkokul seviyesi sayfasına yönlendir
  }

  goToSettings() {
    // Ayarlar sayfasına yönlendirmek için gerekli kod burada olmalı
  }
 

  toggleMenu() {
    this.menuCtrl.toggle('main-menu');
  }
  goToCategory(category: string) {
    this.menuCtrl.close('main-menu');
    // İlgili kategoriye yönlendirme işlemleri
    switch (category) {
      case 'Hikayeler':
        this.router.navigate(['/hikayeler']);
        break;
      case 'Diyaloglar':
        this.router.navigate(['/hikayeler']);
        break;
      case 'Kelimeler':
        this.router.navigate(['/kelimeler']);
        break;
      case 'Eklediklerim':
        this.router.navigate(['/eklediklerim']);
        break;
      case 'Favorilerim':
        this.router.navigate(['/favorilerim']);
        break;
      default:
        break;
    }
    
    //this.router.navigateByUrl(`/tabs/${category.toLowerCase()}`); // Kategoriye göre dinamik yönlendirme
  }
  translate() {
    const targetLanguage = 'tr'; // Replace with your target language code

    this.translatorService.translateText(this.wordToTranslate, targetLanguage).subscribe(
      (response: any) => {
        this.translatedWord = response[0].translations[0].text;
      },
      // error => {
      //   console.error('Translation error:', error);
      //   console.error(error);

      // },
      
    );
  }
 
  // Define the search method
 

  search(event:any) {
    const searchTerm = event.target.value;
    
    // Arama işlemi için servisi kullan
    if (searchTerm) {
      this.translatorService.translateText(searchTerm, 'tr').subscribe(
        (response) => {
          // Çeviri başarılı olduğunda çevrilen kelimeyi güncelle
          this.translatedWord = response[0].translations[0].text;
        },
        // (error) => {
        //   console.error('Çeviri hatası:', error);
        //   // Hata durumunda eğer kullanıcıya bir mesaj göstermek istiyorsanız, ek işlemleri burada yapabilirsiniz.
        // }
      );
    } else {
      // Eğer arama kutusu boşsa, çevrilen kelimeyi temizle
     // this.translatedWord =null;
    }
  }





  onSubmit() {
    const targetLanguage = 'tr'; // Hedef dil kodunu 'tr' olarak ayarlayın

    const wordToTranslate = this.translationForm.value.wordToTranslate;

    this.translatorService.translateText(wordToTranslate, targetLanguage).subscribe(
      (response: any) => {
        this.translatedWord = response[0].translations[0].text;
      },
      error => {
       console.error('Translation error:', error);
      //  Hata nesnesini konsola yazdır
       console.error(error);
      }
    );
  }
}
