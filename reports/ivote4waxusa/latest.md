### <ins>General</ins>

|  |  |
| --- | --- |
| Website | https://eosusa.io/ |
| Contact | eosusa.michael@gmail.com |
| bp.json (mainnet) | https://eosusa.io/bp/wax/bp.json |
| bp.json (testnet) | https://eosusa.io/bp/wax/test/bp.json |
| producer (mainnet) | ivote4waxusa |
| producer (testnet) | ivote4waxusa |
| Guild Jurisdiction | Greenville, SC, USA |

### <ins>Noteworthy</ins>
Been fighting alot of issues with our Hyperion clusters and working on building new clusters to replace them with the redeployed 10900Ks that are being replaced by new 14900Ks.  Deployed 2 new 14900Ks into the supporting infrastructure this month and will continue to slowly upgrade until public infrastructure is all on matching 14900K hardware.

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [x] | [ ] | [x] | [x] | [ ] | [ ] |  [ ] |
| - | - | - | - | ~x req |  ~y req |

Others APIs: IBC for EOS/WAX/TELOS/UX networks (5000 reqs/day; in use for Alcor IBC services; only free public IBC nodes still operational)

### <ins>Contributions</ins>

### Antelope Node Configs

**URLs**: 
- https://github.com/eosusa/antelope-config
- https://docs.google.com/spreadsheets/d/1javR5ibcSuR58Bdhj3hz_rddO7MUfquqzLTmB3f8OTs

**Update**: 
Few updates to NodeOS configs with details and new Spring 1.x parameters.

---

### WAX Minecraft

**URLs**: 
- https://kavian.world
- https://neri.world
- https://reporting.eosusa.io/QuestResume

**List of SCs**: https://waxblock.io/account/waxminecraft

**Update**: 
Deployed many updates to the system over the last month:
- Deployed contract updates to support multiple client's questing actions (and update reporting accordingly)
- Deployed updated logging to WAX login process to help identify login issues some have had with Cloud Wallet
- Launched initial test of Parkour tournament plugin/rewards to expand gameplay/reward options for communities

**Metrics**
Period: June 1st, 2024 - July 15th, 2024

Stats:
- 84 Total Quests
- 106 Unique Accounts Joined / 79 Unique Accounts Completed
- 4,611 Quest Joins / 3,755 Quest Completions
- Highest Participation: 69 Players / 55 Completed

---

### AWButler Drops

**URLs**: Example: https://aw.eosusa.io/awbutler/zombieworlds.html

**Update**: 
Adjustments of different drop parameters for various projects per their requests (different requirements, drop frequencies)

**Metrics**
Period: June 1st, 2024 - July 15th, 2024

Stats:
6 Active projects with Hourly/Daily NFT and/or Token Drops
- Byron The Artist
- Chronaverse
- Kinderminers
- DanishCrypto
- OrchidWorlds
- MetaSource

---

### AWData

**URLs**: https://reporting.eosusa.io

**Update**: 
We have updated the chain data indexing and reporting logic to handle contract updates to the MineQuest on-chain data.  We also continue with the development of the AI engine to consume blockchain game data with heavy focus on shifting over to the new ChatGPT4o platform.  Currently supports query information for recent month of AW game actions.  This included migration to latest .NET stack, shifting the hosting engine to Apache, and fighting through the myriad of issues caused by Winblows Updates this month :)  We updated the services to better utilize internal UDP connections and added piles of new custom commands (START, STOP, WAITTILL, PAUSE, ERROR<n>, REPEAT, RESTART, WARNING, SAVE, REMOVE <item,id>, UPDATE <item,id>)

**Metrics**
Period: June 1st, 2024 - July 15th, 2024

Stats:
- 450 Daily Hits / 15,000 Avg. Monthly

---

### WAX Node Monitor

**URLs**: https://wax.stats.eosusa.io

**Update**: 
No recent updates as had to let go minion that managed this system :(

**Metrics**
Period: June 1st, 2024 - July 15th, 2024

Stats:
- Endpoints Tested: 79 (each from 6 different probes)

---

### Node Operator Calls

**Update**: 
Still attending weekly Antelope Node Operators call to learn latest Antelope development upgrades and provide testing/feedback. :)

---

### Antelope IBC Development

**URLs**: https://ibc.eosusa.io

**Update**: 
The ONLY publically accessible IBC nodes for EOS, WAX, TELOS, & UX.  Banned some services that were smashing the APIs with bad data, which caused them to crash.  Attempted to work with dev to troubleshoot but they declined, so just remained banned :)

**Metrics**
Period: June 1st, 2024 - July 15th, 2024

Stats:
- 100 reqs/day across all IBC nodes/services (4,300 total for period)

---

### Blockchain Consulting Services

**Update**: 
Still providing consulting services as needed for several of our projects.

---

### History aaS

**URLs**: https://eosusa.io/hosting

**Update**: 
Still providing API services for:
- MetaSource
- InfoCore
- Uplift
- ShadySapy
- MassCult
- PixelTycoon
- NFT Draft
- NiftyKicks
- Avalon

**Metrics**
Period: June 1st, 2024 - July 15th, 2024

Stats:
Avg Combined API Calls: 522,000/day

---

### <ins>Backups </ins>
URL: https://snapshots.eosusa.io

| Snapshot | Blocks Log | State History | Elastic Search | AA API |
|--------|--------|--------|--------|--------|
| [x] | [ ] | [ ] | [ ] | [ ] |

