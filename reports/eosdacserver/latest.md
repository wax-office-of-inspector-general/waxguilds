### <ins>General</ins>

|  |  |
| --- | --- |
| Website | https://eosdac.io |
| Contact | pramod@dacoco.io |
| bp.json (mainnet) | https://eosdac.io/wax.json |
| bp.json (testnet) | https://eosdac.io/waxtest.json |
| producer (mainnet) | eosdacserver |
| producer (testnet) | eosdacserver |
| Guild Jurisdiction |  Switzerland (CH) |

### <ins>Noteworthy</ins>
- We have upgraded hyperion to latest version 3.3.10
- We noticed that some monitoring services reported downtime for our hyperion v2 node for example
https://wax.sengine.co/guilds/eosdacserver,  https://nodestatus.ledgerwise.io/wax/producer/eosdacserver?tab=errors
while others showed 100% uptime, for example https://wax.validationcore.io/stats/guild/eosdacserver
- We have added additional monitoring to catch these issues in future

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [] | [x] | [x] | [x] | [x] | [x] |  [x] |
| - | 15.7m req/month | 30k req/month | 7.5m req/month | 57k req/month |  16k req/month |



### <ins>Contributions</ins>

### Alien Worlds

**URLs**: Game site - https://play.alienworlds.io/, Github - https://github.com/Alien-Worlds

**List of SCs**: alien.worlds, stkvt.worlds, index.worlds, msig.worlds, m.federation, awlndratings, s.federation, federation, token.worlds, uspts.worlds, other.worlds, boost.worlds, dao.worlds

