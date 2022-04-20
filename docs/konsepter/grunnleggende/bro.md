---
slug: bro
title: Bro
authors: [toitoi]
tags: [greetings]
---

Når du skal overføre tokens fra en blokkjede til en annen må du benytte en bro. En bro er en applikasjon som gjør deg i stand til å "flytte" dine tokens fra et nettverk til et annet. Det er ikke egentlig en bro på den måten du tenker at en bro fungerer. Når du ser for deg en bro så tenker du nok at det du har i sekken får være med over på den andre siden. Men, det er ikke det som skjer. Det som skjer er at du gir dine tokens bort på den ene siden av broen, så går du over broen selv og på andre siden får du utdelt tilsvarende tokens som ikke er de samme, men er helt like. 

Når man for eksempel flytter Ether fra det som heter Ethereum Mainnet (hovednettet til Ethereum) og over til Fantom så får man det som heter wETH hvor w står for wrapped. Det du får utdelt er egentlig et verdipapir som sier at 1 wETH tilsvarer 1 ETH. Den etheren vi hadde på Ethereumsiden blir satt i et hvelv og tatt ut av sirkulasjon. Det er dermed like mye ether i sirkulasjon etter transaksjonen som før. 

Med et økende antall forskjellige blokkjeder er det behov for gode broer sånn at du kan overføre det du eier der du måtte ønske. Det har dessverre vist seg at broene har vært sårbare for angrep og tokens har blitt tappet fra disse. 

Det finnes og utvikles flere typer broer, men det er i hovedsak to forskjellige typer akkurat nå. Det er cross/multi chain og omnichain. 

### Cross-chain
Dette er den mest vanlige formen for bro, hvor det er en-til-en overføring av tokens. Du kan overføre dine ETH fra Ethereum til Solana, men du kan ikke overføre de videre til en annen protokoll. Det er to hovedmåter å sette opp disse broene på.

#### Middle chain approach
Dette er en applikasjon som ligger mellom de to kjedene og hvor kontrakten har tillatelse til å minte nye tokens på destinasjonskjeden. Beskjeder som blir sendt fra denne applikasjonen til destinasjonskjeden blir godtatt automatisk. Den er derfor utsatt for hacking og vi har sett mange utnyttelser av disse applikasjonene. 

#### On-chain light node
En light node er en node som kun lagrer blokkoverskrifter, og ikke all informasjonen i blokken. Når de er on-chain, på kjeden, så vil det si at de registrer alle blokkoverskriftene. I dette tilfellet så registrer destinasjonskjeden alle blokkoverskriftene til opphavskjeden og motsatt. Slik at når det overføres tokens fra en kjede til en annen så vil disse lette nodene kunne bruke bevis for å verifisere transaksjonen. De verifiserer da at brukeren som overfører har de tokens som ønskes overført og at brukeren har initiert overføringen. 

On-chain er en mye dyrere løsning enn middle chain fordi den krever logging av mer data og validering av den loggede dataen.  

#### Multichain
Multichain vil si at brukeren kan overføre tokens videre fra protokollen de først overførte til. Altså, ETH fra Ethereum, til Solana, og så til Fantom som et eksempel. 


### Omnichain

Tillater kommunikasjon på tvers av to protokoller samtidig og kan dermed bidra til å løse [the Bridging Trilemma](/konsepter/viderekommende/bridgingtrilemma.md). Det er særdeles nyttig hvis man ønsker å gjennomføre arbitrasje fordi det er færre steg man må gjennom. 

Omnichain løser utfordringene som en cross-chain bro ikke klarer. Det gjør den ved å sørge for at applikasjoner på en kjede kan snakke med de andre, den fungerer med andre ord som en integrasjon. Det gjør en side i stand til å snakke med den andre som medfører at transaksjonene kan automatiseres istedenfor å kreve manuell prosessering. Den legger også til rette for at det er en likviditetspool for alle kjedene. Det gjør at man kan få ut tokens tilhørende kjeden man sender fra og til uten å måtte gå veien om å wrappe en token. 

### Forskjellen for brukeren

Helt enkelt så kan forskjellen mellom de to broene for brukeren brytes ned til at med en omnichainbro så kan man med et enkelt trykk sette i gang en hel rekke transaksjoner, mens man med en cross-chain bro må utføre flere steg manuelt. Det vil også være en mye sikrere bro fordi den kan operere med enhetlig likviditet som det skal være vanskeligere å hacke. 
