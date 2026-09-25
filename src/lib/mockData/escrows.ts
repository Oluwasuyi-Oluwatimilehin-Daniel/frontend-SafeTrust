export type EscrowStatusSnapshot = {
  id: string;
  status: string;
  updated_at: string;
  transaction_hash: string | null;
  escrow_transaction_users: Array<{
    id: string;
    funding_status: string;
    funded_at: string | null;
    transaction_hash: string | null;
  }>;
};

export function getMockEscrowStatus(escrowId: string): EscrowStatusSnapshot {
  return {
    id: escrowId,
    status: "funded",
    updated_at: new Date().toISOString(),
    transaction_hash: null,
    escrow_transaction_users: [],
  };
}
