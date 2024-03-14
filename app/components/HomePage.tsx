'use client';
import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import RaffleCard from './RaffleCard';

const HomePage = () => {
  //   const wallet = useWallet();

  //   if (!wallet.publicKey) {
  //     return (
  //       <div className=' flex flex-col items-center justify-center '>
  //         <h4>ALL YOU CAN SOL</h4>
  //         <button className='border rounded p-2 bg-black hover:cursor-pointer'>
  //           CLICK HERE
  //         </button>
  //       </div>
  //     );
  //   }

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
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>
        <div className='p-2'>
          <RaffleCard />
        </div>
      </div>
      <div className=' border p-2 border-orange-300'>test</div>
    </>
  );
};

export default HomePage;
