## Archive of Reports

-- The following have been added to notion. This archive contains the updates submitted before july 2021

## June 2021

No update

## May 2021

**Does your Guild have any new information to submit that impacts Technical Operations?**

- This month finally our new server got delivered. This new server is benefiting mostly the Hyperion and Atomic Api. Syncing is just complete, therefore there might still be some smaller issues in the next days, but overall the apis are up and working as they should be.

**Does your Guild have any new information to submit that impacts Product Development?**

- **Validationcore:** 
This month the implementation of the new validationcore including the new webinterface was continued. The atomic validation was implemented in the validationcore and there is still some refactoring especially of the database to do, but otherwise the new version of the validationcore should be able to be released and deployed soon. This month the design of the webinterface was finalized. Mostly the design is finished, however there are still some issues on the mobile version.
    
    ```html
    https://github.com/Blacklusion/validationcore/tree/add-validation-offset
    https://github.com/Blacklusion/website-validator
    ```
    

**Does your Guild have any new information to submit that impacts Ecosystem Development?**

- Nothing interesting this month
    
    

**Does your Guild have any new information to submit that impacts Community Engagement?**

- Nothing interesting this month
    
    

**Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**

## April 2021

**Technical Operations:**

- Due to the increased traffic on WAX some of my nodes had problems keeping up this month. Hyperion and atomic api have had problems due to storage capacity limitations of the servers. Mid of this month I ordered a new server that will help to resolve these issues and bring hyperion back to normal uptime. Unfortunately delivery time was longer than expected and I am still waiting to setup new nodes

**Product Development**

- **Validationcore:** 
This month I started with the validation of the atomic-api. While I was at this I completely reworked the whole system how messages in the validationcore are created and the database structure. This removed 100s of lines of code of the project and paves the way for a standalone validator website that allows to see the results of each guild via the browser. The blacklusion-pager-telegram-bot will also receive enhancements by not sending multiple messages to the user. Instead a link to the website with an easy to read table will be sent. These changes were bigger than initially expected and are still under development. Therefore, atomic-api validation is not yet implemented, however in general major changes were made this month to the validationcore. There is also a new repository containing the first basic layout of the validation website for a single guild
    
    ```html
    https://github.com/Blacklusion/validationcore/tree/add-validation-offset
    https://github.com/Blacklusion/website-validator
    ```
    
- **OneApi**
Users reported that the OneApi load balancing service was no longer working. I fixed this issue and the service is back up

**Ecosystem Development**

- Nothing interesting this month

**Community and Marketing**

