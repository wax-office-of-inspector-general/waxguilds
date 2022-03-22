## Archive of Reports

-- The following have been added to notion. This archive contains the updates submitted before july 2021

## June 2021

**Does your Guild have any new information to submit that impacts Technical Operations?**

ourHyperion install seems to be running stable now. We are also working on an additional script to monitor the queues and restart the service if it gets too high.

**Does your Guild have any new information to submit that impacts Product Development?**

#### 1. Security Audits

We continue to perform security audits for Guilds on the WAX mainchain.

We have now completed  all the security scans for guilds and will be starting back from the beginning.

- we hav not perform any security scans this month, instead we have taken some time to update our tool set.

Milestones for the following month:

1.  Complete another 2 Pentesting scans for Guilds.

#### 2. Automated Guild Rating

Demo site is now live and hoping to get some feedback on the frontend.

I need to make so backend changes and also add the additional new requirements in, but I wanted to get overall operational feedback first before making any further Frontend changes.

######3. API

Looking at installing a atomic assets API.

**Does your Guild have any new information to submit that impacts Ecosystem Development?**

**Does your Guild have any new information to submit that impacts Community Engagement?**

**Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**

## May 2021

(update provided after the cut off)
**Does your Guild have any new information to submit that impacts Technical Operations?**

Hyperion wax moved to a new server with 4TB of NVME disk space, as even with a cluster it was running out of diskspace. Seems to be hardware shortages, took ages to get the new server. Still syncing....

**Does your Guild have any new information to submit that impacts Product Development?**

We continue to perform security audits for Guilds on the WAX mainchain.

We have now completed  all the security scans for guilds and will be starting back from the beginning.

- We have started scanning waxplorer.com, but not yet completed it.I know this happens every month, but I need to learn more about GraphQL. Everything else looks fine, but cant sign of on GraphQL yet.
- We completed another security scan of GREENEOS, AlohaEOS
- External auditor has prepared paper work for Lukas to sign. He won't attack the wallet unless authorized. Waiting for him Lukas to sign and return before he can start.
1. Automated Guild Rating system
    - Wallet integration** Wallet integrations are complete
    - **CSS changes**
    - OIG portal is now live for testing

Milestones for the following month:

1. Update Python code for tech results, loads of changes to be made.

**Does your Guild have any new information to submit that impacts Ecosystem Development?**

**Does your Guild have any new information to submit that impacts Community Engagement?**

**Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**

## April 2021

**Does your Guild have any new information to submit that impacts Technical Operations?**

- *Hyperion: **
- During April I encountered an issue where my rabbitMQ queues were well above 5 million, so I included another nagios script to monitor my rabbitMQ queues and notify me when they exceed 100K.
- We implemented a Elastic Cluster, so we now have two Elastic nodes running for indexing.

**Does your Guild have any new information to submit that impacts Product Development?**

#### 1. Security Audits

We continue to perform security audits for Guilds on the WAX mainchain.

We have now completed  all the security scans for guilds and will be starting back from the beginning.

