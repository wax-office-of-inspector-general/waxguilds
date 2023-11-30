![Blenderizer](https://wax.alcor.exchange/_nuxt/img/alcorwhite.cb298e8.svg)
# Alcor Exchange August 2023 Update

## What is the name of your Guild?

**bp.alcor**

## Does your Guild have any new information to submit that impacts Technical Operations?

-Hotfix has been implemented and upgraded.
 
-There has been a change in the management of technical operations, the transition has been made and the new developer is working on strengthening the security of the node.

-Price Oracle has been introduced as a product, Alcor Exchange will continue pushing towards the adoption of TWAP in the chain as an alternative to Delphi Oracle. 

-Nodes API requests: Alcor Exchange is averaging 55.3 Node API requests per second. Among the most popular “v1/chain/get_table_rows” “/api/markets” “/api/v2/swapRouter/getRoute” You can easily interacting with Alcor DEX contracts using EOSJS library.

-Waiting on Kaefer to add Avral to Keynote

## Does your Guild have any new information to submit that impacts Product Development?
**Notes:**
On previous evaluation Alcor Exchange achieved a total of 5 points for exchange product. Hereby, we would like to request Alcor Exchange products being divided into Alcor Swap (AMM) and Alcor Spot Trading.
Alcor is also pleased to submit as products Alcor Price Oracle (TWAP) and off-chain token price API.

### Alcor Swap (AMM)

![image](https://github.com/Zzullerr/zzu/blob/main/Report%20August%201.png?raw=true)

- **Description:** Alcor Swap (AMM) is a cutting-edge Automated Market Maker featuring multi-route and concentrated liquidity. Alcor Swap offers up to 4,000 times increased efficiency compared to traditional pools. Liquidity providers can strategically allocate capital within price ranges, leading to higher capital efficiency, deeper liquidity for traders, and the ability to customize fee tiers. This innovative approach optimizes trading experiences and supports a wide range of tokens and pairs on the WAX blockchain.
- **Link:** https://wax.alcor.exchange/swap?input=WAX-eosio.token
- **Development Stage:** Released
- **Open Source:** Yes
- **Code Repo:** https://github.com/avral/alcor-ui

  
-**News / Updates**:
- **Alcorlytics:** Alcorlytics is a comprehensive analytics page by Alcor Exchange, providing valuable insights into Total Locked Value, Spot and Swap volume over the last 30 days, and relevant token pairs. Link: https://wax.alcor.exchange/analytics/
-Improved User Interface for pool creation, issues with React solved.
-2 Banners were given away to projects participating in Alcor Discord for Alcor Swap. 
-Fixed bug for banner display on Safari.
-Pool creation fee decreased from 1500 WAX to 150 WAX price, users can create pools at 0.5% 0.3% and 1% allowing them to have more options and independence at the moment of providing liquidity. 


### Alcor Spot Trading
![image](https://github.com/wax-office-of-inspector-general/waxguilds/assets/116539401/3837db35-6374-4480-a2b2-e1cfdd5c2631)


- **Description:** Alcor Spot Trading empowers users with a powerful and efficient way to trade a diverse array of tokens directly from their wallets. With instant transactions and a user-friendly interface, Alcor Spot Trading enhances accessibility and convenience for traders, making it an essential tool for both beginners and experienced crypto enthusiasts. **
- **Link:** https://wax.alcor.exchange/markets
- **Development Stage:** Released
- **News / Updates**:  
-Alcorlytics: Alcorlytics is a comprehensive analytics page by Alcor Exchange, providing valuable insights into Total Locked Value, Spot and Swap volume over the last 30 days, and relevant token pairs.
-Added Cross-Chain tab as Alcor is diving into exploring IBC opportunities.
-Promoted over 6 tokens ($ZBC, $USDT, $WOMBAT, $NOVO, $FGL and $MARTIA) during this period.
-FRCT token from Few Parsec Away listed

### Price Oracle (TWAP)
![image](https://github.com/wax-office-of-inspector-general/waxguilds/assets/116539401/d8bb9261-1c4b-4fe9-b9c1-994371c73242)


- **Description:** Alcor's Price Oracle draws inspiration from Uniswap V3 and offers a decentralized solution for accurate asset prices on the blockchain. Unlike traditional oracles, Alcor Price Oracle operates on the EOSIO network, addressing data validity and authenticity challenges. DelphiOracle, an early solution on EOSIO, fetches asset prices from centralized exchanges via APIs, averages them, and writes them on-chain through oracles. However, it only provides the last price, while AlcorSwap v2 introduces highly decentralized time-weighted average price (TWAP) oracles for robust blockchain protocols. These TWAP oracles offer resistance to manipulation, and Alcor users can expand historical price data availability by increasing tracked observations using RAM

-**Importance for the WAX Community:** TWAP is a decentralized solution that provides accurate and reliable asset prices on the blockchain, addressing challenges related to data validity and authenticity.

For users, TWAP provides access to real-time and historical price data, reflecting actual trading activity within a specific timeframe. This information is crucial for informed trading decisions, risk reduction, and optimizing investment strategies. With TWAP, users can rely on price data that resists manipulation and accurately represents market trends.

For the WAX developer community, TWAP serves as a potent tool to bolster the development of decentralized applications (DApps) and DeFi platforms. By utilizing TWAP data, developers can establish robust protocols dependent on precise price information for tasks like automated trading, liquidity management, asset valuation, and risk evaluation. TWAP's decentralized nature allows data integrity and lays a sturdy groundwork for crafting innovative and trustworthy blockchain applications.

- **Development Stage:** Recently released
- **Link:** https://docs.alcor.exchange/alcor-swap/alcorswap-v2-price-oracles
- **Open Source:** Yes
- **Code Repo:** https://github.com/alcorexchange/alcor-oracle-price
- **News / Updates**:
-Recently released.
-Working with Rakeden to add it to the developer portal. 
-Overview, comparison with DelphiOracle, and tutorial available on docs and Medium (Medium to be released)
    
### Off-chain token price API

![image](https://github.com/wax-office-of-inspector-general/waxguilds/assets/116539401/4e0c0304-d913-4730-9b68-44fd43442f65)


- **Description:** Interaction with Alcor is divided into 2 types:
•	Obtaining information about the markets using the Alcor API services.
o	Market Data
o	Liquidity pools Data
o	WebSocket Stream
•	Interaction with the contract.
o	Place/Cancel order.
o	Add/Remove LP position.
Alcor Exchange has HTTP and WebSocket API. Which can get information on various markets, orderbooks, prices, events, and charts. WebSocket allows streaming for orderbook updates, new deals, and account events. Among the projects that use Alcor price API and also redirect to the SWAP: WOMBAT, ApexConquest, WAXDAO, Sk8coin, ChainChamps, Castles, Zombiecoin between several others.
- **Development Stage:** Released
- **Open Source:** Yes
- **Link:** https://api.alcor.exchange/#introduction
- **News / Updates**:  
 -**Alcor trading Bot** has been released leveraging Off-chain token price API. The bot has been released on Alcor DEX Discord. The main purpose of the bot is to make it available to every user to implement the bot in their personal Discord for their token.
The bot can currently track over 25 tokens, with the intention to make it widely available in the future.  Link: https://twitter.com/alcorexchange/status/1694768100128747615
-It hasn´t been announced yet, but the bot is already available on top.gg for everyone to invite to their servers: https://top.gg/bot/1128425949210361937 Alcor will continue improving the tools of the bot and its capabilities.
-**Swap Widget** Swap Widget is a feature used by several projects to interact with Alcor without leaving their website. A clear and very useful example of it is sk8coin project https://www.sk8coin.io/sk8-exchange

## Does your Guild have any new information to submit that impacts Ecosystem Development?

### Ecosystem #1: Alcor Yield Farming
Alcor Exchange has a comprehensive plan for yield farming, which aims to provide users with opportunities to earn additional rewards by participating in liquidity provision. 
The yield farming program allows users to stake their assets in selected liquidity pools and earn additional tokens as rewards. Alcor Exchange will collaborate with various projects and integrate their tokens into the yield farming program, providing a diverse range of options for users to choose from. 
The program will feature different reward tiers and durations, allowing users to select the most suitable farming strategies based on their risk appetite and preferences. The goal is to incentivize liquidity provision, enhance the overall liquidity of the platform, and offer users the chance to earn passive income through yield farming.
Status: In development. Alcor Yield Farming is in final development stages and will be available for Beta testing in 1-2 weeks. 


### Ecosystem #2: Inter Blockchain Communication Bridge UI and Wombat token bridging. 

![image](https://github.com/wax-office-of-inspector-general/waxguilds/assets/116539401/0815ffb0-43bc-46e7-9cb0-1ca290380e9c)

User Interface that allows users to use the IBC bridge technology and bridge tokens from EOS, TELOS, and WAX. 
**Development stage:** Released
**URL:** https://wax.alcor.exchange/bridge   
**Analytics**   

    | Total USDT bridged from EOS| 25k USDT |
    
    | Total EOS bridged from EOS| 15k EOS |
    
Over the past month the USDT token has become the third most traded token on Alcor. Obtaining 82k USDT volume in the last 30 days. The current liquidity pool is made up of 260k WAX and 4k USDT. 
WAX/EOS pair is the sixth most traded token with 45k USDT volume in the last 30 days. 
Holders of USDT have increased by 15%. 

- **News / Updates**:
- Now you can access your transfer history and track the status of your transactions.
- We continue working closely with the IBC team on telegram addressing Node issues and invalid node signatures.
- WOMBAT Bridging from WAX to EOS is live! Now users are able to find more ways to put their $WOMBAT tokens to use and move them around chains with maximum freedom.
- Pairs pWOMBAT/WOMBAT and EOS/WAX are among the top 3 biggest pools on Alcor Exchange on EOS. Accounting for over 50000$ in 30-day volume.


### Ecosystem #3: Alcor DEX is now contributing 2% of profits generated to WAX tokenomics. 

![image](https://github.com/wax-office-of-inspector-general/waxguilds/assets/116539401/439523b7-3223-49e2-bd2a-d8bc271f9bc0)



## Does your Guild have any new information to submit that impacts Community Engagement?

-Discord Bot has already been developed and listed on Top.gg, marketing campaign is being prepared. 
-Banner giveaways have been held on Alcor Swap
-WOMBAT Bridge is live


## Do you have any feedback for improving the Office of Inspector General
-Pls add Avral to Keybase
