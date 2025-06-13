### <ins>General</ins>

|  |  |
| --- | --- |
| Website | https://detroitledger.tech/ |
| Contact | rob@detroitledger.tech, adam@detroitledger.tech, jp@detroitledger.tech |
| WAX Mainnet bp.json (https://detroitledger.tech/chains/wax.json) | |
| WAX Testnet bp.json (https://detroitledger.tech/chains/wax/testnet/bp.json) |  |
| producer (mainnet) | eosiodetroit |
| producer (testnet) | eosiodetroit |
| Guild Jurisdiction | United States |

### <ins>Noteworthy</ins>

* Pantheon Update
* Nodesuite Update
* FACINGS Studio Update
* We deployed a fix for WAX Labs related to proposals not showing under "My Proposal" sections under the account profile or the full proposal list. It appears there is potentially another issue with WAX's netify as the change was not automatically deployed despite passing tests merging.

* For awareness: 
    * DLT's IPFS Gateway can be accessed via https://ipfs.gateway.detroitledger.tech
    * DLT's Daily WAX Nodeos Snapshots are available at: https://snapshots.detroitledger.tech 
    * DLT's Monthly AtomicAssets API (v1.3.24) database backups are available at: https://detroitledger.tech/backups/atomic
        * Please feel free to contact us if you are in need of a current-day backup!
          
### <ins>Contributions</ins>

### FACINGS Studio

**URLs**: https://dashboard.dev.facings.io, https://creator.facings.io, https://github.com/facings/collection-manager

**List of SCs**: mint.facings, open.facings, make.facings, earn.facings, atomicassets (FACINGS Creator/Collection Manager)

**Update**: 
* Added an affiliate code feature to aid in helping with Pantheon and future sales.
* Major UX overhaul / improvements to make the experience more acceptable for a productized MVP launch.

### Pantheon (Game)

**URLs**: https://playpantheon.com

**List of SCs**: pantheon, bck.pantheon, unw.pantheon, gme.pantheon

**Update**:

The team delivered a minor and major release since our last update in early January.

* 1.2.0 (Enhanced tutorial, stability, and changes to improve game flow) - https://medium.com/@Pantheon_TCG/pantheon-v1-2-0-release-notes-a021a116a8a8
  * Additional tutorial steps and allows the user the do all the game actions as they would during a normal game vs clicking a next button.
  * Stability enhancements for cards being stuck in the smart contract
  * Game flow improvements for edge cases when players leave matches during play
* 1.2.1 (Purgatory buyback price decrease) - https://medium.com/@Pantheon_TCG/pantheon-v1-2-1-release-notes-583b87e93e30
  * Purgatory are the cards that are sacraficed and part of the game business model
 
Additional security hot fixes were also deployed but not included in release notes.
  
The following marketing efforts took place.

* Continued CrewToons/NFLottery Giveaways / play events
* Continued Bountyblok giveaways
* R.A.I.D.D. Gaming giveaways

### Nodesuite

* Nodeos monitoring service template improvements/refactor
  * Add dynamic cooldown for notifications/alerts
  * Refactored signal handling notification (will notify on graceful termination)
  * Updated whitelist triggering (will alert in the event unlinkable block only when frequency crosses threshold of recent occurrences)
* Updated wax-leap / spring release packages

