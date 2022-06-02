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
      'Konsepter': [
        'konsepter/introduksjon',
        {
          type: "category",
          label: "Grunnleggende",
          link: {
            type: "generated-index",
            description:
              "Her vil du kunne sette deg inn i de grunnleggende konseptene i kryptouniverset. Det er ikke en komplett oversikt og den vil bli oppdatert fremover. Har du noen innspill er det bare å si i fra så kan det legges inn!",
            keywords: [
              'konsepter/grunnleggende',
            ],
          },
          items: [
            'konsepter/grunnleggende/airdrop',
            'konsepter/grunnleggende/arbitrasje',
            'konsepter/grunnleggende/bro',
            'konsepter/grunnleggende/bayc',
            'konsepter/grunnleggende/composability',
            'konsepter/grunnleggende/cryptopunks',
            'konsepter/grunnleggende/dao',
            'konsepter/grunnleggende/dex',
            'konsepter/grunnleggende/doublespending',
            'konsepter/grunnleggende/dutchauction',
            'konsepter/grunnleggende/emissions',
            'konsepter/grunnleggende/epoch',
            'konsepter/grunnleggende/fork',
            'konsepter/grunnleggende/gaming-guilds',
            'konsepter/grunnleggende/gas',
            'konsepter/grunnleggende/ico',
            'konsepter/grunnleggende/konsensusmekanismer',
            'konsepter/grunnleggende/lommebok',
            'konsepter/grunnleggende/minting',
            'konsepter/grunnleggende/multi-sig',
            'konsepter/grunnleggende/nft',
            'konsepter/grunnleggende/orakel',
            'konsepter/grunnleggende/play-to-earn',
            'konsepter/grunnleggende/pos',
            'konsepter/grunnleggende/pow',
            'konsepter/grunnleggende/rugpull',
            'konsepter/grunnleggende/satoshi',
            'konsepter/grunnleggende/slippage',
            'konsepter/grunnleggende/smarte-kontrakter',
            'konsepter/grunnleggende/thedao',
            'konsepter/grunnleggende/token',
            'konsepter/grunnleggende/tokenomics'
          ]
        },
        {
          type: "category",
          label: "Viderekommende",
          link: {
            type: "generated-index",
            description:
              "Lær mer om de viderekommende konseptene innenfor krypto",
            keywords: [
              'konsepter/viderekommende',
            ],
          },
          items: [
            'konsepter/viderekommende/amm',
            'konsepter/viderekommende/asic',
            'konsepter/viderekommende/bridgingtrilemma',
            'konsepter/viderekommende/byzantinegenprob',
            'konsepter/viderekommende/curve',
            'konsepter/viderekommende/evm',
            'konsepter/viderekommende/flash-loan',
            'konsepter/viderekommende/frontrunning',
            'konsepter/viderekommende/hyperstructure',
            'konsepter/viderekommende/impermanent-loss',
            'konsepter/viderekommende/incentivizedliquidity',
            'konsepter/viderekommende/liquiditybonding',
            'konsepter/viderekommende/liquiditybootstrappingpools',
            'konsepter/viderekommende/liquiditypools',
            'konsepter/viderekommende/looplendbor',
            'konsepter/viderekommende/mempool',
            'konsepter/viderekommende/mev',
            'konsepter/viderekommende/omsettligkvittering',
            'konsepter/viderekommende/pyt',
            'konsepter/viderekommende/rollups',
            'konsepter/viderekommende/sandwich-angrep',
            'konsepter/viderekommende/sandwich-transaksjon',
            'konsepter/viderekommende/sharding',
            'konsepter/viderekommende/ssov',
            'konsepter/viderekommende/syntetisktoken',
            'konsepter/viderekommende/uncle-bandit',
            'konsepter/viderekommende/uncle-ommer-blokk',
            'konsepter/viderekommende/veDAO',
            'konsepter/viderekommende/veTokens',
            'konsepter/viderekommende/washtrading',
            'konsepter/viderekommende/yieldfarming',
            'konsepter/viderekommende/ytelse',
            'konsepter/viderekommende/zkproof'
          ]
        },
        {
          type: "category",
          label: "Big brain",
          link: {
            type: "generated-index",
            description:
              "Lær mer om de viderekommende konseptene innenfor krypto",
            keywords: [
              'konsepter/bigbrain',
            ],
          },
          items: [
            'konsepter/bigbrain/bigbrainkonsepter'
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Kom i gang!',
      link: {
        type: 'generated-index',
        title: 'Kom i gang!',
        description:
          "Lær mer om alle de forskjellige konseptene innenfor krypto",
        keywords: ['komigang'],
      },
      items: [
        'komigang/setteigang',
        'komigang/lommebok',
        'komigang/handelsplattform',
        'komigang/sendetokens'

      ],
    },
  ],
}

module.exports = sidebars;
