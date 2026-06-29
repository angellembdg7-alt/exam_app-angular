const fs = require('fs');
const write = (path, content) => { fs.writeFileSync(path, content, 'utf8'); console.log('OK:', path); };

write('src/app/app.component.html', `
<ng-container *ngIf="isLoggedIn()">
  <nav class="navbar">
    <span class="brand">BadWallet</span>
    <div class="nav-links">
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/transactions" routerLinkActive="active">Transactions</a>
      <a routerLink="/transfer" routerLinkActive="active">Transfert</a>
      <a routerLink="/bills/current" routerLinkActive="active">Factures</a>
      <a *ngIf="isAgent()" routerLink="/admin/wallets" routerLinkActive="active">Admin</a>
    </div>
    <div class="navbar-right">
      <span class="balance">{{ balanceStore.balance() | xof }}</span>
      <button (click)="logout()" class="btn-logout">Deconnexion</button>
    </div>
  </nav>
</ng-container>
<main [class.container]="isLoggedIn()">
  <router-outlet></router-outlet>
</main>
<app-toast></app-toast>
`);

write('src/app/shared/components/toast.component.html', `
<div class="toast-container">
  <div *ngFor="let t of toast.toasts()" class="toast" [ngClass]="t.type">{{ t.text }}</div>
</div>
`);

write('src/app/features/auth/login.component.html', `
<div class="login-wrapper">
  <div class="login-card">
    <div class="brand">
      <h1>BadWallet</h1>
      <p>Web Dashboard</p>
    </div>
    <form [formGroup]="form" (ngSubmit)="submit()">
      <div class="field">
        <label>Telephone</label>
        <input formControlName="phone" placeholder="77 XXX XX XX" />
        <span class="err" *ngIf="form.get('phone')?.touched && form.get('phone')?.invalid">Numero requis.</span>
      </div>
      <div class="field">
        <label>Mot de passe</label>
        <input type="password" formControlName="password" placeholder="********" />
        <span class="err" *ngIf="form.get('password')?.touched && form.get('password')?.invalid">Mot de passe requis.</span>
      </div>
      <div class="alert" *ngIf="error()">{{ error() }}</div>
      <button type="submit" [disabled]="form.invalid || loading()" class="btn-submit">
        {{ loading() ? 'Connexion...' : 'Se connecter' }}
      </button>
    </form>
  </div>
</div>
`);

write('src/app/features/dashboard/dashboard.component.html', `
<div class="dashboard">
  <div class="balance-card">
    <span class="label">Solde disponible</span>
    <span class="amount">{{ balanceStore.balance() | xof }}</span>
    <span class="phone">{{ phone | phone }}</span>
    <button (click)="refresh()" class="btn-refresh">Actualiser</button>
  </div>
  <div class="quick-actions">
    <a routerLink="/transfer" class="action-btn">Transfert</a>
    <a routerLink="/bills/current" class="action-btn">Factures</a>
    <a routerLink="/transactions" class="action-btn">Historique</a>
  </div>
  <section class="recent">
    <h2>Dernieres transactions</h2>
    <p class="loading" *ngIf="loading()">Chargement...</p>
    <ng-container *ngIf="!loading()">
      <table class="tx-table">
        <thead>
          <tr><th>Date</th><th>Type</th><th>Montant</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let tx of transactions()">
            <td>{{ tx.date | date:"dd/MM/yyyy" }}</td>
            <td><span class="badge" [ngClass]="tx.type.toLowerCase()">{{ tx.type }}</span></td>
            <td [ngClass]="tx.type === 'DEPOSIT' ? 'credit' : 'debit'">{{ tx.amount | xof }}</td>
            <td>{{ tx.description }}</td>
          </tr>
          <tr *ngIf="transactions().length === 0">
            <td colspan="4" class="empty">Aucune transaction.</td>
          </tr>
        </tbody>
      </table>
    </ng-container>
  </section>
</div>
`);

