import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [authGuard],
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('./features/transactions/transactions.component').then(m => m.TransactionsComponent),
    canActivate: [authGuard],
  },
  {
    path: 'transfer',
    loadComponent: () =>
      import('./features/transfer/transfer.component').then(m => m.TransferComponent),
    canActivate: [authGuard],
  },
  {
    path: 'bills',
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'current', pathMatch: 'full' },
      {
        path: 'current',
        loadComponent: () =>
          import('./features/bills/bills-current.component').then(m => m.BillsCurrentComponent),
      },
      {
        path: 'history',
        loadComponent: () =>
          import('./features/bills/bills-history.component').then(m => m.BillsHistoryComponent),
      },
    ],
  },
  {
    path: 'admin/wallets',
    loadComponent: () =>
      import('./features/admin/wallets-admin.component').then(m => m.WalletsAdminComponent),
    canActivate: [authGuard, roleGuard],
    data: { role: 'AGENT' },
  },
  { path: '**', redirectTo: 'login' },
];
