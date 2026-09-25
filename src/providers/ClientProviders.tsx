"use client";

import { QueryProvider } from "@/providers/QueryProvider";
import { TrustlessWorkProvider } from "@/providers/TrustlessWorkProvider";
import { WalletProvider } from "@/components/tw-blocks/wallet-kit/WalletProvider";

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