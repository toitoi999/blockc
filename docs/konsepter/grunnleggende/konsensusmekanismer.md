---
slug: konsensus
title: Konsensus
authors: [toitoi]
tags: [greetings]
---

Konsensus betyr helt enkelt at det må være generell enighet. For blokkjeder har konsensus blitt satt til 51% som betyr at 51% eller mer av nettverket må være enig om noe for at det skal være konsensus. 

### Hovedkonsensusmekanismer

1. [Proof of Work](./pow.md)
2. [Proof of Stake](./pos.md)

Disse er ikke konsensusprotokoller alene, men for enkelhet så omtales de ofte som det. De er Sybil resistente mekanismer og i stand til å bestemme hvem som produserte den siste blokken. 

:::tip

Et Sybil angrep er når en bruker utgir seg for å være flere brukere.

:::

For at det skal være en konsensusprotokoll så må den bestå av både mekanismen (PoW) og for eksempel *Longest Chain*, den er da kjent som "Nakamoto Consensus". 

### Hva gjør de spesielle?

En konsensusmekanisme er spesiell fordi den definerer hvordan disputter mellom partene (nodene) som mottar informasjon som ikke samsvarer skal avgjøres. Konsensumekanismene må også ta høyde for Byzantine Fault Tolerance som er et konsept som kommer fra [Byzantine Generals Problem](/konsepter/viderekommende/byzantinegenprob.md). De fleste blokkjedene har sine egne måter å løse dette problemet på og 

**Reglene må ta høyde for tre aspekter**

>#### Oppetid
>
>Sørge for at data alltid kan legges til og nettverket aldri låser seg. De er da avhengig av å ha nok noder og kapasistet nok til å behandle transaksjoner. 
>
>#### Enighet
>
>Alle nodene i nettverket til slutt er enig om de samme verdiene. 
>
>#### Sikkerhet
>
>Sørge for at de verdiene man er enig om ikke bryter med protokollen

Det er umulig for et distribuert, desentralisert nettverk som ikke krever godkjenninger å tilfredstille alle de tre aspektene 100% samtidig. Dette vil si at de som designer blokkjeden må bestemme seg for hvilket aspekt som er det viktigste og designe den i henhold til prioriteringene.



### Andre konsensusmekanismer

- Utsatt Proof of Work
- Leaset Proof of Stake 
- Proof of Authority
- Proof of burn
- Delegert Proof of Stake
- Hybrid PoW/PoS
- BFT PoS