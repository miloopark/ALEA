import React from 'react';
import { useQuery, gql } from '@apollo/client';

const HELLO_QUERY = gql`
  query Hello {
    hello
  }
`;

const App: React.FC = () => {
  const { loading, error, data } = useQuery(HELLO_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Welcome to the NFT Gaming Platform</h1>
      <p>{data.hello}</p>
    </div>
  );
};

export default App;