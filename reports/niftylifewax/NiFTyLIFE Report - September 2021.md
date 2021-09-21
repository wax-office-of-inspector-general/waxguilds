## What is the name of your Guild?

NiFTyLIFE producer account = niftylifewax

## Does your Guild have any new information to submit that impacts Technical Operations?

We have been running mainnet and testnet producer nodes and seperate mainnet and testnet RPC API's. Testnet producer was voted in and has been producing since August 24th, 2021. CPU/block uptime issues were on the first day of production as I was testing out different configurations, building bash scripts, registering and deregistering my producer.

- CPU latency average 0.245 (1 month testnet)
- Round availability uptime 99.5+ (1 month testnet bp node)
- WAX price data published every 30 seconds on Waxstash. Data is pulled from delphioracle, summed & averaged, then continually updated and displayed on our marketplace UI. 

## Does your Guild have any new information to submit that impacts Product Development?

Product #1 Waxstash Marketplace. Launched June 2020 Waxstash has grown to be a featured marketplace with each WAX NFT release along with Atomichub and NFTHive. Since launch I have continually worked to maintain and improve Waxstash to include the following tools & features:

- Simpleassets and Atomicassets sales and inventories are merged together, including bridged assets and Fungible Token packs. For example a user searching for Series 1 Garbage Pail Kids will return Fungible Token packs, Simpleassets NFTs listed on wax.stash smart contract, and Atomicassets bridged NFTs simultaneously in the UI. This works the same for sales listings, inventory, and sales history.
-  Multiple currency support for WAX, TLM, DUST, & USDT. Users can list any asset for either of those currencies individually or simultaneously. For example an NFT can be listed for 100 WAX, 100 TLM, and 1000 DUST in a single listing and buyers have a choice on which currency to pay with based on what the seller will accept.
-  Created the ability within my smart contracts to list Atomicassets NFTs outside of the Atomicmarket contracts. In order to avoid confusing WAX users I spent a great deal of time building this feature primarily to go along with the multiple currency support, so it would be possible to list Simpleassets and Atomicassets for a currency other than WAX, instead of just Simpleassets carrying that support.
-  Single or bundled quick p2p NFT transfers or the ability to view detailed information about the assets before transfer.
-  A wallet UI panel where (1) supported currencies can be transferred to other accounts, (2) and users can view their RAM/CPU/NET usage. Plans to add the ability to buy RAM or stake/unstake CPU/NET from within this UI.
-  Above features work for both Simpelassets and Atomicassets NFTs so users don't have to understand or worry about the difference.
-  Roadmap: We currently load fullsize NFT images/video from our own ipfs gateway. We have gotten away with this however as WAX has grown so have the images and bandwidth. Waxstash might be unusable for users with slower clients. Therefore, we are building a seperate server to grab and resize all images and videos for Waxstash. This is expected to ready within two weeks.
-  https://waxstash.com/markets

Product #2 NFT Pack Breaks. Launched September 2020 our exclusive Pack Breaks allow users to split pack ownership by either selling thier packs into slots, or by buying slots in a listed pack. Each slot represents (1) NFT that is pulled from the pack once it opens. I have continually worked to maintain and improve Pack Breaks to include the following:
- We currently have (31) smart contracts supporting (31) packs from (9) different collections. TMNT Funko, Topps MLB, Alien Worlds, Godzilla, Garbage Pail Kids, Upland, KOGs, Cryptotwerpz, and Deadmau5.
- System is completely automated. Users can list or cancel their packs. Buyers will purchase slots and once all the slots for a pack sell out that pack can be opened. Our smart contracts will open the pack, shuffle the cards received, shuffle the slots, and then issue and transfer the NFTs to the correspondingly shuffled slot owners.
- Slot prices are competitive. That means that if a pack is listed for 100 WAX per slot, nobody else can list that pack type unless they list it at least 1 WAX lower. This will 'takeover' the currently sold slots, return the replaced pack to its owner, and refund slot owners the difference, automatically.
- Once a pack opens and transfers the NFTs, all the NFTs pulled by that pack and the slots they are assigned to, along with mint numbers and account names, are viewable in UI. Past Pack Breaks can be selected and viewed as well.
- It's hard to track so many contracts but Pack Breaks has directly opened many hundreds of packs accounting for thousands of NFTs delivered.
- Roadmap: Will be moving Pack Breaks to a new UI and redesigning the smart contract flow in order to allow more projects/collections to take advantage of this feature with little to no involvement from me. Designing provably random slot assignment. Novemeber-December 2021.
- https://waxstash.com/pack?breaks=mlb-2021s1-premium

Product #3 P2P Escrow Service. Launched March 2021 this is a smart contract to hold NFT assets in escrow to be released only by the owner cancelling or by the recipient account submitting the funds. Features of our Escrow Service:
- This is a solution for private sales that occur in telegram or discord chats when users need a safe trusted way to execute the simultaneous transfer of an NFT and the agreed upon funds.
- A user selects NFTS from their inventory, sets a price in WAX, TLM, or DUST, and then sets a recipient account.
- Only the owner or the recipient account can see that 'escrowed' assest in the ESCROW tab on Waxstash, allowing either one of them to either cancel, or execute the transfer by submitting the funds.
- Roadmap: Moving the Escrow Service to a seperate UI. Novemeber-December 2021.
- https://waxstash.com/markets?panel_view=inventory

## Does your Guild have any new information to submit that impacts Ecosystem Development?

Yes

## Does your Guild have any new information to submit that impacts Community Engagement?

Yes

## Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?

Yes
