---
slug: liqstrappool
title: Liquidity bootstrapping pools
authors: [toitoi]
tags: [greetings]
---

Bootstrapping refererer til når man starter et selskap med lite kapital hvor kapitalen er ens egen eller kommer som inntekt fra selskap, og ikke ekstern finansiering. 

Likviditetsbootstrapping refererer til når et prosjekt bruker sin egen likviditet til å gjennomføre et tokensalg. Altså, all likviditet som er tilgjengelig for å bytte fra en token til deres token kommer fra selskapet.

Når man skal selge sin egen token er det flere måter å gjøre det på. Via en børs, en DEX, en IDO, privat salg, osv. Likviditetsbootstrapping kommer inn i bildet når man ønsker å gjøre et salg i form av lansering av et tokenpar eller et LP. Det man gjør i et vanlig LP er å lansere det med en fast fordeling av typen k=x*Y hvor k er en konstant. Da vil man sette en pris på forhånd før salget blir lansert fordi den ene token i paret har en gitt pris. Det som ofte skjer er at prisen blir satt for lavt og dette blir utnyttet av whales eller boter. Det fører til at token får en umiddelbar oppgang i pris for så å falle når den dumpes. Som et resultat får ikke vanlige brukere tilgang til token til en akseptabel pris og ender opp med å bli utgangsdumpet på av boter og whales. 

Hvordan løser en LBP dette? 

En LBP fungerer litt som en dutch auction på den måten at prisen blir satt høyt for så å falle. Vektingen mellom de tokensene er dynamisk, som vil si at størrelsesforholdet justeres. Altså, K=x1*y1 og k=x2*y2, k er ikke lik K. 

![LBP](/img/lbp.png "Liquidity bootstrapping pools")

I grafen over er det vektingen, men det kan også være pris på y-aksen. Fordi prisen blir satt høyt vil det ikke være muligheter for boter å utnytte salget. Selger kan også klare seg med lite DAI (i dette tilfellet) fordi den fallende prisen sørger for at det vil være lav handel i begynnelsen og den vil finne likevekt i prisen når kjøpere og selgere er fornøyd. 