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

Our WAX Firehose is averaging about 1 GiB per day with a peak of 1.5TB on August 22 and 498 GiB on August 25 on WAX:
<img width="1461" alt="Screenshot 2024-08-30 at 5 26 40 PM" src="https://github.com/user-attachments/assets/928e9dc3-cbc4-4b4d-a429-4171be780a22">

Our WAX Substreams are serving between 225 - 791 GiB per day on WAX:
<img width="1465" alt="Screenshot 2024-08-30 at 5 22 50 PM" src="https://github.com/user-attachments/assets/24514f3a-63c3-4588-8957-d59a78a2e962">


### <ins>Contributions</ins>

### BP Validator

**URLs**: https://validate.eosnation.io/, https://github.com/EOS-Nation/bpvalidate

---

### WAX Detective

**URLs**: https://waxdetective.io/

**Metrics**

Period: July 16 - August 30 2024

Stats: 194 users, 1m 13s average engagement time
<img width="805" alt="Screenshot 2024-08-30 at 5 29 38 PM" src="https://github.com/user-attachments/assets/bd1de353-29c8-4462-ab45-7af8f5f2512f">

---


### Spyglass

**URLs**: https://spyglass.network, https://wax.api.eosnation.io/transaction_lookup

**Metrics**

Period: July 16 - August 30 2024

Stats: 25 users, 19s average engagement time
<img width="803" alt="Screenshot 2024-08-30 at 5 32 51 PM" src="https://github.com/user-attachments/assets/496b4222-0a7c-4055-9ff4-334403132e72">

---


### WAX Name Service

**URLs**: https://www.waxnameservice.io/

**Metrics**

Period: April 16th - July 15 2024

Stats: No new suffixes listed, no names sold.

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
