---
slug: composability
title: Composability - Money legos
authors: [toitoi]
tags: [greetings]
---

Composability eller komponerbarhet er den generelle evnen til komponentene i et system til å rekonfigureres til større strukturer, og å bruke output fra en komponent som input for den neste. Det vil si at man kan bruke arbeidet andre har gjort når man lager nye applikasjoner, litt som å stå på skuldrene til andre. Composability går også under navnet money legos (se beskrivelse lenger ned). Det snakkes gjerne om tre forskjellige typer komponerbarhet:

#### Syntactic composability

Alle smarte kontrakter i en protokoll er offentlige og kan bli forespurt av hverandre, som betyr at all programvarelogikk kun trengs å utarbeides en gang. 

#### Atomic composability

Flere transaksjoner på tvers av applikasjoner kan grupperes i en enkelt transaksjon og utføres sammen. Hvis en av operasjonene feiler vil hele transaksjonen feile. Det fører til at man kan splitte en transaksjon på tvers av forskjellige handelsplattformer og stemme på flere DAOer samtidig uten at man risikere at bare halvpartene av transaksjonene går gjennom. Det er ganske kjedelig å låne masse tokens for å utføre en transaksjon, og så feiler den transaksjonen som gjør at man sitter igjen med masse tokens som man må betale tilbake. Da vil man automatisk ha et tap i form av den avgiften man betalte for å låne tokens. 

#### Morphological composability

Interne funksjoner og grensesnitt er kompatible med hverandre.  

Hvordan har dette blitt til? Som så mye annet er det Ethereum som har bidratt mye. ERC-20 standarden, som ble foreslått av Fabian Vogelsteller i november 2015 og formalisert i september 2017, sier hvordan tokens skal oppføre seg, inkludert grunnleggende funksjonalitet som overføring av tokens og godkjenning for bruk av tokens. Det har gjort det slik at tredjeparter enkelt kan støtte enhver token som følger ERC-20 standarden. 

Videre er alle smarte kontrakter utplassert på blokkjeden og fungerer uten involvering av mennesker. Det vil dermed si at hvem som helst kan lansere sin egen smarte kontrakt og hvis den følger standarden vil den kunne prate med alle de andre smarte kontraktene. 

### Hva betyr dette i praksis? 

Som nevnt i første avsnitt blir composability også kalt for money legos. Grunnen til det er at man kan bruke de forskjellige applikasjonene for å utføre transaksjoner simultant, eventuelt for å stable rentebetalende funksjoner oppå hverandre. 

La oss ta et eksempel på stabling av rentebetalende funksjoner:

Du har 5000 NOK i kontoen din. Du kjøper 500 USDT (vi opererer med en vekslingskurs på 10 NOK til 1 USD). Du tar disse 500 USDT og overfører de til anchor protocol hvor du låser de, og minter 500 aUSDT. Dine 500 USDT har en APR på 19,5%. Du tar disse aUSDT og veksler de mot MIM på [Abracadabra](https://abracadabra.money/) og så staker du dine MIM hos Abracadabra for 15% rente ekstra. Altså, kan du stable flere forskjellige rentebetalende instrumenter "oppå" hverandre for å øke dine utbetalinger.

### Risiko ved å stable:

Det er alltid risiko involvert når man gjennomfører transaksjoner på blokkjeden. For eksempelet over er risikoen knyttet til de smarte kontraktene og hvorvidt de opptrer som de skal og til hvorvidt stablecoinsene holder sin peg mot USD. Hvis du benytter tokens som ikke er knyttet mot en fiat vil peg risikoen bli byttet mot eksponering mot markedsrisiko.