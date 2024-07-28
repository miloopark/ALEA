// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Betting {
    // Define state variables and methods
    address public owner;

    constructor() {
        owner = msg.sender;
    }
    
    struct Bet {
        address user;
        uint256 amount;
        bool resolved;
        bool won;
    }

    mapping(uint256 => Bet) public bets;
    uint256 public nextBetId;

    function placeBet() external payable {
        bets[nextBetId] = Bet({
            user: msg.sender,
            amount: msg.value,
            resolved: false,
            won: false
        });
        nextBetId++;
    }

    function resolveBet(uint256 index, bool won) external {
        require(bets[index].user == msg.sender, "Only the user who placed the bet can resolve it.");
        bets[index].resolved = true;
        bets[index].won = won;
    }
}
