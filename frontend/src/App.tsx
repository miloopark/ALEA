import React from 'react';
import { useQuery, gql } from '@apollo/client';
import './App.css';
import landingGradient from './assets/landing-gradient.svg';

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
    <div className="landing-page">
      <header className="landing-header">
        <img src={landingGradient} alt="Gradient Background" className="landing-gradient" />
        <div className="landing-content">
          <h1>ALEA</h1>
          <p className="subtitle">Esports Betting Platform Powered by Polkadot</p>
          <div className="dynamic-content">
            <p>{dataHello.hello}</p>
            <p>Latest Block: {dataBlock.latestBlock}</p>
          </div>
          <div className="scroll-indicator">
            <span>&#9660;</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
