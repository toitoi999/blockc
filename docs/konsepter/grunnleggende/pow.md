---
slug: pow
title: Proof of Work
authors: [toitoi]
tags: [greetings]
---

Proof of Work er en konsensusmekanisme som blir brukt av Bitcoin og Ethereum. Ethereum er i en prosess hvor de skal bort fra PoW og benytte PoS for å komme bort fra det store energikonsumet som man får ved PoW. 

## Hvordan fungerer PoW?
PoW er som navnet tilsier bevis på gjennomført arbeid. I utgangspunktet så kan beviset man fremviser være for et hvilket som helst arbeid. Det grunnleggende er at det må være mulig å ha konkurranse og arbeidet som utføres må kunne skaleres. Det er litt abstrakt å snakke om bevis på gjennomført arbeid, så la oss gå gjennom hvordan det fungerer.

Proof of Work er algoritmen som bestemmer vanskelighetsgraden og reglene for det arbeidet som minere gjør, mens mining er selve arbeidet med å validere transaksjoner og hekte de på blokkjeden. 

For Ethereum så har alle blokkene:
- Blokkvanskelighetsgrad - f.eks 3,324,092,183,262,715
- mixHash - f.eks 0x44bca881b07a6a09f83b130798072441705d9a665c5ac8bdf2f39a3cdf3bee29
- nonce - f.eks 0xd3ee432b4fb3d26b

Ethereum sin PoW protokoll heter Ethash og krever at minere må gjette og feile til de finner ut hva nonce er for blokken. For å finne nonce må de laste ned hele kjeden og kjøre den gjennom en matematisk funksjon. Dette gjøres om igjen og om igjen til de får riktig nonce. Når riktig nonce er funnet kan de andre sjekke dette ved å "taste" inn nonce i blokken og se at det stemmer. 

## Hvorfor delta?
De som gjetter på nonce vil ved riktig gjetting motta betaling i form av den tilhørende token til den blokkjeden man validerer. Når prisen på Bitcoin eller Ethereum går opp vil betaling bli høyere og det vil være mer attraktivt å delta. 

## Hvorfor så mye energi?
Fordi målet er å løse gjetteleken raskest og mer gjettekapasitet (mer datakraft) gir raskere gjetting så har det blitt om å gjøre og ha mest mulig datakapasitet (innenfor det som er lønnsomt). Det blir derfor brukt mye energi på mining av Ethereum og Bitcoin. 