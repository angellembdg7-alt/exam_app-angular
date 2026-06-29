import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { BillingApiService } from '../../core/services/billing-api.service';
import { WalletApiService } from '../../core/services/wallet-api.service';
import { BalanceStore } from '../../core/store/balance.store';
import { ToastService } from '../../shared/components/toast.service';
import { Facture } from '../../core/services/billing.models';
import { XofPipe } from '../../shared/pipes/xof.pipe';

const FOURNISSEURS = ['Tous', 'WOYAFAL', 'ISM', 'SENELEC', 'SDE', 'EXPRESSO'];

@Component({
  selector: 'app-bills-current',
  standalone: true,
  imports: [NgIf, NgFor, XofPipe],
  templateUrl: './bills-current.component.html',
  styleUrls: ['./bills-current.component.css'],
})
export class BillsCurrentComponent implements OnInit {
  private readonly billingApi = inject(BillingApiService);
  private readonly walletApi = inject(WalletApiService);
  private readonly balanceStore = inject(BalanceStore);
  private readonly toast = inject(ToastService);

  readonly fournisseurs = FOURNISSEURS;
  readonly loading = signal(false);
  readonly paying = signal(false);
  private readonly all = signal<Facture[]>([]);
  private readonly activeFilter = signal('Tous');
  readonly selected = signal<string[]>([]);

  readonly filtered = computed(() =>
    this.activeFilter() === 'Tous' ? this.all() : this.all().filter(f => f.fournisseur === this.activeFilter())
  );

  readonly total = computed(() =>
    this.selected().reduce((sum, id) => sum + (this.all().find(x => x.id === id)?.montant ?? 0), 0)
  );

  ngOnInit(): void {
    const phone = localStorage.getItem('phone') ?? '';
    this.loading.set(true);
    this.billingApi.getCurrent(phone).subscribe({
      next: fs => this.all.set(fs),
      complete: () => this.loading.set(false),
    });
  }

  filterBy(f: string): void { this.activeFilter.set(f); this.selected.set([]); }
  isSelected(id: string): boolean { return this.selected().includes(id); }
  toggle(id: string): void {
    this.selected.update(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
  }
  toggleAll(checked: boolean): void {
    this.selected.set(checked ? this.filtered().map(f => f.id) : []);
  }

  paySelected(): void {
    const phone = localStorage.getItem('phone') ?? '';
    this.paying.set(true);
    this.walletApi.payFactures({ phone, factureIds: this.selected() }).subscribe({
      next: () => {
        this.toast.success('Factures payees avec succes !');
        this.all.update(fs => fs.filter(f => !this.selected().includes(f.id)));
        this.selected.set([]);
        this.balanceStore.refresh(phone);
      },
      complete: () => this.paying.set(false),
    });
  }
}
