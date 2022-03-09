import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  constructor(private http: HttpClient) { }

  getAdvice() {
    return this.http.get('https://api.adviceslip.com/advice');
  }
}
