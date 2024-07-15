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
- New main producer, old machine turned sad.
- New Thalos Releases
- Patched all machines against the latest known vulnerabilities.
- Been running internal vulnerability scans towards all services and machines.

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [] | [x] | [x] | [] | [] | [] | 
| - | - | - | - | - | - |


### <ins>Contributions</ins>

| Website/Platform | Visitors/views | Timeframe |     |
| ---------------- | -------------- | --------- | --- |
| alienw.com       | 3.1k           | 30 days   |     |
| waxsweden.org    | 448            | 30 days   |     |
| academy.anyo.io  | 235            | 30 days   |     |
| Anyo YouTube     | 284            | 28 days   |     |
| anyo.io          | 1.6k           | 30 days   |     |


---
### Thalos
**Description**: Light-weight, Quick and easy to use Blockchain stream service. Utilizing the Thalos Server, Redis and Thalos Clients to stream any WAX data, directly from a SHIP node. Listen to one contract, action or all of them.

**URLs**: [thalos.waxsweden.org](https://thalos.waxsweden.org/), [Github](https://github.com/eosswedenorg/thalos), [Documentation](https://thalos.waxsweden.org/docs/), [NodeJS Client](https://github.com/eosswedenorg/thalos-nodejs), [Go Client](https://github.com/eosswedenorg/thalos/tree/master/api)

**Update**:

#### Version 1.1.3 [https://github.com/eosswedenorg/thalos/releases/tag/v1.1.3](https://github.com/eosswedenorg/thalos/releases/tag/v1.1.3)
- Updated antelope-go library to v0.1.2 that fixes a bug in abi binary  
    decoder, it expects some fields to be strings while they are "names"  
    (strings encoded into a int64)
- Fix a bug with "set_abi" struct had the wrong order of fields in ShipProcessor.updateAbiFromAction()
- Fix a bug in ShipProcessor.updateAbiFromAction() that assumed the abi  
    was in hex format when in fact it is binary.

#### Version 1.1.2 [https://github.com/eosswedenorg/thalos/releases/tag/v1.1.2](https://github.com/eosswedenorg/thalos/releases/tag/v1.1.2)
- Implement action blacklist, it is not possible to configure a blacklist  
    that will be used to filter out processing of unwanted contracts/actions.
- Minor cleanups in tools
- Moved from github.com/eoscanda/eos-go to github.com/pnx/antelope-go library

#### Version 1.1.2-rc4 [https://github.com/eosswedenorg/thalos/releases/tag/v1.1.2-rc4](https://github.com/eosswedenorg/thalos/releases/tag/v1.1.2-rc4)
- API: Fix a bug regarding json timestamp being encoded/decoded with wrong  format
- Implement action blacklist, it is not possible to configure a blacklist  
    that will be used to filter out processing of unwanted contracts/actions

#### Version 1.1.2-rc3 [https://github.com/eosswedenorg/thalos/releases/tag/v1.1.2-rc3(https://github.com/eosswedenorg/thalos/releases/tag/v1.1.2-rc3)
- Fix a bug in isVariant() where v.Elem() was called on non interface/pointer
- Minor cleanups in tool
---

### APT Packages
**Description**: APT Packages for WAX, Antelope and relevant tools for Linux distros. *apt install wax*

**URLs**: [WAX APT repo](https://eosswedenorg.github.io/apt/wax), [Main apt repo, some of our tools](https://eosswedenorg.github.io/apt/main), [Antelope APT repo](https://eosswedenorg.github.io/apt/antelope), [Github](https://github.com/eosswedenorg/apt)

**Update**:
- Added the new Thalos v1.1.2-rc3 & v1.1.2-rc4 into [Apt Main Repo - edge](https://eosswedenorg.github.io/apt/main)
- Added the new Thalos v1.1.2 into [Apt Main Repo - stable](https://eosswedenorg.github.io/apt/main)
- Added the new Thalos v1.1.3 into [Apt Main Repo - stable](https://eosswedenorg.github.io/apt/main)
- Created a new compile environment for building wax-leap on ubuntu 24.04
- Added wax-leap-5.0.1 for 24.04 Noble Numbat

---

### Anyobservation & OIG Support
**Description**: Videos, Articles and tools for the WAX Ecosystem. Recording and distributing the OIG Roundtables, as well as all the elections.

**URLs**: [anyo.io](https://anyo.io/), [OIG Roundtables](https://academy.anyo.io/wax-oig-roundtables), [Anyo YouTube](https://www.youtube.com/anyobservation), [Anyo Twitter](https://twitter.com/anyobservation), [WAX Memo Tracker](https://anyo.io/blockchain_tools/memo_tracker), [WAX Trx tracker](https://anyo.io/blockchain_tools/trx_tracker)

**Update**: 
- Latest OIG Roundtables are uploaded on YouTube and the site.
- Helped host the OIG Roundtable election special 
- [2024-06-11 | OIG election special](https://youtu.be/-_Hb_PEjB9M)
- [2024-06-04](https://youtu.be/jk4X8pfNwoc)

---

### WAX OIG Election Tools
**Description**: Tracker of current and full history of previous OIG Election.

**URLs**: [OIG Vote Tracker](https://anyo.io/blockchain_tools/oig)

**update**:
- Fixed multiple bugs
- Improved css
- Fixed old broken images
- Updated to track the new election
- Fixed links for socials.

---

### Go Lang Tooling
**Description**: Suite of Go Lang tools to interact with WAX and other Antelope based chains.

**URLs**: [github.com/eosswedenorg-go](https://github.com/eosswedenorg-go), [Antelope Ship Client](https://github.com/eosswedenorg-go/antelope-ship-client), [Atomicasset API Client](https://github.com/eosswedenorg-go/atomicasset), [Antelope HTTP API](https://github.com/eosswedenorg-go/leapapi)

**Update**:
- Small updates on dependencies for ship client

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
- Chinese version of the WAX Course has had a lot of new sections released.
	- https://academy.anyo.io/courses/cn-wax-course/

---

### WAX Testnet
**Description**: Maintaing and upgrading WAX Testnet Faucet, tools and chain contracts. 

**URLs**: [https://waxsweden.org/testnet](https://waxsweden.org/testnet)

**Update**:

---

### Haproxy Healthcheck
**Description**: Haproxy Plugin to monitor the health of nodes and API's related to WAX and other Antelope chains. 

**URLs**: [Github](https://github.com/eosswedenorg/antelope-api-healthcheck), [APT](https://eosswedenorg.github.io/apt/main)

**Update**: 

---

### BP Notification & Data Service
**Description**: CPU and block notifications for Guilds on WAX, as well as an upcoming data service to more easily track the performance of all guilds. 

**URLs**: [notify.waxsweden.org/](https://notify.waxsweden.org/), [dashboard.waxsweden.org](https://dashboard.waxsweden.org)

**List of SCs**: [Mainnet](notify.se), [Testnet]()

**Update**: 
- Fixed minor bug on the dashboard
- Tweaked some UI changes.

---

### Alienw.com
**Description**: Explorer for everything related to the Alien Worlds DAOs, including an API and wallet interface. 

**URLs**: [alienw.com/](https://alienw.com/), [Alpha API - https://api.alienw.com/](api.alienw.com/), [alienw wallet Interface](https://wallet.alienw.com)

**Update**: 
- Wallet interface is now deployed for production
- Alienw Api added more endpoints and filters
- Alienw Telegram bot got improvements to handle multiple actions inside an msig.

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

Latest Mainnet Blocks log: [Mainnet Blocks log](https://snapshots-cdn.eossweden.org/wax/5.x/blocks_wax_20240603-311843724.tar.gz)

Latest Testnet Blocks log: [Testnet Blocks log](https://snapshots-cdn.eossweden.org/wax-testnet/5.x/wax-testnet_blocks_2024-07-01T04_30_01_417_287820280.bin.tar.gz)

| Snapshot | Blocks Log | State History | Elastic Search | AA API |
|--------|--------|--------|--------|--------|
| [x] | [x] | [] | [ ] | [ ] |


### <ins>Feedback to OIG</ins>

----