/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  tutorialSidebar: [
    {
      type: 'category',
      label: 'Konsepter',
      link: {
        type: 'generated-index',
        title: 'Konsepter',
        description:
          "Lær mer om alle de forskjellige konseptene innenfor krypto",
        keywords: ['konsepter'],
      },
      items: [
        'konsepter/airdrop',
        'konsepter/amm',
        'konsepter/arbitrasje',
        'konsepter/asic',
        'konsepter/bitcoin',
        'konsepter/bridgingtrilemma',
        'konsepter/bro',
        'konsepter/byzantinegenprob',
        'konsepter/coin-mynt',
        'konsepter/composability',
        'konsepter/cryptopunks',
        'konsepter/dao',
        'konsepter/doublespending',
        'konsepter/emissions',
        'konsepter/epoch',
        'konsepter/evm',
        'konsepter/fork',
        'konsepter/frontrunning',
        'konsepter/gaming-guilds',
        'konsepter/gas',
        'konsepter/ico',
        'konsepter/impermanent-loss',
        'konsepter/konsensus',
        'konsepter/liquiditypools',
        'konsepter/lommebok',
        'konsepter/looplendbor',
        'konsepter/mempool',
        'konsepter/mev',
        'konsepter/minting',
        'konsepter/multi-sig',
        'konsepter/nft',
        'konsepter/omsettligkvittering',
        'konsepter/orakel',
        'konsepter/play-to-earn',
        'konsepter/pos',
        'konsepter/rugpull',
        'konsepter/sandwich-angrep',
        'konsepter/sandwich-transaksjon',
        'konsepter/satoshi',
        'konsepter/sharding',
        'konsepter/slippage',
        'konsepter/smarte-kontrakter',
        'konsepter/ssov',
        'konsepter/syntetisktoken',
        'konsepter/thedao',
        'konsepter/token',
        'konsepter/tokenbelonning',
        'konsepter/uncle-bandit',
        'konsepter/uncle-ommer-blokk',
        'konsepter/veDAO',
        'konsepter/veTokens',
        'konsepter/yieldfarming',
        'konsepter/ytelse',
        'konsepter/zkproof'
      ],
    },
    {
      type: 'category',
      label: 'Hvordan kryptoe',
      link: {
        type: 'generated-index',
        title: 'Hvordan kryptoe',
        description:
          "Lær mer om alle de forskjellige konseptene innenfor krypto",
        keywords: ['hvordan'],
      },
      items: [
        'hvordan/setteigang',
        'hvordan/lommebok',
        'hvordan/handelsplattform',
        'hvordan/sendetokens'
      ],
    },
  ],
}

module.exports = sidebars;
