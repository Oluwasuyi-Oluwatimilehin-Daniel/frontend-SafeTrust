"use client";

import { QueryProvider } from "@/providers/QueryProvider";
import { TrustlessWorkProvider } from "@/providers/TrustlessWorkProvider";
import { WalletProvider } from "@/components/tw-blocks/wallet-kit/WalletProvider";

/**
 * Root client-side providers wrapper component.
 * Composes React Query, Wallet, and TrustlessWork providers for the application tree.
 *
 * @param props - Component props containing children to be wrapped by client providers.
 * @returns React component wrapping children in client provider contexts.
 */
export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <WalletProvider>
        <TrustlessWorkProvider>
          {children}
        </TrustlessWorkProvider>
      </WalletProvider>
    </QueryProvider>
  );
}