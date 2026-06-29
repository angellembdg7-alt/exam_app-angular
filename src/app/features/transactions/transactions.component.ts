import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NgClass, NgIf, NgFor, DatePipe } from '@angular/common';
import { WalletApiService } from '../../core/services/wallet-api.service';
import { Transaction } from '../../core/services/wallet.models';
import { XofPipe } from '../../shared/pipes/xof.pipe';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf, NgFor, DatePipe, XofPipe],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  private readonly walletApi = inject(WalletApiService);
  private readonly fb = inject(FormBuilder);

  readonly loading = signal(false);
  private readonly all = signal<Transaction[]>([]);
  readonly filters = this.fb.group({ from: [''], to: [''], type: [''] });

  readonly filtered = computed(() => {
    const { from, to, type } = this.filters.value;
    return this.all().filter(tx => {
      const d = new Date(tx.date);
      if (from && d < new Date(from)) return false;
      if (to   && d > new Date(to))   return false;
      if (type && tx.type !== type)   return false;
      return true;
    });
  });

  ngOnInit(): void {
    const phone = localStorage.getItem('phone') ?? '';
    this.loading.set(true);
    this.walletApi.getTransactions(phone).subscribe({
      next: txs => this.all.set(txs),
      complete: () => this.loading.set(false),
    });
    this.filters.valueChanges.subscribe(() => {});
  }

  resetFilters(): void { this.filters.reset({ from: '', to: '', type: '' }); }
}
