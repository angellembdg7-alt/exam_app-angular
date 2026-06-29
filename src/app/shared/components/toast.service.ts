import { Injectable, signal } from '@angular/core';

export interface ToastMessage {
  text: string;
  type: 'success' | 'error' | 'info';
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly toasts = signal<ToastMessage[]>([]);

  private add(text: string, type: ToastMessage['type']): void {
    this.toasts.update(t => [...t, { text, type }]);
    setTimeout(() => this.toasts.update(t => t.slice(1)), 4000);
  }

  success(text: string) { this.add(text, 'success'); }
  error(text: string)   { this.add(text, 'error'); }
  info(text: string)    { this.add(text, 'info'); }
}
