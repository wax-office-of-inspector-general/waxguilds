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
- We have tried to help guilds figure out why they have more than average empty blocks, and what to do about it.
- We investigated and guided one team to fix their issue with overbilling in CPU for transactions compared to all other teams.
- We are currently preparing for the new Hyperion Release, and have started to upgrade softwares for one of our instances.
- Went through all our machines to ensure we are not pwnd by the recent major vulnerabilities in the Linux Ecosystem.

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [] | [x] | [x] | [] | [] | [] | 
| - | - | - | - | - | - |


### <ins>Contributions</ins>

| Website/Platform | Visitors/views | Timeframe |
| ---------------- | -------- | -------- |
| Anyo Twitter | 18.8k | 28 days | 
| alienw.com | 2.3k | 30 days | 
| waxsweden.org | 1.1k | 30 days |
| academy.anyo.io | 668 | 30 days | 
| Anyo YouTube | 371 | 28 days |
| anyo.io | 164 | 30 days |


---
### Thalos
**Description**: Light-weight, Quick and easy to use Blockchain stream service. Utilizing the Thalos Server, Redis and Thalos Clients to stream any WAX data, directly from a SHIP node. Listen to one contract, action or all of them.

**URLs**: [thalos.waxsweden.org](https://thalos.waxsweden.org/), [Github](https://github.com/eosswedenorg/thalos), [Documentation](https://thalos.waxsweden.org/docs/), [NodeJS Client](https://github.com/eosswedenorg/thalos-nodejs), [Go Client](https://github.com/eosswedenorg/thalos/tree/master/api)

**Update**:

#### Version 1.1.1 - [github.com/eosswedenorg/thalos/releases/tag/v1.1.1](https://github.com/eosswedenorg/thalos/releases/tag/v1.1.1)
- Build binaries linked with musl libc for alpine linux.
- Added docker image.
- redis-acl tool: added --pass-len flag.
- redis-acl tool: fix correct syntax for cleartext passwords.
- redis-acl tool: allow ping command for server user.

#### Version 1.1.0 - [github.com/eosswedenorg/thalos/releases/tag/v1.1.0](https://github.com/eosswedenorg/thalos/releases/tag/v1.1.0)
- Adding ActionTrace.FirstReceiver flag, that is true only if receiver is the same as contract name.
- Adding log.file_timestamp_format config field
- Added cli flag --log-file-timestamp
- Directory where log files are stored is created with correct permissions.
- Adding flags for almost all config values.
- Improved disconnect code for ship client.
- Application now waits for ship to reply with a close message before exiting the application.
- The application now recognizes an close error and no longer reports is as an actual error to the log.
- Application only calls "GetInfo" from the antelope API once and only if it actually needs the information.
- CI: update actions/checkout to version 4
- CI: update actions/setup-go to version 5
- golang: update github.com/eosswedenorg-go/antelope-ship-client to v0.2.7
- golang: switched github.com/pborman/getopt for github.com/spf13/cobra
- golang: use github.com/spf13/viper to handle configuration.

---

### APT Packages
**Description**: APT Packages for WAX, Antelope and relevant tools for Linux distros. *apt install wax*

**URLs**: [WAX APT repo](https://eosswedenorg.github.io/apt/wax), [Main apt repo, some of our tools](https://eosswedenorg.github.io/apt/main), [Antelope APT repo](https://eosswedenorg.github.io/apt/antelope), [Github](https://github.com/eosswedenorg/apt)

**Update**:
- Added the new Thalos v1.1.0 & v1.1.1 into [Apt Main Repo](https://eosswedenorg.github.io/apt/main)

---

### Anyobservation & OIG Support
**Description**: Videos, Articles and tools for the WAX Ecosystem. Recording and distributing the OIG Roundtables, as well as all the elections.

**URLs**: [anyo.io](https://anyo.io/), [OIG Roundtables](https://academy.anyo.io/wax-oig-roundtables), [Anyo YouTube](https://www.youtube.com/anyobservation), [Anyo Twitter](https://twitter.com/anyobservation), [WAX Memo Tracker](https://anyo.io/blockchain_tools/memo_tracker), [WAX Trx tracker](https://anyo.io/blockchain_tools/trx_tracker)

**Update**: 
- Latest OIG Roundtables are uploaded on YouTube and the site.
- [2024-04-09 | Lukas Sliwka](https://youtu.be/4X_N_136Nwc)
- [2024-03-26](https://youtu.be/TkLp1X6DE-U)
- [2024-03-12](https://youtu.be/PAeygF8pnHw)

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
- Updated Error Handling of the websocket client Test for Antelope SHIP.

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
- In talks with a 3rd party to help review new course material.

---

### WAX Testnet
**Description**: Maintaing and upgrading WAX Testnet Faucet, tools and chain contracts. 

**URLs**: [https://waxsweden.org/testnet](https://waxsweden.org/testnet)

**Update**:
- Top-up of the Testnet WAX Token Faucet Balance

---

### Haproxy Healthcheck
**Description**: Haproxy Plugin to monitor the health of nodes and API's related to WAX and other Antelope chains. 

**URLs**: [Github](https://github.com/eosswedenorg/antelope-api-healthcheck), [APT](https://eosswedenorg.github.io/apt/main)

**Update**: 

---

### BP Notification & Data Service
**Description**: CPU and block notifications for Guilds on WAX, as well as an upcoming data service to more easily track the performance of all guilds. 

**URLs**: [notify.waxsweden.org/](https://notify.waxsweden.org/)

**List of SCs**: [Mainnet](notify.se), [Testnet]()

**Update**: 
- Working on the website to display BP CPU analytics, will share with the OIG and a few selected Guilds for feedback once it's done.

---

### Alienw.com
**Description**: Explorer for everything related to the Alien Worlds DAOs, including an API and wallet interface. 

**URLs**: [alienw.com/](https://alienw.com/), [Alpha API - https://api.alienw.com/](api.alienw.com/)

**Update**: 
- Actively working on an Alpha version of the API
- Working on a wallet interface for everything DAO related.

---

### Public Infrastructure Support
**Description**: Supporting public tools and services with infrastructure and access to our private nodes and APIs. 

**URLs**: [api.waxsweden.org](https://api.waxsweden.org/)

**Update**: 

- Providing a team with SHIP & Thalos access to help them build and run their product. 
- Maintenance and upgrades on the softwares behind the Alien Worlds Teleport.

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

Latest Testnet Blocks log: [Testnet Blocks log](https://snapshots-cdn.eossweden.org/wax-testnet/5.x/wax-testnet_blocks_2024-04-04T04_21_26_752_272617431.bin.tar.gz)

| Snapshot | Blocks Log | State History | Elastic Search | AA API |
|--------|--------|--------|--------|--------|
| [x] | [x] | [] | [ ] | [ ] |


### <ins>Feedback to OIG</ins>
We believe the OIG ratings for full history is skewed. It is essential for the network and compared to a partial history, it requires much more hardware, and maintenance. Restoring any issues also takes way longer than it does for any partial history. 
If you run it with any redundancy on hardware, it will quickly consume 30-100x the disk-space on high-speed NVME drives compared to a partial history solution. 

Current guidelines encourages teams to push for top 10 in ratings, and then scale down operations, as there is little to no benefit of pushing higher once you do. Dropping 24p at that stage doesn't have a huge impact.  
Specially if that team also spins up, or already runs an Atomic API (12p). Another Atomic API adds little to no value for the chain, while another Full history adds redundancy incase any issues occurs on those existing. As the time to restore it from issues can take multiple days, or even weeks.

We don't think the other APIs are supposedly less important. Rather, the importance of highly redundant and reliable History solutions for users, tools and services are undervalued in the guidelines. Most recent data is most often requested, but potential lack of older data is a risk and problem.

Full History: 48p
Partial History: 24P
Atomic API: 12p

----

