import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const PLACE_BET_MUTATION = gql`
  mutation PlaceBet($amount: Float!) {
    placeBet(amount: $amount)
  }
`;

const PlaceBet: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [placeBet] = useMutation(PLACE_BET_MUTATION);

  const handlePlaceBet = async () => {
    try {
      await placeBet({ variables: { amount: parseFloat(amount) } });
      alert('Bet placed successfully!');
    } catch (error) {
      console.error('Error placing bet:', error);
      alert('Error placing bet');
    }
  };

  return (
    <div className="bet-form">
      <h2>Place a Bet</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter bet amount"
      />
      <button onClick={handlePlaceBet}>Place Bet</button>
    </div>
  );
};

export default PlaceBet;
