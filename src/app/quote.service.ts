import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from './quoteInterface';

@Injectable()
export class QuoteService {
  private apiUrl = 'https://movie-quote-api.herokuapp.com/v1/quote/';

  constructor(private http: HttpClient) { }
  
  getQuote() {
    this.http.get<Quote>(this.apiUrl)
    .subscribe(res => {
      console.log(res);
      return res;
    })
  }
}