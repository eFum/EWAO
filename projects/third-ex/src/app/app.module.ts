import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { DateTimeComponent } from './date-time/date-time.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    TransactionDetailComponent,
    DateTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
