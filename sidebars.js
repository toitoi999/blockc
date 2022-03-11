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
        'konsepter/amm',
        'konsepter/arbitrasje',
        'konsepter/bitcoin',
        'konsepter/bro',
        'konsepter/coin-mynt',
        'konsepter/cryptopunks',
        'konsepter/dao',
        'konsepter/emissions',
        'konsepter/epoch',
        'konsepter/evm',
        'konsepter/fork',
        'konsepter/frontrunning',
        'konsepter/impermanent-loss',
        'konsepter/liquiditypools',
        'konsepter/lommebok',
        'konsepter/mev',
        'konsepter/nft',
        'konsepter/pos',
        'konsepter/sandwich-angrep',
        'konsepter/slippage',
        'konsepter/smarte-kontrakter',
        'konsepter/thedao',
        'konsepter/token',
        'konsepter/veDAO',
        'konsepter/veTokens',
        'konsepter/yieldfarming',
        'konsepter/ytelse'
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
