import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {
  private endpoint = 'https://api.cognitive.microsofttranslator.com/';
  private subscriptionKey = 'yourkey'; // Azure Portal'dan alacağınız anahtar
  private location = "<global>";

  constructor(private http: HttpClient) { }

  translateText(text: string, targetLanguage: string): Observable<any> {
    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': this.subscriptionKey,
      'Content-Type': 'application/json'
    });

    const body = [
      { text: text }
    ];

    const params = new HttpParams()
      .set('api-version', '3.0')
      .set('to', targetLanguage);

    return this.http.post(`${this.endpoint}/translate`, body, { headers, params });
  }
}


