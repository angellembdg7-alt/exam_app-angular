import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { WalletApiService } from '../../core/services/wallet-api.service';
import { BalanceStore } from '../../core/store/balance.store';
import { ToastService } from '../../shared/components/toast.service';
import { phoneValidator, differentPhoneValidator } from '../../shared/validators/phone.validators';
import { XofPipe } from '../../shared/pipes/xof.pipe';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, XofPipe],
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
})
export class TransferComponent {
  private readonly fb = inject(FormBuilder);
  private readonly walletApi = inject(WalletApiService);
  readonly balanceStore = inject(BalanceStore);
  private readonly toast = inject(ToastService);
  private readonly router = inject(Router);

  private readonly senderPhone = localStorage.getItem('phone') ?? '';
  readonly loading = signal(false);

  readonly form = this.fb.group({
    receiverPhone: ['', [Validators.required, phoneValidator(), differentPhoneValidator(this.senderPhone)]],
    amount: [null as number | null, [Validators.required, Validators.min(1)]],
  });

  submit(): void {
    if (this.form.invalid) return;
    this.loading.set(true);
    const { receiverPhone, amount } = this.form.value;
    this.walletApi.transfer({ senderPhone: this.senderPhone, receiverPhone: receiverPhone!, amount: amount! })
      .subscribe({
        next: () => {
          this.toast.success('Transfert effectue avec succes !');
          this.balanceStore.refresh(this.senderPhone);
          this.router.navigate(['/dashboard']);
        },
        complete: () => this.loading.set(false),
      });
  }
}
