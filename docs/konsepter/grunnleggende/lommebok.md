---
slug: lommebok
title: Lommebok   
authors: [toitoi]
tags: [greetings]
---

Det første du trenger for å ta del i dette universet er en digital lommebok. Det finnes også fysiske lommebøker man kan kjøpe som Tezos, men for deg som begynner er det helt greit å starte med en digital lommebok.

En digital lommebok består av en offentlig nøkkel, en privat nøkkel og en sikkerhetsnøkkel bestående av tolv ord (mnemonik [https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)).

Dette er en forenklet versjon av hvordan det henger sammen, men som gjenspeiler viktigheten av hver enkelt.

Når man skal opprette en lommebok starter man med generering av en mnemonic på 12 ord. Denne mnemonicen blir tilfeldig generert av en maskin (man kan generere den selv ved bruk av en terning) og denne følger BIP-39 spesifikasjonen.

Den private nøkkelen blir deterministisk generert fra vår mnemonic. Det vil si at når man har mnemonicen kan man generere den private nøkkelen, men man kan ikke gå den andre veien. En mnemonic kan generere flere private nøkler.

Den offentlige nøkkelen blir generert fra den private ved å bruke elliptisk kurvepunkttillegg. Kort fortalt så vil den private nøkkelen tilsvare et punkt på en ellipse. Man tar dette pre-definerte punktet G og multipliserer med den private nøkkelen og sitter igjen med den offentlige nøkkelen.

Altså:

Mnemonic (sikkerhetsnøkkel) à privat nøkkel à offentlig nøkkel

Man bruker cryptografi for å generere mnemonic og for å generere den private nøkkelen. Fordi sikkerheten går fra venstre til høyre, vil en som innehar din mnemonic ha tilgang til både den private og den offentlig nøkkelen din. I sammenheng med en lommebok så er mnemonicen den man bruker for å gjenopprette en lommebok hvis du trenger det. Alle kontoene du har i en lommebok vil ha sin egen private og offentlig nøkkel. Gir du noen tilgang til den private nøkkelen din får de tilgang til den kontoen som har den spesifikke private nøkkelen. Den offentlige nøkkelen blir brukt som din adresse. Hver gang du skal sende tokens/coins til din lommebok vil du benytte den nøkkelen (blir ofte referert til som din offentlige lommebok).