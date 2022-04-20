---
slug: zkproof
title: Zero-knowledge proof
authors: [toitoi]
tags: [greetings]
---

Zero-knowledge proofs er en kryptografisk metode som gjør en en person i stand til å bevise for en annen at et gitt utsagn er korrekt uten at den som beviser det må avsløre annen informasjon i tillegg til det faktum at utsagnet er sant. ZK-proofs ble først beskrevet ved MIT i 1985 hvor det ble demonstrert at det er mulig å bevise egenskapene til et tall uten å formidle hvilket tall det er eller annen informasjon om tallet. 

Et zk-proof må oppfylle to krav kjent som fullstendighet (completeness) og forsvarlighet (soundness). Fullstendighet refererer til beviserens evne til å demonstrere kunnskap om den relevante informasjonen med høy grad av sannsynlig presisjon. Forsvarlighet refererer til at validereren må være i stand til å pålitelig fastslå om beviseren er i besittelse av informasjonen. 

### La oss ta et eksempel

Live og Andreas får sjokolade i gave til jul. De ønsker å finne ut hvor mye den andre fikk, men vil ikke at den andre skal vite hvor mye de selv har fått. I dette eksempelet går vi ut fra at de har fått mellom 1 og 10 sjokolader, men det kan gjøres for et veldig mye større intervall. 

Det er 10 bokser med tall fra 1 til 10 på i et rom, alle med lås på og nøkkel i låsen. Live går inn i rommet og låser alle boksene. Hun tar så nøkkelen til boksen med antallet sjokolader hun har og putter den i lommen. De resterende nøklene kaster hun og går ut fra rommet. Andreas går inn i rommet. Han skriver et minustegn på 9 ark og et plusstegn på et ark. Han putter arkene i boksene, plussarket i boksene med antall sjokolader han har og minusarkene i de andre. Han låser boksene igjen og går ut fra rommet. Live kan så gå tilbake i rommet og låse opp boksen med det antallet sjokolader hun har. Ligger plussarket i den vet hun at de har samme antall, mens hvis det er et minusark har de ulikt antall. 

For blokkjeder vil man benytte zk-proofs for å verifisere data på blokkjeden uten å måtte vise den faktiske dataen. Det åpner døren for at man kan validere store mengder informasjon ved å kun bruke et proof. Det muliggjør at flere kan validere en blokkjede fordi man ikke må laste ned hele blokkjeden og kjøre den, men kan laste ned et proof av hele blokkjeden. 

