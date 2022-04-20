---
slug: sandwich-angrep
title: Sandwichangrep
authors: [toitoi]
tags: [greetings]
---

Ahh, fiffig ord som godt fanger meningen når man vet hva det handler om. I denne sammenheng kan man se på det som å bli sandwich taklet i f.eks ishockey. Du blir taklet fra to kanter samtidig, noe som gjør dobbelt så vondt. 

For å kunne forstå det og se det for deg i en kryptokontekst må vi gå dypere ned i materien. 

Du har bestemt deg for å veksle en token i en annen som du ser er underpriset på en DEX. Du legger inn handelen og venter spent på at den skal gå gjennom. Det som skjer når du legger inn handelen er at den blir sendt til en [mempool](./mempool.md) for å vente på å bli validert. Når den sendes til denne poolen kan hvem som helst se transaksjonen. Mens den ligger og venter på å bli validert så scanner boter etter priser på tokens som er gunstige. En bot plukker opp at du har lagt inn en handel og ser at prisen er lav og at det dermed er mulig å gjøre arbitrasje. Den [frontrunner](./frontrunning.md) deg og får kjøpt det du ønsket å kjøpe. Måten den sniker i køen på er ved å betale en litt høyere avgift for den samme transaksjonen til de som validerer. Når boten kjøper så presses prisen opp. Denne økningen i pris gjør det attraktivt for boten å selge igjen. Og den personen boten selger til der deg. Din transaksjon går gjennom til en høyere pris. Det skjer ved at [slippage](konsepter/grunnleggende/slippage.md) på transaksjonen øker. 

Kort oppsummert:
1. Du legger inn et kjøp/veksling
2. Bot plukker dette opp
3. Bot "stjeler" din transaksjon og bytter den med sin egen
4. Bot selger din transaksjon til deg til en høyere pris

