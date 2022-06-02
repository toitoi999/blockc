---
slug: perp
title: Perpetual Futures
authors: [toitoi]
tags: [introduksjon]
---

Før vi dykker ned i hva perpetuals er så frisker vi opp i hva en Future er. En Future er en kontrakt på levering av noe i fremtiden på en gitt dato hvor prisen på det som skal leveres er satt når kontrakten blir konstruert. En Future er et derivat og representerer derfor et underliggende objekt. Dette objektet kan være aksjer, indekser, råvarer, tokens, osv.

Futures handles på børser og kan kjøpes og selges som man ønsker. For å handle disse kontraktene setter man inn en del av kontraktens verdi på en konto som sikkerhet (margin). Hvis prisen på det underliggende synker vil man måtte sette inn mer på kontoen som sikkerhet, mens hvis det stiger vil man kunne ta ut mer. Denne sikkerheten kan sammenlignes med egenkapitalen i et huslån. Går prisen på huset ditt opp vil egenkapitalen stige. Du kan da velge å refinansiere for å kjøpe en bil f.eks. 

Med futureskontrakter vil du få en margin call når marginen din går under en viss sum. Hvis du ikke har mer midler til å sette inn som sikkerhet blir posisjonen din oppløst og tapet ditt blir realisert. Sitter man på store posisjoner kan det få store konsekvenser i markedet og for de som sitter på posisjonene. Nylig ble Archego et offer for dette og i 1998 ble hedgefundet Long Term Capital Management et offer for det. LTCM ble styrt av blant annet Myron Scholes en av de som kom opp med Black Scholes-modellen for opsjonsprising. 

Perpetuals er futureskontrakter som 1) ikke har en utløpsdato, 2) prisen i kontrakten er lik markedsprisen og 3) det ikke er noen form for oppgjør. De er derfor futureskontrakter som ikke er veldig like sine tradisjonelle brødre og søstre. Så hvordan fungerer de?

En perpetual er en kontrakt hvor man handler i delta. Delta er endring i prisen på det underliggende og enighet vil si at den ene parten tror prisen vil gå en vei, mens den andre mener at den vil gå den andre veien. Det vil si at du har to sider av kontrakten som speiler hverandre. La oss si at kontrakten er for den som ønsker å gå long BTC med 10x giring. Hvis du setter inn 1 BTC som margin har du i teorien en kontrakt på 10 BTC. På den andre siden av kontrakten har du en som shorter BTC som også sette inn 1 BTC. 

Bevegelsene i prisen til BTC vil resultere i at en av sidene vil måtte overføre BTC til den andre. Hvis prisen på BTC beveger seg mer enn 10% opp vil den som har shortet BTC måtte betale ut den som er long. Grunnen til at det skjer og at det ikke er mulig å sette inn mer BTC er fordi det ikke finnes en sentralisert enhet som kan garantere for midlene hvis den som skal betale ikke har midler til det. For aksjer og andre produkter hvor man handler med giring har man det som kalles for et clearing house, som er et selskap som overvåker posisjoner og sender ut margingvarsler når man ikke har tilstrekkelig sikkerhet lenger. 

Fordi det eneste som er regulert i en perpetualskontrakt er hva det underliggende er og hvor mye giring man bruker kan kontrakten løpe for alltid. Når en av partene ønsker å gå ut av kontrakten kan posisjonen selges og man vil gjøre opp det som skyldes. 