**Update**: 
In the latest update a new feature for staking for Tokenised Lore is introduced, where players can directly contribute and propose new lore or changes. [Read more here](https://alienworlds.io/blogs/tokenized-lore-staking-is-live-start-accumulating-vote-power-today/)

In the latest update 2.12.0 we introduced a Preview mode, a feature that allows new players to immerse themselves in the metaverse without the initial setup of a WAX wallet
Preview Mode provides a preloaded account with sufficient Trilium, NFTs, and Shards to give players a genuine feel of the game.
Read full report [here](https://alienworlds.io/blogs/%20%20alien-worlds-2-12-0-preview-mode/)

**Metrics**

Period: June 14, 2024 - July 13, 2024
Stats: 
UAW - 176.26k. Source: [Dappradar](https://dappradar.com/dapp/alien-worlds/?range-ds=30d)
Transactions - 160.44m. Source: [Dappradar](https://dappradar.com/dapp/alien-worlds/?range-ds=30d)
30 days NFT trading volume 2.57M WAX. Source: [Atomic Hub](https://atomichub.io/explorer/collection/wax-mainnet/alien.worlds)
New Unique wallets onboarded - 27k. Source : [EOSUSA WAX STATS](https://wax.stats.eosusa.news/d/IDpsWwxGz/alienworlds-active-miners?orgId=1&from=now-30d&to=now&refresh=1m&fullscreen&panelId=28)

---
### UAL plugin
UAL-WAX plugin: https://www.npmjs.com/package/@eosdacio/ual-wax. 

**Metrics**
Has an avg of ~125 Weekly downloads
---
### Galactic Hub
Galactic Hubs grants offer support to community-aligned projects with a clear focus, driving advancements in specific areas
Galactic Hubs Update https://alienworlds.io/blogs/galactic-hubs-april-update/

#### Released products

##### Unity SDK for Mobile
At Alien Worlds, open-source is a key pillar for the longevity and success of our metaverse. We’ve seen this come to life through the recently completed [Unity SDK for mobile](https://github.com/double-coconut/coconut-wax/tree/master), developed by Double Coconut, the creators of Milky Way Miner. This Unity SDK is a significant contribution to the entire WAX ecosystem, allowing any developer to provide a better user experience for mobile players by supporting in-game transactions of NFTs and fungible tokens. Open-source initiatives like this are important because they democratize access to powerful tools, fostering innovation and improvement of the Alien Worlds metaverse. 
Read Official announcement [here](https://blog.doublecoconut.com/2024/03/26/wax-sdk/)
[Demo](https://www.dropbox.com/scl/fi/psdh88nebqjac4lkmt7qn/CoconutWax_Sample.mp4?rlkey=f9ul1vsjyua5js5hlqma30udf&e=4&dl=0)
---
##### Lynx AI
In the expansive Alien Worlds metaverse, the integration of innovative technologies continues to transform player interaction and content creation. The latest tool making waves is the Lynx AI, now available in the official Alien Worlds Discord and over 30 community discords. [Read more here](https://alienworlds.io/blogs/creating-lore-in-alien-worlds-with-lynx-the-new-AI/)


##### Starblind Zero "Comic for Alien Worlds"
The eight page Web3 comic goes beyond traditional digital comics by incorporating LightningWorks technologies, setting a new standard for the future of comics.[Read more](https://blog.lightningworks.io/2024/01/15/starblind-zero-comic-for-alien-worlds/)

---
##### Msig Chat
Msig.chat is an innovative chat and DAO management web application, specifically designed for communities on the WAX blockchain, particularly those within Alien Worlds, read more [here](https://medium.com/@vladislavhramtsov/introducing-msig-chat-the-on-chain-chat-and-dao-management-app-a687fe08ad05)

---

#### Upcoming Releases

##### Mercenary Battle Grounds
Mercenary Battleground is a captivating strategy game that challenges players to defend their base against waves of enemy forces. Set in a fantasy world, the game offers a unique blend of tower defense and real-time strategy gameplay.
Mercenary Battlegrounds has been enriched through the support of the Galactic Hubs grant program. The grant’s development introduces a unique feature: the ability to stake specific Alien Worlds NFTs—such as the Grey Peacemaker, Enhanced Reptiloid, and Wise Ancient One. When staked, these NFTs become playable towers, each bringing its own strategic advantage to defend against the onslaught of enemy forces. This innovative integration adds an extra layer of depth and strategy, allowing players to leverage their Alien Worlds NFT collection directly within the game. [Read more here](https://mbground.gitbook.io/game)
[View Demo](https://drive.google.com/file/d/1Jnsc3Zu0xB8Zdnq_8LmWkp1A28wK6huU/view?usp=sharing)

---

##### Siege Worlds
We are excited to announce Siege Worlds, a new first-person shooter game coming to the Alien Worlds ecosystem. Developed by LightningWorks, the creators of the [Starblind comic](https://blog.lightningworks.io/2024/01/15/starblind-zero-comic-for-alien-worlds/), Siege Worlds will feature two playable characters from the Starblind universe, adding depth and interconnectivity to Alien Worlds’ expanding lore. This game promises intense action and immersive gameplay, leveraging the rich narrative already established in the Starblind series.

---
### Alien Worlds API tool-kit
The Alien Worlds API tools consist of many components that can be used, modified, and assembled to construct any number of use cases that the community could imagine. If the tools are unable to achieve a desired goal as they are now, all the code is open source and documented to make it easy for developers to leverage them to achieve their goals without needing to start from scratch. Access all docs [here](https://docs-9s1.pages.dev/API%20tools/)

---
### Testnet RNG
Only guild running ORNG script on testnet, executed over 10k jobs on the testnet since the last evaluation

---
### <ins>Marketing</ins>
DappRadar Coverage: [State of Blockchain Gaming in Q1 2024](https://dappradar.com/blog/state-of-blockchain-gaming-in-q1-2024)

Blockchain Gamer Biz coverage: [Saro McKenna latest piece on Potential of self-governed blockchain worlds](https://blockchaingamer.biz/features/opinions/31817/illimitable-potential-self-governed-blockchain-worlds/)

Blockchaingamer Coverage: [Dacoco launches AI tool to expand Alien Worlds lore with UGC stories](https://www.blockchaingamer.biz/news/33097/dacoco-launches-ai-tool-to-expand-alien-worlds-lore-with-user-generated-stories/)
[Alien Worlds Introduces Lynx AI Tool for Tokenized Lore Expansion](https://gam3s.gg/news/alien-worlds-lynx-ai/)
NFT NYC: [Saro McKenna takes the stage and joins the panel: "NFT Utility - Unleashing Value from Your Community](https://nftnyc2024.sessionize.com/session/574142)

### <ins>Backups </ins>

| Snapshot | Blocks Log | State History | Elastic Search | AA API |
|--------|--------|--------|--------|--------|
| [x] | [x] | [x] | [ ] | [ ] |

### <ins>Feedback to OIG</ins>


----
