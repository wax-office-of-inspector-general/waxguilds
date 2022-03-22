## Archive of Reports

-- The following have been added to notion. This archive contains the updates submitted before july 2021

## June 2021

**Does your Guild have any new information to submit that impacts Technical Operations?**

We where voted into a Top 21 Guild Spot for the first time this month and so far everything went very well. We missed one round at the first day in the active producing position while testing our fallback-solution in several different scenarios. CPU latency was in the middle field the whole month and everything worked great. Unfortunately at the beginning of the month there was a problem with [tools.ledgerwise.io/](http://tools.ledgerwise.io/) which reported our services/APIs as offline while all API’s where online and healthy and [validate.eosnation.io](http://validate.eosnation.io/) reported everything fine as well (this was directly reported to kaefer as well, who can confirm we have been online and available). Unfortunately our webiste was offline on the 18. of June and therefore also the bp.json was not available, which lead in a situation where tools.ledgerwise as well as validate.eosnation havn’t been able to run the tests on our infrastructure.

**Does your Guild have any new information to submit that impacts Product Development?**

We are still refactoring the UI of Liquid Universe while adding more and more functionallity, the game currently has about 25-30 different ingame-actions from placing constructables on „on-chain procedually generated planets“ over mining and producing resources and goods, bartering and trading etc. to sending ships through the galaxy etc. Unfortunately he demo is currently offline as we are moving the infrastructure of our private chain to a different hoster (pls contact @cmadh on tg if further info, screens or proof of progress is needed).

We are officially taking over EosSharp (C# and Unity3D-compatible implementation of EosJs) as it’s not maintained by Scatter anymore, a actively maintained Version can be found

[https://github.com/liquidstudios/eos-sharp](https://github.com/liquidstudios/eos-sharp)

, some further extensions and modifications will be published in the upcoming month (currently polishing these up)

[Confidential]

**Does your Guild have any new information to submit that impacts Ecosystem Development?**

[Confidential]

Pls. see previous answer for additional information on partnerships and business-opportunities + products coming with them.

**Does your Guild have any new information to submit that impacts Community Engagement?**

We are active in several public channels and provide assistance on various topics specifically everything related development of WAX-based games using Unity3D. Apart from that we are providing assistence/are consulting several individuals and projects in private and other channels like Discord, Slack and Microsoft Teams. Pls see previous answers for partnerships and opportonities/products and services we are working on to deliver value tot he community.

**Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**

no.

## May 2021

**Does your Guild have any new information to submit that impacts Technical Operations?**

We have massively scaled up our infrastructure, updated various WAX-nodes and now provide full V1-History, Hyperion (V2) and the AtomicAssets-API with high availability. We now also push price-feeds via the Delphi Oracle.

**Does your Guild have any new information to submit that impacts Product Development?**

##LiquidUniverse and LiquidCombat##

Constant progress with LiquidUniverse and LiquidCombat. We are currently re-engineering the entire UI, constantly adding more functions and integrating AtomicAssets and SimpleAssets via an NFT bridge.

The C# AtomicAssetsClient compatible with the .NET framework and Unity3D is as good as finished, we are writing test. It is open source at

[https://github.com/liquidstudios/AtomicAssetsApiClient](https://github.com/liquidstudios/AtomicAssetsApiClient)

.

We are actively working together with Bountyblok, have ported the Bountyblok-Client to Unity3D and are planning a port of

[https://wax.giftnft.io/](https://wax.giftnft.io/)

as well. Currently we are planning a sample game together. The client is now open source and available here:

[https://github.com/liquidstudios/BountyblokUnity3D](https://github.com/liquidstudios/BountyblokUnity3D)

We have published the code of our C#-port of the EOSIO Signing Request: Open Source Code here:

[https://github.com/liquidstudios/EosioSigningRequestSharp](https://github.com/liquidstudios/EosioSigningRequestSharp)

Unity3D Anchor-Wallet Package still in development (currently closed source).

Dfuse Unity3D package ready but also closed source because of the big USP. Businesses should feel free to contact us about the package.

We have started with AtomicMarket for Unity3D and .NET.

Hyperion socket IO for Unity3D and .NET (planned in detail, not started yet)

Wax-Cloud-Wallet for Unity3D and .NET is discontinued for now as there is no information from WAX. 

We have also started implementing our own LiveReader with realtime socket connection (similar to dfuse and hyperion services) specifically for gaming. (Currently closed source)

**Does your Guild have any new information to submit that impacts Ecosystem Development?**

**Does your Guild have any new information to submit that impacts Community Engagement?**

**Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**

## April 2021

# Pre-Evaluation Form Responses

### Please provide some information regarding when and how your Guild got involved with the EOSIO or WAX ecosystem. Links to resources are helpful.

Our team currently consists of 6 people, 4 of whom have been part of the EOSIO community since the very beginning (Corvin Meyer auf der Heide, Trang Le Bozon, Dallas Johnson, Kilian Thamm). The team members have been part of various projects (Karma, Eos-DAC), have advised various projects, have been official mentors at official EOS hackathons, have participated in EOSIO-related hackathons and made it to the top 3, are top contributors on eosio.stackexchange and much more

### Has anyone in the Guild previously produced blocks on an EOSIO or DPOS network in the past? If so, which ones and what nodes did they help operate?

wax-testnet (active producer), jungle-testnet (testing), private chain(multiple nodes for over a year)

### Please provide information regarding projects that your Guild is working on to improve the WAX ecosystem. Information about plans, progress, and timelines is helpful. This includes projects that have been submitted for the WAX Guild Showcase program.

Wir arbeiten seit über einem Jahr an den 2 Spielen "Liquid Universe" und "Liquid Combat".   **Liquid Universe Outline** 

Strategy Space-MMO on a public blockchain "Build your own empire in a growing universe."  Populate various planets, mine resources and produce goods, build ships, trade with other players, participate in events, complete challenges and earn tokens, wage war, join combats.   Almost every asset (planets, ships, resources etc.) will be tradable in-game and on NFT marketplaces. Every action that changes something in the game-world goes through the blockchain and is validated by it (even the planets themselves, including the underlying 3D-mesh are generated on the chain).   There are no central servers, no infrastructure that we host on our own like API nodes or the like. The whole game relies on the the availability of EOSIO and a dfuse-node and nothing more.  Community/token holders will be able to influence the evolution of the universe via a DAC/DAO, scale the economy, and add things like planet types, resources, ships, features, etc.  

**Liquid Combat Outline** 

Battle Royale like MMO Space Combat on a public blockchain "Fight against others and win to earn (NFTs, Tokens others)"  Players use the space ships and parts(weapons, engines, boosters etc.) (NFTs) that can be built in Liquid Universe or purchased on marketplaces to assemble their ship, with which they then participate in Battle.   The game takes place on a 2-dimensional and pseudo-three-dimensional map.   In the future, other guilds/dapps/projects/companies should be able to create rules for their own battles (e.g. only certain ships or ships with certain skins) and host them.  

*General**  

Both games are part of the Liquid Metaverse which is based on cross-game assets to increase the utility behind the assets. More games are planned for the future.  Both games are also based on many years of experience and implement fundamentally, groundbreaking new techniques that we have been working on and refining over the last year to push blockchain gaming to a new level.   (We would be happy to show you the current state personally)  None of the games have been publicly marketed yet and no asset sale has taken place. We aim to go public only when we can provide a usable product, a demo version, as we want to keep the risk for the users as low as possible and traditional players make up a large part of our target group.  

**Libraries, Packages, SDKs** 

We are working on a number of libraries, packages and SDKs to onboard traditional Game Developers to EOSIO-based chains and to make their life easier, including: 

- dfuse-GraphiQl for Unity3D (done) - dfuse-WS for Unity3D (done)
- Anchor-Wallet for Unity3D and .NET (in progress, mostly done)
- EOSIO-Signing-Request for Unity3D (in progress, mostly done)
- AtomicMarket and AtomicAsssets for Unity3D and .NET (planned in detail)
- Hyperion socket IO for Unity3D and .NET (planned in detail)
- Wax-Cloud-Wallet for Unity3D and .NET (planned, waiting for WAX to release new Version and Documentation) and maintain EosSharp internally (built by Scatter but no longer officially maintained)

We will release the individual packages over time, currently we give them to developers/companies on a per-request-basis. We are completely self-funded and need to monetize our business, and ensure maintenance and development before we open-source the the mentioned software. Offering these packages on a per-request-basis currently lets us increase our customer-base for the blockchain-gaming consulting-arm we are working on in addition to Games and other Tech.  I could go on for hours but I will leave it at that...

### Please state the jurisdiction your Guild is domiciled in, as well as the jurisdiction that your Guild's nodes are deployed in.

Company is based in Mauritius, Nodes are located in Germany.

### If possible, please share information about businesses that your Guild is engaging with that are seeking to learn about and leverage the WAX ecosystem in some way.

Kogs/RFOX-Games, Tivoli Cloud (Fork of High Fidelity), [Newlife.ai](http://newlife.ai/), Ministry for Digitalization lower saxony (germany), blockchain-kompetenznetzwerk germany (student organization)

### Please share any information regarding community building efforts championed by your Guild. This can be facilitating translation of documentation, organizing meetups, and otherwise driving social and human engagement within the platform.

One goal of our metaverse and cross-game assets is to integrate as many community participants as possible. So there should be different third-party based skins (from dapps, networks, artists, companies from the community) that can be applied to the ships. In addition, LiquidUniverse has been developed so that themed or third-party based planets can be added. We are also planning "Astronauts and Commanders" avatar cards that can be applied to Factories, Mines and Ships and would like to highlight and honor important members of the community by customizing avatars and names on specific cards.  Furthermore, in the future (as soon as we have brought our portfolio up to the necessary level) we plan to make and publish meetups, public calls, tutorials and the like on the topic of blockchain gaming, but currently the focus is still on the tech itself.

### Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?

- The link for "Make intro blog post based off this guide." doesn't work.

- It would have been nice if I could have uploaded pictures or small videos of our games.

All criteria are specific to the WAX network and ecosystem unless otherwise stated.