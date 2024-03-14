export async function GET() {
  try {
    const url = `https://mainnet.helius-rpc.com/?api-key=${process.env.APIKEY}`;
    const response = await fetch(url, {
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

    const { result } = await response.json();

    return Response.json(result, { status: 201 });
  } catch (error) {
    return Response.json(
      { message: 'FAILED  TO FETCH', error },
      { status: 500 }
    );
  }
}
