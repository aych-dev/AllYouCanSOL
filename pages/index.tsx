import React from 'react';
import RaffleCard from '@/components/RaffleCard';
import { useWallet } from '@solana/wallet-adapter-react';

export default function Home() {
  const wallet = useWallet();

  if (!wallet.publicKey) {
    return <div className='flex items-center justify-center'>HOME</div>;
  }

  return (
    <div>
      <RaffleCard />
    </div>
  );
}
