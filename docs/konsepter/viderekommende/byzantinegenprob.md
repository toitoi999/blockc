---
slug: byzantinegeneralsproblem
title: Byzantine Generals Problem
authors: [toitoi]
tags: [greetings]
---

En av de fundamentale utfordringene i et distribuert datasystem er koordinering mellom en samling maskiner hvor hvilken som helst av maskinen kan opptre skadelig eller ikke fungerer. 

Se for deg at en Byzantinsk hær har omringet en fiendtlig by. Hæren er delt inn i flere grupper hvor hver gruppe har sin egen general. Disse generalene må legge en felles plan for hvordan de skal angripe den fiendtlige byen og dette må de gjøre med sendebud. En eller flere av generalene kan være forrædere, og ønsker å forvirre de andre, og det er ingen god måte å finne ut av hvem av dem det er. Dette problemet er det som kalles for Byzantine Generals Problem. 

Problemet ble først artikulert av [SIFT](https://lamport.azurewebsites.net/pubs/byz.pdf "Byzantine Generals Problem") på 1970 tallet i forbindelse med problemer i sanntid for kommersielle flygninger og ble navngitt av Lamport, Shostak og Pease i 1982.

Planen man legger er i denne sammenheng algoritmen. Denne algoritmen skal garantere at

- alle lojale generaler bestemmer seg for den samme planen
- en liten del av forrædere ikke kan få generalene til å ta i bruk en dårlig plan
- de lojale generalene følger de spesifiserte reglene i algoritmen
- de lojale generalene blir enige uavhengig av hva forræderene gjør
- de lojale generalene blir enige om en spesifikk og gjennomførbar plan

Problemet kan fremstå som veldig enkelt, men fordi man ikke kan vite hvilken informasjon som er korrekt når den sendes er det mer komplekst enn det man vil tenke. 

I krypto refereres det ofte til Byzantine fault eller Byzantine Fault Tolerance (BFT) når det handler om Byzantine Generals Problem. 

BFT refererer til hvordan man skal løse Byzantine Generals Problem, eller mer presist hvordan algoritmen fungerer. Det finnes mange forskjellige måter å løse problemet på og det har resultert i mange forskjellige algoritmer som Honeybadger, Ouroboros, Tezos, Casper, etc. 