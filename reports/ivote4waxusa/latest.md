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
All mainnet and testnet Hyperion servers have been updated to 3.5.0 and worked with Igor to identify and address issues with the new version

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [x] | [ ] | [x] | [x] | [ ] | [ ] |  [ ] |
| - | - | - | - | ~x req |  ~y req |

Others APIs: IBC for EOS/WAX/TELOS/UX networks (but guess we won't get points here :) )

### <ins>Contributions</ins>

### Antelope Node Configs

**URLs**: 
- https://github.com/eosusa/antelope-config
- https://docs.google.com/spreadsheets/d/1javR5ibcSuR58Bdhj3hz_rddO7MUfquqzLTmB3f8OTs

**Update**: 
Few more updates to NodeOS configs with details and new Spring 1.x parameters after further testing/dev.

---

### WAX Minecraft

**URLs**: 
- https://kavian.world
- https://neri.world
- https://reporting.eosusa.io/QuestResume

**List of SCs**: https://waxblock.io/account/waxminecraft

**Update**: 
All development efforts this period has been dedicated to building the new tournament services in addition to the daily questing tasks.  This will also integrate into the new AW tournament contract but also provide stand-alone tournaments with your own tokens/assets. Initial beta version ha been successfully deployed to the dev and test environemnts and is deploying production today (Oct. 15th) for initial full load testing (both stand-alone and AW-integrated tournaments).

**Metrics**
Period: September 1st, 2024 - October 15th, 2024 (few days offline)

Stats:
- 54 Total Quests
- 84 Unique Accounts Joined / 67 Unique Accounts Completed
- 2,452 Quest Joins / 1,918 Quest Completions
- Highest Participation: 59 Players / 38 Completed

---

### AWButler Drops

**URLs**: Example: https://aw.eosusa.io/awbutler/zombieworlds.html

**Update**: 
Adjustments of different drop parameters for various projects per their requests (different requirements, drop frequencies)

**Metrics**
Period: September 1st, 2024 - October 15th, 2024

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
Initial ChatGPT4o models are loaded and able to answer AW game information along with initial miner statistics for last day and week.  Working to address issues getting other models loaded with additional information such as land data and more historical data.

**Metrics**
Period: September 1st, 2024 - October 15th, 2024 (few days offline)

Stats:
- 186 Daily Hits / 5,500 Avg. Monthly

---

### WAX Node Monitor

**URLs**: https://wax.stats.eosusa.io

**Update**: 
No recent updates as had to let go minion that managed this system :(

**Metrics**
Period: September 1st, 2024 - October 15th, 2024

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
We have completed the first phase of the work to unlock the IBC tokens stuck on EOS trying to bridge back to their native WAX, Telos, and UX chains.  The Alcor BP team modified the IBC contracts to prevent additional IBC transfers on EOS and those changes were proposed to the EOS top21 BPs for review last night.  The contract changes have been reviewed, approved by 15+ BPs, and successfully executed (within about 12 hours total).
https://github.com/avral/ibcwraplockfix/commit/72c2f8c8a5631d81acfc868bca770327fead3c69

Alcor has then presented an update to the WAX/EOS IBC contract that creates a new action to manually complete the bridging of the stuck tokens.  They have also been provided a JSON of the transactions that need to be executed once the contract has been updated (as the WAX team controls the keys to the IBC account now).  These were provided to the WAX team before Christmas but have not heard any updates back from the WAX team regarding the status (we've asked a few times).

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
Period: September 1st, 2024 - October 15th, 2024 (few days offline)

Stats:
Avg Combined API Calls: 6.8mil/day

---

### <ins>Backups </ins>
URL: https://snapshots.eosusa.io

| Snapshot | Blocks Log | State History | Elastic Search | AA API |
|--------|--------|--------|--------|--------|
| [x] | [ ] | [ ] | [ ] | [ ] |

