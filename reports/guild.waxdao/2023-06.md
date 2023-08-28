---
name: BP Application
about: Use this template to file your BP Application.
title: "BP APPLICATION"
labels: application, bp
assignees: kaefergeneral, blocksbarcelona, rakeden
---

## BP Details

**Guild Name**
WaxDAO BP

**Guild Name**
https://waxdaobp.io/

**Guild Contact**
mikedcryptocurrency@gmail.com

**chain.json location**
https://waxdaobp.io/chains.json

**Guild Jurisdiction**
Las Vegas, USA

**Node Jurisdiction**
Oregon, USA


## Application Requirements

* [ ]  No guild member can be an active IG, unless a replacement for his||her seat has already been elected.
* [ ]  Public website available.
* [ ]  Make an intro blog post.
* [ ]  Guild account registered as a producer and voted in on WAX Testnet for seven days before submission deadline. Previously registered guilds that unregister will have the seven day timer reset if they are unregistered for 24 hours or longer.
* [ ]  Make a request to the IGs to be voted in on testnet.
* [ ]  Interviewed by the inspector general committee.
* [ ]  Joined WAX Guilds Keybase team.
* [ ]  Added emergency contact information to Guild roster (available in Keybase).

## BP Questionaire

**Please provide some information regarding when and how your Guild got involved with the EOSIO or WAX ecosystem. Links to resources are helpful.**

I had heard about WAX/EOS in 2017/early 2018, but the first time I participated was during the Colonize Mars Mission 1 sale in 2021. From there, I bought into a bunch of drops and had a lot of fun during that time.

I got the idea to create my own PFP project, using pre-minted packs. To get this set up, I paid NeftyBlocks $800. At the time, this was the only option - but I realized that there was a massive opportunity for someone to come along and remove the paywall on pre-minted packs.

About 6 months later, I started learning how to write WAX smart contracts, and a month or 2 later I was finally very close to releasing a pre-minted pack tool. That same week, NFT Hive launched theirs. So, I decided to hold off on packs - and ended up pivoting to create NFT farms.

This sparked the birth of WaxDAO.io in June of 2022. Since then, I've been committed to WaxDAO and the WAX ecosystem full time. I've also done freelance work (smart contracts and front-end) for many other WAX projects - including sk8coin, waxapes, metaforce, shiftybears and several others.

**Has anyone in the Guild previously produced blocks on an EOSIO or DPOS network in the past? If so, which ones and what nodes did they help operate?**

Not necessarily - I have ran local nodes for testing smart contracts in the past, but obviously that doesn't really count. However, I have had hands on coaching from an existing block producer on Wax.

**Please provide information regarding projects that your Guild is working on to improve the WAX ecosystem. Information about plans, progress, and timelines is helpful.**

### Note: I split up these products the way that made the most sense to me. Kaefer told me that since they are all under the same domain name (waxdao.io), usually they should be graded as 1 product, unless the OIG decides that they are worth more than 5 points combined, in which case you would split them up as you see fit. I will leave these separated in this document for the sake of clarity, but feel free to split these up however you think is best.

# Product 1 - WaxDAO Staking Farms

WaxDAO allows anyone to create a staking system for their project. This includes staking NFTs for token rewards, and staking tokens for token rewards. 

Currently, there are multiple different types of NFT farms, ranging from "stake an entire collection and share the reward pool" to "only stake these specific NFTs, and get a specific reward amount for each one". We even offer non-custodial farms, where users don't need to transfer their NFTs to the contract. As of now, the only option for non-custodial farms is "any NFT in your collection is eligible to be staked, and the entire reward pool will be shared equally amongst the staked NFTs".

NFT Farms:
https://waxdao.io/farms

Token Farms:
https://waxdao.io/pools

Plans for the future include:

- Several more non-custodial staking options, most importantly the ability to only allow certain templates to be staked. And to allow creators to specify a staking value for each template.

- More data for creators, such as providing them with a list of all template IDs that each of their users has staked in the farm

