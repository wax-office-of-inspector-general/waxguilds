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
- Updated Hyperion to 3.3.10
- Main producer had CPU failiure, and we have replaced that machine with a new one.


### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [] | [x] | [x] | [] | [] | [] | 
| - | - | - | - | - | - |


### <ins>Contributions</ins>

| Website/Platform | Visitors/views | Timeframe |
| ---------------- | -------- | -------- |
| alienw.com | 3.6k | 30 days | 
| waxsweden.org | 630 | 30 days |
| academy.anyo.io | 238 | 30 days | 
| Anyo YouTube | 273 | 28 days |
| anyo.io | 850 | 30 days |

- Removed twitter, because data is only accessible behind twitter premium subscriptions

---
### Thalos
**Description**: Light-weight, Quick and easy to use Blockchain stream service. Utilizing the Thalos Server, Redis and Thalos Clients to stream any WAX data, directly from a SHIP node. Listen to one contract, action or all of them.

**URLs**: [thalos.waxsweden.org](https://thalos.waxsweden.org/), [Github](https://github.com/eosswedenorg/thalos), [Documentation](https://thalos.waxsweden.org/docs/), [NodeJS Client](https://github.com/eosswedenorg/thalos-nodejs), [Go Client](https://github.com/eosswedenorg/thalos/tree/master/api)

**Update**:

#### Version 1.1.2-rc2 - [github.com/eosswedenorg/thalos/releases/tag/v1.1.2-rc2](https://github.com/eosswedenorg/thalos/releases/tag/v1.1.2-rc2)
- fix a bug where TableDeltaRow.Data was not set
- fix a bug where blockResult.Deltas was not properly nil checked. Resulting in panic if accessed

#### Version 1.1.2-rc1 - [github.com/eosswedenorg/thalos/releases/tag/v1.1.2-rc1](https://github.com/eosswedenorg/thalos/releases/tag/v1.1.2-rc1)
- Moved from github.com/eoscanda/eos-go to github.com/pnx/antelope-go library

---

### APT Packages
**Description**: APT Packages for WAX, Antelope and relevant tools for Linux distros. *apt install wax*

**URLs**: [WAX APT repo](https://eosswedenorg.github.io/apt/wax), [Main apt repo, some of our tools](https://eosswedenorg.github.io/apt/main), [Antelope APT repo](https://eosswedenorg.github.io/apt/antelope), [Github](https://github.com/eosswedenorg/apt)

**Update**:
- Added the new Thalos v1.1.2 into [Apt Main Repo - Edge](https://eosswedenorg.github.io/apt/main)

---

### Anyobservation & OIG Support
**Description**: Videos, Articles and tools for the WAX Ecosystem. Recording and distributing the OIG Roundtables, as well as all the elections.

**URLs**: [anyo.io](https://anyo.io/), [OIG Roundtables](https://academy.anyo.io/wax-oig-roundtables), [Anyo YouTube](https://www.youtube.com/anyobservation), [Anyo Twitter](https://twitter.com/anyobservation), [WAX Memo Tracker](https://anyo.io/blockchain_tools/memo_tracker), [WAX Trx tracker](https://anyo.io/blockchain_tools/trx_tracker)

**Update**: 
- Latest OIG Roundtables are uploaded on YouTube and the site.
- [2024-05-21](https://youtu.be/IORlljPM-ms)

### Memo tracker:
- fixed bug on the WAX memo_tracker where it would fail for the user
- improved handling of api data
- provide debug info for user

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
- Added an offering for Private Thalos Instances for customers.
- Currently in communications with one new prospect of tapping into this service.

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
- helped the WAX team set up more accounts for their Cloud Wallet Backend

---

### Haproxy Healthcheck
**Description**: Haproxy Plugin to monitor the health of nodes and API's related to WAX and other Antelope chains. 

**URLs**: [Github](https://github.com/eosswedenorg/antelope-api-healthcheck), [APT](https://eosswedenorg.github.io/apt/main)

**Update**: 
- Added a fix for an atomic api issue, and is currently having one team testing it before pushed live. 

---

### BP Notification & Data Service
**Description**: CPU and block notifications for Guilds on WAX, as well as an upcoming data service to more easily track the performance of all guilds. 

**URLs**: [notify.waxsweden.org/](https://notify.waxsweden.org/), [dashboard.waxsweden.org](https://dashboard.waxsweden.org)

**List of SCs**: [Mainnet](notify.se), [Testnet]()

**Update**: 
- First version of the data dashboard is up and running
    - Added a breakdown of CPU Billing across top 150 actions for all active BPs
    - Snapshots of data going back a week
    - View to investigate an contract::action over the last 24h - https://dashboard.waxsweden.org/actions
    - View to dig into strange CPU billed transactions for a BP - https://dashboard.waxsweden.org/actions/bp-breakdown
    - View for the daily top used contracts over the last week - https://dashboard.waxsweden.org/top-contracts
    - View of top authorized user for a specific contract::action - https://dashboard.waxsweden.org/contracts/authorized-users
- Improved session handling
- Added numbers to the top-contracts graph
- Updated color-scheme of the graph
- Better scaling of tables for phone

---

### Alienw.com
**Description**: Explorer for everything related to the Alien Worlds DAOs, including an API and wallet interface. 

**URLs**: [alienw.com/](https://alienw.com/), [Alpha API - https://api.alienw.com/](api.alienw.com/)

**Update**: 
- wallet interface has gotten further updates, soon ready for launch
- Mobile adaptation of the UI is now "done"

---

### Public Infrastructure Support
**Description**: Supporting public tools and services with infrastructure and access to our private nodes and APIs. 

**URLs**: [api.waxsweden.org](https://api.waxsweden.org/)

**Update**: 
- Provided access to SHIP-node and Thalos for two teams working on their projects. 

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

Latest Mainnet Blocks log: [Mainnet Blocks log](https://snapshots-cdn.eossweden.org/wax/5.x/blocks_wax_20240411-302695521.tar.gz)

Latest Testnet Blocks log: [Testnet Blocks log](https://snapshots-cdn.eossweden.org/wax-testnet/5.x/wax-testnet_blocks_2024-05-01T04_30_01_367_277282072.bin.tar.gz)

| Snapshot | Blocks Log | State History | Elastic Search | AA API |
|--------|--------|--------|--------|--------|
| [x] | [x] | [] | [ ] | [ ] |


### <ins>Feedback to OIG</ins>

----

