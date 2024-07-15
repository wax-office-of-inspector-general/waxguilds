### <ins>General</ins>

|  |  |
| --- | --- |
| Website | https://waxdaobp.io |
| Contact | mikedcryptocurrency@gmail.com |
| bp.json (mainnet) | https://waxdaobp.io/bp.json |
| bp.json (testnet) | https://waxdaobp.io/test.json |
| producer (mainnet) | guild.waxdao |
| producer (testnet) | waxdaoguild1 |
| Guild Jurisdiction | USA |

### <ins>Noteworthy</ins>
*[...Describe issues you faced last month and if any noteworthy update/upgrade of hardware/software happended.]*

- Introduced a bug into the NFT backer contract when an update was made. Resulted in a loss of $800 worth of WUF, which I'm covering myself (so no loss of user funds). The bug is now patched and the service now operates as usual.

- One of our backup SHIPs crashed and needed to be restarted from snapshot, which resulted in our Light API lagging behind head block for a few hours. It was fixed the same day and is now operating as normal.

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [x] | [ ] | [x] | [x] | [x] | [x] | 
| - | - | - | - | ~48k req/day |  ~126k req/day |

Others APIs: Roborovski, dfuse, ...

### <ins>Contributions</ins>
*[This section needs to reflect the guilds current contributions sheet from their guilds page on Notion. New entries shall be added at the end.]*

### WaxDAO Farms And DAOs

**URLs**: https://waxdao.io, https://farms.waxdao.io

**List of SCs**: waxdaofarmer, farms.waxdao, dao.waxdao, tf.waxdao

**Update**: 
- Released a new token farm contract (tf.waxdao), and a new [open source UI](https://github.com/mdcryptonfts/farm-partner-ui) and [documentation](https://waxdao.gitbook.io/waxdao) for people to deploy their own farming platforms.
- Released a partner program for the new token farms, including an open source [partner smart contract](https://github.com/mdcryptonfts/farm-partner-contract), open source [indexer](https://github.com/mdcryptonfts/token-farms-indexer) and open source [express API](https://github.com/mdcryptonfts/token-farms-api) (the API endpoints are documented on Gitbook)
- Nefty/LaunchBagz is our first partner to build on top of the token farms, although not 100% sure if the feature is live on their front end yet
- Our personal deployment of the new token farms is at https://farms.waxdao.io

**Metrics**

[report relevant metrics and metric period...]

Period: 06/01/2024 - 07/14/2024

Stats:

- Search console: 1.45k clicks / 14.3k impressions / 10.1%% CTR
- Google analytics: 4.8k users / 3.1k new users / 13m 05s engagement time
- 998 NFT farms, 154 token farms, 21 daos, 49 proposals, 1,070 vote actions in daos (all running totals)


---

### NFT Backer

**URLs**: https://waxdao.io

**List of SCs**: waxdaobacker

**Update**: 
- Made some adjustments to the [smart contract](https://github.com/mdcryptonfts/backed_nfts_v2) to optimize how claims/balances are handled
- NFT Hive has implemented support for the NFT backer into their front end

**Metrics**

Period: All time

Stats: 4,695 total NFTs backed


---

### Token Tools

**URLs**: https://waxdao.io

**List of SCs**: waxdaosynths, waxdaoescrow, waxdaolocker

**Update**: 
- Implemented support for NFT Hive's airdrop tool, although not much usage and there seems to be some malformed JSON in the API response, which is causing issues with parsing on the front end

**Metrics**

[report relevant metrics and metric period...]

Period: All time

Stats: 144 total token locks, 224 people have used our token creator, 44 synthetic tokens have been created, 58 total slow drip escrow agreements


---


### Creator Tools

**URLs**: https://waxdao.io

**List of SCs**: waxdaomarket

**Update**: 
No new updates this period

**Metrics**

[report relevant metrics and metric period...]

Period: All time

Stats: 2,491 total nft drops, 1,984 total blends, 22,033 total drop claims, 39,013 total blend claims, 16,558 total pack openings


---

### Unity Tutorials

**URLs**: https://blog.waxdao.io

**List of SCs**: n/a

**Update**: 
- No new updates

**Metrics**

n/a


---

### WaxFusion Liquid Staking Protocol

**URLs**:
[Smart Contracts]([https://github.com/mdcryptonfts/token.fusion](https://github.com/mdcryptonfts/waxfusion))
[Website](https://github.com/mdcryptonfts/dapp.fusion)


**List of SCs**: dapp.fusion, token.fusion, pol.fusion, cpu1.fusion, cpu2.fusion, cpu3.fusion

**Update**: 

- Made tons of updates to the smart contracts and refactored a lot of stuff, but am still waiting on WAX team to complete the audit of the dapp.fusion contract before I can release the product. I was told that they will get back to auditing it this upcoming week.
- Added a [status page](https://test.waxfusion.io/status) to the website, so users can stay up to date regarding any delays/issues related to the protocol

**Metrics**

n/a

---

### Smart Contract Development Handbook

**URLs**: https://waxdao.gitbook.io/wax-smart-contract-development-guide

**List of SCs**: n/a

**Update**: 
- Initial creation of handbook, which covers many tips/tricks/resources for smart contract developers to refer to

**Metrics**

n/a


---


### <ins>Marketing</ins>
[Describe your guilds marketing initatives. List only initiatives inside the last review period.]


### <ins>Backups </ins>
URL: n/a

| Snapshot | Blocks Log | State History | Elastic Search | AA API |
|--------|--------|--------|--------|--------|
| [] | [] | [] | [ ] | [ ] |


### <ins>Feedback to OIG</ins>
*[valuable feedback for the WAX OIG around the topics governance, guidelines, ...]*

- Just what we spoke about on the call, would be nice if you could convince someone from WAX team to fill us in once in a while (monthly private roundtable with guilds would be ideal)

----
