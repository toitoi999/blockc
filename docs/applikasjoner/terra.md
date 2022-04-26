---
slug: terraprotokoll
title: Terra protokollen
authors: [toitoi]
tags: [greetings]
---

Terra er en protokoll for algoritmiske stablecoins bygget på Cosmos. Protokollen lager stablecoins som følger prisen på fiat valutaer ved bruk av arbitrasje insentiver og desentralisert orakel stemming. Protokollen består av to hovedtokens Terra og Luna

The Terra protocol is a protocol for algorithmic stablecoins. The protocol creates stablecoins that track the price of fiat currencies using a blend of arbitrage incentives and decentralized Oracle voting. The protocol consists of two main tokens, Luna and Terra. Users can spend, exchange, trade or save Terra stablecoins - such as UST, SDT and KRT - directly on the Terra blockchain, while Luna provides holders with staking and mining rewards and governance power. The protocol is built for scalability and resilience through all kinds of market conditions.

Stablecoins are the main feature of the Terra protocol, which uses market dynamics of demand and supply to maintain price peg. If Terra’s demand is low and supply large, Terra price decreases, and vice versa. The protocol ensures the supply and demand of Terra is always balanced, leading to a stable price. Stability is achieved through the protocol algorithmic market module, which incentivises the burning-minting process through arbitrage.

When the price of Terra is high with respect to its peg (expansion), the protocol incentivizes users to burn Luna and mint Terra. The supply of Terra gets larger, balancing supply and demand. Luna keeps being burnt - thus, becoming scarcer and more valuable - and new Terra are minted until Terra reaches the target price. The contrary happens in a phase of contraction.

All in all, Luna is the variable counterpart to the stable asset Terra. By modulating supply, Luna’s price increases as the demand for stablecoins increases.

## Validators & Consensus on the Terra blockchain

Terra blockchain is a PoS blockchain powered by Cosmos. Validators are the miners of the blockchain, they verify each transaction on the network and ensure security and accuracy. and is secured by a verification system. Validators propose blocks, vote on their validity, and add each new block to the chain in exchange for staking rewards from transaction fees. Users can stake their Luna to validators in exchange for staking rewards. Validators also play an important role in the governance of the Terra protocol.

The Terra blockchain is secured through the [Tendermint](https://docs.tendermint.com/) verification system.

Here is how it works:

1. A validator called a proposer is chosen to submit a new block of transactions.
2. Validators vote in two rounds on whether they accept or reject the proposed block. If a block is rejected, a new proposer is selected and the process starts again.
3. If accepted, the block is signed and added to the chain.
4. The transaction fees from the block are distributed as staking rewards to validators and delegators. Proposers get rewarded extra for their participation.

This process repeats, adding new blocks of transactions to the chain. Each validator has a copy of all transactions made on the network, which they compare against the proposed block of transactions before voting. Because multiple independent validators take place in consensus voting, it is infeasible for any false block to be accepted. In this way, validators protect the integrity of the Terra blockchain and ensure the validity of each transaction.

The protocol allows only the top 130 validators to participate in consensus. A validator’s rank is determined by their stake or the total amount of Luna bonded to them. This process is called staking. Any user can stake its Luna tokens to a validator, thus becoming a delegator, adding to validator’s weight in the process. In return, each delegator receives a portion of the translation fees as staking rewards. Staking rewards come from two sources: gas and swap fees.

Staked Luna are always owned by Delegators. Once delegators stake (i.e. bond) their Luna to validators, bonded tokens (bLuna) are generated, allowing holders to trade them or use them as collateral on other protocols in the network, such as [Anchor](https://anchorprotocol.com/) and [Mirror](https://mirror.finance/). Delegators can unbond or unstake their Luna using the undelegate function in Terra Station. The unbonding process takes 21 days to complete: this process ensures stability and discourages volatility. During this period, the unbonding Luna can’t be traded, and no staking rewards accrue. Alternatively, they can re-delegate their tokens to another validator instantly. When a user redelegates staked Luna from one validator to another, the validator receiving the staked Luna is barred from making further redelegation transactions for 21 days.