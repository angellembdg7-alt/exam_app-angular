# BadWallet Dashboard

Application Angular de gestion de portefeuille et facturation.

## Vue d'ensemble

- Projet Angular 16+ basé sur des composants `standalone`.
- Routage configuré via `provideRouter()` dans `src/app/app.config.ts`.
- Authentification par `token` stocké dans `localStorage`.
- Intercepteurs HTTP pour ajout du token et gestion globale des erreurs.
- Séparation des fonctionnalités : dashboard, transactions, transfert, factures, administration.

## Prérequis

- Node.js 18+ recommandé
- npm 10+ ou version compatible

## Installation

À la racine du projet :

```bash
npm install
```

## Lancer l'application

```bash
npm start
```

Puis ouvrir :

```text
http://localhost:4200
```

## Connexion

L’interface invite d’abord à choisir un profil : client ou agent.

### Identifiants de test intégrés

- Client :
  - Téléphone : `770000001`
  - Mot de passe : `client123`
- Agent :
  - Téléphone : `770000002`
  - Mot de passe : `agent123`

> Ces comptes sont gérés en local dans `src/app/features/auth/login.component.ts` pour permettre des tests sans backend.

## Routes principales

- `/dashboard` : tableau de bord client
- `/transactions` : historique des mouvements client
- `/transfer` : page de transfert d’argent client
- `/bills/current` : factures impayées du mois
- `/bills/history` : historique des paiements
- `/admin/wallets` : administration des portefeuilles (requiert rôle `AGENT`)

## Composants et architecture

- `src/app/app.component.ts` : composant racine principal
- `src/app/app.config.ts` : configuration des providers Angular
- `src/app/app.routes.ts` : définition des routes et guards
- `src/app/features/auth/login.component.ts` : connexion et sélection de rôle
- `src/app/features/dashboard/dashboard.component.ts` : interface client principale
- `src/app/features/transactions/transactions.component.ts`
- `src/app/features/transfer/transfer.component.ts`
- `src/app/features/bills/bills-current.component.ts`
- `src/app/features/bills/bills-history.component.ts`
- `src/app/features/admin/wallets-admin.component.ts`

## Services et état

- `src/app/core/services/wallet-api.service.ts` : appels vers l’API wallet
- `src/app/core/services/billing-api.service.ts` : appels vers l’API factures
- `src/app/core/store/balance.store.ts` : store de solde basé sur `signal`

## Guards et interceptors

- `src/app/core/guards/auth.guard.ts` : protège l’accès aux routes authentifiées
- `src/app/core/guards/role.guard.ts` : limite l’accès admin aux rôles `AGENT`
- `src/app/core/interceptors/auth.interceptor.ts` : ajoute le header `Authorization` avec le token
- `src/app/core/interceptors/error.interceptor.ts` : traitement centralisé des erreurs HTTP

## API backend

Le frontend attend un backend disponible sur :

- `http://localhost:8080/api/auth/login`
- `http://localhost:8080/api/wallets/*`
- `http://localhost:8080/api/external/factures/*`

Si le backend n’est pas disponible, utilisez les identifiants de test internes.

## Remarques utiles

- `src/main.ts` importe `zone.js` pour permettre le bon bootstrap Angular.
- Le rôle `AGENT` est requis pour accéder à `/admin/wallets`.
- Le solde est rafraîchi automatiquement via `BalanceStore`.

## Commandes utiles

- `npm install` : installer les dépendances
- `npm start` : lancer le serveur de développement
- `npm run build` : construire le projet
- `npm run watch` : builder en mode watch
