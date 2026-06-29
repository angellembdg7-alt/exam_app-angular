import { Injectable, inject, signal } from '@angular/core';
import { WalletApiService } from '../services/wallet-api.service';

@Injectable({ providedIn: 'root' })
export class BalanceStore {
  private readonly walletApi = inject(WalletApiService);

  readonly balance = signal<number>(0);
  readonly loading = signal<boolean>(false);

  refresh(phone: string): void {
    this.loading.set(true);
    this.walletApi.getBalance(phone).subscribe({
      next: ({ balance }) => this.balance.set(balance),
      complete: () => this.loading.set(false),
    });
  }
}
