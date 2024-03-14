'use client';

import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const WalletConnectButton = () => {
  return (
    <div>
      <WalletMultiButton />
    </div>
  );
};

export default WalletConnectButton;
