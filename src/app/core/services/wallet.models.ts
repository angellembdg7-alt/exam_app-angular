export interface Wallet {
  id: number;
  phone: string;
  ownerName: string;
  balance: number;
  createdAt: string;
}

export interface Transaction {
  id: number;
  type: 'DEPOSIT' | 'WITHDRAWAL' | 'TRANSFER' | 'PAYMENT';
  amount: number;
  date: string;
  description: string;
}

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
}

export interface TransferRequest {
  senderPhone: string;
  receiverPhone: string;
  amount: number;
}

export interface DepositRequest {
  amount: number;
}

export interface WithdrawRequest {
  phone: string;
  amount: number;
}
