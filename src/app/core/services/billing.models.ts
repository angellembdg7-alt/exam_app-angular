export interface Facture {
  id: string;
  fournisseur: string;
  reference: string;
  montant: number;
  dateEcheance: string;
  statut: 'IMPAYEE' | 'PAYEE';
}
