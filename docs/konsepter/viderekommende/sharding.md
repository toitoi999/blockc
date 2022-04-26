---
slug: sharding
title: Sharding
authors: [toitoi]
tags: [greetings]
---

## Deling av database
Sharding er en metode for å distribuere data på tvers av datamaskiner. I enkelhet betyr det at man oppbevarer deler av en database et sted og en annen del et annet sted. Databasen deles horisontalt og all data i en rad går til en shard. 

![Horisontal deling](/img/horisontal.png)

Dette vil resultere i at alle transaksjoner som tilhører den etheren eller NFTen som inngår i dataen som blir fordelt vil leve på den sharden den blir sendt til, med mindre den deles på nytt.

## Fordelen
Fordelen med dette er at blokkjeden blir mindre når den deles og flere kan delta i validering av den. Når en blokkjede shardes vil det si at det laget (layer) som styrer tilgjengelig data splittes i flere biter eller shards. Selve godkjenningen av blokkene vil fremdeles bli gjort på hovedkjeden. 

Styrken til sharding er spesielt fremtredende når den blir kombinert med rollups. Når den kombineres med rollups vil shardene kunne sende små proofs som kan sjekkes av hovedkjeden. Den vil dermed ikke trenge å ha all data på hovedkjeden, kun disse proofsene som den kan sjekke. Dette vil muliggjøre langt flere transaksjoner enn det som er mulig når alt gjøres på den samme kjeden. 

Vitalik Buterin, grunnleggeren av Ethereum, har sagt at med sharding og rollups vil man kunne validere transaksjoner på mobiltelefonen. Det vil føre til at blokkjeden kan desentraliseres i mye større grad, samtidig som den vil kunne prosessere veldig mange flere transaksjoner (tbs)

