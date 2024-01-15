import { Component, OnInit } from '@angular/core';
import { TranslatorService } from '../services/translator.service';

@Component({
  selector: 'app-translate',
  templateUrl:  `
  <div>
    <input [(ngModel)]="wordToTranslate" placeholder="Kelime Girin" />
    <button (click)="translate()">Çevir</button>
    <div *ngIf="translatedText">Çeviri: {{ translatedText }}</div>
  </div>
`,
  styleUrls: ['./translate.component.scss'],
})
export class TranslateComponent  implements OnInit {
  wordToTranslate: string = '';
  translatedText: string = '';

  constructor(private translatorService: TranslatorService) { }

  ngOnInit() {}
  translate() {
    const targetLanguage = 'YOUR_TARGET_LANGUAGE'; // Çevrilecek dil (örneğin: 'tr' Türkçe)
    
    this.translatorService.translateText(this.wordToTranslate, targetLanguage).subscribe(
      (response: any) => {
        this.translatedText = response[0].translations[0].text;
      },
      (      error: any) => {
        console.error('Çeviri hatası:', error);
      }
    );
  }
}
