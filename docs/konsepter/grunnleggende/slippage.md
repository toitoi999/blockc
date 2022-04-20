---
slug: slippage
title: Slippage
authors: [toitoi]
tags: [greetings]
---

Forventet prisøkning/fall basert på handelsvolum og tilgjengelig kapital. 

## Tradisjonell handelsplattform
Når du kjøper tokens på en børs så ser du den åpne ordreboken. Du legger da inn det du ønsker å kjøpe/selge for og venter på at noen andre matcher det du kjøper/selger for. Hvis du ikke blir matchet fordi prisen går opp/ned når du ønsker å kjøpe/selge må du enten vente på at prisen endrer seg eller så må du avbryte handelen og legge inn en ny til en annen pris. 

## Desentralisert handelsplattform

Når du handler på en automatisert børs er det ingen åpen ordrebok. Det vil si at børsen lar deg veksle tokens basert på den best tilgjengelige prisen den finner. Du må derfor legge inn noen parametre for å gjennomføre transaksjonen slik at den vet hva du er villig til å betale hvis prisen den finner ikke er helt identisk til det du får opplyst. 

![Veksling på sushi](/img/sushi3.png "Veksling på Sushi Swap")

Du må legge inn antall du ønsker å kjøpe. Du vil få opplyst en pris. Hvis du klikker på tannhjulet får du opp avanserte instillinger. Der vil du kunne justere slippage. Den er i prosent og reflekterer den prisendringen du er villig til å godta.

Ved små handler er det lav slippage, det samme gjelder hvis det er dyp likviditet. Har du store handler og lav likviditet vil slippage være stor. Dette kan bli utnyttet av boter som [frontrunner](/konsepter/viderekommende/frontrunning.md) og gjennomfører [sandwichangrep](/konsepter/viderekommende/sandwich-angrep.md). 
