import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { NgIf } from '@angular/common';
import { filter } from 'rxjs';
import { XofPipe } from './shared/pipes/xof.pipe';
import { BalanceStore } from './core/store/balance.store';
import { ToastComponent } from './shared/components/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf, XofPipe, ToastComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  readonly balanceStore = inject(BalanceStore);
  private readonly router = inject(Router);

  readonly isLoggedIn = signal(!!localStorage.getItem('token'));
  readonly isAgent = signal(localStorage.getItem('role') === 'AGENT');

  ngOnInit(): void {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      this.isLoggedIn.set(!!localStorage.getItem('token'));
      this.isAgent.set(localStorage.getItem('role') === 'AGENT');
    });
  }

  logout(): void {
    localStorage.clear();
    this.isLoggedIn.set(false);
    this.isAgent.set(false);
    this.router.navigate(['/login']);
  }
}
