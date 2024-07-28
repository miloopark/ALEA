import React, { useState, useEffect } from 'react';
import { useMutation, gql, useQuery } from '@apollo/client';
import cloud9Image from '../assets/cloud9.png';
import fazeImage from '../assets/faze.png';
import '../App.css';

const PLACE_BET_MUTATION = gql`
  mutation PlaceBet($amount: Float!, $address: String!) {
    placeBet(amount: $amount, address: $address)
  }
`;

const GET_NFTS_QUERY = gql`
  query GetNFTs($address: String!) {
    getNFTs(address: $address) {
      tokenId
      tokenURI
    }
  }
`;

const CSGOMatch: React.FC = () => {
  const [balance, setBalance] = useState(100);
  const [amount, setAmount] = useState('');
  const [team, setTeam] = useState<string | null>(null);
  const [address, setAddress] = useState('YOUR_METAMASK_ADDRESS');
  const { loading, error, data } = useQuery(GET_NFTS_QUERY, { variables: { address } });
  const [placeBet] = useMutation(PLACE_BET_MUTATION);

  const handlePlaceBet = async (selectedTeam: string) => {
    const betAmount = parseFloat(amount);
    if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance) {
      alert('Invalid bet amount');
      return;
    }

    setTeam(selectedTeam);

    if (selectedTeam === 'Cloud9') {
      const newBalance = balance + betAmount;
      setBalance(newBalance);
      try {
        await placeBet({ variables: { amount: betAmount, address } });
        alert(`You won! Your new balance is ${newBalance} play coins`);
      } catch (error) {
        console.error('Error placing bet:', error);
        alert(`Error placing bet: ${error.message}`);
      }
    } else {
      const newBalance = balance - betAmount;
      setBalance(newBalance);
      alert(`You lost! Your new balance is ${newBalance} play coins`);
    }

    setAmount('');
    setTeam(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="match-container">
      <div className="balance">Balance: {balance} play coins</div>
      <h2>CSGO Match: Cloud9 vs FaZe</h2>
      <div className="teams">
        <div className="team">
          <img src={cloud9Image} alt="Cloud9" />
          <button onClick={() => handlePlaceBet('Cloud9')}>Bet on Cloud9</button>
        </div>
        <div className="team">
          <img src={fazeImage} alt="FaZe" />
          <button onClick={() => handlePlaceBet('FaZe')}>Bet on FaZe</button>
        </div>
      </div>
      <div className="bet-input">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter bet amount"
        />
      </div>
      {team && <p>Betting on: {team}</p>}
      <div className="nft-collection">
        <h3>Your NFTs</h3>
        <div className="nfts">
          {data.getNFTs.map((nft: any) => (
            <div key={nft.tokenId} className="nft">
              <img src={nft.tokenURI} alt={`NFT ${nft.tokenId}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CSGOMatch;
