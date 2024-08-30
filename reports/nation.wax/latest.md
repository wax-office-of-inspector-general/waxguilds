### <ins>General</ins>

|  |  |
| --- | --- |
| Website | https://eosnation.io/ |
| Contact | daniel@eosnation.io |
| bp.json (mainnet) | https://eosnation.io/wax.json |
| bp.json (testnet) | https://eosnation.io/waxtest.json |
| producer (mainnet) | nation.wax |
| producer (testnet) | nation.wax |
| Guild Jurisdiction | Sherbrooke, Quebec, Canada |

### <ins>Noteworthy</ins>
As core developers on The Graph (under our Pinax brand), this past month we added [official support for WAX Firehose and Substreams on The Graph](https://thegraph.com/networks/wax/?subnetwork=wax-mainnet). As we prepare to transition our dfuse services to our more modern data stack offered with Pinax and add support for WAX Subgraphs on The Graph, we also released some new foundational building blocks available for the community to start leveraging immediately, including our new [WAX Datasets and Raw Blocks Substreams](https://pangea.substreams.pinax.network), and our [Antelope foundational Substreams modules](https://blog.pinax.network/substreams/stream-seamless-antelope-data-with-epic-new-foundational-substreams-modules/) that make it easier to build custom Substreams for your specific use cases on WAX.

[The Graph](https://thegraph.com) is a widely adopted industry standard protocol for indexing blockchain data, supporting many different blockchains. WAX Subgraphs on The Graph will bring a new way for dApps on WAX to index data in a way that's familliar with developers in the broader web3 industry. It will also make it easier to have WAX dApps listed on data aggregators like [CoinGecko](https://www.coingecko.com), [CoinMarketCap](https://coinmarketcap.com), and [DefiLlama](https://defillama.com) since they favour or sometimes even require that an application is indexed with a Subgraph on The Graph before it can be listed on their platforms. We're proud to have brought support for WAX Firehose and Substreams on The Graph, and look forward to adding support for Subgraphs next month. Read more about [The Graph's curation program](https://thegraph.com/blog/curator-program-launch/) with the biggest data aggregators in the industry.

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [ ] | [x] | [x] | [ ] | [ ] | [ ] |
| - | - | - | - | ~x req |  ~y req |

Others APIs: Our dfuse and Firehose solutions have full history of all the blocks, so we checked "History (full)".

**URLs**

dfuse: https://wax.dfuse.eosnation.io

Firehose and Substreams on WAX: https://pinax.network/en/chain/wax

Firehose and Substreams on WAX Testnet: https://pinax.network/en/chain/waxtest

Firehose and Substreams for WAX and WAX Testnet on The Graph (hosted by Pinax): 
- https://thegraph.com/networks/wax/?subnetwork=wax-mainnet
- https://thegraph.market/services/firehose/wax
- https://thegraph.market/services/substreams/wax
- https://thegraph.market/services/firehose/wax-testnet
- https://thegraph.market/services/substreams/wax-testnet

**Update**:
We'll be launching our new [Antelope Token API](https://github.com/pinax-network/antelope-token-api) and [Antelope Transactions API](https://github.com/pinax-network/antelope-transactions-api) next week, with support for WAX, built on the Firehose/Substreams data stack. See the noteworthy section above for more updates on our progress on bringing support for WAX on The Graph and increasing adoption for WAX Firehose and Substreams. 

**Metrics**

Our WAX Firehose is serving between 1GB-5.5TB per day on mainnet and between 500MB and 2GB on testnet:

<img width="1483" alt="Screenshot 2024-07-15 at 3 51 22 PM" src="https://github.com/user-attachments/assets/0f645e4f-b2ac-44f9-9317-62319bc1c908">

Our WAX Substreams are serving between 130-800GB per day on mainnet (and trending upward) and between 2-10GB on testnet:

<img width="1470" alt="Screenshot 2024-07-15 at 3 46 29 PM" src="https://github.com/user-attachments/assets/fa56d712-e173-48aa-ab73-94870673706f">

### <ins>Contributions</ins>

### BP Validator

**URLs**: https://validate.eosnation.io/, https://github.com/EOS-Nation/bpvalidate

---

### WAX Detective

**URLs**: https://waxdetective.io/

**Metrics**

Period: April 16th - July 15 2024

Stats: 521 users, 1m 18s average engagement time
- Note: We experienced an unusual spike of traffic of 85 users on April 20 that may not represent legitimate usage. WAX Detective normally gets between 5-20 users per day.

<img width="723" alt="Screenshot 2024-07-15 at 4 44 28 PM" src="https://github.com/user-attachments/assets/c1eef66f-10aa-4ca4-8f6d-0b90509fab32">

---


### Spyglass

**URLs**: https://spyglass.network, https://wax.api.eosnation.io/transaction_lookup

**Metrics**

Period: April 16th - July 15 2024

Stats: 561 users, 25s average engagement time
- Note: We experienced an unusual spike of traffic of 30 users on June 17 and 389 users on June 18 that may not represent legitimate usage. Spyglass normally gets between 1-5 users per day.

<img width="729" alt="Screenshot 2024-07-15 at 4 46 56 PM" src="https://github.com/user-attachments/assets/2cb8ef3b-5e89-421e-9cd6-d5165cccfb98">

---


### WAX Name Service

**URLs**: https://www.waxnameservice.io/

**Metrics**

Period: April 16th - July 15 2024

Stats: No new suffixes listed, 7 names sold.

---

### Blockchain Stats

**URLs**: https://blocktivity.info/coin/waxp_0

**List of SCs**: blocktivity1


---

### WAX v5 Tests and Bug Reports

**URLs**: https://github.com/AntelopeIO/leap/issues/created_by/matthewdarwin, https://github.com/AntelopeIO/leap/issues?q=is%3Aissue+author%3AYaroShkvorets

**Update**: 
No new issues created during this period.


### <ins>Marketing</ins>
Nothing to report for this period.

### <ins>Backups </ins>
URL: https://snapshots.eosnation.io/

| Snapshot | Blocks Log | State History | Elastic Search | AA API |
|--------|--------|--------|--------|--------|
| [x] | [x] | [x] | [ ] | [ ] |


### <ins>Feedback to OIG</ins>

We would love to see Firehose & Substreams recognized as a history solution by the OIG. In previous evaluations we were not awarded points for having a history solution available on WAX Testnet, although our Firehose & Substreams endpoints are available there.