- Option to have multiple reward pools attached to a single farm, so different tokens can be rewarded to the same farm

- Better workarounds for chain CPU limits (currently, there are limits on how many NFTs can be in a single farm - even if the creator decides to pay CPU themselves. This is due to transaction size limits imposed by the chain. We have solutions planned for this, but it requires a restructuring of tables and additional data/scripts)

- Ability to specify certain attributes that an NFT must have in order for it to be staked in a farm

- Misc UI improvements

- Better documentation / FAQ

For token staking pools, some of the above plans also apply. But in addition to those:

- Option to autocompound rewards, for pools where the staking token and the reward token are the same

- Non-custodial token staking

# Product 2 - DAOs

Anyone can create a governance system for their project using WaxDAO. Proposals can then be created, and token holders or NFT holders (depending on the DAO configuration) can vote on these proposals. Proposal types currently include "standard", which is basically "the option with the most votes wins" - and "token transfer", which, if a proposal passes ("passing" depends on the DAO configuration), will automatically transfer WAX from the DAO's treasury to the WAX account that was specified in the proposal.

DAOs:
https://waxdao.io/daos

V2 of the DAO platform is currently being built, and will include many new features - such as:

- DAO treasuries will be able to hold multiple different tokens, not just WAX

- DAO treasuries will also now be able to hold NFTs

- More proposal types will be added (ranked choice, yes/no/abstain, transfer NFTs (to one or more accounts), transfer tokens (to one or more accounts), and possibly more)

- DAOs will be able to be tied to a non-custodial NFT farm, where users can simultaneously earn staking rewards, and use those NFTs as "voting power" - all without ever needing to transfer their NFTs to the contract

- Misc contract improvements to make CPU/RAM allocation more efficient

- Front end upgrades to improve UX

- DAO profiles, so creators can give more information about their project/socials/etc to people who navigate to their DAO page

- Better tracking of metrics

- Ability for users to "join" or "leave" a DAO (subscribe or unsubscribe, so you can filter the UI and only see DAOs that interest you)

- Better documentation / FAQ

- Other misc improvements

# Product 3 - Creator Tools (Blends, Drops, Packs)

