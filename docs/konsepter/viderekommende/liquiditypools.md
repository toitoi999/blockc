---
slug: liquiditypools
title: Liquidity pools
authors: [toitoi]
tags: [greetings]
---

Liquiditypool (LP) kan direkte oversettes til å være et likviditetsbasseng som faktisk er et ganske treffende ord for hva LP er. En LP består stort sett av et par av tokens, men det finnes også 3pools og 4pools. En LP er der en AMM henter likviditet til en DEX. Det er sånn at for å kunne ha en automatisert handelsplattform må det være tilgjengelig likviditet til alle tider. Hadde det ikke vært likviditet tilgjengelig hadde handelen tatt veldig lang tid. For å sørge for at det er tilgengelige tokens å veksle til og fra ble det opprettet LPs.

### Så hvordan fungerer en LP?

Det er to sider av en LP – du har de som fyller på poolen og sørger for at det alltid har så mye «vann» og klor som det trenger for at man skal kunne bade. Også har du den andre siden som er de som ønsker å bade og betaler en avgift for å gjøre det. Sammenligningen er ikke helt perfekt, så la oss dykke ned i hva som skjer.

De som tilbyr likviditet har to tokens. De binder så disse sammen i et par. Størrelsesforholdet mellom disse varierer etter hvilken pool man ønsker å delta i. De blir så satt inn på en konto. For å gjøre dette får de betalt. Denne betalingen varierer etter hvilken pool man deltar i. 

Den mest vanlige formen for betaling er:

- i form av en prosentvis utbetaling i den token som plattformen opererer med
- samt en prosentvis andel av avgiftene som tas fra de som veksler i det paret du gir likviditet til. 
- Altså hvis du er på Curve sin plattform får du utbetalt CRV (Curve sin token) + en prosentvis del av avgiften. 

### Risiko med LP


Det er en nedside ved å delta i en LP som kalles [impermanent loss](./impermanent-loss). Du går da glipp av oppsiden ved en stigning i prisen på den token som stiger i verdi. Det skjer fordi en token som stiger i verdi er mer attraktiv og den blir da vannet ut i den poolen du er i. 

