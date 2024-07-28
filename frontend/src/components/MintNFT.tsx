import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const MINT_NFT_MUTATION = gql`
  mutation MintNFT($to: String!) {
    mintNFT(to: $to)
  }
`;

const MintNFT: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [mintNFT] = useMutation(MINT_NFT_MUTATION);

  const handleMintNFT = async () => {
    try {
      await mintNFT({ variables: { to: recipient } });
      alert('NFT minted successfully!');
    } catch (error) {
      console.error(error);
      alert('Error minting NFT');
    }
  };

  return (
    <div className="mint-form">
      <h2>Mint an NFT</h2>
      <input
        type="text"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="Enter recipient address"
      />
      <button onClick={handleMintNFT}>Mint NFT</button>
    </div>
  );
};

export default MintNFT;
