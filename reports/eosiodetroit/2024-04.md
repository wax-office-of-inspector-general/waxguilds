### <ins>General</ins>

|  |  |
| --- | --- |
| Website | https://detroitledger.tech/ |
| Contact | adam@detroitledger.tech, jp@detroitledger.tech |
| WAX Mainnet bp.json (https://detroitledger.tech/chains/wax.json) | |
| WAX Testnet bp.json (https://detroitledger.tech/chains/wax/testnet/bp.json) |  |
| producer (mainnet) | eosiodetroit |
| producer (testnet) | eosiodetroit |
| Guild Jurisdiction | United States |

### <ins>Noteworthy</ins>

* WAX AtomicAssets Mainnet API (https://atomic.wax.detroitledger.tech): was down for roughly 12 hours due to an attempt at upgrading to 1.3.24. The fix provided in the 1.3.21 to 1.3.24 upgrade branch required modifications to work properly and resulted in the inability to index further blocks. We have restored from a 1.3.24 backup and are not operational.
* WAX Hyperion Mainnet API (https://hyperion.wax.detroitledger.tech): After an issue with our elasticsearch cluster was remedied during a brief outage,an issue with the firewall whitelisting specific IPs resulting in false negatives while testing for connectivity. While our Hyperion was operational, it was not exposed publicly for some time. This has been remedied.


### <ins>API Services</ins>


| Stats |WAX Hyperion - Partial (mainnet)| Chain / History (full) | AtomicAssets API | IPFS |
|---------------------|----------------------------------|------------------------|-------------------|-----------------|
| Active|Yes|Yes|Yes|Yes| **
| Requests/day|!| 667,710|2,945|N/A|
| Additional Info|Impacted by Outage| |||


### <ins>Contributions</ins>

### Nodesuite

**URLs**: https://github.com/eosdetroit/nodesuite, 

**List of SCs**: N/A

**Update**: 
Updated nodeos start script
Added nodeos restart script
Added local monitoring script to check producer health
Updated hyperion deployment playbook to utilize updated dependencies
Updated snapshot handlers for snapshot providers (Sweden, Cryptolions, Sweden)
Updated config.ini template






### WAX Labs

**URLs**: https://labs.wax.io, https://github.com/worldwide-asset-exchange/wax-labs-ui, 

**List of SCs**: labs.wax

**Update**: 
* Fixed last updated date to reflect the correct date
* Improved Telegram field placeholder instruction and remove email field from front-end until smart contract can be upgraded
* Fixed note field field on rejection
* Fixed caching/build issue causing old WAX Labs website to load
* Fixed deliverables to review filter to capture all relevant proposals and show on all login states

**Metrics**

Period: March 1st, 2024 - April 15th 2024

* New proposals submitted: 2

### FACINGS

**URLs**: https://facings.io, https://github.com/facings/collection-manager_

**List of SCs**: mint.facings, open.facings, make.facings, earn.facings

**Update**: 
* FACINGS is now also contracted with Pantheon, the game DLT is building for a client on WAX, directly to provide NFT minting services for the first edition of the game NFTs.
* FACINGS has been working to finalize the set design and metadata while it waits for the remaining production artwork to be completed.
* Work continues on the NFT publishing workflow reimplementation. It is expected that FACINGS will begin work on the sales engine reimplementation within the next reporting period.

### Pyntelope

**URLs**: https://github.com/FACINGS/pyntelope, 

**List of SCs**: N/A

**Update**: 
* No update

### OIG Election Portal
**URLs**: https://oig.wax.io, https://github.com/wax-office-of-inspector-general/oig.wax.io

**List of SCs**: decide

**Update**: 
* No update

### <ins>Marketing</ins>
* The team completed the Portuguese translations of the “Learn” section of the WAX Developer documentation. We are waiting on feedback from the IGs and their translation resources about the quality of the translations before we accelerate the work towards translating the rest of the site. The next section translated will be the “Build” section and we will submit work incrementally.
* The Chinese translations are currently being redone based on the feedback from an OIG resource both parties agreed was qualified to evaluate it. It was determined that our resource outsourced some or all of the translations we submitted and that the outsourced resource used low-quality auto-translation practices for large portions of the docs.

### <ins>Backups </ins>

Daily WAX Mainnet Snapshots - https://snapshots.detroitledger.tech


### <ins>Feedback to OIG</ins>

None.








