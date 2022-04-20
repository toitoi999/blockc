---
slug: sandwichtrans
title: Sandwich transaksjon
authors: [toitoi]
tags: [greetings]
---

En sandwichtransaksjon er en bunt med transaksjoner sendte av et inidivd eller en bot. Sandwichtransaksjoner er sendt for å unngå inkludering i en mempool og blir dermed sendt direkte til en miner. Disse botene ønsker ikke å sende transaksjonene til en mempool fordi alle transasksjoner som går via en mempool er åpen for offentligheten før de har blitt verifisert. De vil derfor være utsatt for frontrunning og sandwhichangrep. 

For at disse transaksjonen skal bli verifisert er de avhengig av at all alle transaksjonene gå gjennom verifiseringen. Blir en transaksjon forkastet vil alle de andre blir ekskludert. Med mindre blokken de blir minet i blir en ommerblokk vil transaksjonene gå gjennom.

Sånn det fungerer er at boten (stort sett vil det være en bot) har en liste med transaksjone som den ønsker å få stemplet. På veien til den som skal mine transaksjonen går boten innom mempoolen og plukker opp transaksjoner. Den organiserer så transaksjonene i en gitt rekkefølge og gir de til mineren. Som belønning for å mine transaksjonen i en blokk får mineren en del av den belønningen som boten får for å få transaksjonene prossesert. Grunnen til at boten plukker opp transaksjoner fra mempoolen er for å unngå at de transaksjonen den skal få prosessert må gå via mempoolen eller at alle transaksjonene ikke blir prosessert og alle transaksjonene da ikke blir prosessert.

