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

No issues to speak of.

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [x] | [ ] | [x] | [x] | [x] | [x] | 
| - | - | - | - | ~354k req/day |  ~89k req/day |

Others APIs: Roborovski, dfuse, ...

### <ins>Contributions</ins>
*[This section needs to reflect the guilds current contributions sheet from their guilds page on Notion. New entries shall be added at the end.]*

### WaxDAO Farms And DAOs

**URLs**: https://waxdao.io, https://farms.waxdao.io

**List of SCs**: waxdaofarmer, farms.waxdao, dao.waxdao, tf.waxdao

**Update**: 

A few minor UI improvements and contract updates.

**Metrics**

[report relevant metrics and metric period...]

Period: 07/15/2024 - 08/30/2024

Stats:

- 1,033 NFT farms, 176 token farms, 21 daos, 49 proposals, 1,070 vote actions in daos (all running totals)


---

### NFT Backer

**URLs**: https://waxdao.io

**List of SCs**: waxdaobacker

**Update**: 

- Just a minor contract update to allow deposits without backing NFTs. But given the deprecation of AA backing feature, it's likely that I'll be rewriting this contract and creating a better indexer/API.

**Metrics**

Period: All time

Stats: 5,858 total NFTs backed


---

### Token Tools

**URLs**: https://waxdao.io

**List of SCs**: waxdaosynths, waxdaoescrow, waxdaolocker

**Update**: 

- Fixed a UI issue where certain token pages weren't behaving properly.
- Updated the indexer to count liquidity pairs that include new tokens (lsWAX, LSW etc)

**Metrics**

[report relevant metrics and metric period...]

Period: All time

Stats: 161 total token locks, 233 people have used our token creator, 48 synthetic tokens have been created, 60 total slow drip escrow agreements


---


### Creator Tools

**URLs**: https://waxdao.io

**List of SCs**: waxdaomarket

**Update**: 

- Couple of minor front end updates related to NSFW collections etc

**Metrics**

[report relevant metrics and metric period...]

Period: All time

Stats: 2,550 total nft drops, 2,142 total blends, 23,134 total drop claims, 42,261 total blend claims, 19,563 total pack openings


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
[Smart Contracts](https://github.com/mdcryptonfts/waxfusion)
[Website](https://waxfusion.io)


**List of SCs**: dapp.fusion, token.fusion, pol.fusion, cpu1.fusion, cpu2.fusion, cpu3.fusion

**Update**: 

- Released on WAX Mainnet
- Listed on [DefiLlama](https://defillama.com/protocol/waxfusion#information)
- Listed on [DappRadar](https://dappradar.com/dapp/waxfusion)
- Partnered with dozens of WAX projects to create Alcor farms and boost ecosystem liquidity
- Partnered with Herb Bot and Crypto Alpha to integrate lsWAX into Telegram bots
- Got lsWAX integrated as a payment option on Hive and Nefty
- Multiple UI improvements
- Pushed a smart contract update, and wrote another update but need to write more tests for it and propose a msig before it can be pushed to mainnet
- Added/updated multiple sections of the documentation
- Updated Thalos version and improved the indexer
- Created an API with a simple `get_tvl` endpoint, started some tests with reading table deltas to create a more robust public API
- Wrote a Medium article and had it published by the WAX team
- Telegram group is very active and reached just under 300 members
- Applied for CoinGecko listing, got turned down due to liquidity and social following, but will be reapplying as the numbers grow
- lsWAX is already a [top 10 token](https://waxonedge.app/analytics) and hasn't even been out for a month
- Around 500 WAX has already been permanently locked in our `pol.fusion` contract, which will always be there to generate rewards for users, but never withdrawn from the contract. It's essentially `eosio.null` but with more value-add.

**Metrics**

6+ million total WAX locked, over 400 unique users, over 500 lsWAX holders, over 50,000 WAX worth of rewards generated for users, 3,575 WAX generated for ecosystem incentives (Alcor farms that are natively supported on the WaxFusion contract)

---

### Smart Contract Development Handbook

**URLs**: https://waxdao.gitbook.io/wax-smart-contract-development-guide

**List of SCs**: n/a

**Update**:

- Added new information to multiple sections

**Metrics**

n/a


---


### <ins>Marketing</ins>
[Describe your guilds marketing initatives. List only initiatives inside the last review period.]

### YouTube Live Streams

Weekly live streams on my [YouTube Channel](https://www.youtube.com/@MikeDCrypto/streams). P.S. I realize it is called the "WaxFusion Show" but a majority of the stream time is spent engaging people about WAX in general, talking to guests, etc. The discussions have been really helpful and engaging for the overall ecosystem.

### DefiLlama Initiative

- [Added NFT Hive](https://defillama.com/protocol/nft-hive) to the list of WAX projects
- Due to getting LSWAX listed on CoinGecko, I was able to add LSWAX TVL for Alcor, Taco and Nefty. This boosted the overall TVL of WAX Blockchain by roughly $100k, and moved us up to rank 153.
- In talks with DefiLlama devs about providing them an API (possibly Alcor's, or a custom one) so that we can count the TVL of WAX tokens that aren't listed on CoinGecko. The difficulty of WAX projects getting listed on CoinGecko is currently resulting in a lot of TVL missing from DefiLlama metrics, since they only count TVL of tokens that they can fetch prices for from CoinGecko's API. If we can work with them on an alternative solution, many WAX tokens could be added to the DefiLlama adapters, which could significantly boost TVL and exposure.


### <ins>Backups </ins>
URL: n/a

| Snapshot | Blocks Log | State History | Elastic Search | AA API |
|--------|--------|--------|--------|--------|
| [] | [] | [] | [ ] | [ ] |


### <ins>Feedback to OIG</ins>
*[valuable feedback for the WAX OIG around the topics governance, guidelines, ...]*

- Please consider having an open discussion about my [RFP issue](https://github.com/wax-office-of-inspector-general/WAX-RFP/issues/8). If possible, I would prefer to have the IGs on my YouTube channel for this discussion as it would allow me to lead the conversation and avoid extra noise (anyone interested can still ask questions and give feedback in the live chat). It would also engage normal users more than the google meet setting would.

----
