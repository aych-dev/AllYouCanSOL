import dynamic from 'next/dynamic';
import React from 'react';
// Wallet will not render on the server-side
const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);




const WalletConnectButton = () => {
  return (
    <div>
      <WalletMultiButtonDynamic />
    </div>
  );
};

export default WalletConnectButton;
