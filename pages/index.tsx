import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import HomePage from '@/components/HomePage';
import { publicKey } from '@metaplex-foundation/umi';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

type Data = {
  id: string;
};

export const getServerSideProps = (async () => {
  const url = `https://mainnet.helius-rpc.com/?api-key=9d62c6ca-3562-4cbb-bdbc-f6aac8797fab`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'getAssetsByOwner',
      params: {
        ownerAddress: '2id39EuHEd6uLAHAGMCQt2LGfD2iMYikHFoES9Phokac',
        page: 1, // Starts at 1
        limit: 1000,
      },
    }),
  });
  const data: Data = await res.json();

  return {
    props: {
      data,
    },
  };
}) satisfies GetServerSideProps<{ data: Data }>;

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const wallet = useWallet();

  if (!wallet.publicKey) {
    return <div className='flex items-center justify-center'>HOME</div>;
  }

  let walletString = publicKey(wallet.publicKey);

  return (
    <div>
      {/* <HomePage /> */}
      {/* <p>{walletString}</p> */}
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  );
}
