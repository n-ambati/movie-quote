import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { QuoteComponent } from './quote.component';
import { QuoteService } from './quote.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    NoopAnimationsModule,
  ],
  providers: [QuoteService],
  bootstrap: [QuoteComponent]
})
export class AppModule { }