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
Following our block production troubles a while back, we ordered new servers which have now been fully operational over the past couple of weeks.

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [] | [X] | [x] | [x] | [x] | [] |  [] |
| - | 8k req/hour | 110 req/hour | 35k req/hour | 135k req/hour | - |

Others APIs: WAX RPC (290k req/hour), WAX Testnet RPC (15k req/hour)


### <ins>Contributions</ins>

### Savanna testnet

**URLs**: n/a

**Update**: 
We are still producing on and helping with tests in the fast finality testnet (Savanna).

### Hyperion Health Checker

**URLs**: [https://github.com/cc32d9/eosio-haproxy](https://github.com/cc32d9/eosio-haproxy)

**Description**: Our Hyperion health checker for haproxy which monitors the last indexed block and number of unindexed blocks, and stops sending requests to it if they exceed the thresholds is still running smoothly. Additionally, we have continued supporting Hyperion for testnet. 

**Update**: 
None in the reporting period.


---

### Bdata.one

**URLs**: [https://bdata.one/](https://bdata.one/)

**Description**: Bdata is a publicly accessible database with daily statistics on smart contract activity and a full registry of token transfers. EOS Amsterdam is co-sponsoring the infrastructure hosting. 

**Update**: 
None in the reporting period.


---

### Chronicle

**URLs**: [https://github.com/EOSChronicleProject/eos-chronicle/releases](https://github.com/EOSChronicleProject/eos-chronicle/releases)

**Description**: Chronicle is a software component designed to process the history of an Antelope (formely EOSIO) blockchain. Chronicle release 3.3 is available now on Github. It fixes a floating point overflow bug that broke LightAPI on WAX. EOS Amsterdam has contributed to the software development costs.

**Update**: 
None in the reporting period.

---

### Chronos

**URLs**: [https://github.com/EOSChronicleProject/chronos](https://github.com/EOSChronicleProject/chronos)

**Description**: Chronos is a history solution for Antelope blockchains. Chronos indexes the transaction traces of an Antelope blockchain in a ScyllaDB database. ScyllaDB is an open-source re-implementation of Apache Cassandra database. It's faster because it's implemented in C++, and it supports data sharding.

The database architecture allows for an enormous data ingestion performance. A single server can handle about 100k inserts per second with secondary indexes and materialized views, or even 500k inserts per second without secondary indexes.

**Update**: 
None in the reporting period.

---

### Memento

**URLs**: [https://github.com/Antelope-Memento/antelope_memento](https://github.com/Antelope-Memento/antelope_memento)

**Description**: Memento is a MariaDB or Postgresql/TimescaleDB database containing transaction traces from an EOSIO blockchain (such as EOS, Telos or WAX), and providing convenient indexes for quick searching.

A typical use case for Memento is tracking incoming and outgoing payments for a specific account, and checking their reversibility. The database may contain traces for all contracts on the blockchain, or it may be limited to a specific subset of accounts. dApps can set up their own instances, while public infrastructure providers may offer the service to a wider audience.

**Update**: 
Version 2.0 of Memento API is out. The whole API is reworked in Typescript, and websocket streaming interface has been added:
[https://github.com/Antelope-Memento/antelope_memento_api](https://github.com/Antelope-Memento/antelope_memento_api)

---

### Antelope Smart Contract Developer's Handbook

**URLs**: [https://cc32d9.gitbook.io/antelope-smart-contract-developers-handbook/](https://cc32d9.gitbook.io/antelope-smart-contract-developers-handbook/)

**Description**: The smart contract developer's handbook aims to address all the questions existing and prospective Antelope smart contract developers might have. This should make developer onboarding even easier. This project is a private project by cc32d9. 

**Update**: None in the reporting period.

---

### Antelope/WAX-leap

**URLs**: [https://github.com/eos-amsterdam-rnd/wax-leap/releases](https://github.com/eos-amsterdam-rnd/wax-leap/releases)

**Description**: Continuous support of WAX Leap.

**Update**: 
We're a part of the next EOS release testing. While it is uncertain whether this one will also be used for WAX, we wanted to shortly mention it.

---

### bInfra.one

**URLs**: [https://binfra.one/](https://binfra.one/)

**Description**: bInfra.one is an infrastucture service for dApps to offer them stronger and more reliable infrastructure.

**Update**: 
None in the reporting period.

---

### Community support

**URLs**: N/A

**Description**: Assisting the technical community in Telegram chats: WAX Developers, Antelope Developers, WAX Infra discussion

**Update**: 
Continuous community support.

---

### Exposition Park Holdings (wax.io)

**URLs**: N/A

**Description**: cc32d9 has continued providing both consultancy and infrastructure to Exposition Park Holdings, the core team behind WAX.

**Update**: 
None in the reporting period.

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
