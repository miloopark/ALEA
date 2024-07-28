import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const RESOLVE_BET_MUTATION = gql`
  mutation ResolveBet($index: Int!, $won: Boolean!) {
    resolveBet(index: $index, won: $won)
  }
`;

const ResolveBet: React.FC = () => {
  const [index, setIndex] = useState('');
  const [won, setWon] = useState(false);
  const [resolveBet] = useMutation(RESOLVE_BET_MUTATION);

  const handleResolveBet = async () => {
    try {
      await resolveBet({ variables: { index: parseInt(index), won } });
      alert('Bet resolved successfully!');
    } catch (error) {
      console.error('Error resolving bet:', error);
      alert('Error resolving bet');
    }
  };

  return (
    <div className="resolve-form">
      <h2>Resolve a Bet</h2>
      <input
        type="number"
        value={index}
        onChange={(e) => setIndex(e.target.value)}
        placeholder="Enter bet index"
      />
      <label>
        Won:
        <input
          type="checkbox"
          checked={won}
          onChange={(e) => setWon(e.target.checked)}
        />
      </label>
      <button onClick={handleResolveBet}>Resolve Bet</button>
    </div>
  );
};

export default ResolveBet;
