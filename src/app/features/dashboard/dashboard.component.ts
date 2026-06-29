import { Component, inject, OnInit, signal } from '@angular/core';
import { NgClass, NgIf, DatePipe } from '@angular/common';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WalletApiService } from '../../core/services/wallet-api.service';
import { BalanceStore } from '../../core/store/balance.store';
import { Transaction } from '../../core/services/wallet.models';
import { XofPipe } from '../../shared/pipes/xof.pipe';
import { PhonePipe } from '../../shared/pipes/phone.pipe';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgClass, NgIf, NgFor, RouterLink, XofPipe, PhonePipe, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  readonly balanceStore = inject(BalanceStore);
  private readonly walletApi = inject(WalletApiService);

  readonly phone = localStorage.getItem('phone') ?? '';
  readonly transactions = signal<Transaction[]>([]);
  readonly loading = signal(false);

  ngOnInit(): void {
    this.refresh();
    this.loadTransactions();
  }

  refresh(): void {
    if (this.phone) this.balanceStore.refresh(this.phone);
  }

  private loadTransactions(): void {
    if (!this.phone) return;
    this.loading.set(true);
    this.walletApi.getTransactions(this.phone).subscribe({
      next: txs => this.transactions.set(txs.slice(0, 5)),
      complete: () => this.loading.set(false),
    });
  }
}
