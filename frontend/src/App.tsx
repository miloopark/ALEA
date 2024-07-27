import React from 'react';
import { useQuery, gql } from '@apollo/client';

const HELLO_QUERY = gql`
  query Hello {
    hello
  }
`;

const LATEST_BLOCK_QUERY = gql`
  query LatestBlock {
    latestBlock
  }
`;

const App: React.FC = () => {
  const { loading: loadingHello, error: errorHello, data: dataHello } = useQuery(HELLO_QUERY);
  const { loading: loadingBlock, error: errorBlock, data: dataBlock } = useQuery(LATEST_BLOCK_QUERY);

  if (loadingHello || loadingBlock) return <p>Loading...</p>;
  if (errorHello || errorBlock) return <p>Error: {errorHello ? errorHello.message : errorBlock.message}</p>;

  return (
    <div>
      <h1>Welcome to the NFT Gaming Platform</h1>
      <p>{dataHello.hello}</p>
      <p>Latest Block: {dataBlock.latestBlock}</p>
    </div>
  );
};

export default App;