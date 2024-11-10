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
This period has been a tough period due to the fact the entire region got smashed by Hurricane Helene.  Power grid and primary communications provider (Spectrum) for the data center were knocked offline Friday AM Sept 27.  Backup generator and backup fiber connections kicked in and kept the datacenter up and running, however public API access could not failover as the backup circuits cannot handle the few 100mbit of API traffic. During the hurricane I also had a tree fall on my house and was without power for a week, so as long as the hamster wheel kept spinning, I had other dumpster fires to attend to :)  Power and primary communications at the datacenter were recovered by Sunday PM Sept 29 (although would have intermittent issues while they repaired the grid).

Working to get our Hyperion clusters all updated to the latest 3.5.0 versions.  As we are building new servers for these versions, we are decomissioning our WAX Testnet Atomic API as there is no incentive to continue it's operations (no paying customers and no points for offering it :) ).

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
So, as I'm sure you are by now aware, the IBC services between WAX and EOS stopped working once EOS activated their new instant finality consensus protocol. I spent hours reaching out and contacting all of the technical contacts for the Antelope-based chains to get their general stance on the Spring/IBC tech going forward and determining what might be needed to get IBC operational again (mostly work related to the proof server services).  All have expressed that the IF/IBC tech is not high on their priority list so no resources or funding would be available to complete the work needed.  Alcor has disabled the EOS/WAX bridging in their interfaces but there are still users attempting to bridge tokens and getting them stuck.  I'm working to determine what is needed to temporarily halt the contract deposits and continue working to see if the community itself wants to continue development/support of the software or if things will truly just be abandoned.

**Metrics**
Period: September 1st, 2024 - October 15th, 2024 (few days offline)

Stats:
- 50 reqs/day across all IBC nodes/services (2,200 total for period); primarily hits on the WAX & EOS IBC Proof servers

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

