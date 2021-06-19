import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Quote } from './quoteInterface';

@Component({
  selector: 'app-root',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  private apiUrl = 'https://movie-quote-api.herokuapp.com/v1/quote/';
  title = 'movie-quote';
  @Input() quoteObj: Quote = {
    quote: '',
    role: '',
    show: ''
  };
  
  constructor(private http: HttpClient) { }

  getNewQuote() {
    this.http.get<Quote>(this.apiUrl)
    .subscribe(res => {
      this.quoteObj = res;
    })
  }

  ngOnInit(): void {
    this.getNewQuote();
  }
}
