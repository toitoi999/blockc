---
slug: smarte-kontrakter
title: Smarte kontrakter
authors: [toitoi]
tags: [greetings]
---

Smarte kontrakter i blokkjedeverden referer til program som er lagret på blokkjeden og som utfører forhåndsbestemte handlinger når gitte forhold inntreffer. Det vil si at de er autonome systmer som opererer uten innblanding fra mennesker. Alle applikasjoner som er bygget på blokkjeden som du treffer på nettet har en smart kontrakt, og alle smarte kontrakter er open source slik at alle som vil kan se hvordan de er skrevet og låne fra dem. Dette legger grunnlaget for [komponerbarhet](composability), men gjør det også enklere for utenforstående å utnytte svakheter i kontrakten. 

Det var Ethereum som la grunnlaget for innføringen av smarte kontrakter på blokkjeder og har bidratt til at Ethereum er det største nettverket man har i dag. Uten smarte kontrakter hadde ikke kryptoverden vært det den er i dag. 

##### Et eksempel på en smart kontrakt

Et eksempel er en [desentralisert handelsplattform](dex) hvor alle skritt er automatisert. Når du veksler en token for en annen så vil kontrakten utføre handlingene som er predefinert i koden. Den ser hvor mye du skal veksle, du gir den visse parametre som slippage og tid det skal ta å validere, så handler den utfra de begrensningene. Når den er ferdig sitter du igjen med en mengde av den token du vekslet til. 

### Smartkontrakt risiko

Noe som ofte blir nevnt som en risiko innen krypto er smart contract risk. Det er ganske enkelt risikoen for at koden som er skrevet i den smarte kontrakten inneholder svakheter. Når smarte kontrakter blir skrevet brukes som regel programmeringsspråket Solidity. Der som i andre programmeringsspråk må man definere funksjoner. Det er to forskjellige risikoer man må se etter i sånn kontrakten er skrevet, hvorvidt kontrakten har svakheter som kan benyttes av utenforstående eller kontrakten har blitt satt opp for å bli utnyttet av den som har skrevet den. En svakhet som har vært utnyttet tidligere er at interne funksjoner har blitt lansert som eksterne som har gjort utenforstående i stand til å tappe kontrakten for tokens. På den andre siden har du kontrakter som er satt opp slik at eieren av kontrakten kan minte flere tokens når de måtte ønske. 