---
slug: rollups
title: Rollups
authors: [toitoi]
tags: [greetings]
---

## Plasma

Plasma er som en sidekjede, men som er knyttet til hovedkjeden. Disse sidekjedene er som kopier av hovedkjeden. Transaksjonene i disse sidekjedene blir samlet sammen i grupper og så blir noen av disse gruppene stemplet og innlemmet i hovedkjeden. Man får da økt sikkerhet. For å sikre at disse transaksjonene er korrekte benyttes det fraud proofs som fungere ved at det tas stikkprøver av transaksjonene for å sjekke at de er korrekte. Alle transaksjoner kan bli utfordret opp til 7 dager etter transaksjonen har funnet sted. Utfordringen med denne metoden er at hvis en transaksjon blir utfordret vil man måtte gå hele veien tilbake til sidekjeden for å sjekke om den stemmer eller ikke og det tar en uke før en transaksjon er hugget i stein.

## Optimistic rollups

Fungerer på samme måte som plasma, men hvor plasma kun sender noen transaksjoner til hovedkjeden sender optimistic rollups alle transaksjoner i form av et forslag til endring av state for hovednettet. Informasjonen som blir sendt kan valideres ved hjelp av fraud proofs og alle transaksjoner kan bli utfordret i ettertid på samme måte som Plasma. Optimistic rollups baserer seg på at alle transaksjoner er korrekte og optimistic rollups er derfor et treffende navn. 

La oss pakke det ut litt mer. Det at den sender forslag om endring av state kan veldig forenklet bli forklart som at etter at alle transaksjonene har blitt registrert er dette den oppdaterte statusen. Det kan sammenlignes med å si at status er for eksempel 2 til å begynne med. Så blir det foretatt operasjoner som legger til 1, 4, 7, 9, 2, og 4 som da sammen med 2 blir 29. Alle disse kalkulasjonen blir ikke gjort på hovedkjeden, den sender bare endring av status fra 2 til 29. Hvis hovedkjeden ønsker å sjekke at det er riktig å endre fra 2 til 29 så gjøres det med et matematisk bevis (fraud proof). Den slipper dermed å gå gjennom alle transaksjonene som er gjort og trenger bare sjekke beviset. Et fraud proof kan se ut som hashen av en rekke transaksjoner (som det gjør for Bitcoin). 

### Fordelen 

Fordelen med optmistic rollups er at transaksjonshastigheten kan skaleres opp veldig samtidig som selve valideringen er mindre tidkrevende og kostnaden knyttet til det går ned (i form av lavere gas/avgifter). 

### Ulempen
Ulempen er at fordi de er optimistiske så kan de bli utfordret i ettertid og det tar derfor lengre tid å fullføre transaksjoner i selve kjeden. 

## Zero-knowledge rollups

ZK rollups er tilsvarende Optimistic rollups i det at alle transaksjonene blir registrert på egne kjeder for så å poste endring av status/state til hovedkjeden. Der de er forskjellige er at ZK rollups genererer det som kalles for [zero knowledge proofs](./zkproof.md) med hver state change de sender. Dette er bevis som kan løses umiddelbart for å validere at transaksjonene er korrekte. Det fører til at transaksjonene kan verifiseres umiddelbart og det derfor ikke er noen venteperiode.

### Fordelen
Fordelen med ZK-proofs er at transaksjonene kan verifiseres umiddelbart og det ikke er noen venteperiode

### Ulempen
Ulempen er at det tar litt lenger tid enn optimistic rollup fordi det må genereres ZK-proofs.



