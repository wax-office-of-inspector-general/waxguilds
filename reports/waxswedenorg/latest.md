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
- New Thalos Releases
- Updates on OIG Election Dashboard
- Bug fixes on dashboard.waxsweden.org
- New Partial Hyperion API at api.waxsweden.org
- Big maintenance on History Hardware

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [] | [x] | [x] | [] | [] | [] | 
| - | - | - | - | - | - |


### <ins>Contributions</ins>

---
### Thalos
**Description**: Light-weight, Quick and easy to use Blockchain stream service. Utilizing the Thalos Server, Redis and Thalos Clients to stream any WAX data, directly from a SHIP node. Listen to one contract, action or all of them.

**URLs**: [thalos.waxsweden.org](https://thalos.waxsweden.org/), [Github](https://github.com/eosswedenorg/thalos), [Documentation](https://thalos.waxsweden.org/docs/), [NodeJS Client](https://github.com/eosswedenorg/thalos-nodejs), [Go Client](https://github.com/eosswedenorg/thalos/tree/master/api)

**Update**:
- Updated the docs page to reflect the latest changes: [https://thalos.waxsweden.org/](https://thalos.waxsweden.org/)

#### Version 1.1.8 [https://github.com/eosswedenorg/thalos/releases/tag/v1.1.8](https://github.com/eosswedenorg/thalos/releases/tag/v1.1.8)
- Support for wildcard contracts in Blacklist
- [Security CVE-2024-45337] Update golang.org/x/crypto to 0.31.0
- [Security CVE-2024-53259] Update github.com/quic-go/quic-go to 0.48.2

#### Version 1.1.7 [https://github.com/eosswedenorg/thalos/releases/tag/v1.1.7](https://github.com/eosswedenorg/thalos/releases/tag/v1.1.7)
- ship: set MaxMessagesInFlight to 1. This forces the client/server to ack every message and might be a workaround fix for issue #25 according to this comment: [AntelopeIO/leap#1358 (comment)](https://github.com/AntelopeIO/leap/issues/1358#issuecomment-2276294557)
- golang: update eosswedenrg-go/antelope-ship-client to v0.3.2
- Docker Image v1.1.7-rc2 [https://github.com/eosswedenorg/thalos/pkgs/container/thalos/300602886?tag=1.1.7-rc2](https://github.com/eosswedenorg/thalos/pkgs/container/thalos/300602886?tag=1.1.7-rc2)

#### Version 1.1.7-rc2 [https://github.com/eosswedenorg/thalos/releases/tag/v1.1.7-rc2](https://github.com/eosswedenorg/thalos/releases/tag/v1.1.7-rc2)
- ship: set MaxMessagesInFlight to 1. This forces the client/server to ack every message and might be a workaround fix for issue #25 according to this comment: [AntelopeIO/leap#1358 (comment)](https://github.com/AntelopeIO/leap/issues/1358#issuecomment-2276294557)
- golang: update eosswedenrg-go/antelope-ship-client to v0.3.2

#### Version 1.1.7-rc1 [https://github.com/eosswedenorg/thalos/releases/tag/v1.1.7-rc1](https://github.com/eosswedenorg/thalos/releases/tag/v1.1.7-rc1)
- Add support to disable processing of table deltas.

#### Version 1.1.6 [https://github.com/eosswedenorg/thalos/releases/tag/v1.1.6](https://github.com/eosswedenorg/thalos/releases/tag/v1.1.6)
- makefile: make sure we apppend to GOBULDFLAGS if user wants to add their own.
- minor style fixes.
- api/channel_test.go: rearange fields.
- README.md: Update minimum go version
- README.md: Link to docker page
- .github/workflows/release.yml: need to update version regex for musl builds
- Docker Image v1.1.6 [https://github.com/eosswedenorg/thalos/pkgs/container/thalos/292537749?tag=1.1.6](https://github.com/eosswedenorg/thalos/pkgs/container/thalos/292537749?tag=1.1.6)
- Fix typo in config.example.yml


### APT Packages
**Description**: APT Packages for WAX, Antelope and relevant tools for Linux distros. *apt install wax*

**URLs**: [WAX APT repo](https://eosswedenorg.github.io/apt/wax), [Main apt repo, some of our tools](https://eosswedenorg.github.io/apt/main), [Antelope APT repo](https://eosswedenorg.github.io/apt/antelope), [Github](https://github.com/eosswedenorg/apt)

**Update**:
- Added the new Thalos v1.1.8 into [Apt Main Repo - stable](https://eosswedenorg.github.io/apt/main)
- Added the new Thalos v1.1.8-rc1 into [Apt Main Repo - edge](https://eosswedenorg.github.io/apt/main)
- Added the new Thalos v1.1.7 into [Apt Main Repo - stable](https://eosswedenorg.github.io/apt/main)
- Added the new Thalos v1.1.7-rc2 into [Apt Main Repo - edge](https://eosswedenorg.github.io/apt/main)
- Added the new Thalos v1.1.7-rc1 into [Apt Main Repo - edge](https://eosswedenorg.github.io/apt/main)
- Added the new Thalos v1.1.6 into [Apt Main Repo - stable](https://eosswedenorg.github.io/apt/main)

---

### Anyobservation & OIG Support
**Description**: Videos, Articles and tools for the WAX Ecosystem. Recording and distributing the OIG Roundtables, as well as all the elections.

**URLs**: [anyo.io](https://anyo.io/), [OIG Roundtables](https://academy.anyo.io/wax-oig-roundtables), [Anyo YouTube](https://www.youtube.com/anyobservation), [Anyo Twitter](https://twitter.com/anyobservation), [WAX Memo Tracker](https://anyo.io/blockchain_tools/memo_tracker), [WAX Trx tracker](https://anyo.io/blockchain_tools/trx_tracker)

**Update**: 
- Recordings of all the latest Tech talks up on YouTube


---

### WAX OIG Election Tools
**Description**: Tracker of current and full history of previous OIG Election.

**URLs**: [OIG Vote Tracker](https://anyo.io/blockchain_tools/oig)

**update**:
- Updates to track the Tenth Election.
- Fixed bug where candidate images might fail to be fetched depending on where they were hosted.
- Reworked some backend logic to improve the tool.

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
- Fixed bug of menu not showing on - dashboard.waxsweden.org/guilds/
- Updated default ranking view and headers on - https://dashboard.waxsweden.org/guilds/oig-ranking/

---

### Alienw.com
**Description**: Explorer for everything related to the Alien Worlds DAOs, including an API and wallet interface. 

**URLs**: [alienw.com/](https://alienw.com/), [Alpha API - https://api.alienw.com/](api.alienw.com/), [alienw wallet Interface](https://wallet.alienw.com)

**Update**: 

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

Latest Testnet Blocks log: [Testnet Blocks log](https://snapshots-cdn.eossweden.org/wax-testnet/5.x/wax-testnet_blocks_2025-01-01T04_30_00_904_319610405.bin.tar.gz)

| Snapshot | Blocks Log | State History | Elastic Search | AA API |
|--------|--------|--------|--------|--------|
| [x] | [x] | [] | [ ] | [ ] |


### <ins>Feedback to OIG</ins>

----