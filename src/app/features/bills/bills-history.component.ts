import { Component, inject, OnInit, signal } from '@angular/core';
import { NgIf, NgFor, DatePipe } from '@angular/common';
import { BillingApiService } from '../../core/services/billing-api.service';
import { Facture } from '../../core/services/billing.models';
import { XofPipe } from '../../shared/pipes/xof.pipe';

@Component({
  selector: 'app-bills-history',
  standalone: true,
  imports: [NgIf, NgFor, DatePipe, XofPipe],
  templateUrl: './bills-history.component.html',
  styleUrls: ['./bills-history.component.css'],
})
export class BillsHistoryComponent implements OnInit {
  private readonly billingApi = inject(BillingApiService);
  readonly loading = signal(false);
  readonly history = signal<Facture[]>([]);

  ngOnInit(): void {
    const phone = localStorage.getItem('phone') ?? '';
    this.loading.set(true);
    this.billingApi.getHistory(phone).subscribe({
      next: fs => this.history.set(fs),
      complete: () => this.loading.set(false),
    });
  }
}
