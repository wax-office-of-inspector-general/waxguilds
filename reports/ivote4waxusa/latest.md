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
Finally got around to getting the new 14900K block producer built and pushed into production.  This pushed our CPU Mechanics execution times from around .22ms down to about .13ms, one of the lowest on the graphs.  It also greatly improved the overall billing comparisons on the Sweden billing dashboards.  Submitting orders to procure new additional 14900K servers to upgrade our public API endpoints so they match our BP billings.

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
Beginning to update the NodeOS Configuration sheet with new options/updates related to the Sprint v1 testing.  Also, since I had to review all the CPU performance settings in getting the new 14th gen deployed, I added a section to the configuration guide to provide a little detail about what settings we recommend (and a script to configure them).

---

### WAX Minecraft

**URLs**: 
- https://kavian.world
- https://neri.world
- https://reporting.eosusa.io/QuestResume

**List of SCs**: https://waxblock.io/account/waxminecraft

**Update**: 
Deployed many updates to the system over the last month:
- Launched 2nd independent Minequest-integrated world (neri.world)
- Deployed new MySQL-based logging that increased logging performance tremendously (also required backend updates to address performance issues)
- Ran our first community sponsored questing event where players were rewarded $KEK for completing the quests (also required updates to better handle token quantieies >1M)

**Metrics**
Period: April 15st, 2024 - May 31th, 2024

Stats:
- 75 Total Quests
- 135 Unique Accounts Joined / 91 Unique Accounts Completed
- 4,549 Quest Joins / 3,590 Quest Completions
- Highest Participation: 79 Players / 63 Completed

---

### AWButler Drops

**URLs**: Example: https://aw.eosusa.io/awbutler/zombieworlds.html

**Update**: 
Adjustments of different drop parameters for various projects per their requests (different requirements, drop frequencies)

**Metrics**
Period: April 15st, 2024 - May 31th, 2024

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
We have continued non-stop to refine and build data models to properly handle the monsterous amount of AW blockchain data for use in a self-service web interface.  The system is able to able to answer basic uestions pertaining to the last week of data, which is auto-updated at midnight UTC daily.  With the recent release of ChatGPT 4, we are working on adapting the training models over from LLama2 engine for it's improved features and performance.

**Metrics**
Period: April 15st, 2024 - May 31th, 2024

Stats:
- 300 Daily Hits / 10,000 Avg. Monthly

---

### WAX Node Monitor

**URLs**: https://wax.stats.eosusa.io

**Update**: 
No recent updates as had to let go minion that managed this system :(

**Metrics**
Period: April 15st, 2024 - May 31th, 2024

Stats:
- Endpoints Tested: 79 (each from 6 different probes)

---

### Node Operator Calls

**Update**: 
Still attending weekly Antelope Node Operators call to learn latest Antelope development upgrades and provide testing/feedback.  v6.0 (actually called Spring v1.0) testing has begun and new instant finality features have been activated on the private testnet.

---

### Antelope IBC Development

**URLs**: https://ibc.eosusa.io

**Update**: 
The ONLY publically accessible IBC nodes for EOS, WAX, TELOS, & UX

**Metrics**
Period: April 15st, 2024 - May 31th, 2024

Stats:
- 5000 reqs/day across all IBC nodes/services

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
Period: April 15st, 2024 - May 31th, 2024

Stats:
Avg Combined API Calls: 900,000/day (Uplift traffic has greatly increased)

---

### <ins>Backups </ins>
URL: https://snapshots.eosusa.io

| Snapshot | Blocks Log | State History | Elastic Search | AA API |
|--------|--------|--------|--------|--------|
| [x] | [ ] | [ ] | [ ] | [ ] |

