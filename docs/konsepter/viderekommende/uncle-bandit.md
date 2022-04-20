---
slug: uncle-bandit
title: Uncle Bandit
authors: [toitoi]
tags: [greetings]
---

Festlig navn, ikke fullt så festlig utfall. En uncle bandit er en som utnytter at en transaksjon blir minet som en uncle (nå heter det ommer) blokk. Når en transaksjon eller en gruppe/bunt transaksjoner blir minet som en uncle blokk faller de utenfor kjeden. Da er de tilsvarende en mempool i det at alle kan se transaksjonene før de er verifiserte. Måten transaksjoner blir utsatt for forskjellige angrep på er ved å gå gjennom alle transaksjoner som ikke er verifisert/validert enda og se etter avvik fra pris, store transaksjoner, eller transaksjoner gjort av en kjent adresse. Så utnyttes dette ved å erstatte disse transaksjonene med sin egen og enten gjøre arbitrasje eller “stjele” plassen i køen og få kjøpt noe som andre skulle kjøpe.

En uncle bandit er en som går gjennom de blokkene som har blitt uncled. Altså valdiert samtidig som en annen blokk og så blitt forkastet. Finne transaksjoner av interesse og bytte ut en av disse med sin egen. Brukt i sammenheng med en sandwich transaksjon.

