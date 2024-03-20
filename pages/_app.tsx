import {
  WalletProvider,
  ConnectionProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
  AlphaWalletAdapter,
  LedgerWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import type { AppProps } from 'next/app';
import { useMemo } from 'react';
import Layout from '@/components/Layout';

import '@solana/wallet-adapter-react-ui/styles.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const endpoint = 'https://fancy-daphna-fast-mainnet.helius-rpc.com/';
  const wallets = useMemo(
    () => [
      new SolflareWalletAdapter(),
      new AlphaWalletAdapter(),
      new LedgerWalletAdapter(),
    ],
    []
  );

  return (
    <>
      <WalletProvider wallets={wallets} autoConnect>
        <ConnectionProvider endpoint={endpoint}>
          <WalletModalProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </WalletModalProvider>
        </ConnectionProvider>
      </WalletProvider>
    </>
  );
}
