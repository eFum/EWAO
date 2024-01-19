import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'assets/';

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}data/transactions.json`);
  }

  getTransactionDetail(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}data/${id}.json`);
  }
}
