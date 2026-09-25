"use client";

import { useEffect, useState } from "react";
import { getMockEscrowStatus, type EscrowStatusSnapshot } from "@/lib/mockData/escrows";

export type EscrowSubscriptionResult = {
  escrow: EscrowStatusSnapshot | null;
  loading: boolean;
  error: Error | undefined;
};

/**
 * Skeleton-mode stand-in for the Hasura `EscrowStatusUpdates` subscription.
 * dApp-SafeTrust replaces this body with Apollo `useSubscription` (see docs/INTEGRATION_ROADMAP.md).
 */
export function useEscrowSubscription(
  escrowId: string,
  options?: { skip?: boolean },
): EscrowSubscriptionResult {
  const skip = Boolean(options?.skip) || !escrowId;
  const [escrow, setEscrow] = useState<EscrowStatusSnapshot | null>(null);

  useEffect(() => {
    if (skip) return;
    const t = setTimeout(() => setEscrow(getMockEscrowStatus(escrowId)), 300);
    return () => clearTimeout(t);
  }, [escrowId, skip]);

  return { escrow, loading: !skip && escrow === null, error: undefined };
}
