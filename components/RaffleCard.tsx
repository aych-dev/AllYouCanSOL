import { NextResponse } from 'next/server';
import React from 'react';

const RaffleCard = () => {
  // const getData = async () => {
  //   try {
  //     if (!process.env.NEXT_PRIVATE_APIKEY) {
  //       console.log('undefined api key');
  //       return null;
  //     }

  //     const url = `https://mainnet.helius-rpc.com/?api-key=${process.env.NEXT_PRIVATE_APIKEY}`;
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         jsonrpc: '2.0',
  //         id: 'my-id',
  //         method: 'getAssetsByOwner',
  //         params: {
  //           ownerAddress: '2id39EuHEd6uLAHAGMCQt2LGfD2iMYikHFoES9Phokac',
  //           page: 1, // Starts at 1
  //           limit: 1000,
  //         },
  //       }),
  //     });
  //     return NextResponse.json(response, { status: 201 });
  //   } catch (error) {
  //     return NextResponse.json(
  //       { message: 'FAILED  TO FETCH', error },
  //       { status: 500 }
  //     );
  //   }
  // };

  // const response = await getData();
  // console.log(response);

  return (
    <div className='border border-green-400 p-3 flex flex-col'>
      <div className='flex flex-col items-center justify-center'>
        <button className='rounded p-2 border'>CLICK</button>
        <h3>Tesla CyberTruck</h3>
        <h4>Enter Raffle</h4>
      </div>
      <div>
        <div className='flex items-center justify-center'>IMAGE</div>
      </div>
      <div className='flex justify-between'>
        <p>How Many Entered</p>
        <p>Time Left To Enter</p>
      </div>
    </div>
  );
};

export default RaffleCard;
