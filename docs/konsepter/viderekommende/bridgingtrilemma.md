---
slug: bridgingtrilemma
title: The bridging trilemma
authors: [toitoi]
tags: [greetings]
---

The bridging trilemma består natrulig nok av tre elementer. Når man designer en bro for å sende tokens fra en protokoll til en annen ønsker man å oppnå umiddelbart garantert oppgjør, tilhørende tokens (tilgang til ikke-wrapped tokens) og cross-chain composability. 

### Umiddelbar garantert oppgjør (finality) 

Det vil si at det er garantert at den transaksjonen man setter i gang vil gå gjennom og at man sitter igjen med tilsvarende enheter på destinasjonkjeden etter gjennomført transaksjon som man hadde på opprinnelseskjeden. 

Som regel er dette gjort ved å låse tokens på opprinnelseskjeden og så minter man tilsvarende på destinasjonskjeden. På den måten unngår man eventuelle utfordringer med manglende likviditet. Utfordringen med denne løsningen er at når man ønsker å overføre tokens fra et nettverk til et annet må man først gjennomgår en mintingprosess, fra en kjede til den neste, for så å gjennomføre veksling til en annen token. Prosessen deles dermed inn i flere manuelle steg som må gjennomgås. 

### Tilhørende tokens

Tilgang til ikke wrapped tokens vil si at man får tokens som hører til den kjeden man overfører til. En wrapped token eller syntetisk token er en [omsettlig kvittering](./omsettligkvittering.md), altså et bevis på at man eier tilsvarende token men det er ikke den faktiske token. For å få dette til må det være tilgang til enhetlig likviditet, alle kjedene deler likviditet fra samme likviditetspool og det ikke er noen overlapp i likviditeten. 

Dette kan oppnås ved at det opprettes likviditetspooler på hvert nettverk. Når en token overføres fra et nettverk til et annet så "settes den inn" i LPen til den kjeden det overføres fra og "tas ut" fra den LPen som er på kjeden man overfører til. Utfordringen med dette er at når nye kjeder legges til broen vil antall likviditetspooler det er behov for skaleres kvadratisk (for hvert nettverk *n* som legges til gruppen av nettverk *N* trengs det *(N+n)^2* likviditetspooler). Dette fører til en fragmentering av likviditet samt et stort behov for likviditet som ikke er optimalt.

Et annet alternativ er å ha en samlet likviditetspool for alle nettverkene. Å ha en samlet LP byr på en utfordring med tanke på umiddelbart garantert oppgjør. Hvis to eller flere utfører transaksjoner samtidig kan likviditeten brukes opp slik at en eller flere transaksjoner ikke går gjennom.  

### Cross-chain [composability](/konsepter/grunnleggende/composability.md) 
Muligheten til å få smarte kontrakter til å snakke med hverandre på tvers av blokkjeder. 

Som et eksempel så muliggjør dette automatisering av en prosess fra A til C, hvor A er overføring av token OLD fra en kjede til en annen, B er veksling av token OLD i annen token NY, C er sette inn token NY i en likviditetspool på detinasjonskjeden. 

The bridging trilemma oppstår fordi det ikke har vært mulig å oppfylle alle tre kravene når broer har blitt konstruert.

[Omnichainbroer](/konsepter/grunnleggende/bro.md) har forsøkt å løse dette.

