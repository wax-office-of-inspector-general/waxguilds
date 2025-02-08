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
Our transition from dfuse to our new stack of Pinax data services is complete. dfuse had been sunset and all users have migrated to a brand new suite of data services, including our [WAX Firehose & Substreams](https://pinax.network/en/chain/wax), [WAX token and transaction APIs](https://wax.api.pinax.network), and custom-built subgraphs on The Graph, including [WAX Transactions](https://thegraph.com/explorer/subgraphs/4bAe7NA8b6J14ZfZr3TXfzzjjSoGECTFuqv7CwnK1zzg?view=Query&chain=arbitrum-one), [WAX Tokens](https://thegraph.com/explorer/subgraphs/6Tt5mHVNDyAo3KbsYMUeemmzs2381vXUquXw75EnG9cW?view=Query&chain=arbitrum-one), [Alien Worlds](https://thegraph.com/explorer/subgraphs/4UETM9eMQ4Y4otae5sjJscniNhmDUhCDwWTfXm6Tpm14?view=Query&chain=arbitrum-one), and [Farmers World](https://thegraph.com/explorer/subgraphs/3eMDCbB9JBiherY33aC6e5gGUbuMYLA8xKFwEC27mSkz?view=Query&chain=arbitrum-one). 

As core developers on The Graph (under our Pinax brand), we've developed a [new networks registry for The Graph](https://github.com/graphprotocol/networks-registry) that includes WAX, which has enabled our [WAX subgraphs to be natively discoverable in The Graph explorer](https://thegraph.com/explorer?indexedNetwork=wax), making it easier for developers to discover and leverage WAX data in their projects. The new network registry has also been integrated with [The Graph Tooling](https://github.com/graphprotocol/graph-tooling), making it easy for any WAX developer to develop and deploy new WAX subgraphs to The Graph. 

Our team has also been working on a new data service for data analysts called datasets. We recently published our [WAX datasets to the Snowflake Marketplace](https://app.snowflake.com/marketplace/listing/GZTSZ33VCBE/pinax-wax-raw-blockchain-data?search=wax), bringing WAX data to a platform familliar to millions of traditional data analysts in a format they're comfortable working with. Our goal with datasets is to bring WAX blockchain data to a new market of data analytists who are new to the blockchain space and not familiar with blockchain data indexing tooling. You can learn more about our datasets in some of our recent blog posts (which include videos): [Blockchain Data Analysis Made Easy with Pinax Datasets and Snowflake](https://blog.pinax.network/pinax/blockchain-data-analysis-made-easy-with-pinax-datasets-and-snowflake/) and [Save Time and Unlock Insights Sooner with Pinax Blockchain Datasets](https://blog.pinax.network/pinax/save-time-and-unlock-insights-sooner-with-pinax-blockchain-datasets/).

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [ ] | [x] | [x] | [ ] | [ ] | [ ] |
| - | - | - | - | ~x req |  ~y req |

Others APIs: Our dfuse and Firehose solutions have full history of all the blocks, so we checked "History (full)".

**URLs**

~~dfuse: https://wax.dfuse.eosnation.io~~ dfuse was recently sunset in favour of our new suite of data services:

Firehose and Substreams on WAX: https://pinax.network/en/chain/wax

Firehose and Substreams on WAX Testnet: https://pinax.network/en/chain/waxtest

Firehose and Substreams for WAX and WAX Testnet on The Graph (hosted by Pinax): 
- https://thegraph.com/networks/wax/?subnetwork=wax-mainnet
- https://thegraph.market/services/firehose/wax
- https://thegraph.market/services/substreams/wax
- https://thegraph.market/services/firehose/wax-testnet
- https://thegraph.market/services/substreams/wax-testnet

WAX token and transaction API: https://wax.api.pinax.network

WAX Subgraphs on The Graph (hosted and developed by Pinax): https://thegraph.com/explorer?indexedNetwork=wax

WAX Datasets on Snowflake Marketplace (hosted and developed by Pinax): https://app.snowflake.com/marketplace/listing/GZTSZ33VCBE/pinax-wax-raw-blockchain-data?search=wax

**Update**:
See our recent updates in the "notworthy" section above. Note to OIG: please advise if these new data services should be tracked under the "contributions" section. 

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