- We have started scanning [waxplorer.com](http://waxplorer.com/), but not yet completed it.I know this happens every month, but I need to learn more about GraphQL. Everything else looks fine, but cant sign of on GraphQL yet.
- We completed another security scan of EOSUSA & EOSDAC
- Started scanning wax cloud wallet, found a few things but nothing that stands out. I have hired in an external pentester to verify some of the findings and perform additional checks. He starts in May.

Milestones for the following month:

1.  Complete another 2 Pentesting scans for Guilds.

2.  Start WAX cloud audit

#### 2. Automated Guild Rating system

- *Frontend**

1. **BP Page** Connected Guild page to backend to ensure icons reflect DB status.

2. **BP Page** CPU graphs  are now working.

3. Increased loading of pages.

4. **CSS changes**

Here is a video demo of how it all currently works and looks.

[https://youtu.be/fB9cZ5Kn-6Y](https://youtu.be/fB9cZ5Kn-6Y)

Milestones for the following month:

1.  Perform some tweaks on the python backend to ensure all results are correct.

2.  Complete Wallet integration.

3.  Setup demo site for OIGs to play with.

**Does your Guild have any new information to submit that impacts Ecosystem Development?**

**Does your Guild have any new information to submit that impacts Community Engagement?**

**Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**

## March 2021

### Tech ops:

### Product development:

#### 1. Security Audits

We continue to perform security audits for Guilds on the WAX mainchain.

We have now completed  all the security scans for guilds and will be starting back from the beginning.

- We have started scanning [waxplorer.com](http://waxplorer.com/), but not yet completed it.I know this happens every month, but I need to learn more about GraphQL. Everything else looks fine, but cant sign of on GraphQL yet.
- We completed another security scan of eossweden, eosdetroit.

Milestones for the following month:

1.  Complete another 2 Pentesting scans for Guilds.

2.  Continue Pentest waxplorer.

3.  Start WAX cloud audit

#### 2. Automated Guild Rating system

- *Backend**

1. Added comments to SQL tables.

2. Python checking has been sped up.

- *Frontend**

1. Admin panel is now working to set snapshot date and changes scores.

2. Integrated and Individual view is now working.

3. Scores are now calculated on JS instead of Python, however if you want historical tech scores to be kept where they are not effected by changing score multipliers, the tech scoring would have to remained on Python. After chatting to Kaefer tech score calc will remain on python.

4. Various JS fixes have been made.

5. Comments can now be added to tech, bizdev,products,community.

Here is a video demo of how it all currently works and looks.

[https://www.youtube.com/watch?v=iQZu-2TQ5HE](https://www.youtube.com/watch?v=iQZu-2TQ5HE)

Milestones for the following month:

1. **BP Page** Connect Build page to backend to ensure icons reflect DB status.

2. **BP Page** get CPU graphs working

3. Work on **increasing performance of JS** to speed up querying DB. We think react is pulling state twice for each query, unsure why at this point.

4. **CSS changes**

5. Create and add **Categories to integrated view**

#### 3. Automated snapshot Service

nothing new

#### 4. Automated Nagios monitoring thingy.

We have started coding up this project. We are currently working on the automated nagios install part.

[https://github.com/ankh2054/eosio-nagios/](https://github.com/ankh2054/eosio-nagios/)

#### 5. OIG tech monitoring API

no changes

##### 6. Sentnl CVE search API.

- * UPDATE:**
- As I have been doing security audits, I have been advising BPs of this service.

### Business development:

We have agreed with WAX to perform a free pentest of the new cloud wax wallet portal ([https://all-access.wax.io](https://all-access.wax.io/)). This will start sometime in February and take 1 month to complete.  This has not yet started, by work loads has been mental. I have reached out to Lukas to see when we can start. We are now ready to go.

### Community and Marketing

- *Performing live hacks & Educating WAX community around security**:
- *Creation of original informational content or translation that benefits WAX:**

Sentnl Security Wiki  - [https://wiki.sentnl.io](https://wiki.sentnl.io/)

We continue to update these with information as we go along.

- *Community management initiatives e.g. channel administration, awareness building, teaching and mentoring:**

#### 1. DeFi DAPP security audit verification API

Part of our business we also provide smart contract audits for DAPPs on EOSIO chains, working with some block explorers we identified a need to provide an API service, which block explorers or exchanges can query to validate whether the contracts loaded on chain have been audited, by comparing the on chain sha256 hash vs sha256 hash stated on our API.

Once we complete the audit we compile the contracts based on the code we audited and that hash is saved on the certificate and our API, which can then be compared to the loaded contracts.

This can be queried via - [https://www.sentnl.io/api/tokens](https://www.sentnl.io/api/tokens)

Now that WAX is opening up its chain to DeFi, I think this will become a very useful service for token holders to be able to verify the security of Defi DAPPS.

## February 2021

### **Product development:**

### **1. Security Audits**

We continue to perform security audits for Guilds on the WAX mainchain.We have now completed all the security scans for guilds and will be starting back from the beginning.

- We have started scanning [waxplorer.com](http://waxplorer.com/), but not yet completed it.I know this happens every month, but I need to learn more about GraphQL. We did not perform any other security
- We installed a new reporting system called ghostwriter, which provides even greater flexibility on reporting and allows me to bring in external security auditors if required,

Milestones for the following month:

1. Complete 2 Pentesting scans for Guilds.
2. Continue Pentest waxplorer.

### **2. Automated Guild Rating system**

**Backend**

1. After speaking to Kaefer, we decided to allow the OIG to set a date on the frontend of when the snapshots would be taken. The snapshot function has now directly been build into Python. It checks every 15 minutes whether today == snapashot_date and if yes takes a snapshot, but it also will not take more than one snapshot on the day thati s required.

**Frontend**

1. Started work on changing the Guild page
2. Started working on the OIG admin page, where scores can be edited and snapshot date can be set and changed.
3. Started working on creating different views for scoring, so OIG can view and comment on all products/bizdev/community at once. The default view will be filtered and order by guilds, but other views will be filtered by Products ,Community, Bizdev and tech as requested.

Milestones for the following month:

2.**OIG admin page** - Start working on the OIG admin page. Where scores can be updated, product information can be edited etc....3. **BP Page** Connect Build page to backend to ensure icons reflect DB status.

### **3. Automated snapshot Service**

nothing new

### **4. Automated Nagios monitoring thingy.**

We are currently thinking about creating another product, to eventually replace the snapshot one, as there is only so much we can do with that. Will keep you posted.

### **5. OIG tech monitoring API**

As part of the ongoing work on the OIG portal, we have created a latest results API, which can be queried to show the latest tech results (as specified by tech criteria) for each BP on WAX.This is not live yet and will require a few changes to account for criteria changes, but I have attached an example.

### **6. Sentnl CVE search API.**

I know this is not being scored yet, but we felt it was a really useful product to setup for Guilds. Anyone who takes security serious will be checking CVE's daily and it's really hard to keep ontop of it all, but having such an application and a API takes all the hard work out keeping on top of the security for your applications.

[https://medium.com/sentnl/sentnl-cve-search-api-cff374db645d](https://medium.com/sentnl/sentnl-cve-search-api-cff374db645d)

### **Business development:**

We have agreed with WAX to perform a free pentest of the new cloud wax wallet portal ([https://all-access.wax.io](https://all-access.wax.io/)). This will start sometime in February and take 1 month to complete. Need to confirm this with Lukas....

### **Community and Marketing**

**Performing live hacks & Educating WAX community around security**:

**Creation of original informational content or translation that benefits WAX:**

Sentnl Security Wiki - [https://wiki.sentnl.io](https://wiki.sentnl.io/)

We continue to update these with information as we go along.

**Community management initiatives e.g. channel administration, awareness building, teaching and mentoring:**

### **1. DeFi DAPP security audit verification API**

Part of our business we also provide smart contract audits for DAPPs on EOSIO chains, working with some block explorers we identified a need to provide an API service, which block explorers or exchanges can query to validate whether the contracts loaded on chain have been audited, by comparing the on chain sha256 hash vs sha256 hash stated on our API.

Once we complete the audit we compile the contracts based on the code we audited and that hash is saved on the certificate and our API, which can then be compared to the loaded contracts.

This can be queried via - [https://www.sentnl.io/api/tokens](https://www.sentnl.io/api/tokens)

Now that WAX is opening up its chain to DeFi, I think this will become a very useful service for token holders to be able to verify the security of Defi DAPPS.

## January 2021

**Does your Guild have any new information to submit that impacts Technical Operations?**

We have hired a fullstack engineer to join our team.

We have installed hyperion and got all blocks indexed.

Installed some custom nagios hyperion checks to monitor for blocks not indexed. Don’t want a re-occurrence of last month. lol

**Does your Guild have any new information to submit that impacts Product Development?**

1. Security Audits

We continue to perform security audits for Guilds on the WAX mainchain.

We have now completed all the security scans for guilds and will be starting back from the beginning.

We have started scanning waxplorer.com, but not yet completed it.I know this happens every month, but I need to learn more about GraphQL.

Milestones for the following month:

Complete another 2 Pentesting scans for Guilds.

Continue Pentest waxplorer.

1. Automated Guild Rating system

Backend

Performed refactor of code to include more classes.

Removed the testnet CPU scores as this was slowing down the checks too much. Application had to traverse backwards from head_block until it found a block that was produced by given producer. If Producer is not on mainnet, these will need to manually checked.

Frontend

We have hired a frontend developer to take the portal to the next level.

He has fixed all my errors.

Fixed an issue where Guilds with no product, bizdev or community information was crashing the OID admin page.

Milestones for the following month:

Start working on P2P checks - We have tried and failed to implement P2P checks using python, the work involved will take to long as we have opted to use the existing JS solution provided by Michael Yeates. We are not just trying to figure out the best way to run a JS function inside python and return the necessary results.

2. OIG admin page - Start working on the OIG admin page. Where scores can be updated, product information can be edited etc....

BP Page Add more information to each BP page.

3. Automated snapshot Service

Frontend

Completed the mission to have docker run as non root. The container now runs as a user called EOS, with no root permissions.

Milestones for the following month:

nothing for now.

4. Automated Nagios monitoring thingy.

We are currently thinking about creating another product, to eventually replace the snapshot one, as there is only so much we can do with that. Will keep you posted.

5. OIG tech monitoring API

As part of the ongoing work on the OIG portal, we have created a latest results API, which can be queried to show the latest tech results (as specified by tech criteria) for each BP on WAX.

This is not live yet and will require a few changes to account for criteria changes, but I have attached an example.

6. Sentnl CVE search API.

I know this is not being scored yet, but we felt it was a really useful product to setup for Guilds. Anyone who takes security serious will be checking CVE's daily and it's really hard to keep on top of it all, but having such an application and a API takes all the hard work out keeping on top of the security for your applications.

https://medium.com/sentnl/sentnl-cve-search-api-cff374db645d

**Does your Guild have any new information to submit that impacts Ecosystem Development?**

We have agreed with WAX to perform a free pentest of the new cloud wax wallet portal (https://all-access.wax.io). This will start sometime in January/February and take 1 month to complete. Need to confirm this with Lukas.

Community and Marketing

Performing live hacks & Educating WAX community around security:

Creation of original informational content or translation that benefits WAX:

Sentnl Security Wiki - https://wiki.sentnl.io

We continue to update these with information as we go along.

This month we added our first CVE search query stack for hyperion. Using that query you can be alerted for any vulnerabilities in a particular software stack.

**Does your Guild have any new information to submit that impacts Community Engagement?**

1. DeFi DAPP security audit verification API

Part of our business we also provide smart contract audits for DAPPs on EOSIO chains, working with some block explorers we identified a need to provide an API service, which block explorers or exchanges can query to validate whether the contracts loaded on chain have been audited, by comparing the on chain sha256 hash vs sha256 hash stated on our API.

Once we complete the audit we compile the contracts based on the code we audited and that hash is saved on the certificate and our API, which can then be compared to the loaded contracts.

This can be queried via - https://www.sentnl.io/api/tokens

Now that WAX is opening up its chain to DeFi, I think this will become a very useful service for token holders to be able to verify the security of Defi DAPPS.

**Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**

## December 2020

**Does your Guild have any new information to submit that impacts Technical Operations?**

1. In general we have advertised for a fullstack engineer to join our team. This is to help me complete the OIG portal.
2. We have revamped our internal security scanner - which may become a product in the future. It's used for internal scanning.

Here is a screenshot

**Does your Guild have any new information to submit that impacts Product Development?**

1. **Security Audits**

We continue to perform security audits for Guilds on the WAX mainchain. We have now completed over 17 scans including some rescans which Guilds have requested after resolving their issues.

- This month we completed, **[io](http://eosrio.io/), [csx.io](http://csx.io/)**security scans.
- We have started scanning [com](http://waxplorer.com/)

Milestones for the following month:

1. Complete another 2 Pentesting scans for Guilds.
2. Continue Pentest waxplorer.

2. **Automated Guild Rating system**

**Backend**

1. Started installing Hyperion V2, hopefully finished before you read this.

**Frontend**

We started work on the frontend and have completed the following:

1. We continue working on the OIG admin panel, we have now completed the ability to edit and update product, Bizdev, community sections for each BP. It is not fully complete yet, as there are some errors.
2. We have start looking for a fulltime Fullstack Engineer to help us complete the frontend.

Milestones for the following month:

1. **Start working on P2P checks**Currently P2P checks only acertain whether the port is live and the weird P2P signature is returned, but this does not veify the chain version nor whether the head_block is up to date. We plan to check all of this.**Continue working on snapshot functionality**
2. **Finish hiring a frontend Dev**

Here is a demo of the what an OIG admin could perform on the product section for a BP.

[https://www.youtube.com/watch?v=2OsozdludgA](https://www.youtube.com/watch?v=2OsozdludgA)

3. **Automated snapshot Service**

**Frontend**

1. Started working on the docker container to not run as root, although still having some difficulties. We have not yet had time to sort this out.

Milestones for the following month:

1. Continue working on docker container to run as non root.
2. **OIG tech monitoring API**

As part of the ongoing work on the OIG portal, we have created a latest results API, which can be queried to show the latest tech results (as specified by tech criteria) for each BP on WAX. This is not live yet and will require a few changes to account for criteria changes, but I have attached an example.

**Does your Guild have any new information to submit that impacts Ecosystem Development?**

We have agreed with WAX to perform a free pentest of the new cloud wax wallet portal ([https://all-access.wax.io](https://all-access.wax.io/)). This will start sometime in January and take 1 month to complete.

**Does your Guild have any new information to submit that impacts Community Engagement?**

**Performing live hacks & Educating WAX community around security**:

**Creation of original informational content or translation that benefits WAX:**

Sentnl Security Wiki - [https://wiki.sentnl.io](https://wiki.sentnl.io/)

We continue to update these with information as we go along.

**Community management initiatives e.g. channel administration, awareness building, teaching and mentoring:**

1. **DeFi DAPP security audit verification API**

Part of our business we also provide smart contract audits for DAPPs on EOSIO chains, working with some block explorers we identified a need to provide an API service, which block explorers or exchanges can query to validate whether the contracts loaded on chain have been audited, by comparing the on chain sha256 hash vs sha256 hash stated on our API.

Once we complete the audit we compile the contracts based on the code we audited and that hash is saved on the certificate and our API, which can then be compared to the loaded contracts.

This can be queried via - [https://www.sentnl.io/api/tokens](https://www.sentnl.io/api/tokens)

Now that WAX is opening up its chain to DeFi, I think this will become a very useful service for token holders to be able to verify the security of Defi DAPPS.

**Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**

## November 2020

**Does your Guild have any new information to submit that impacts Technical Operations?**

**Does your Guild have any new information to submit that impacts Product Development?**

1. **Security Audits**

We continue to perform security audits for Guilds on the WAX mainchain. We have now completed over 17 scans including some rescans which Guilds have requested after resolving their issues.

This month we completed, **[pink.gg](http://pink.gg/), [eosarabia.net](http://eosarabia.net/)** security scans.

Milestones for the following month:

1. Complete another 2 Pentesting scans for Guilds.
2. Pentest waxplorer
3. **Automated Guild Rating system**

**Backend**

1. Few optimisation changes only this month.

**Frontend**

We started work on the frontend and have completed the following:

1. Started working on the OIG admin panel, by creating a snapshot functioanlity, which takes the latest tech results and takes a snapshot.

Milestones for the following month:

1. **Start working on P2P checks**Currently P2P checks only whether the port is live and the weird P2P signature is returned, but this does not verify the chain version nor whether the head_block is up to date. We plan to check all of this.**Continue working on snapshot functionality** - Need to autopopulate tables with all PROD & BIZ with the ability for OIG to edit those fields and save to DB.

Here is little demo of the snapshot creation -

[https://www.youtube.com/watch?v=2OsozdludgA](https://www.youtube.com/watch?v=2OsozdludgA)

1. **Automated snapshot Service**

**Frontend**

1. Started working on the docker container to not run as root, although having some difficulties.

Milestones for the following month:

1. Continue working on docker container to not as root.

**Does your Guild have any new information to submit that impacts Ecosystem Development?**

none to brag about.

**Does your Guild have any new information to submit that impacts Community Engagement?**

**Performing live hacks & Educating WAX community around security**:

**Creation of original informational content or translation that benefits WAX:**

Sentnl Security Wiki - [https://wiki.sentnl.io](https://wiki.sentnl.io/)

We continue to update these with information as we go along.

**Community management initiatives e.g. channel administration, awareness building, teaching and mentoring:**

We continue to update these with information as we go along.

**Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**

## October 2020

Tech ops:
SSH SHA1- We have remove all SHA1 from our SSH servers, as these are no longer considered secure.
Nagios CPU check - We have modified our CPU check to now monitor for averages of 0.5.
BP JSON update - We updated our BP JSON to the latest standard.

Product development:

1. Security Audits
We continue to perform security audits for Guilds on the WAX mainchain.
We have now completed over 15 scans including some rescans which Guilds have requested after resolving their issues.

Milestones for the following month:

Complete another 3 Pentesting scans for Guilds.
Pentest waxplorer
2. Automated Guild Rating system
Backend

Spend alot of time cleaning up the code and creating more classes.
Created function to randomly chose API/Hyperion nodes used to perform checks.
CPU time check has now been changed to 0.5ms
Frontend

We started work on the frontend and have completed the following:

Had a call with Kaefer and he has provided loads of useful guidance. We have noted all this down and will start working on it.
We added a monthly update form - that will allow Guilds to post their monthly updates on the site directly.
Milestones for the following month:

Start working on P2P checks - Currently P2P checks only whether the port is live and the weird P2P signature is returned, but this does not verify the chain version nor whether the head_block is up to date. We plan to check all of this.
Create snapshot functionality - to allow OIG to take snapshot of tech results which is then saved with a timestamp. That snapshot is used to then score guilds for that current month. Snapshots should be available for historic lookups and disputes.
3. Automated snapshot Service
Frontend

We have created a latest-snapshot link on the frontend.
Milestones for the following month:

Currently docker container runs as root, which is not ideal as containers should not really be run as root. Plan is to rewrite it all to run as a specific user called eos. We could not get this completed last month due to lack of time.
Business development:
none to brag about.

Community and Marketing
Performing live hacks & Educating WAX community around security:

Creation of original informational content or translation that benefits WAX:

Sentnl Security Wiki - [https://wiki.sentnl.io](https://wiki.sentnl.io/)

We continue to update these with information as we go along.

Community management initiatives e.g. channel administration, awareness building, teaching and mentoring:

## September 2020

### Tech ops:

Snapshots - sentnlagents is now publishing mainnet and testnet snapshots at [https://snapshots.sentnl.io](https://snapshots.sentnl.io/)

- *Nagios CPU check **- We have updated our monitoring to now also include a checker to monitor our CPU on WAX mainnet to be alerted when it spikes above 2ms.

### Product development:

### 1. Security Audits

We continue to perform security audits for Guilds on the WAX mainchain. We have now completed over 12 scans including some rescans which Guilds have requested after resolving their issues.

We have also added the following additional scans.

**Github secret key scanning.** We now scan for any secrets including EOS private keys exposed in any guild owned public github repositories through the commit history. **Password and emails pawn scan**. We take company email addresses and any gmail addresses we can identify and run them against popular data leaks to asses whether those email addresses and or their passwords are known to hackers on the darkweb.

We have also been actively adding additional features to a very popular hacking scan tool called Nuclei - [https://github.com/projectdiscovery/nuclei](https://github.com/projectdiscovery/nuclei) - We have tweaked the tool to make it better suited to automate guild security scanning for our future security portal. [https://github.com/projectdiscovery/nuclei/graphs/contributors](https://github.com/projectdiscovery/nuclei/graphs/contributors)

Milestones for the following month:

1. Complete another 3-4 Pentesting scans for Guilds.

### 2. Automated Guild Rating system

Quite a bit has changed since the last month:

**Backend**

1. All edge cases have now been resolved and we are correctly pulling and polling for all wax guilds regardless of the quirks in their wax.json files.
2. All tech checks are now being performed (apart from missing blocks). I am busy working on a solution track missing blocks.
3. **CPU average** – Every time our backend runs (15mins) we have it configured to take the latest CPU stats for all guilds, which is saved to the DB. The average CPU is then taken from the last 30 days worth of CPU stats.
4. **Testnet CPU** - We also have it configured that if a Guild is not in the top21, we search for the last block the guild created on testnet and take that as the CPU stat. We can only go back so far and currently have it set to go back 4000 blocks and if no block made by that producer is found, we default to 2ms.
5. **Full history** - Is now configured to takes 2 random blocks within the last 420 blocks of head_block and tests a transaction in each. If not a single transaction is found then we deem it as a fail. We may change this to 3 random blocks. Using 420 also ensures that light history nodes are counted.
6. We are now saving **all historical scans in the DB**, allowing the OIG to look at a guilds prior results.
7. **Added TLS scanning** (although not a specific requirement on WAX yet it is important for Wallets) The scanner checks to what version of TLS an API node is willing to downgrade too. Anything lower than TLS1.2 is bad for security.

Latest demo of the backend:

[https://asciinema.org/a/359655?t=135](https://asciinema.org/a/359655?t=135)

**Frontend**

We started work on the frontend and have completed the following:

1. Created an initial guild page giving an overall score to each guild.
2. Clicking on a guild takes you through to their individual page, where it shows products and historical results for guilds.
3. A page that shows the current results for all guilds from the latest scan.

Here is a preview of the frontend

[https://www.youtube.com/watch?v=dT_01gG1CM8](https://www.youtube.com/watch?v=dT_01gG1CM8)

Milestones for the following month:

1. Update the platform to accept Monthly Updates from Guilds which can be saved to the DB. So in the future when the platform is live, Guilds can visit the site fill out a form to provide their monthly updates.
2. Currently python backend has hardcoded hyperion and API nodes (if those nodes are down the programme cant extract informatioin from chain). Need to change this to a function that finds all current healthy nodes and randomly selects one from that healthy list.
3. Add Business Dev and Community section to individual guild page.
4. Have a call with the OIG to provide some feedback.

### 3. Automated snapshot Service

Since WAX OIG made snapshots a possible service for points we have had 3 guilds reach out to us about the service. Based on feedback we have made some changes:

**Backend**

1. We have added the option to specify the retention period on snapshots instead of it being hardcoded
2. We set read-mode = irreversible . This ensures nodeos does not have for the next lib before creating the snapshot, speeding up the entire process.

**Frontend**

The frontend now automatically pulls Guilds SVG logos from wax.json file. We are actually using this frontend service for our snapshot service.

Milestones for the following month:

1. Currently docker container runs as root, which is not ideal as containers should not really be run as root. Plan is to rewrite it all to run as a specific user called eos.
2. Add a special download link on the frontend that always points to the latest snapshot. Currently we create a latest snapshot and it’s listed with all the other links, but I think a special button would be better.

### Business development:

none to brag about.

### Community and Marketing

**Performing live hacks & Educating WAX community around security**:

This month I created and demo’ed malware that changes crypto currency addresses in real time.

In the next month I hope to perform another demo, me and Anders have our thinking hats on.

**Creation of original informational content or translation that benefits WAX:**

Sentnl Security Wiki - [https://wiki.sentnl.io](https://wiki.sentnl.io/)

## August 2020

**Does your Guild have any new information to submit that impacts Technical Operations?**

sentnlagents is pushing DelphiOracle data points on WAX.

We also created a Automated Docker container to help other Guilds to push data to the oracle contract -

[https://github.com/ankh2054/delphioracle](https://github.com/ankh2054/delphioracle)

**Does your Guild have any new information to submit that impacts Product Development?**

1. 1. Security Audits

We continue to perform security audits for Guilds on the WAX mainchain.We have completed 7 Audits so far and have helped some Guilds resolve serious secuity issues that would of allowed attackers to gain full access to the network and therefor comprise the WAX blockchain.

[https://medium.com/sentnl/the-importance-of-guild-security-afb96fa2c63e](https://medium.com/sentnl/the-importance-of-guild-security-afb96fa2c63e)

2. 2. Automated Guild Rating system

We have started development on a portal that automatically calculates the technical operation scores by taking each requirement and perform appropriate querying against nodes and information on chain. The portal backend will poll each guild every 15 minutes. Guilds are taken from chain, so every new registered guild is automatically added. I have attached a animation showing you the backend system pulling stats for each guild. You will notice some stats are not yet there, but we are working hard to get it all done.

All the data will be stored in a PostgreSQL database. The frontend will pull data from the DB and be available for review by OIG.If this is something that the OIG will find useful, I be would be happy to let you guide the development requirements.

Here is a video showing the backend pulling down the stats.[https://asciinema.org/a/353174?t=22](https://asciinema.org/a/353174?t=22)

There are is an edge case we are working on, where polar.wax have a mis configured wax.json file that stipulates a full node as a P2P URL, we have tried to account for wax.json misconfigurations but we cannot account for them all. Ideally Guilds should resolve any WAX.JSON issues.

3. 3. Automated snapshot Service

I wasn’t sure whether this would count as an actual product, but here it is in anyways. We setup a service that automates the process of spinning up a snapshot service for WAX mainnet and WAX testnet. The snapshots are saved to Amazon S3 or Wasabi.

Currently the system consists of a backend, we have a working accompanying frontend system which we can also open source if the Guilds finds this service useful.

**Backend**[https://github.com/ankh2054/snapshot-service](https://github.com/ankh2054/snapshot-service)

**Frontend**[https://github.com/ankh2054/snapshots.sentnl.io](https://github.com/ankh2054/snapshots.sentnl.io)

The idea behind the service, is to try and form a standard for how snapshots are created and made available, with the beleive that DAPPs will also find this service useful.

**Does your Guild have any new information to submit that impacts Business Development?**

**Cryptofights & Kronoverse**

Cryptofights is a cryto gaming startup on BSV owned by Kronoverse ([https://www.kronoverse.io](https://www.kronoverse.io/)). I met the owner at a conference and after a few weeks of negotiating I have become their security consultant (You can see me listed on their website). The service to them will be free as I am using them as a case study.

I am hoping to use this opportunity to educate them more about WAX and whether they see benefit in using the WAX platform for their NFTs. Their games will have a huge amount of NFTs.

[https://www.cryptofights.io](https://www.cryptofights.io/)

**Does your Guild have any new information to submit that impacts Community Engagement?**

**Performing live hacks & Educating WAX community around security**:

We have been appearing on Anyobservation from EOSsweden’s youtube channel [https://www.youtube.com/channel/UCsqfZJRzNitVnWrWqlfIs6A](https://www.youtube.com/channel/UCsqfZJRzNitVnWrWqlfIs6A) where talk about security and hacking. We have two goals, the one is to educate the WAX community around how best to protect themselves from scammers and getting hacked. The other goal is to educate guilds on the different ways hackers can gain access to their systems.

**Creation of original informational content or translation that benefits WAX:**

Sentnl Security Wiki - [https://wiki.sentnl.io](https://wiki.sentnl.io/)

We have just started a security wiki, to further help Guilds and users on WAX about security best practices. We post all our security videos there and the aim is for us to conitnue looking at areas of security weakness with crypto and posting ideas and guidance on how to best protect yourself.

**Community management initiatives e.g. channel administration, awareness building, teaching and mentoring:**

With our Wiki and Educational videos we hope we can educate more people around how to protect themselves from scammers. A world without scammers will be a much better one.

**Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?**

## July 2020

N/A

# Pre-Evaluation Form Responses

### Please provide some information regarding when and how your Guild got involved with the EOSIO or WAX ecosystem. Links to resources are helpful.

We are highly experienced in the EOSIO protocol, we have been with EOS since the beginning and witnessed the booting of EOS mainnet. Our CEO joined was part of the first testnet run by EOSSweden under the pseudonym Cyclops. He has extensive knowledge of the inner workings of the underlying EOSIO software utilised by the WAX blockchain.Our team has extensive knowledge in security auditing, security policies and procedures. One of our team members is a former blackhat hacker with a OSCP qualification.We strongly believe in the importance of security and monitoring, which is where our expertise lie. Our CEO created a customised monitoring platform based on the Icinga engine for a large corporate business centre operator in London (Avanta) that at its peak monitored 4000 endpoints, including a large VM server farm and cloud infrastructure.

### Has anyone in the Guild previously produced blocks on an EOSIO or DPOS network in the past? If so, which ones and what nodes did they help operate?

Yes I was part of EOS42 and operated nodes (eos42freedom) on BOS, WAX, EOS.

### Please provide information regarding projects that your Guild is working on to improve the WAX ecosystem. Information about plans, progress, and timelines is helpful. This includes projects that have been submitted for the WAX Guild Showcase program.

(1) Product:

Free Security Audits for Block Producers.

Description:

We have developed a security auditor for EOS Block producers and the underlying services.

Live date:

This is live now and we can test any block producer.

(2) Product:

Security WIKI

Description:

A wiki with articles and videos on best practices of security for block producers.

We will have ongoing demonstrations as to how hacking actually takes place, giving block producers a better idea on how to protect themselves.

Live date:

Q2 2021

(3) Product:

Additional Modules

Description:

As we grow our product we will continually be adding more security checks.

Some examples of ones we are actively developing

1. Check the security of CORS on HTTP servers.

2. Scan github for any sensitive information, like API keys, EOS private keys and Wallet passwords.

Live date:

Q3 2021

(4) Product:

Security Portal:

Description:

In the near future we will also be in the position to create a custom portal to allow Block Producers the see live results from all our security modules.

Live date:

Q3 2021

Further information:

Further information about our products and plans can be found on our website and our Wax Candidacy post.

### Please state the jurisdiction your Guild is domiciled in, as well as the jurisdiction that your Guild's nodes are deployed in.

The business resides in London UK & our nodes also. 

### Please share any usage metrics you have, if any. This includes data specific to applications and user activity driven to the WAX ecosystem as a result of your Guild's efforts.

At present I have no metrics to share.

### If possible, please share information about businesses that your Guild is engaging with that are seeking to learn about and leverage the WAX ecosystem in some way.

I am actively speaking with Cryptofights (https://www.cryptofights.io) about WAX and the underlying protocol and whether it may suit their needs in the future.

Their business was previously deployed on Ethereum and have since moved to BSV.

### Please share any information regarding community building efforts championed by your Guild. This can be facilitating translation of documentation, organizing meetups, and otherwise driving social and human engagement within the platform.

With our domicile being London, we will be looking to start running a WAX London Meet-up to showcase the best WAX has to offer and also bring likeminded people together in one room discuss WAX and the underlying EOSIO protocol.

### Do you have any feedback for improving the Office of Inspector General, the Inspector General Guidelines, or this form?

I think node operators on DPOS blockchains, should get a 3rd party to audit their security every quarter.

The security of node operators is integral to any blockchain.

I feel that is one piece missing in the puzzle, which is why we have used our expertise in the field of offensive security to come up with some automated security audits that we could offer for free to Block Producers.