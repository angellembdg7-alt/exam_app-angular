import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facture } from './billing.models';

@Injectable({ providedIn: 'root' })
export class BillingApiService {
  private readonly http = inject(HttpClient);
  private readonly base = 'http://localhost:8080/api/external/factures';

  getCurrent(phone: string): Observable<Facture[]> {
    return this.http.get<Facture[]>(`${this.base}/current/${phone}`);
  }

  getHistory(phone: string): Observable<Facture[]> {
    return this.http.get<Facture[]>(`${this.base}/history/${phone}`);
  }
}
