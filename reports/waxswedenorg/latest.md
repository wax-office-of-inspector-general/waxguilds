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
- Put a lot of time into Investigating Hyperion Full history, and surrounding applications
- Set up a partial Hyperion History 
- 

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [] | [x] | [x] | [] | [] | [] | 
| - | - | - | - | - | - |


### <ins>Contributions</ins>

| Website/Platform | Visitors/views | Timeframe |     |
| ---------------- | -------------- | --------- | --- |
| alienw.com       | 1.6k           | 30 days   |     |
| waxsweden.org    | 397            | 30 days   |     |
| academy.anyo.io  | 235            | 30 days   |     |
| Anyo YouTube     | 218            | 28 days   |     |
| anyo.io          | 225            | 30 days   |     |


---
### Thalos
**Description**: Light-weight, Quick and easy to use Blockchain stream service. Utilizing the Thalos Server, Redis and Thalos Clients to stream any WAX data, directly from a SHIP node. Listen to one contract, action or all of them.

**URLs**: [thalos.waxsweden.org](https://thalos.waxsweden.org/), [Github](https://github.com/eosswedenorg/thalos), [Documentation](https://thalos.waxsweden.org/docs/), [NodeJS Client](https://github.com/eosswedenorg/thalos-nodejs), [Go Client](https://github.com/eosswedenorg/thalos/tree/master/api)

**Update**:
- Small bug fixes
- Submitted the latest update of Thalos for labs: https://labs.wax.io/proposals/157

---

### APT Packages
**Description**: APT Packages for WAX, Antelope and relevant tools for Linux distros. *apt install wax*

**URLs**: [WAX APT repo](https://eosswedenorg.github.io/apt/wax), [Main apt repo, some of our tools](https://eosswedenorg.github.io/apt/main), [Antelope APT repo](https://eosswedenorg.github.io/apt/antelope), [Github](https://github.com/eosswedenorg/apt)

**Update**:

---

### Anyobservation & OIG Support
**Description**: Videos, Articles and tools for the WAX Ecosystem. Recording and distributing the OIG Roundtables, as well as all the elections.

**URLs**: [anyo.io](https://anyo.io/), [OIG Roundtables](https://academy.anyo.io/wax-oig-roundtables), [Anyo YouTube](https://www.youtube.com/anyobservation), [Anyo Twitter](https://twitter.com/anyobservation), [WAX Memo Tracker](https://anyo.io/blockchain_tools/memo_tracker), [WAX Trx tracker](https://anyo.io/blockchain_tools/trx_tracker)

**Update**: 
- Latest OIG Roundtables are uploaded on YouTube and the site.
- Continued to work on the new oig dashboard, details down at the BP Notification & Data Service, which perhaps should be split into different things at this stage.
- Latest OIG calls
    - https://youtu.be/dDJ8EcV30rU - QRY Hyperion Update
    - https://youtu.be/X3QrJwNj7I4 - Substreams and Graph presentation
    - https://youtu.be/3ssXlLoqy-Q - Hyperion Hub presentation
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
- Compiled, tested and Deployed a new system contract on WAX testnet - b96446d3ddaf70ad29ab000a2bd72d90370908cf13c5162f6e2f7f7a9c0ea316
    - This update enables new ram actions.
* ramtransfer: transfer ram to someone
* ramburn and buyramburn: burn ram actions
* buyramself: convenience action to buy ram to yourself (don't have to specify a target ram receiver)

- Tested all the new features 
    - eosio::ramburn - 2c7b2057bad404b83192b520e654f6347023069e38d790da1677074747bc9884
    - eosio::buyramself - 182664b5330938bb5cccf45aae2737675ac0beb56c1957757797cfb66d43c510
    - eosio::ramtransfer - fca9fa7dfd898c10cbcb4902fdc43cdee78f2a437846d7b97968c16c6b5e3ec5

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
- Quiet a bit of work on https://dashboard.waxsweden.org/guilds
    - Added a page for all guild products [https://dashboard.waxsweden.org/guilds/products](https://dashboard.waxsweden.org/guilds/products)


---

### Alienw.com
**Description**: Explorer for everything related to the Alien Worlds DAOs, including an API and wallet interface. 

**URLs**: [alienw.com/](https://alienw.com/), [Alpha API - https://api.alienw.com/](api.alienw.com/), [alienw wallet Interface](https://wallet.alienw.com)

**Update**: 
- Minor fix of Telegram notification bot

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

Latest Testnet Blocks log: [Testnet Blocks log](https://snapshots-cdn.eossweden.org/wax-testnet/5.x/wax-testnet_blocks_2024-10-01T04_30_01_168_303715488.bin.tar.gz)

| Snapshot | Blocks Log | State History | Elastic Search | AA API |
|--------|--------|--------|--------|--------|
| [x] | [x] | [] | [ ] | [ ] |


### <ins>Feedback to OIG</ins>

----