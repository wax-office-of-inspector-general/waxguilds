### <ins>General</ins>

|  |  |
| --- | --- |
| Website | [https://eosamsterdam.net/](https://eosamsterdam.net/) |
| Contact | rhett@eosamsterdam.net |
| bp.json (mainnet) | [https://eosamsterdam.net/bp.json](https://eosamsterdam.net/bp.json) |
| bp.json (testnet) | [https://waxtest.eosams.xeos.me/bp.json](https://waxtest.eosams.xeos.me/bp.json) |
| chains.json (mainnet) | [https://wax.eosamsterdam.net/chains.json](https://wax.eosamsterdam.net/chains.json) |
| producer (mainnet) | amsterdamwax |
| producer (testnet) | amsterdamwax |
| Guild Jurisdiction | Netherlands |

### <ins>Noteworthy</ins>
Hyperion availability has been improved. Also, a faster server for block production is being prepared. Addtionally, we have a price oracle running now, taking prices from Coinbase and Binance

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [] | [X] | [x] | [x] | [x] | [] |  [] |
| - | 8k req/hour | 100 req/hour | 33k req/hour | 130k req/hour | - |

Others APIs: WAX RPC (300k req/hour), WAX Testnet RPC (15k req/hour)


### <ins>Contributions</ins>

### Hyperion Health Checker

**URLs**: [https://github.com/cc32d9/eosio-haproxy](https://github.com/cc32d9/eosio-haproxy)

**Description**: Our Hyperion health checker for haproxy which monitors the last indexed block and number of unindexed blocks, and stops sending requests to it if they exceed the thresholds is still running smoothly. Additionally, we have continued supporting Hyperion for testnet. 

**Update**: 
None in the reporting period.

**Metrics**


---

### Bdata.one

**URLs**: [https://bdata.one/](https://bdata.one/)

**Description**: Bdata is a publicly accessible database with daily statistics on smart contract activity and a full registry of token transfers. EOS Amsterdam is co-sponsoring the infrastructure hosting. 

**Update**: 
None in the reporting period.

**Metrics**


---

### Chronicle

**URLs**: [https://github.com/EOSChronicleProject/eos-chronicle/releases](https://github.com/EOSChronicleProject/eos-chronicle/releases)

**Description**: Chronicle is a software component designed to process the history of an Antelope (formely EOSIO) blockchain. Chronicle release 3.3 is available now on Github. It fixes a floating point overflow bug that broke LightAPI on WAX. EOS Amsterdam has contributed to the software development costs.

**Update**: 
None in the reporting period.

**Metrics**


---

### Chronos

**URLs**: [https://github.com/EOSChronicleProject/chronos](https://github.com/EOSChronicleProject/chronos)

**Description**: Chronos is a history solution for Antelope blockchains. Chronos indexes the transaction traces of an Antelope blockchain in a ScyllaDB database. ScyllaDB is an open-source re-implementation of Apache Cassandra database. It's faster because it's implemented in C++, and it supports data sharding.

The database architecture allows for an enormous data ingestion performance. A single server can handle about 100k inserts per second with secondary indexes and materialized views, or even 500k inserts per second without secondary indexes.

The data model of ScyllaDB is that each table or materialized view is a hash of sorted trees: the partition key is an unsortable hash key, and each partition is a sorted tree. Also each tree cannot contain more than 2 billion rows. This implies the limitations and restrictions on the application data model.

This project is a private project by cc32d9. 

**Update**: 
None in the reporting period.

**Metrics**


---

### Memento

**URLs**: [https://github.com/Antelope-Memento/antelope_memento](https://github.com/Antelope-Memento/antelope_memento)

**Description**: Memento is a MariaDB or Postgresql/TimescaleDB database containing transaction traces from an EOSIO blockchain (such as EOS, Telos or WAX), and providing convenient indexes for quick searching.

A typical use case for Memento is tracking incoming and outgoing payments for a specific account, and checking their reversibility. The database may contain traces for all contracts on the blockchain, or it may be limited to a specific subset of accounts. dApps can set up their own instances, while public infrastructure providers may offer the service to a wider audience.

It can also be accessed through a HTTP API, supporting both MySQL and Postgres backends. Additionally, it also has a GraphQL interface in addition to the RESTful interface.

EOS Amsterdam is cosponsoring the development of a new streaming API in Memento. The new API will allow the user to connect to the websocket endpoint and subscribe to events for multiple blockchain accounts. The wsebsocket service needs to listen on a separate TCP port, so a new environment option is required. socket.io protocol is used for communication. 

**Update**: 
A websocket streaming API has been developed and is currently in testing

**Metrics**


---

### Antelope Smart Contract Developer's Handbook

**URLs**: [https://cc32d9.gitbook.io/antelope-smart-contract-developers-handbook/](https://cc32d9.gitbook.io/antelope-smart-contract-developers-handbook/)

**Description**: The smart contract developer's handbook aims to address all the questions existing and prospective Antelope smart contract developers might have. This should make developer onboarding even easier. This project is a private project by cc32d9. 

**Update**: None in the reporting period.

**Metrics**


---

### Antelope/WAX-leap

**URLs**: [https://github.com/eos-amsterdam-rnd/wax-leap/releases](https://github.com/eos-amsterdam-rnd/wax-leap/releases)

**Description**: Continuous support of WAX Leap.

**Update**: 
Following the latest WAX Leap 5.0.1 release, we have been working on the 5.0.2 release. We are tackling some issues here - [AntelopeIO/leap#2384](https://github.com/AntelopeIO/leap/issues/2384). Additionally, we reported [one more problem](https://github.com/AntelopeIO/leap/issues/2393).

**Metrics**

---

### bInfra.one

**URLs**: [https://binfra.one/](https://binfra.one/)

**Description**: bInfra.one is an infrastucture service for dApps to offer them stronger and more reliable infrastructure. This service has helped various popular applications with their infrastructure so far. Some of the notable clients include milliononmars.com, desertfarm.io, and arenaofglory.io. This service is offered by cc32d9.

**Update**: 
None in the reporting period.

**Metrics**

---

### Community support

**URLs**: N/A

**Description**: Assisting the technical community in Telegram chats: WAX Developers, Antelope Developers, WAX Infra discussion

**Update**: 
Continuous community support.

**Metrics**

---

### Exposition Park Holdings (wax.io)

**URLs**: N/A

**Description**: cc32d9 has continued providing both consultancy and infrastructure to Exposition Park Holdings, the core team behind WAX.

**Update**: 
None in the reporting period.

**Metrics**

---


### <ins>Backups </ins>
URL: [Snapshots](https://snapshots.eosamsterdam.net/public/wax/)

| Snapshot | Blocks Log | State History | Elastic Search | AA API |
|--------|--------|--------|--------|--------|
| [x] | [x] | [x] | [ ] | [X] |

Blocks and state history from 2021-09-26
Atomic assets from 2022-02-16
Also, Chronicle data snapshots (latest from 2023-12-06)


### <ins>Feedback to OIG</ins>

None

----
