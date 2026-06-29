import { Component, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { WalletApiService } from '../../core/services/wallet-api.service';
import { ToastService } from '../../shared/components/toast.service';
import { Wallet } from '../../core/services/wallet.models';
import { XofPipe } from '../../shared/pipes/xof.pipe';
import { PhonePipe } from '../../shared/pipes/phone.pipe';
import { phoneValidator } from '../../shared/validators/phone.validators';

@Component({
  selector: 'app-wallets-admin',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, XofPipe, PhonePipe],
  templateUrl: './wallets-admin.component.html',
  styleUrls: ['./wallets-admin.component.css'],
})
export class WalletsAdminComponent implements OnInit {
  private readonly walletApi = inject(WalletApiService);
  private readonly toast = inject(ToastService);
  private readonly fb = inject(FormBuilder);

  readonly wallets = signal<Wallet[]>([]);
  readonly page = signal(0);
  readonly totalPages = signal(1);
  readonly found = signal<Wallet | null>(null);
  readonly searchPhone = signal('');

  readonly depositForm  = this.fb.group({ amount: [null as number | null, [Validators.required, Validators.min(1)]] });
  readonly withdrawForm = this.fb.group({ amount: [null as number | null, [Validators.required, Validators.min(1)]] });
  readonly createForm   = this.fb.group({
    ownerName: ['', Validators.required],
    phone: ['', [Validators.required, phoneValidator()]],
  });

  ngOnInit(): void { this.load(); }

  private load(): void {
    this.walletApi.getAll(this.page(), 10).subscribe(res => {
      this.wallets.set(res.content);
      this.totalPages.set(res.totalPages);
    });
  }

  search(): void {
    if (!this.searchPhone()) return;
    this.walletApi.getByPhone(this.searchPhone()).subscribe({
      next: w => this.found.set(w),
      error: () => this.found.set(null),
    });
  }

  deposit(id: number): void {
    const { amount } = this.depositForm.value;
    this.walletApi.deposit(id, { amount: amount! }).subscribe(() => {
      this.toast.success('Depot effectue.');
      this.depositForm.reset();
      this.search();
    });
  }

  withdraw(phone: string): void {
    const { amount } = this.withdrawForm.value;
    this.walletApi.withdraw({ phone, amount: amount! }).subscribe(() => {
      this.toast.success('Retrait effectue.');
      this.withdrawForm.reset();
      this.search();
    });
  }

  createWallet(): void {
    const { ownerName, phone } = this.createForm.value;
    this.walletApi.create({ ownerName: ownerName ?? '', phone: phone ?? '' }).subscribe(() => {
      this.toast.success('Portefeuille cree.');
      this.createForm.reset();
      this.load();
    });
  }

  prevPage(): void { this.page.update(p => p - 1); this.load(); }
  nextPage(): void { this.page.update(p => p + 1); this.load(); }
}
