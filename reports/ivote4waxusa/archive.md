## Archive of Reports

-- The following have been added to notion. This archive contains the updates submitted before july 2021

## June 2021

**Does your Guild have any new information to submit that impacts Technical Operations?**

Have most of the new internal hardware up and running for block signing as well as internal services and hope to finish up the last few to reopen our public endpoints soon (so when they get smashed into oblivion it won't impact our internal operations as much).

**Does your Guild have any new information to submit that impacts Product Development?**

Seeing a lower user count for the wax.stats.eosusa.news site but still around 700/day:

But that usage drop is probably related to our recent acquisition of the [awstats.io](http://awstats.io/) project/codebase that many people are using for that information, which is seeing around 2000/day:

Also still running cross-chain bridging oracle services for Alien Worlds between ETH and BSC chains.

Our AWButler service is still sending out 100s of NFTs daily running airdrop campaigns for the following projects:

- Ultrarares (30 NFTs/hour) - [https://wax.bloks.io/account/alienhorrors](https://wax.bloks.io/account/alienhorrors)Alien Worlds (1 NFT pack/day + 1 NFT pack/week for stakers ) - [https://wax.bloks.io/account/awpackdrops1](https://wax.bloks.io/account/awpackdrops1)
- ZombieWorlds (1 NFT/hour) - [https://wax.bloks.io/account/zombieworlds](https://wax.bloks.io/account/zombieworlds)
- Luminaya NFTs (1 NFT/3 hours) - [https://wax.bloks.io/account/luminayanfts](https://wax.bloks.io/account/luminayanfts)
- Kinderminers (1 NFT/24 hours) - [https://wax.bloks.io/account/aw.krown](https://wax.bloks.io/account/aw.krown)
- Bitcoin Babes (1 NFT/hour) - [https://wax.bloks.io/account/babe.army](https://wax.bloks.io/account/babe.army)
- CryptoStache (10 NFT/hour) - [https://wax.bloks.io/account/stachemining](https://wax.bloks.io/account/stachemining)
- Little Monsters (27 NFT/hour) - [https://wax.bloks.io/account/mercartdrops](https://wax.bloks.io/account/mercartdrops)
- Coneland (mix of many projects) (40 NFT/hr) - [https://wax.bloks.io/account/conelanddrop](https://wax.bloks.io/account/conelanddrop)

And more in the works to launch soon!

Created and ran initial drop process for NFT ownership (must own all 5 to receive airdrop).  Customizable and beginning to market to additional projects.  [https://aw.eosusa.io/awbutler/monsterpacks.html](https://aw.eosusa.io/awbutler/monsterpacks.html)

Continuing development of the new chain data indexing/reporting product (providing unique statistics for games/projects) as well as furthering the development of the AWButler service (recently added blacklisting due to bot complaints).

Working with several projects around the WAX ecosystem to help utilize the chain and provide services where we can many of the projects above in the AWButler list as well as others such as ArtVndngMchn who were working on creating a game with and others to add additional use/gamification to their NFTs.

**Does your Guild have any new information to submit that impacts Ecosystem Development?**

**Does your Guild have any new information to submit that impacts Community Engagement?**

Still continue to attend different streaming and podcast sessions with people and projects around the community and promote WAX and try to provide some technical insight to the token holders/gamers about things. And of course as always: assist guilds with creating and maintaining all their technical infrastructure

**Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**

## May 2021

**Technical Update:**

Still working to get all new hardware in place.  Still finding that when the endpoints are open to the public, they get pounded on mercilessly to the point they will collapse and working to isolate internal nodes for service applications separate from the public infrastructure to prevent the abuse from impacting the services we provide.  Also shifted all block production to dedicated hosted server until internal infrastructure upgrades are all settled in.

**Product Update:**

Our original AWStats site is still seeing 1000s of daily users:

Also arranged to take over another statistics site ([awstats.io](http://awstats.io/)) that has 15-20K daily users as the operator is struggling to keep infrastructure operational with the current load on the chain.

Running cross-chain bridging oracle services for Alien Worlds between ETH and BSC chains and found issue in DelphiOracle script (linked to server that died) and am properly feeding that again.

Our AWButler service is still sending out 100s of NFTs daily running airdrop campaigns for the following projects:

- Ultrarares (30 NFTs/hour) - [https://wax.bloks.io/account/alienhorrors](https://wax.bloks.io/account/alienhorrors)Alien Worlds (1 NFT pack/day) - [https://wax.bloks.io/account/awpackdrops1](https://wax.bloks.io/account/awpackdrops1)
- RaccoonBrands (1 NFT/hour) - [https://wax.bloks.io/account/raccoontrash](https://wax.bloks.io/account/raccoontrash)
- ZombieWorlds (1 NFT/hour) - [https://wax.bloks.io/account/zombieworlds](https://wax.bloks.io/account/zombieworlds)
- Luminaya NFTs (1 NFT/3 hours) - [https://wax.bloks.io/account/luminayanfts](https://wax.bloks.io/account/luminayanfts)
- Kinderminers (1 NFT/24 hours) - [https://wax.bloks.io/account/aw.krown](https://wax.bloks.io/account/aw.krown)
- ArtVndngMchn (1 NFT/hour) - [https://wax.bloks.io/account/artvndngmchn](https://wax.bloks.io/account/artvndngmchn)
- AnyObservation (35 NFT/hour) - [https://wax.bloks.io/account/airdrop.b1](https://wax.bloks.io/account/airdrop.b1)

Have about a half dozen more airdrops that are launching on our new drop services this month as well.  Due to the massive amount of data that's currently hitting the chain, I engaged a developer to create a custom application to better handle the data retrieval and processing (repo is private):

Additionally, other projects have reached out and expressed interest in collecting and processing their project data from the chain, so I have hired a full-time developer to begin creation of a larger statistics collection system to store and process custom project and game statistics for different projects around the ecosystem:

Found some issues within the RPC monitoring framework related to all the recent node issues/replacements that is impacting its ability to automatically pull and distribute the current nodes for testing.  Current framework is still continuing to test just not properly pulling in updated JSON information.

**Business Development:**

Working with several projects around the ecosystem to launch new services to provide to the chain's projects.  Recently started a 4-person player support help desk staff for Alien Worlds and in talks with other projects for similar services.  Worked with ArtVndngMchn to launch his project/pack sale and will be working to develop a gaming platform for his NFT project.  Continue working with TheUplift.World project to provide other projects needed services such as integrating their project into the Minecraft platform (working with LuminayaNFTs, Ultrarares, WiseWorlds, and Alien Worlds currently and more starting soon).

Recently hired a dedicated project manager/client relationship manager for all our projects to help keep track of everything (and hopefully be able to provide more comprehensive information to you guys about all our projects were working on! :))

**Community Engagement:**

Still continue to attend different streaming and podcast sessions with people and projects around the community and promote WAX and try to provide some technical insight to the token holders/gamers about things.  And of course as always:  assist different guilds with creating and maintaining all their technical infrastructure so we can have more endpoints around the network.

## April 2021

**Technical Update:**

As I'm sure you're aware, it's been quite a battle to keep everything running recently with the recent influx of traffic and then the increase in the use/abuse of public endpoints.  It's actually killed 2 of my physical hosts that were running WAX services (one block signing host and one state hist) and that's led to overstressing the remaining nodes and making every day a new battle.  Got one new i9 machine now in and dedicated to feeding the services, and have 3 more i9 machines en route to add additional horsepower to handle the loads.  We also have a new bare metal hosted server to be used for primary block production but it did not perform as well as needed so have to spend some time on it and have unregistered until all these hardware issues are addressed.  Added new member to the EOSUSA staff (Paul) to help administer the infrastructure and services we offer and probably bringing another onboard soon.

**Product Update:**

As we provide many statistics for the Alien Worlds game, our stats site has seen a massive increase in users (64K) pulling the game data were trending:

The AWButler airdropping service has also seen quite an increase in users:

Currently running many different NFT airdrops for users and actually brought on a developer to rewrite the AWButler service to better handle the massive amount of data and add additional features.

**Business Development:**

Also working on developing many different managed services for blockchain based games such as:

- Staffed help desk teams to assist games with end-user support
- Dedicated systems administration staff to assist with running required infrastructure
- Consultation and development services for implementing blockchain technology into their platform

Currently working heavily with Alien Worlds and TheUplift.World and onboarding many new projects with different artist and groups around the WAX ecosystem (UltraRare, Ken Bosak, Twerpz, and many other artist/groups that have launched or will launch on WAX)

**Community Engagement:**

Still doing occasional videos mostly related to the Alien World features but always promote the ease of use of the WAX chain/wallet as well as AtomicAssets for NFTS.  Recently been doing a series related to the upcoming Alien Worlds DAO election process where I interview the candidates and discuss the DAO concepts and features of gaming on the WAX blockchain. [https://www.youtube.com/c/AlienWorldsCommunity/videos?view=0&sort=dd&shelf_id=0](https://www.youtube.com/c/AlienWorldsCommunity/videos?view=0&sort=dd&shelf_id=0)

And as always, helped several teams work on either getting their Hyperion services up and running or repairing them as they had issues :)

## March 2021

**Technical Update:**

Been a pretty brutal month for infrastructure with all the recent fun we've had with double-producing causing wide-spread node outages :facepalm:  New hardware is coming online and ordered 3x more to further expand the farm to handle the new services.  Been syncing the Atomic API for weeks but had some issues and some of the new hardware is going to be for the Atomic API services to help with the indexing speed.  Also going to be spinning up a secondary Alienworld API for the internal AWButler services we offer as well as providing additional endpoints for the AW application if needed.  Had a complete corruption of our Hyperion cluster last month, so was working all month to reindex the complete chain and resume our history node services for public use.

**Product update:**

Had been seeing the normal daily usage rate of around 50+ users/day on the Stats sites, but have seen quite a bit of usage increase in the last few days due to being the stats provider for Alienworld's game stats and being referenced in their marketing and promotions.

WAXStats:

Our AWButler and reporting sites are also still seeing the normal 50+/day usage stats:

**Business Development:**

Still offering the LiquidApps and BOSIBC services on chain with nodes and support.  Been seeing a lot more interest in our AWButler NFT distribution services and last month sent out 1000s of NFTs for many different projects with several more projects/artists in discussions about utilizing the service for their NFTs/tokens.

Recently announced the creation of our new EOSUSA Games division whose primary focus is now providing consultation and services for many games/platforms outside the WAX/blockchain community to help integrate many of the great features blockchain (and WAX in particular) can bring to the gaming ecosystem.  Currently working on cross-project integration between Alienworlds (WAX) and TheUplift.World (Minecraft) as well as some other potentials that I can't mention yet.

**Community Engagement:**

This month have participated in many, many different web stream sessions with groups around the ecosystem to help promote some WAX-based projects as well as promote the core features of WAX helping games integrate the blockchain.  Co-hosted the KROWN Dacathon 2021 event with non-stop interviews/community chat sessions with different projects around the ecosystem with a heavy focus on gaming NFTs and on-chain governance (DAC/DAOs).

Krownlandia Channel (for most sessions; being uploaded): [https://www.youtube.com/playlist?list=PLlEIpeTz6YjfMLQxJADnhS6gK_IOSxNUb](https://www.youtube.com/playlist?list=PLlEIpeTz6YjfMLQxJADnhS6gK_IOSxNUb)

BP&Chill - [https://www.youtube.com/channel/UCpWtxCu4qGyVU0PMkq-9P8g](https://www.youtube.com/channel/UCpWtxCu4qGyVU0PMkq-9P8g)

[https://www.youtube.com/watch?v=jTNOnXknS2A](https://www.youtube.com/watch?v=jTNOnXknS2A)

And of course the normal TG support in the channels of users/projects needing technical assistance :)

## February 2021

**Does your Guild have any new information to submit that impacts Technical Operations?**

**Does your Guild have any new information to submit that impacts Product Development?**

**Does your Guild have any new information to submit that impacts Ecosystem Development?**

**Does your Guild have any new information to submit that impacts Community Engagement?**

**Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**

## January 2021

**Does your Guild have any new information to submit that impacts Technical Operations?**

Brought some of the new hardware online and started to build additional nodes for services/redundancy. Currently have 2 new AtomicAsset API nodes building; one syncing DB from scratch that's been running since December and one I'm working with Jona on to resolve issues when importing a Postgres DB for jumpstarting. Hoping to have API online soon to provide additional endpoints for accessing AA API info

**Does your Guild have any new information to submit that impacts Product Development?**

Still running [https://wax.stats.eosusa.news](https://wax.stats.eosusa.news/) and collecting statistics about all WAX nodes from around the world. Also added in some additional metrics about the AlienWorlds transactions, and that has caused the traffic to skyrocket (hard to tell them apart in usage logs now). Also, rehomed the tracking stats beginning of Jan, so it reset all counters, but seeing between 50-100 DAU and up to 600+ MAU (and haven't collected full month yet).

**Does your Guild have any new information to submit that impacts Ecosystem Development?**

Also have been developing a new site ([aw.eosusa.io](http://aw.eosusa.io/)) and products that focuses on extracting and providing game data for the Alienworlds game as well and a new service (AWButler - [aw.eosusa.io/awbutler](http://aw.eosusa.io/awbutler)) that can help non-technical (or super nerd) AW players with NFT airdrop promotions and other cross-project actions like token drops. The AWAbode sites are separate from the stats/dashboard site, and see just as much active DAU/MAU:

**Does your Guild have any new information to submit that impacts Community Engagement?**

Working with some projects to also cross-integrate their projects on other platforms with NFTs, initially focusing on the WCW user onboard experience and then NFT distrubution/features/etc.

- Working with Corey fromTheuplift.world in partnership with Uplift.art to integrate custom Minecraft world with WAX NFT ownership/integration and potential future integrations into other WAX projects/NFTs. [https://wax.atomichub.io/explorer/asset/1099514143432](https://wax.atomichub.io/explorer/asset/1099514143432)
- Working with Max from KROWN and BassMint to integrate non-WAX user engagement via NFTs in different projects such as music live streams (NFT claim links and future automated processing/actions via AWButler engine) [https://www.twitch.tv/bassmintchico](https://www.twitch.tv/bassmintchico)

Also still running all integration services we can such as:

- LiquidApps
- BOSIBC

**Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**

Always in the channels helping with node/Hyperion support.  Been making the rounds on several different podcasts/livestreams discussing many things EOSIO, but focusing a lot on the WAX projects and features, etc.

- Crypto10X: [https://www.youtube.com/watch?v=_0_FGV8ZtSY](https://www.youtube.com/watch?v=_0_FGV8ZtSY)
- EOSio Weekly: [https://youtu.be/9WMvmBGFeUQ](https://youtu.be/9WMvmBGFeUQ)

## December 2020

**Does your Guild have any new information to submit that impacts Technical Operations?**

Rolled in some additional hardware to spin up new nodes for supporting new APIs/services.

**Does your Guild have any new information to submit that impacts Product Development?**

[https://wax.stats.eosusa.news](https://wax.stats.eosusa.news/) is still grinding away collecting and distributing API stats. Still working to add additional JSON feeds of endpoint data for other projects to utilize in their projects. Not heavy usage but not a site most people use daily :)

**Does your Guild have any new information to submit that impacts Ecosystem Development?**

Still offering all LiquidApps services for the services utilizing those services.Also still run the BOSIBC nodes which are allowing projects to bridge over into the WAX ecosystem. Speaking with the Shipple/Chirp.la team about utilizing BOSIBC bridge to bring some tokens over to WAX and use them for community engagement/NFT assignments/etc.

**Does your Guild have any new information to submit that impacts Community Engagement?**

We're always around the TG chats providing support for users and other guilds with their technical questions/issues.  Even reached out to a few guilds personally to assist/notify them of issues/improvements to their infrastructure services when possible.

Also went on a few ChirpCast (live streams) and talked a bit about WAX features/games recently:

[https://www.youtube.com/watch?v=O_atU4w2L6k](https://www.youtube.com/watch?v=O_atU4w2L6k)

[https://www.youtube.com/watch?v=bYtCKgEwCSA](https://www.youtube.com/watch?v=bYtCKgEwCSA)

**Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**

## November 2020

**Technical Update:**

Still doing what we do and trying to run everything that can be run :)

**Product Update:**

Seeing decent regular usage:

Added initial JSON feeds for raw endpoint data based on fastest response times.  Look to be adding more advanced. customized feeds in near future:  [https://wax.stats.eosusa.news/d/PIHNIsoMz/json-feeds](https://wax.stats.eosusa.news/d/PIHNIsoMz/json-feeds)

Also implemented new, cleaned up layout for all sections of the site and added WAX logo branding

**Business Development:**

Still offering all LiquidApps services for the services utilizing those services.Also still run the BOSIBC nodes which are allowing projects to bridge over into the WAX ecosystem..

**Community Engagement:**

We're always around the TG chats providing support for users and other guilds with their technical questions/issues.

## October 2020

**Does your Guild have any new information to submit that impacts Technical Operations?**

Still running all the same services and continuing to offer hourly snapshot service for WAX even though points have been removed. Feeding all pairs on DelphiOracle contract. Focused mostly last month on enhancing internal monitoring/alerting for nodes.

**Does your Guild have any new information to submit that impacts Product Development?**

Resolve issues/enhance features for endpoint probing. Seeing decent usage of the site:

**Does your Guild have any new information to submit that impacts Ecosystem Development?**

Still offering all LiquidApps services and recently enabled ETH bridging services on mainnet services (therefore enabling them for use on the WAX networks as well).

Continuing to run BOSIBC nodes which are allowing projects to bridge over into the WAX ecosystem. Additionally, working with other projects on other chains (such as Vigor) to potentially integrate WAX via the BOSIBC contracts/services.

**Does your Guild have any new information to submit that impacts Community Engagement?**

We're always around the TG chats providing support for users and other guilds with their technical questions/issues.

**Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**

## September 2020

**Technical Update:**

Snapshot services now online at [https://wax.eosusa.news/snapshots](https://wax.eosusa.news/snapshots)

Completed the configuration of 2 completely independent Hyperion clusters to serve as a primary (multiple api, queuing, and elasticsearch clusters) as well as a failover cluster of nodes to allow failover to fully operational servers in the case of issues with the primary system.

We also completed the mainnet 2.0 upgrade and cutover to the WAX 2.0 code which has really helped solve many of the block signing issues we had been seeing. We have been consistently trying to identify why our nodes would randomly miss signing blocks when scheduled and it seemed no matter what I attempted to adjust, we continued to get lagged blocks which would cause our node to miss either some blocks or the entire round. Even after the complete internal shift to 2.0 nodes, we continued to see missed blocks until the completion of the entire network to 2.0 code, and almost instantaneously all of our missed block issues have been resolved.(along with most everyone else's according to the Aloha graphs). I won't deny that we occasionally have connectivity issues, but checking the Aloha graphs is pretty apparent that during this 2.0 shift the statistics for missed blocks is exceptionally higher due to the shifting of all nodes and should be taken into consideration when benchmarking everyone's block availability (especially since after the upgrade completion there has been a noticeable decline in the missing of blocks by all producers).

**Product Development:**

We continue to develop and add new features to the WAX Node Monitor to provide statistics for all the nodes throughout the WAX network (that we can find :)). In addition to addressing a few issues identified during continued testing, below are a few of the important new features we've added over the last month:

1. Additional Hyperion testing and metrics - We have added additional checks for all nodes to automatically detect if they are providing the Hyperion v2 history solution and then further check the health status of those services.
2. Endpoint versioning metrics - We now collect and display information about each node's nodeos version (as reported by the get_info endpoint) for all nodes
3. Probe statistics persistence - In V1, when the probes were restarted due to maintenance or issues, the calculations for the error counts were reset, but now all metrics are persistent across all probes upon service restarts
4. Centrally-managed endpoint list - Originally, all probes maintained a static list of endpoints to test (automatically generated but manually distributed) to prevent initial crossing of incorrect nodes into the polling, but this has been upgraded to all probes automatically fetching the list from a the central statistics server to better automate the automation of endpoints for polling.

More details about the new WAX RPC Monitor features can be found here: [https://medium.com/@eosusa.michael/new-features-for-wax-stats-eosusa-news-727e39f9070a](https://medium.com/@eosusa.michael/new-features-for-wax-stats-eosusa-news-727e39f9070a) and starting to see some regular traffic to to the site:

Active Users:

30 day: 92

7 day: 34

1 day: 15

We are also excited to have released our new WAX Resource Planner services ([https://waxrp.eosusa.news](https://waxrp.eosusa.news/)) that allow developers to better estimate/plan the WAX resources needed for their project. The front-end interface is an adaptation of the original EOS Resource Planner project developed by EOSNY, but has custom modifications to the back-end logic to allow for a more reliable operation behind the scenes from the original project release. The EOSUSA WAXRP github repo can be found at [https://github.com/eosusa/waxrp](https://github.com/eosusa/waxrp) although the majority of original code modifications for the project can be found on the following project's repo (maintained by our partners the Boid team) here in this commit: [https://github.com/telosrp/telosrp.github.io/commit/90ca5391c0432da214e464ce7c49738af9f32549](https://github.com/telosrp/telosrp.github.io/commit/90ca5391c0432da214e464ce7c49738af9f32549). The article announcing the release and features can be found here: [https://medium.com/@eosusa.michael/introducing-wax-resource-planner-f5b6bedf536c](https://medium.com/@eosusa.michael/introducing-wax-resource-planner-f5b6bedf536c)

**Business Development:**

Continue to offer the LiquidApps services on both the WAX Mainnet and Testnet and promote any dAPPs developing on LA to consider the WAX blockchain for it's platform. We recently participated in the testing of the LiquidApp services to bridge the ETH testnet with the Kylin EOSIO testnet and are excited to soon bring those features to the production WAX mainnet LiquidApps service offerings soon.

Also continue to run the nodes to support the BOSIBC services on WAX (2 nodes that regularly need updates for new features/bug fixes). Some projects have expressed interest and use of the BOSIBC services to bring their projects to the WAX blockchain from other EOSIO-based chains. According to Max Infield from KROWN:

"We're using BOSIBC sending funds to our account on WAX that pays out to NFTs on [simpledistributions.io](http://simpledistributions.io/)"

Transactions for the cross-chain transfers can be seen on our WAX IBC account here: [https://wax.bloks.io/account/eosusaibcibc](https://wax.bloks.io/account/eosusaibcibc)

**Community Engagement:**

As always, we are constantly engaged in the Telegram community chat rooms providing assistance to other guilds with their node/Hyperion questions and issues. Additionally, our article providing recommended steps/information for guilds to complete the 2.0.0 upgrade is still heavily used to instruct the guilds on suggested settings for their 2.0.0 WAX nodes.

## August 2020

**Technical Update:**

Had quite an interesting month with the lightning strike and subsequent power issues at our primary location. Ran generators for a week to allow the infrastructure to continue providing services even during the week-long outage. During the outage, our entire Hyperion database cluster services the history nodes corrupted, so I worked non-stop to repair the services and reindex the chain and are back online and providing 100% history information again. Also feeding ALL the DelphiOracle pairs (including the new WAXPEOS/WAXPETH pairs) at the fastest frequency (1 min).

**Product Development:**

We are excited to announce that we have partnered with the Boid team to develop our first WAX exclusive tool: the WAX Node Monitor system. It consists of custom probes being created all around the world and periodically polling all endpoints registered by the guilds for availability and relative speed to relation of particular regions. We are hoping this allows developers, users, and even the guilds themselves to now have visibility into the state of all WAX RPC nodes available for use (as well as some additional information about them).

Currently the system has 6 probes throughout the world (2 in NA, 2 in EU, 1 in SA, and 1 in AS) that are first collecting all the endpoints registered by the guilds in their bp.json information (or additionally the producerjson contract on chain) to create the list of endpoints for validations. They then (every 5 minutes) poll a selection of that node list from all the probes to gather a holistic view of the nodes in relation to being accessed from around the world. Currently all probes are self-managed but the probe code is open-sourced and in the future, community run probes will be added to allow for even more decentralized data to be collected about things.

We then developed a detailed research portal that allows all that information collected by the probe to be viewed and analyzed so users can determine the best node to use for the purpose needed. It provided summary information about the fastest nodes globally and also by region (probe) and additionally breaks the information down per endpoint to allow for specific node statistics/research.

In addition to the RPC node statistics, we are providing some initial validation tests of the history/Hyperion services and providing a detailed breakdown of those services as well as polling the DelphiOracle price feed contract and displaying statistics about that information as well. We have many additional features currently being developed to enhance the information being collected about the nodes as well as new information to collect/report on, so stay tuned! :)

Here is an article detailing more of the features of the WAX Node Monitor system: [https://medium.com/@eosusa.michael/introducing-wax-stats-eosusa-news-76cdc66d8916](https://medium.com/@eosusa.michael/introducing-wax-stats-eosusa-news-76cdc66d8916)

**Business Development:**

Continue to offer the LiquidApps services on both the WAX Mainnet and Testnet and promote any dAPPs developing on LA to consider the WAX blockchain for it's platform. Also continue to run the nodes to support the BOSIBC services on WAX (2 nodes that regularly need updates for new features/bug fixes). Have also relayed information about getting WAX listed on the new MetalX exchange but have not heard anything back after providing the initial information to the team.

**Community Engagement:**

As always, we are constantly engaged in the Telegram community chat rooms providing assistance to other guilds with their node/Hyperion questions and issues. Additionally, our article providing recommended steps/information for guilds to complete the 2.0.0 upgrade is still heavily used to instruct the guilds on suggested settings for their 2.0.0 WAX nodes.

Continue to release videos detailing the recent news events on the WAX blockchain as well as other technical articles related to the WAX RPC Monitor released this month:

[https://www.youtube.com/watch?v=mABBLMy-RMA](https://www.youtube.com/watch?v=mABBLMy-RMA) 

[https://deweb.eosusa.news/EOSUSA/posts/YvKgrMX3WJFaivuxUSPW](https://deweb.eosusa.news/EOSUSA/posts/YvKgrMX3WJFaivuxUSPW) 

## July 2020

No updates

## **June 2020**

**Technical Update:**

Showing all greens + all accolades on the Nations Validator site as always

Hyperion nodes are definitely being used and believe we're feeding some of the GPK sites recently due to some indexing depth issues other nodes had that we did not experience. Also worked with most of the other WAX guilds to assist them with upgrading their Hyperion nodes to the latest version.

**Product Development:**

We aren't a dev shop, but we run everything we can get our hands on! Below are all the WAX services we are involved with:

- DelphiOracle Pricefeed

We feed both the WAX mainnet and testnet DelphiOracle price feeds and have done so since long before it was cool or points were awarded for it XD We also don't feed from the template cryptocompare endpoints (we use CoinGecko) to provide variation to the feed data. We also feed all the DelphiOracle contracts throughout the ecosystem so are more familiar with things than just running the canned scripts provided.

- Spectrum Streaming Services - [www.spectrumeos.com](http://www.spectrumeos.com/)

We have partnered with EOSTribe to provide the hardware/hosting for the Spectrum websocket streaming services offered on WAX. They wrote it, we run it.

**Business Development:**

We have instrumental in getting the following services integrated into WAX:

- LiquidApps

We initially deployed and configured the LiquidX product on both the WAX mainnet and testnets and recently have coordinated the resignation of the contract keys to the initial oversight WAX DSP group (EOSUSA, EOSphere, & MaltaBlock). Due to this, all other LiquidApp DSP providers can now offer their LiquidApp services to dAPPs on the WAX blockchain.

- BOSIBC

We work closely with the BOSIBC group and helped coordinate the deployment of the BOSIBC services to WAX mainnet (and run one of the 2 current relay nodes). dAPPs can now utilize WAX in their cross-chain initiatives (such as BOID now accepting WAX donations).

**Community Engagement:**

We are always extremely active in the Telegram technical channels providing assistance to whomever needs it. Our article providing assistance for guilds to complete the WAX 2.0 is still being used as a reference point for the guilds:

[https://medium.com/@eosusa.michael/wax-going-eosio-2-0-ec2597e506a5](https://medium.com/@eosusa.michael/wax-going-eosio-2-0-ec2597e506a5)

We have also been working with LiquidApps to promote the WAX/LiquidApps partnership and bring awareness to WAX.and why we chose WAX first to integrate with LiquidX:

[https://www.youtube.com/watch?v=Z_jnwxdgmDY&t=380](https://www.youtube.com/watch?v=Z_jnwxdgmDY&t=380)

We recently released a great promo video about the GPK project and its partnership with WAX: [https://www.youtube.com/watch?v=ob-Nwy-WTvU](https://www.youtube.com/watch?v=ob-Nwy-WTvU)

Also working with some YouTube/Exchange contacts to provide information about all the chains we are involved with and also publishing the information to several mediums once complete later today: [https://medium.com/@eosusa.michael/breakdown-of-all-eosusas-blockchains-18b76a330e8f](https://medium.com/@eosusa.michael/breakdown-of-all-eosusas-blockchains-18b76a330e8f)

## April 2020

No updates provided

## March 2020

**Does your Guild have any new information to submit that impacts Technical Operations?**

**Does your Guild have any new information to submit that impacts Product Development?**

**Does your Guild have any new information to submit that impacts Business Development?**

**Does your Guild have any new information to submit that impacts Community Engagement?**

**Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**

## February 2020

**Does your Guild have any new information to submit that impacts Technical Operations criteria?**

Working with Sw/eden to help develop Hyperion API infrastructure more robust/reliable

**Does your Guild have any new information to submit that impacts Product Development criteria?**

Working with LiquidApps to deploy LiquidX services to WAX blockchain. Draft as not released yet: [https://medium.com/@eosusa.michael/liquidapps-liquidx-live-on-wax-testnet-2b0f80dd5dbe](https://medium.com/@eosusa.michael/liquidapps-liquidx-live-on-wax-testnet-2b0f80dd5dbe)

**Does your Guild have any new information to submit that impacts Geographic Distribution criteria?**

Updated JSON to include Panamanian BP infrastructure

**Does your Guild have any new information to submit that impacts Business Development criteria?**

NO

**Does your Guild have any new information to submit that impacts Community Engagement criteria?**

Pushing to release more WAX ecosystem videos out to help promote recent advancements. [https://www.youtube.com/watch?v=m_TAcND27WM](https://www.youtube.com/watch?v=m_TAcND27WM)

**Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**

Know things are still a work in progress, thanks for doing what you do!

**What email would you like a form submission confirmation to be sent?**

[eosusa.michael@gmail.com](mailto:eosusa.michael@gmail.com)

## January 2020

## Pre-Evaluation Form Responses

### Please provide some information regarding when and how your Guild got involved with the EOSIO or WAX ecosystem. Links to resources are helpful.

We've been following WAX (and running nodes/Hyperion) since the chain launched. [www.ibreakurshit.com](http://www.ibreakurshit.com/) :)

### Has anyone in the Guild previously produced blocks on an EOSIO or DPOS network in the past? If so, which ones and what nodes did they help operate?

Actively signing blocks on Jungle, Kylin, Telos, ORE, INSTAR, UOS, and Lynx :) Standby on countless more...

### If your Guild has a warrant canary, please provide the link to it.

### If your Guild has a live video inspection of your infrastructure, please provide the link to it.

Yes, provided walkthrough of infrastructure.

### Please provide information regarding projects that your Guild is working on to improve the WAX ecosystem. Information about plans, progress, and timelines is helpful. This includes projects that have been submitted for the WAX Guild Showcase program.

We're spinning up additional nodes and layer-2 services to service the WAX blockchain and its projects

### Please state the jurisdiction your Guild is domiciled in, as well as the jurisdiction that your Guild's nodes are deployed in.

Primary site/org Greenville, SC, USA but secondary location in Panama City, Panama

### Please share any usage metrics you have, if any. This includes data specific to applications and user activity driven to the WAX ecosystem as a result of your Guild's efforts.

Currently fielding around 400 WAX Hyperion reqs/hour, and 800 WAX P2P reqs/hour

### If possible, please share information about businesses that your Guild is engaging with that are seeking to learn about and leverage the WAX ecosystem in some way.

### Please share any information regarding community building efforts championed by your Guild. This can be facilitating translation of documentation, organizing meetups, and otherwise driving social and human engagement within the platform.

### Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?

I'm sure it's a thankless job, but thanks for doing what ur doing :)