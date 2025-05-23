### <ins>General</ins>

|  |  |
| --- | --- |
| Website | https://waxsweden.org/ |
| Contact | contact@waxsweden.org |
| bp.json (mainnet) | https://waxsweden.org/bp.json |
| bp.json (testnet) | https://waxsweden.org/test.json |
| producer (mainnet) | waxswedenorg |
| producer (testnet) | waxswedenorg |
| Guild Jurisdiction | Sweden |

### <ins>Noteworthy</ins>
- New Cluster of Nodes and services for WAX Hyperion Full history is up and running. 
  - Now Running Hyperion 3.5
  - Required running two full clusters for a while 
    - To prevent any downtime, it was a long and slow process
    - Had some bad luck with drives that crashed in the process.
- Updated our Partial WAX Hyperion to the latest Hyperion 3.5 
- Set up new accounts and permissions for the WAX team on Testnet 
- Deployed new system contracts to WAX Testnet 
- Performed Maintenance and updated softwares across all servers and services 
- Been digging through Hyperion changes and testing updates to help QRY Hub and hyperion to move forward 
- Full and Partial Hyperion listed on 
- Worked on aligning our infrastructure with the new WAX Team and OIG Changes
- QRY Hub API stats doesn't fully reflect our stats, Because anything hitting our cache system will not be reflected on the Hyperion request numbers. 

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [] | [x] | [x] | [] | [] | [] |


Some API Numbers pulled from logs:
From: May 23 00:00
To: May 23 09:40
Data across: 9 hours and 40 minutes 

Mainnet ~ 4,160,767 Requests, or ~120 / second 
Testnet ~ 299,354 Requests, or ~8.5 / second 

  WAX Mainnet Varnish Chain Cache: 3,780,975
  WAX Mainnet Varnish Full History Cache: 44,432
  WAX Mainnet Varnish Transaction Cache: 3285
  WAX Mainnet Varnish Partial Cache: 23,244
  
  WAX Mainnet Push Transactions: 308,831
  
  WAX Testnet Chain API: 296,717 Requests 
  WAX Testnet Hyperion: 2637 Requests 
  
  abuse_503: 7374

- All Requests hit cache first, if not in cache, it is forwarded to the respected backend.
- Different type of data has different time to live in cache, before new data is fetched from backend.
- Get transaction or get_block can live longer than e.g. get_info 
- Push Transactions obv never hit the cache 
- Testnet is currently not cached, not enough traffic to justify the overhead. 

### <ins>Contributions</ins>

---
### Thalos
**Description**: Light-weight, Quick and easy to use Blockchain stream service. Utilizing the Thalos Server, Redis and Thalos Clients to stream any WAX data, directly from a SHIP node. Listen to one contract, action or all of them.