write('src/app/features/transactions/transactions.component.html', `
<div class="page">
  <h1>Historique des transactions</h1>
  <form [formGroup]="filters" class="filters">
    <input type="date" formControlName="from" />
    <input type="date" formControlName="to" />
    <select formControlName="type">
      <option value="">Tous les types</option>
      <option>DEPOSIT</option>
      <option>WITHDRAWAL</option>
      <option>TRANSFER</option>
      <option>PAYMENT</option>
    </select>
    <button type="button" (click)="resetFilters()" class="btn-reset">Reinitialiser</button>
  </form>
  <p class="loading" *ngIf="loading()">Chargement...</p>
  <ng-container *ngIf="!loading()">
    <table class="tx-table">
      <thead>
        <tr><th>Date</th><th>Type</th><th>Montant</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr *ngFor="let tx of filtered()">
          <td>{{ tx.date | date:"dd/MM/yyyy HH:mm" }}</td>
          <td><span class="badge" [ngClass]="tx.type.toLowerCase()">{{ tx.type }}</span></td>
          <td [ngClass]="tx.type === 'DEPOSIT' ? 'credit' : 'debit'">{{ tx.amount | xof }}</td>
          <td>{{ tx.description }}</td>
        </tr>
        <tr *ngIf="filtered().length === 0">
          <td colspan="4" class="empty">Aucune transaction.</td>
        </tr>
      </tbody>
    </table>
  </ng-container>
</div>
`);

write('src/app/features/transfer/transfer.component.html', `
<div class="page">
  <h1>Transfert</h1>
  <form [formGroup]="form" (ngSubmit)="submit()" class="card">
    <div class="field">
      <label>Numero destinataire</label>
      <input formControlName="receiverPhone" placeholder="77 XXX XX XX" />
      <ng-container *ngIf="form.get('receiverPhone')?.touched">
        <span class="err" *ngIf="form.get('receiverPhone')?.hasError('required')">Champ obligatoire.</span>
        <span class="err" *ngIf="form.get('receiverPhone')?.hasError('invalidPhone')">Numero invalide.</span>
        <span class="err" *ngIf="form.get('receiverPhone')?.hasError('samePhone')">Destinataire different requis.</span>
      </ng-container>
    </div>
    <div class="field">
      <label>Montant (XOF)</label>
      <input type="number" formControlName="amount" min="1" placeholder="0" />
      <span class="err" *ngIf="form.get('amount')?.touched && form.get('amount')?.hasError('required')">Champ obligatoire.</span>
      <span class="err" *ngIf="form.get('amount')?.touched && form.get('amount')?.hasError('min')">Montant superieur a 0 requis.</span>
    </div>
    <div class="summary">Solde actuel : <strong>{{ balanceStore.balance() | xof }}</strong></div>
    <button type="submit" [disabled]="form.invalid || loading()" class="btn-primary">
      {{ loading() ? 'Envoi...' : 'Envoyer' }}
    </button>
  </form>
</div>
`);

write('src/app/features/bills/bills-current.component.html', `
<div class="page">
  <h1>Factures impayes</h1>
  <div class="toolbar">
    <select (change)="filterBy($any($event.target).value)">
      <option *ngFor="let f of fournisseurs">{{ f }}</option>
    </select>
    <button (click)="paySelected()" [disabled]="selected().length === 0 || paying()" class="btn-pay">
      {{ paying() ? 'Paiement...' : 'Payer (' + selected().length + ')' }}
    </button>
  </div>
  <p class="loading" *ngIf="loading()">Chargement...</p>
  <ng-container *ngIf="!loading()">
    <table class="bill-table">
      <thead>
        <tr>
          <th><input type="checkbox" (change)="toggleAll($any($event.target).checked)" /></th>
          <th>Fournisseur</th><th>Reference</th><th>Montant</th><th>Echeance</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let f of filtered()">
          <td><input type="checkbox" [checked]="isSelected(f.id)" (change)="toggle(f.id)" /></td>
          <td>{{ f.fournisseur }}</td>
          <td>{{ f.reference }}</td>
          <td>{{ f.montant | xof }}</td>
          <td>{{ f.dateEcheance }}</td>
        </tr>
        <tr *ngIf="filtered().length === 0">
          <td colspan="5" class="empty">Aucune facture.</td>
        </tr>
      </tbody>
    </table>
    <div class="total">Total : <strong>{{ total() | xof }}</strong></div>
  </ng-container>
</div>
`);

