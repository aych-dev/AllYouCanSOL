'use client';
import { useWallet } from '@solana/wallet-adapter-react';
import RaffleCard from './components/RaffleCard';

export default function Home() {
  const wallet = useWallet();

  if (!wallet.publicKey) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <h4>ALL YOU CAN SOL</h4>
      </div>
    );
  }

  console.log(wallet.publicKey);
  return (
    <>
      <div className='border grid grid-cols-4 p-2'>
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>{' '}
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>{' '}
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>{' '}
        <div className='p-2'>
          <RaffleCard />
        </div>
      </div>
      <div className=' border p-2 border-orange-300'>test</div>
    </>
  );
}
