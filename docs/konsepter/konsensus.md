---
slug: konsensus
title: Konsensus
authors: [toitoi]
tags: [greetings]
---

Konsensusprotokollen er tilsvarende operativsystemet for en blokkjede. En blokkjede sin konsensusalgoritmer er spesielle fordi de definerer hvordan disputter mellom nodes som mottar informasjon som ikke samsvarer skal avgjøres. 

Reglene må ta høyde for tre aspekter:

1. Oppetid, som sørger for at data alltid kan legges til og nettverket aldri låser seg
2. Enighet, alle nodene i nettverket til slutt er enig om de samme verdiene
3. sikkerhet, som sørger for at de verdiene man er enig om ikke bryter med protokollen

Forskning har vist at det er umulig for et distribuert, permissionlee nettverk å tilfredstille alle de tre aspektene samtidig. Dette vil si at blokkjeden må bestemme seg for hvilket aspekt som er det viktigste og designe den i henhold til prioriteringene.