**URLs**: [thalos.waxsweden.org](https://thalos.waxsweden.org/), [Github](https://github.com/eosswedenorg/thalos), [Documentation](https://thalos.waxsweden.org/docs/), [NodeJS Client](https://github.com/eosswedenorg/thalos-nodejs), [Go Client](https://github.com/eosswedenorg/thalos/tree/master/api)

**Update**:
#### Thalos v.1.1.9 - Security Patch 
- [Security CVE-2024-45338] Update golang.org/x/net to 0.33.0



---

### APT Packages
**Description**: APT Packages for WAX, Antelope and relevant tools for Linux distros. *apt install wax*

**URLs**: [WAX APT repo](https://eosswedenorg.github.io/apt/wax), [Main apt repo, some of our tools](https://eosswedenorg.github.io/apt/main), [Antelope APT repo](https://eosswedenorg.github.io/apt/antelope), [Github](https://github.com/eosswedenorg/apt)

**Update**:
- Added Thalos v1.1.9 into [Apt Main Repo - stable](https://eosswedenorg.github.io/apt/main)

---

### Anyobservation & OIG Support
**Description**: Videos, Articles and tools for the WAX Ecosystem. Recording and distributing the OIG Roundtables, as well as all the elections.

**URLs**: [anyo.io](https://anyo.io/), [OIG Roundtables](https://academy.anyo.io/wax-oig-roundtables), [Anyo YouTube](https://www.youtube.com/anyobservation), [Anyo Twitter](https://twitter.com/anyobservation), [WAX Memo Tracker](https://anyo.io/blockchain_tools/memo_tracker), [WAX Trx tracker](https://anyo.io/blockchain_tools/trx_tracker)

**Update**: 
- Latest OIG calls
  - https://youtu.be/3kuKA7Fln-4 - 2025-01-14 - More General Discussion 
  - https://youtu.be/OsW88naE8dY - 2025-01-21 - Discussion on Running Reliable API Services 
  - https://youtu.be/oTOiVOhGTdE - 2025-02-11 - Long and big discussion covering many topics 
  - https://youtu.be/uXJhSKIQI4g - 2025-02-25 - Discussion on Guild changes from the WAX Team 
  - https://youtu.be/3Pon7ba84Kg - 2025-03-04 - General discussion and a dive into which Backups are required, and how they are utilized 
  - https://youtu.be/8yUMgRJDz8A - 2025-03-11 - WAX/Solana Bridge, Side Chains and Smart Contracts 
  - https://youtu.be/r8BcCtsrJ7Y - 2025-03-25 - More Updates on WAX Team changes for WAX Guilds 
  - https://youtu.be/v4hRsuGC8i8 - 2025-04-08 - Lukas shares updates from the WAX Team.
  - https://youtu.be/8N6DQnAkozk - 2025-04-15 - Guideline Changes from OIG and WAX Team.
  - https://youtu.be/pFgeU5z0Q0I - 2025-04-29 - Hyperion updates, and Testnet changes 

---

### WAX OIG Election Tools
**Description**: Tracker of current and full history of previous OIG Election.

**URLs**: [OIG Vote Tracker](https://anyo.io/blockchain_tools/oig)

**update**:

---

### Go Lang Tooling
**Description**: Suite of Go Lang tools to interact with WAX and other Antelope based chains.

**URLs**: [github.com/eosswedenorg-go](https://github.com/eosswedenorg-go), [Antelope Ship Client](https://github.com/eosswedenorg-go/antelope-ship-client), [Atomicasset API Client](https://github.com/eosswedenorg-go/atomicasset), [Antelope HTTP API](https://github.com/eosswedenorg-go/leapapi)

**Update**:

---

### Commercial API
**Description**: Offering dediated APIs, SHIP nodes and/or Thalos instances for Projects and teams. We run the nodes, you explore your passion.

**URLs**: [waxsweden.org/commercial-api/](https://waxsweden.org/commercial-api/)

**Update**: 

---

### WAX Academy
**Description**: A Portal for Articles, courses, tutorials and other information in regards to WAX, Antelope and other relevant information. Including a major WAX Course that aims to explain everything WAX. 

**URLs**: [https://academy.anyo.io/](https://academy.anyo.io/)

**Update**: 

---

### WAX Testnet
**Description**: Maintaing and upgrading WAX Testnet Faucet, tools and chain contracts. 

**URLs**: [https://waxsweden.org/testnet](https://waxsweden.org/testnet)

**Update**:
- Compiled, tested and Deployed a new system contract on WAX testnet for activating StandBy Rewards.
  - Github Branch: https://github.com/worldwide-asset-exchange/wax-system-contracts/tree/feat/standby-reward
  - First deployment had a bug, where the standbys table didn't get populated. which is now fixed.
- This added 2 new tables to eosio.
  - standbys - A list of standby guilds eligible for standby pay 
  - global4 - Tracking standby pay bucket, standby slot weight, number of standby slots and the standby share size.
- Added 4 new actions on eosio 
  - setsbratio   | Set the standby pay ratio compared to top21, Set to 5000 (50%) from recommendation from the WAX team.
  - setsbslot    | Configure how many standby slots that are available. Set to 6 for now.
  - allowsb      | Action to allow a previously removed guild from being eligible for standby pay 
  - disallowsb   | Action to remove a guild from being eligible for standby pay 
  - claimstandby | Action for standby Guilds to claim rewards 

- Configured the contract:
  - Set StandBy Slots: push action eosio setsbslot '[6]'
    - [waxblock Transaction](https://testnet.waxblock.io/transaction/88a6ad68f91ffc7aef057bb09cecbe840b85d99e7dd87b3c3d55510583d3ef8d)
  - Set StandBy Ratio: push action eosio setsbratio '[5000]' 
    - [waxblock Transaction](https://testnet.waxblock.io/transaction/422d07a037f380b50cc8e02102bcfed2cdf914db33abc2a1bbc0c56672963406)

---

### Haproxy Healthcheck
**Description**: Haproxy Plugin to monitor the health of nodes and API's related to WAX and other Antelope chains. 

**URLs**: [Github](https://github.com/eosswedenorg/antelope-api-healthcheck), [APT](https://eosswedenorg.github.io/apt/main)

**Update**: 

- Fixed dependencies for the Healthcheck: https://github.com/eosswedenorg/antelope-api-healthcheck/commits/master/

---

### BP Notification & Data Service
**Description**: CPU and block notifications for Guilds on WAX, as well as an upcoming data service to more easily track the performance of all guilds. 

**URLs**: [notify.waxsweden.org/](https://notify.waxsweden.org/), [dashboard.waxsweden.org](https://dashboard.waxsweden.org)

**List of SCs**: [Mainnet](notify.se), [Testnet]()

**Update**: 


---

### Alienw.com
**Description**: Explorer for everything related to the Alien Worlds DAOs, including an API and wallet interface. 

**URLs**: [alienw.com/](https://alienw.com/), [Alpha API - https://api.alienw.com/](api.alienw.com/), [alienw wallet Interface](https://wallet.alienw.com)

**Update**: 
- Fixed user reported bugs on the Web Interface 

---

### Public Infrastructure Support
**Description**: Supporting public tools and services with infrastructure and access to our private nodes and APIs. 

**URLs**: [api.waxsweden.org](https://api.waxsweden.org/)

**Update**: 

---

### Other Products, misc and tools
**Description**: Other Tools and Services we are working on, or have been working on in the past

**URLs**: [Antelope Keygen](https://github.com/eosswedenorg/antelope-keygen), [Antelope Livecd for bootable USB](https://github.com/eosswedenorg/eosio-livecd) 

**Update**:

---

### <ins>Marketing</ins>


### <ins>Backups </ins>
Mainnet: [snapshots.waxsweden.org](https://snapshots.waxsweden.org/)

Testnet: [snapshots.testnet.waxsweden.org](https://snapshots.testnet.waxsweden.org/)

Latest Mainnet Blocks log: [Mainnet Blocks log](https://snapshots-cdn.eossweden.org/wax/5.x/blocks_wax_20250410-365588484.tar.gz)

Latest Testnet Blocks log: [Testnet Blocks log](https://snapshots-cdn.eossweden.org/wax-testnet/5.x/wax-testnet_blocks_2025-05-01T04_30_01_588_340336182.bin.tar.gz)

| Snapshot | Blocks Log | State History | Elastic Search | AA API |
|--------|--------|--------|--------|--------|
| [x] | [x] | [] | [ ] | [ ] |


### <ins>Feedback to OIG</ins>

----