- This month more content was translated for the docs site from englisch to german
    - [https://docs.blacklusion.io/#/de/generelles-setup/claim-rewards](https://docs.blacklusion.io/#/de/generelles-setup/claim-rewards)
    - [https://docs.blacklusion.io/#/de/erste-schritte/pushing-bp-json-onchain](https://docs.blacklusion.io/#/de/erste-schritte/pushing-bp-json-onchain)
    

## March 2021

**Does your Guild have any new information to submit that impacts Technical Operations?**

- Some of the nodes that have been repaired last month and crashed this month again have been repaired.
- Some minor internal changes between different servers
- Atomic Assets API has been added:

```html
https://aa.wax.blacklusion.io
```

**Does your Guild have any new information to submit that impacts Product Development?**

- **Validationcore:** 
No major changes this month, besides some formatting changes. Atomic Assets API support is planned for next month.

**Does your Guild have any new information to submit that impacts Ecosystem Development?**

- Nothing interesting this month

**Does your Guild have any new information to submit that impacts Community Engagement?**

- I am still planning to expand my docs website to accommodate more topics and languages. This month I translated two articles to german language:
    - [https://docs.blacklusion.io/#/de/generelles-setup/snapshots-erstellen](https://docs.blacklusion.io/#/de/generelles-setup/snapshots-erstellen)
    - [https://docs.blacklusion.io/#/de/erste-schritte/bp-json](https://docs.blacklusion.io/#/de/erste-schritte/bp-json)

**Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**

## February 2021

**Technical Operations**

- Some of blacklusion's nodes were also affected by the crashes and they were fixed
- Some minor internal changes between different servers

**Product Development**

- **Validationcore:** 
No major changes this month.
- **OneApi:**
No major updates this month
- **NFT Stats:**
No  development this month

**Ecosystem Development**

- Nothing interesting this month

**Community and Marketing**

- No Major contributions this month

## January 2021

**Technical Operations**

- Updated all api nodes to Wax 2.0.9-01

**Product Development**

- **Validationcore:** 
No major changes this month.
- **OneApi:**
No major updates this month
- **NFT Stats:**
I have been actively working on the stats site. Currently I am working on the frontend, which I am creating using React and Visx (as a chart library). Unfortunately I am not progressing as fast as I would like with the frontend, since I am not too familiar with web-development. I have a pretty exact idea of how I want to have things behave and look and I was not yet able to achieve the desired UX. This month I have implemented custom functional components for the chart that can be used to spawn single instances of e.g. axes or areagraphs. This is important for the later stage of the product where the goal is to create charts consisting of multiple components and stats.

**Ecosystem Development**

- Nothing interesting this month

**Community and Marketing**

- No Major contributions this month

## December 2020

**Technical Operations**

- I optimised the performance of the Mainnet Producer Node
- I participated in the Version Upgrades: Both my Mainnet and Testnet Api nodes and some internal Nodes are running the new WAX Version. I purposely did not upgrade my producers yet, since I believe that some more testing is required before doing so (atleast before upgrading the majority of all producers)

**Product Development**

- **OneApi (released)**
    
    OneApi was released in November. This month not many changes have been deployed. 
    
    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2cfdb1ae-4f01-4a6d-8553-9bbab1c45999/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2cfdb1ae-4f01-4a6d-8553-9bbab1c45999/Untitled.png)
    
    The goal for the next Months is to implement a better zoning system, that respects actual ping times or request-times instead of looking up the country by IP. This should boost the performance and make it more attractive for other services to implement OneApi.
    
- **Validationcore: (released)**
    
    (The backbone to the Blacklusion Pager as well as the OneApi Services). This month some minor changes were made to the config to reduce the amount of messages sent by the system.
    
- **NFT Stats (in development):**
    
    The WAX Ecosystem is missing a nice and clean NFT Stats site. The plan is to build a Website targeted for artists and consumers that want to get more insights about the NFT market and how it has impacted the Chain. The aim is build a "stock-portfolio-website-experience" that shows trends for the last 24h, 7days and 30days. I would like add a chart configurator as well, that lets the user create custom charts by overlaying any combinations of datapoints provided by the stats sites. However I have to see if creating such a configurator is feasible.
    The project will be realized with React and Typescript. Hyperion and Pink.Networks API will be used to gather the data.
    
    - Roadmap:
        - **November** (no points): Conceptualization of the metrics and first requests to Apis.
        - **December**: This month I started with playing with the data provided by the Hyperion API and making some requests. I also started with the implementation of the frontend in React. Currently a blocker is finding a good chart library, that is both powerful and beautiful (my current favourite is vx, but this may change over time).
        - **Januar:** I can't guarantee that I am able to release the full site in January, because of time constraints in Jan. But I hope to publicly host some functioning code.
        - **Februar:** Site launch
        - **After Februar:** I am already saving all the data captured by the validationcore to a single database. I would like to expand the stats site with additional block producer stats in the future.

**Ecosystem Development**

- -

**Community and Marketing**

- **Blacklusion Pager**
- A had some conversations about the [docs.blacklusion.io](http://docs.blacklusion.io) website and the direction it should head with other guilds.
- I translated an article from english to german:
    - [https://docs.blacklusion.io/#/de/erste-schritte/chains-json](https://docs.blacklusion.io/#/de/erste-schritte/chains-json)

**Office of Inspector General**

- I think the OIG is heading in a great direction lately.
- I still believe that points are "weirdly" distributed. I do not always see a relation to usage of the service and the required resources for creating such a service.

## November 2020

**Technical Operations**

- No major changes

**Product Development**

- **Validationcore:** 
This month major changes were made to the validationcore: Axios was completely removed from the code and replaced with custom methods, that wrap fetch requests. This changed ~50% of the codebase and improved code quality by a lot. Additionally a performance mode was introduced, that reduces validationtimes in case the validated Api Endpoint already failed a couple of tests. Both of these changes allow for around 2x the performance compared to the Validationcore v1.
- **OneApi:**
OneApi was released this month: It is a globally deployed load balancer that balances traffic to all Api Endpoints of the WAX Mainnet, based on the geographical location. [Pink.Network](http://pink.Network) was kind enough, to reroute the complete traffic of AtomicHub on OneApi for some stress testing. So far OneApi held up great:
    
    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/52ec6998-2af4-4284-a569-45a2fe13c5c7/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/52ec6998-2af4-4284-a569-45a2fe13c5c7/Untitled.png)
    
    There have been reported some zoning issues, which resulted in Api Endpoints being classified in the wrong load balancing zone. These issues have been resolved and the zones work properly now.
    
    ```bash
    # Try it yourself
    https://wax.oneapi.dev
    ```
    
- **NFT Stats:**
The WAX Ecosystem is missing a nice and clean NFT Stats site. The plan is to build a Website targeted for artists and consumers that want to get more insights about the NFT market and how it has impacted the Chain. Metrics like "accounts created, overlayed with NFT drops" or "NFTs created over time" would be a couple of metrics that could be pretty interesting.
The project will be realized with React and Typescript. Hyperion and Pink.Networks API will be used to gather the data. Development time 2-3 Months.

**Ecosystem Development**

- Nothing interesting this month

**Community and Marketing**

- **Blacklusion Pager**: Together with the Validationcore some smaller changes were deployed this month (mostly fixing Telegram keyboard issues)
- I wrote an article explaining how OneApi functions: [https://blacklusion.medium.com/launching-oneapi-for-wax-7d1d53ccfc01](https://blacklusion.medium.com/launching-oneapi-for-wax-7d1d53ccfc01)
- **Launching a new and clean documentation site:** I was annoyed that the helpful information is scattered across the different guild websites. Since I am sure, that I am not the only person feeling like this, I would like to anounce a new documentation site this month:
[https://docs.blacklusion.io/#/en/](https://docs.blacklusion.io/#/en/)
In the beginning of this month I configured the site and installed all plugins. Then I ported my own articles to the platform (and reworked them slightly). I added one article covering the contribution process:
[https://docs.blacklusion.io/#/en/overview/contribute](https://docs.blacklusion.io/#/en/overview/contribute)
(not sure if the introduction page counts as an article too: [https://docs.blacklusion.io/#/en/](https://docs.blacklusion.io/#/en/) )
The Doc site also has multi language support. To showcase this feature I translated both of the  mentioned articles to german: [https://docs.blacklusion.io/#/de/überblick/beitragen](https://docs.blacklusion.io/#/de/%C3%BCberblick/beitragen) , [https://docs.blacklusion.io/#/de/](https://docs.blacklusion.io/#/de/)
The ultimate goal would be to somewhat centralize the information that is independently published by the guilds. The roadmap for the next couple of months is to keep maintaining the site and to port content from other guilds as well (if they are ok with it). I am not sure how these efforts would be reflected in my score, but I do think that it is beneficial for the community. The current state of the site is just a starting point and I am open for suggestions (other doc engine? other domainname?).

## October 2020

**Technical Operations**

- No major changes this month.
- I will **keep** offering the snapshot service ([https://snapshots.blacklusion.io/](https://snapshots.blacklusion.io/))
- Updated bp.jsons and pushed on-chain
- Some minor maintenance to the Testnet Producer node and some additional internal configuration

**Product Development**

- **OneApi (Nearly finished)**
    
    Basically I am completely finished with the development. I even have the technical writeup finished and laying around. However, I decided not to release (in the last minute), since I ran into some infrequent issues and I had a couple of ideas, how I could improve the code further (1. decreasing amount of load balancer regions & improving speed of region mapping 2. replacing regex matching with faster code 3. a couple of smaller changes). Before I get that sorted out, I did not want to release it officially. So it is kind of in a Beta phase, where you can use it, but I did not want to expose it to the major groups, since I can't guarantee for the reliability (yet).
    
    If you want, you can check out the current implementation [here](https://gist.github.com/leonardofficial/549aa90226fc114ec4fc9e6b4ac2a4d7). You can make sample requests using: [https://wax.oneapi.dev](https://wax.oneapi.dev) - Just perform requests as you would with every other Api Endpoint. These requests will be load balanced to a random API based on the geographical region. So yes, it is basically working. 
    
    Expect the official release to happen somewhere in the **next week** (26 Oct - 1 Nov). I suspect that this will not count as released, so I would have to apply for "in development" this month.
    
- **Validationcore:**
    
    (The backbone to the Blacklusion Pager as well as the OneApi Services). This month a private API was added and some minor bug fixes were performed. The deployment of some bigger changes is schedules for November.
    

**Ecosystem Development**

- I am still in contact with one of the exchanges, that I submitted last month, however I suspect that these will still not be eligible for any points. Just wanted to mention it.

**Community and Marketing**

- **Blacklusion Pager:** The Pager keeps helping guilds to improve their infrastructure. Currently 14 of the active guilds are subscribed to the Pager service.
- I Published two articles in this month and updated one. (Keep in mind that my main goal is to build a comprehensive knowledge base. So a couple of these topics may not be the most exotic ones, but I believe that they are important enough to be covered in order to help beginners)
    1. (14. oct) How to claim rewards (including public GitHub Repo, with claiming script that can be deployed using docker): [https://blacklusion.com/claiming-rewards-on-wax/](https://blacklusion.com/claiming-rewards-on-wax/)
    2. (20. Oct) How to create snapshots: [https://blacklusion.com/creating-snapshots/](https://blacklusion.com/creating-snapshots/)
    3. (25. Oct) Updated my bp.json article to conform to the new bp.json standard. Have a look at this [GitHub Gist](https://gist.github.com/leonardofficial/f204fb7159d32d1ef83b1550382416ea/revisions?diff=split), if you want to see the differences. Here the full article: [https://blacklusion.com/creating-a-bp-json-for-the-wax-chain/](https://blacklusion.com/creating-a-bp-json-for-the-wax-chain/)

**Office of Inspector General**

- I do like the new Points distribution in the technical Operations Category.
- I think it would be quite nice to have some points for Testnet as well. It would be important not to inflate the guild scores, by giving as much points for Testnet as for Mainnet. But I think it would be reasonable if guilds could score e.g. 1 extra point (in total) if they offer an API and a P2P endpoint on Testnet. This would only change the score by 8.82 Points, but I think that would be enough to incentivize guilds to take the Testnet more seriously.

## September 2020

- **Does your Guild have any new information to submit that impacts Technical Operations criteria? Please provide details.** participated in mainnet producer upgrade; added a testnet api node ([https://testnet.wax.blacklusion.io](https://testnet.wax.blacklusion.io/)); enabled wallet api features on mainnet and testnet api; Upgraded bp.jsons to new standard; As usual Hyperion is provided for Mainnet; Added a snapshot Service ([https://snapshots.blacklusion.io/](https://snapshots.blacklusion.io/))
- **Does your Guild have any new information to submit that impacts Product Development criteria? Please provide details.** 
Blacklusion Pager (monitoring system) - Released for WAX Main- and Testnet. I ended up writing a LOT more code than I initially anticipated (it is open source, have a look: [https://github.com/Blacklusion/validationcore](https://github.com/Blacklusion/validationcore), 
[https://github.com/Blacklusion/pager-telegram-service](https://github.com/Blacklusion/pager-telegram-service)). 

Blacklusion OneApi - Under Development - This month I would like to propose a new product: OneApi will offer a single url for performing Api requests. The OneApi service will be deployed across multiple servers worldwide in order to achieve High Availability and best performance for users in all world regions. The main goal is to load balance the increasing traffic of WAX across more APIs (since currently mostly the same 2-3 endpoints are being used).
In case one Api-Endpoint fails, OneApi will redirect traffic to other healthy apis. OneApi is still in the early beginnings and will most likely reuse some of the validationcore, developed for the blacklusion pager. 
Timeline: 1-2 Month (September/October). 
I hope to finish the product within one month, however performance and reliability are key. Therefore, I may release later, if these KPIs are not satisfied.
- **Does your Guild have any new information to submit that impacts Business Development criteria? Please provide details.** 
I am currently in contact with more than one exchange and discussing the conditions for listing WAX. The discussions are more or less in the early stages, however I am in direct contact with the listing managers of the exchanges via telegram. More than happy to provide proof, if required.
- **Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?** 
As you probably have seen: the implementation of my snapshot site is "basic". Although, I think it is important for BPs to have their own snapshots in order to spin up nodes, I don't there is a real point of having 100 public snapshot sites.
- **What email would you like a form submission confirmation to be sent?** [business.55stores@gmail.com](mailto:business.55stores@gmail.com)

## August 2020

**What is the name of your Guild?**Blacklusion

- **Does your Guild have any new information to submit that impacts Technical Operations criteria? Please provide details.**There have been no major changes this month: Hyperion, API, P2P, Delphi etc. are still up and running.
- **Does your Guild have any new information to submit that impacts Product Development criteria? Please provide details.**Blacklusion Pager: Most of the individual parts are working by itself (telegram logic, validator logic etc.), however a couple of components do still not communicate properly (database problems). I am currently in the process of changing my module for accessing the postgres database and changing the schemas, which means a lot of refactoring. Therefore I decided not to launch the product before the submission deadline, since I much rather "miss out on the points" and deliver a high quality product. The launch will be soon.
- **Does your Guild have any new information to submit that impacts Business Development criteria? Please provide details.**no
- **Does your Guild have any new information to submit that impacts Community Engagement criteria? Please provide details.**I wrote a step by step article on how to create custom permissions ([https://blacklusion.com/assigning-custom-permissions-to-account-keys/](https://blacklusion.com/assigning-custom-permissions-to-account-keys/)). Accordingly I made some smaller changes to an article making use of custom permissions ([https://blacklusion.com/pushing-the-bp-json-on-chain/](https://blacklusion.com/pushing-the-bp-json-on-chain/))
- **Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**Good to see that especially the product category now relies on points between 1-5 and not only 3-5. In my opinion it was too easy to get 3 points for a medium quality product in the past.
- **What email would you like a form submission confirmation to be sent?**[business.55stores@gmail.com](mailto:business.55stores@gmail.com)

## July 2020

- **What is the name of your Guild?**Blacklusion
- **Does your Guild have any new information to submit that impacts Technical Operations criteria? Please provide details.**The complete technical infrastructure is up and running, in particular the Hyperion History is completely synced and values are pushed to the delphioracle. Uptime was basically 100% this month.
- **Does your Guild have any new information to submit that impacts Product Development criteria? Please provide details.**Yes. Making great progress with the Blacklusion pager. I had a minor setback, since I initially planned to reuse a lot of the validator code, but I opted to code it myself using typescript instead.
- **Does your Guild have any new information to submit that impacts Business Development criteria? Please provide details.**No
- **Does your Guild have any new information to submit that impacts Community Engagement criteria? Please provide details.**I made some slight changes to existing articles (e.g. allow access control header configuration for chains.json). But nothing I should get points on.
- **Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**I really like the move away from KPIs such as word count or video length. Great job
- **What email would you like a form submission confirmation to be sent?**[business.55Stores@gmail.com](mailto:business.55Stores@gmail.com)

## June 2020

- **What is the name of your Guild?**Blacklusion
- **Does your Guild have any new information to submit that impacts Technical Operations criteria? Please provide details.**I currently in the process of migrating all my non producer services to kubernetes and setting up additional servers. Unfortunatly my hyperion history node is not functioning completely currently, however it will be up in the next couple of days.
- **Does your Guild have any new information to submit that impacts Product Development criteria? Please provide details.**In development - Alarm/Monitoring system, that allows guilds to monitor their services without any additional setup on their side/servers. It monitors missed blocks and checks if the endpoints are working from multiple blacklusion servers. In case anything is down the guilds that registered their phone number etc. will be called by phone or contacted via other channels. The goal is to help new guilds that lack a monitoring system and provide established guilds a backup system, in case theirs fail and to improve uptime across both nets.
- **Does your Guild have any new information to submit that impacts Business Development criteria? Please provide details.**no
- **Does your Guild have any new information to submit that impacts Community Engagement criteria? Please provide details.**Starting a tutorial series on building a gulid infrastructure, beginnig at the very basics. I wrote three articles: creating bp.json, pushing bp.json on-chain and creating chains.json (I know the latter does not need a tutorial, but I wanted to cover how to find the chainids and supplied a github repo with many eosio chainids).Creating bp.json (865w): [https://blacklusion.com/creating-a-bp-json-for-the-wax-chain/](https://blacklusion.com/creating-a-bp-json-for-the-wax-chain/)Pushing bp.json on-chain (536w): [https://blacklusion.com/pushing-the-bp-json-on-chain/](https://blacklusion.com/pushing-the-bp-json-on-chain/)Creating Chains.json (250w): [https://blacklusion.com/creating-a-chains-json/](https://blacklusion.com/creating-a-chains-json/)
- **Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**no

## May 2020

- **What is the name of your Guild?**Blacklusion
- **Does your Guild have any new information to submit that impacts Technical Operations criteria? Please provide details.**All essential endpoints, a testnet Producer and the Hyperion History are live
- **Does your Guild have any new information to submit that impacts Product Development criteria? Please provide details.**not yet
- **Does your Guild have any new information to submit that impacts Business Development criteria? Please provide details.**no
- **Does your Guild have any new information to submit that impacts Community Engagement criteria? Please provide details.**I translated a article originally published by Waxsweden from english into german (~4000 words).[https://blacklusion.io/private-keymanagement-fur-dumme/](https://blacklusion.io/private-keymanagement-fur-dumme/)
- **Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**Make the deadlines clearer: What has to be submitted until which date? I know there is a medium post. But it would be nice to have it all in a singe place. Just write exact deadlines into the notion post.
- **What email would you like a form submission confirmation to be sent?**[business.55Stores@gmail.com](mailto:business.55Stores@gmail.com)

- **What is the name of your Guild?**Blacklusion
- **What is your Guild's website?**[https://blacklusion.io](https://blacklusion.io/)
- **What is your Guild's preferred contact email for future communications with the Office of Inspector General?**[business.55Stores@gmail.com](mailto:business.55Stores@gmail.com)
- **Have you published a [Guild candidacy announcement post]([https://wax.io/become-a-wax-guild](https://wax.io/become-a-wax-guild)) on any official social media? If so, please provide a link to the post.**[https://medium.com/@Blacklusion/blacklusion-announcing-candacicy-for-the-wax-blockchain-780bd2bc6bba](https://medium.com/@Blacklusion/blacklusion-announcing-candacicy-for-the-wax-blockchain-780bd2bc6bba)
- **Has a representative from your Guild requested an invite to the wax_guilds Keybase channel? If not, please request one by creating a Keybase account and navigating [here]([https://keybase.io/team/wax_guilds](https://keybase.io/team/wax_guilds)).**Yes
- **Has a rep from your Guild added emergency contact information to the Guild roster?If not, please add a bpname.json file in the folder below after gaining access to wax_guilds on Keybase.keybase://team/wax_guilds/rosters/**No
- **Please confirm the URL for the chains.json file that your Guild would like to use for the evaluation. The metadata configured for WAX networks specified in chains.json will be used to validate public endpoints and test networks, and cross-referenced by this [WAX endpoint validator]([https://validate.eosnation.io/wax/](https://validate.eosnation.io/wax/)). More information about the standard is available [here]([https://github.com/Telos-Foundation/telos/wiki/Telos:-bp.json](https://github.com/Telos-Foundation/telos/wiki/Telos:-bp.json)).**[https://resources.blacklusion.io/chains.json](https://resources.blacklusion.io/chains.json)
- **Please provide some information regarding when and how your Guild got involved with the EOSIO or WAX ecosystem. Links to resources are helpful.**OPSkins / CSGO; With my software development background it was an obvious decision to become an active member of the community.
- **Has anyone in the Guild previously produced blocks on an EOSIO or DPOS network in the past? If so, which ones and what nodes did they help operate?**I operated a producer node on the telos-testnet (name: blacklusionx). Mostly the time is below 2ms running wabt. There are one or two spikes since I am experimenting with the settings.
- **Please provide information regarding projects that your Guild is working on to improve the WAX ecosystem. Information about plans, progress, and timelines is helpful.**Helping new users, by providing advanced guides and resources. Currently I am investigating if an IOS / Android app could provide helpful functions besides just displaying graphs.
- **Please state the jurisdiction your Guild is domiciled in, as well as the jurisdiction that your Guild's nodes are deployed in.**The guild is part of a company registered in Germany. The nodes are currently deployed in data centers in Germany and Finland.
- **Please share any information regarding community building efforts championed by your Guild. This can be facilitating translation of documentation, organizing meetups, and otherwise driving social and human engagement within the platform.**Translation of existing articles into german. Guides and resources helpful for deploying and optimizing nodes.
- **Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**I would make the guidelines more accessable. Although they are somewhat logical placed on the website, I had to search at first a bit. Maybe make it an own point in the drop-down menu of "Wax Guilds"?