import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const NavBar = () => {
  return (
    <div className='bg-customNav flex justify-between p-4 text-customText'>
      <div className='flex items-center space-x-4'>
        <p>spot a</p>
        <p>spot b</p>
        <p>spot c</p>
      </div>
      <div>
        <WalletMultiButton />
      </div>
    </div>
  );
};

export default NavBar;
