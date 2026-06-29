import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Wallet, Transaction, PageResponse,
  TransferRequest, DepositRequest, WithdrawRequest
} from './wallet.models';

@Injectable({ providedIn: 'root' })
export class WalletApiService {
  private readonly http = inject(HttpClient);
  private readonly base = 'http://localhost:8080/api/wallets';

  getAll(page = 0, size = 10): Observable<PageResponse<Wallet>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<PageResponse<Wallet>>(this.base, { params });
  }

  create(wallet: Partial<Wallet>): Observable<Wallet> {
    return this.http.post<Wallet>(this.base, wallet);
  }

  getByPhone(phone: string): Observable<Wallet> {
    return this.http.get<Wallet>(`${this.base}/${phone}`);
  }

  getBalance(phone: string): Observable<{ balance: number }> {
    return this.http.get<{ balance: number }>(`${this.base}/${phone}/balance`);
  }

  getTransactions(phone: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.base}/${phone}/transactions`);
  }

  deposit(id: number, body: DepositRequest): Observable<Wallet> {
    return this.http.post<Wallet>(`${this.base}/${id}/deposit`, body);
  }

  withdraw(body: WithdrawRequest): Observable<Wallet> {
    return this.http.post<Wallet>(`${this.base}/withdraw`, body);
  }

  transfer(body: TransferRequest): Observable<void> {
    return this.http.post<void>(`${this.base}/transfer`, body);
  }

  pay(body: unknown): Observable<void> {
    return this.http.post<void>(`${this.base}/pay`, body);
  }

  payFactures(body: unknown): Observable<void> {
    return this.http.post<void>(`${this.base}/pay-factures`, body);
  }
}
