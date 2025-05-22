<img src="https://bountyblok.io/assets/bb-logo-white.4c1ae6c4.svg" alt="bblk" width="600"/>

# Guild Report May 2025

### <ins>General</ins>
|  |  |
| --- | --- |
| Website | https://bountyblok.io |
| Contact | dimitri@bountyblok.io |
| bp.json (mainnet) | https://bountyblok.io/wax.json |
| bp.json (testnet) | https://bountyblok.io/test.json |
| producer (mainnet) | bountyblokbp |
| producer (testnet) | bountyblokbp |
| Guild Jurisdiction | EU |

### <ins>Noteworthy</ins>

* Decommissioned  Hyperion Testnet, and also removed it from test.json
* Removed IFPS from wax.json but keeping it running for now since some are using it
* p2p.wax.bountyblok.io is now full blocks log
* also working on 2nd p2p peer with full blocks next few days

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [] | [ ] | [] | [] | [] | [] 
| - | - | - | - | - | - |

### <ins>Contributions</ins>

### Product #1: bountyblok gamification APIs

**URLs**: api.bountyblok.io / bountyblok.io/enterprise-web3-api

**Update**: 
* New client (private testing): ABN-AMRO (https://www.abnamroprivatebanking.be/en/index.html )
* They have access to private testing on https://www.stocktrak.com/members/register?sessionid=XXXXX but we cannot disclose the sessionid right now but shared screenshot
 ![WhatsApp Image 2025-05-22 at 1 15 12 PM](https://github.com/user-attachments/assets/1b527464-993b-48e6-ba72-3d5564ded481)


**Metrics**

Period: April 1 - May 21, 2025

|  |  |
| --- | --- |
| Total WAX TXs | 12,513,388 |
| New Clients | 1 |
---

### Product #2: Smart Asset Distribution Tool

**URLs**: https://wax.drop.bountyblok.io/

**Update** 
* Ability to filter account holders by last transfer date
 ![Screenshot (1)](https://github.com/user-attachments/assets/eb7a696c-b5a7-427c-8073-f890d94e6d78)
* Minor bug fixes 

**Metrics**

Period: April 1 - May 21, 2025

|  |  |
| --- | --- |
| New Projects added | 4 |
| Total distributions | 472 |
| Total assets distributed | 97,118 |
---

### Product #3: Gift NFT

**URLs**: https://giftnft.io/

**Update** 
* Added NFT preview showing additional details of each NFT
 <img width="1169" alt="Screenshot 2025-05-22 091647" src="https://github.com/user-attachments/assets/8adc9aed-c90e-4394-b3d6-65d820ca7bf4" />

**Metrics**

Period: April 1 - May 21, 2025

|  |  |
| --- | --- |
| Total Gifts sent | 31 |
---

### Product #4: Contest Giveaway Platform

**URLs**: https://wax.contest.bountyblok.io

**Update** 
* MAJOR update: completely replaced AWS centralized to Walrus Storage by Mysten Labs https://docs.wal.app/ https://www.walrus.xyz/
* Walrus a decentralized storage and data availability protocol designed specifically for large binary files, or "blobs".
* This change is exlusive to WAX - we now upload images and competition meta data (contest name, description, start date, ...) as blobs and publish them to a walrus publisher node.
* As you can see below this just shows how the image is loaded from a Walrus Aggreator
 <img width="1099" alt="Screenshot 2025-05-22 081642" src="https://github.com/user-attachments/assets/7d4072fe-9e36-423c-a29a-a3daabd2a94f" />

* The url of above: https://walrus-aggregator.natsai.xyz/v1/blobs/I5E63ZVE7cz2JYC4yBL_jx6ds_WMTc7I_5cLMRnDEzU
* This is the raw blob, but since this is a content type image you can rename the downloaded file to .jpg so that you can "view it"
* Specific docs url we use to publish blobs: https://docs.wal.app/usage/web-api.html
* curl example to upload image file ```curl --location --request PUT 'https://publisher.walrus-testnet.walrus.space/v1/blobs' --form '=@"/C:/Users/saddam/Desktop/Original.png"'```
* To upload text or json string ```curl --location --request PUT 'https://publisher.walrus-testnet.walrus.space/v1/blobs' -d "some string"```
  
* A few bug fixes

**Metrics**

Period: April 1 - May 21, 2025

|  |  |
| --- | --- |
| Total Contests | 23 |
| Total Entries | 10,500 |
| Total X Follows | 1,952 |
| Total X Reposts | 593 |
| Total X Likes | 445 |
| Total new X Posts | 285 |
| Total Discord Joins | 1,509 |
---

### Product #5: Official WAX Status 

**URLs**: https://status.wax.io/

**Update** 
* Improved accuracy of RNG Oracle via Atlassian's API 
 ![Screenshot 2025-05-22 1 39 37 PM](https://github.com/user-attachments/assets/1d3427ef-b5e8-49d6-a922-a9607cb54362)

* On-going tweaks and bug fixes
---

### New: Mysten Labs + WAX
* Approaching this strategically, for now we integrated their tools and completely replaced AWS S3
* https://x.com/bountyblok/status/1915408224422862934
* Also wrote a guide https://x.com/NatsaiOU/status/1910334008514245117

### Avalon
* Updated docs and guides: https://danu-games.gitbook.io/avalon-the-game-light-paper
* New home page launch (with Dimitri as the blockchain advisor :D) https://www.avalonthegame.com/
 ![Screenshot 2025-05-22 2 26 17 PM](https://github.com/user-attachments/assets/0d51a4b4-7a33-4b9e-8c0b-6247095c17b0)
* Kickstarter coming up this Summer
* We contracted with Xsolla as a payment processor for in game items and game packs: https://avalon-the-game-357f.xsolla.site/
* Officially approved by XBOX
* Single player version comping for PS5 and XBOX
  
---

### NEW: WAX + Coingecko
* Working with coingecko + WAX team, and obtained list of requirements how to list WAXP on their DEX geckoterminal
  
--- 

### <ins>Marketing</ins>
* Involved with NFTOPia this summer as usual
  
---

### <ins>Backups </ins>

### <ins>Feedback to OIG</ins>

----