WaxDAO offers several creator tools for NFT project owners. Projects can create advanced blends (crafting), drops where any WAX token can be accepted as payment, and pre-minted NFT packs. All of these tools are free to use, and our blender even respects creator royalites (for example, you can give a pre-minted NFT from someone else's collection as a blend result - but a royalty will be automatically taken from any fungible blend ingredients and sent directly to the author of that NFT collection). This allows our blender to almost work as a psuedo-secondary market where any token (or multiple tokens) can be used as payment.

We do take a small (2%) fee on drop sales. I don't believe that random tokens are able to be used for Wax DeFi, but for any drops that are paid for in WAX - we would like to discuss how we can start directing that 2% to tokenomics if possible?

Blends:
https://waxdao.io/blends

Drops:
https://waxdao.io/drops

Example unpack link for a pre-minted pack:
https://waxdao.io/unbox/246

Plans for the future of our creator tools:

- More options for pack creation / allotment (not only pre-minted packs, but also mint on demand slots etc)

- More options for configuring blend ingredients and blend results

- Ability to split payments on drops (this is already available on blends, but not drops)

- Ability to accept multiple different tokens for a drop

- Misc contract updates to improve performance (better indexing, data structuring etc)

- Misc UI updates to improve UX

- Several new options for whitelisting users for blends and drops

- Better documentation / FAQ

# Product 4 - Token Tools (Token Creator, Market Cap Tracker, Synthetic Tokens)

WaxDAO offers several tools to support the ecosystem of WAX-based tokens.

Our token creator is an interface that allows the average WAX user to deploy a token contract to their account, and create a token for their project without needing to learn how to code.

This token contract is the standard eosio.token contract, but the "retire" action has been changed to a "burn" action, which debits the max supply in addition to the circulating supply.

The code for this contract is open source:
https://github.com/mdcryptonfts/eosio.token

The token creator UI is here:
https://waxdao.io/token-creator

We also have a market cap tracker:
https://waxdao.io/tokens

This tracker gives information about WAX tokens, including supply/price data, what markets it trades on, precision, contract, etc.

Projects can apply for listing and also give descriptions/logos/socials for their project, so WAX users have a place where all this data is aggregated and easy to find for them.

Lastly, our synthetic token creator. This allows users to create/issue synthetic tokens that are always backed by whatever underlying assets you choose.

Example - you want to create a token called "OIGWAX", and you want each OIGWAX to be backed by 10 WAX, 5 BRWL, and 2 TLM .

You would just fill out the form and enter this information. The OIGWAX token will be created, and then the only way that you can get 1 OIGWAX is by depositing 10 WAX, 5 BRWL, and 2 TLM.

And, lets say one day you wake up and see 10 OIGWAX in your wallet. All you would need to do is go to the synthetic token UI (https://waxdao.io/synths), click on the "redeem" section, and select OIGWAX from the drop-down. Once you send in your 10 OIGWAX, you will receive 100 WAX, 50 BRWL, and 20 TLM.

Future plans for token tools:

- UI improvements

- Work on token tracker SEO to bring more eyes to WAX projects

- More data analytics for token tracker

- New (open source) version of token contract that can be integrated with our token farms, to allow for non-custodial token staking (requires notifications to our contract etc)

- Update token tracker to point to waxblock instead of bloks, update it to integrate with the new version of Alcor, replace any Wax Cloud Wallet links with MyCloudWallet, etc


**Please share any usage metrics you have, if any. This includes data specific to applications and user activity driven to the WAX ecosystem as a result of your Guild's efforts.**

I am working on a better system for tracking metrics, so this data will improve over time.

But, we currently have (as of 6/14/2023):

- 588 NFT farms created

- 468k NFTs staked

- 88 token farms created

- 131 wallets used our token creator

- 1999 drops created

- 1177 blends created

- 384 pre-minted NFT pools created

- 25 DAOs created

According to DappRadar:

- 2.05k UAW over 30 days

- 524k transactions over 30 days

According to google search console, waxdao.io has:

- 822 clicks over 28 days

- 3.46k impressions over 28 days

According to google analytics:

- 4.5k users over 28 days

- 2.8k new users over 28 days

- Average engagement: 13m 40s

Contract addresses in case you would like to verify:

DAOS: buildawaxdao (v2 contract will be at dao.waxdao)

Staking: waxdaofarmer

Creator Tools: waxdaomarket

**If possible, please share information about businesses that your Guild is engaging with that are seeking to learn about and leverage the WAX ecosystem in some way.**

I am working with my friend Jumbie (jumbieart.com) to come up with a solution to integrate his physical products with the Wax blockchain. The first steps of this are already in progress (using WaxDAO to design an NFT, token, and staking economy around his business), but next we need to come up with solutions for integrating Wax payments with his physical products, as well as utilizing merch-mints (I still can't get on board with the term "vIRL :)")

I am also working with someone who owns a farm in Arizona, and has integrated their token (launched on WaxDAO) into their IRL services. They have many more ideas for bridging their business with the Wax blockchain, including using a DAO to make decisions about the business. I will share more info on this partnership as it develops further.

**Please share any information regarding community building efforts championed by your Guild. This can be facilitating translation of documentation, organizing meetups, and otherwise driving social and human engagement within the platform.**

I have a crypto YouTube channel with 1.2k subscribers:
https://www.youtube.com/@MikeDCrypto/videos

Most of my content has been about Wax, but I haven't been very active there lately. I plan to start producing more Wax content again soon, and possibly doing live streams with the creators of other projects, etc.

**Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**

Impeach Kaefer. jk. Maybe consider bringing on a 4th or 5th IG at some point if possible. Seems like the workload is heavy and there is room for fresh blood and new perspective.