write('src/app/features/bills/bills-history.component.html', `
<div class="page">
  <h1>Historique des paiements</h1>
  <p class="loading" *ngIf="loading()">Chargement...</p>
  <ng-container *ngIf="!loading()">
    <table class="bill-table">
      <thead>
        <tr><th>Fournisseur</th><th>Reference</th><th>Montant</th><th>Date</th></tr>
      </thead>
      <tbody>
        <tr *ngFor="let f of history()">
          <td>{{ f.fournisseur }}</td>
          <td>{{ f.reference }}</td>
          <td>{{ f.montant | xof }}</td>
          <td>{{ f.dateEcheance | date:"dd/MM/yyyy" }}</td>
        </tr>
        <tr *ngIf="history().length === 0">
          <td colspan="4" class="empty">Aucun paiement.</td>
        </tr>
      </tbody>
    </table>
  </ng-container>
</div>
`);

write('src/app/features/admin/wallets-admin.component.html', `
<div class="page">
  <h1>Gestion des portefeuilles</h1>
  <div class="search-bar">
    <input [value]="searchPhone()" (input)="searchPhone.set($any($event.target).value)" placeholder="Rechercher par telephone..." />
    <button (click)="search()" class="btn">Rechercher</button>
  </div>
  <div class="card" *ngIf="found()">
    <p><strong>Nom :</strong> {{ found()!.ownerName }}</p>
    <p><strong>Tel :</strong> {{ found()!.phone | phone }}</p>
    <p><strong>Solde :</strong> {{ found()!.balance | xof }}</p>
    <div class="ops">
      <form [formGroup]="depositForm" (ngSubmit)="deposit(found()!.id)" class="op-form">
        <input type="number" formControlName="amount" placeholder="Depot" />
        <button type="submit" class="btn green">Deposer</button>
      </form>
      <form [formGroup]="withdrawForm" (ngSubmit)="withdraw(found()!.phone)" class="op-form">
        <input type="number" formControlName="amount" placeholder="Retrait" />
        <button type="submit" class="btn red">Retirer</button>
      </form>
    </div>
  </div>
  <details class="create-section">
    <summary>Creer un portefeuille</summary>
    <form [formGroup]="createForm" (ngSubmit)="createWallet()" class="card create-form">
      <div class="field">
        <label>Nom complet</label>
        <input formControlName="ownerName" placeholder="Prenom Nom" />
      </div>
      <div class="field">
        <label>Telephone</label>
        <input formControlName="phone" placeholder="77 XXX XX XX" />
        <span class="err" *ngIf="createForm.get('phone')?.touched && createForm.get('phone')?.hasError('invalidPhone')">Numero invalide.</span>
      </div>
      <button type="submit" [disabled]="createForm.invalid" class="btn">Creer</button>
    </form>
  </details>
  <table class="wallet-table">
    <thead>
      <tr><th>Telephone</th><th>Nom</th><th>Solde</th><th>Cree le</th></tr>
    </thead>
    <tbody>
      <tr *ngFor="let w of wallets()">
        <td>{{ w.phone | phone }}</td>
        <td>{{ w.ownerName }}</td>
        <td>{{ w.balance | xof }}</td>
        <td>{{ w.createdAt }}</td>
      </tr>
      <tr *ngIf="wallets().length === 0">
        <td colspan="4" class="empty">Aucun portefeuille.</td>
      </tr>
    </tbody>
  </table>
  <div class="pagination">
    <button (click)="prevPage()" [disabled]="page() === 0">Precedent</button>
    <span>Page {{ page() + 1 }} / {{ totalPages() }}</span>
    <button (click)="nextPage()" [disabled]="page() >= totalPages() - 1">Suivant</button>
  </div>
</div>
`);

console.log('All HTML files rewritten for Angular 16.');
