### <ins>General</ins>
<img src="https://www.sentnl.io/sentnl_256.png" alt="image" width="60" height="60">

|  |  |
| --- | --- |
| Website | https://www.sentnl.io/ |
| Contact | charles@sentnl.io |
| bp.json (mainnet) | https://www.sentnl.io/wax.json |
| bp.json (testnet) | https://www.sentnl.io/waxtest.json |
| producer (mainnet) | sentnlagents |
| producer (testnet) | sentnlagents |
| Guild Jurisdiction | United Kingdom |

### <ins>Noteworthy</ins>

- This month we installed IPFS and Light-api services. 


### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [x] | [x] | [x] | [x] | [x] | [x] |  [x] |
|  |  |  |  |  | |


### Contributions

---
### 🔎 Sengine	

**URLs**: https://wax.sengine.co , [https://github.com/ankh2054/oig-portal](https://github.com/ankh2054/oig-portal)


**Update**: 

- Added ability to obtain a list of Hyperions, P2P nodes and Atomic Nodes using the following queries.
http://wax.sengine.co/api/nodes/hyperion 
http://wax.sengine.co/api/nodes/atomic
http://wax.sengine.co/api/nodes/p2p

- We are in the process of creating a brand new Sengine (oig-portal) written from scratch in JS and nextjs
- The new sengine has been deployed at http://test.sengine.co - we are awaiting feedback from the OIG before fully switching over.



### 🔗 NodePulse

**Description:** 

The product aims to solve the problem of connecting to a hyperion OR atomic API that is fully working at the time of the request, without having to hardcode multiple nodes.
QRY Network created by EOSRIO have also decided to make this the primary JS library for their service. 


**The product consists of the following:**

•  a JS Library that devs install to maintain a list of working and healthy Hyperion and Atomic nodes.
•  a API backend service which maintains that healthy list of nodes, which can be run by multiple guilds.
•  a Cloudflare Proxy that maintains a list of healthy API backend server nodes. 


**Operational flow:**

•  JS library connects to the Cloudflare Proxy load balancer and refreshes it's healthy nodes list (defaults to 3 full hyperion nodes with streaming enabled) every 10 seconds. 
•  The Cloudflare proxy runs a healthcheck on all API servers in the pool to ensure they can provide healthy nodes to the JS library.
•  Failover: Incase the JS library cannot connect to an API service, it uses it's already maintained list of nodes OR default nodes hardcoded into library.

**URLs**: https://github.com/Sentnl/nodepulse, https://github.com/Sentnl/nodepulse-backend, https://github.com/Sentnl/nodepulse-python


Updates:

- We have created a Python library - nodepulse-python to also work with the nodepulse-backend API.
- We have updated the nodepulse-backend API to also provide a list of healthy light-api and IPFS nodes. 
- We have updated both the JS and Python libraries to now support light-api and IPFS nodes.


---

### 🕷 Security Audits	

Every month we perform a security audit for a guild from the list below.

* Dapplica
* Cryptolions
* NFThive
* EOSAuthority 
* WAXsweden
* EOSDetroit
* EOSdac
* EOSUSA
* GreenEOSIO
* ZenBlocks
* AlohaEOS
* BlokCrafters
* Ledgerwise
* Pink.gg
* EOSarabia
* EOSRIO
* CSxcommunity
* Eosphere
* Blacklusion
* token gamer
* Neftybloks

Security checks include:

- **Domain scan to identify unknown subdomains.** Each DNS record created, used or unused can be discovered and this very often reveals hidden services running that are not entirely secured.
- **Nmap scan of all ports and services attached.** We perform a full TCP & UDP scan of all ports (0-65535) and try and identify the version of the software running behind the port. Once we extrapolate the version we can then feed that into multiple public exploit databases to identify any known exploits. We use both automated (nuclei) and manual checks. **We are also a contributor to Nuclei - https://github.com/projectdiscovery/nuclei/graphs/contributors**
- **OWASP top 10 scan on all web services.** OWASP 10 is continuously updated list that represents a broad consensus about the most critical security risks to web applications. 
- **SSH audit to identify any known issues** on the versions of OpenSSH in use.
- **SSL/TLS audit on HTTPS.** We check certificates and certificate chains for any comprised upstream certificates and or outdated versions of TLS in use.
- **Browsing website using Burp (https://portswigger.net).** Burp is a hackers swiss army knife, which we use to perform all kinds of checks on Guild websites. It also helps us manual verify any of our findings.
- **Brute force directory scanning for any hidden urls and or files.** This check allows us to identify any hidden files of folders running on web servers that may reveal any sensitive information. 
- **Github clone of all repos checking for secrets.** Occasionally important secrets are mistakenly uploaded to github that should knot be known to the public. We utilise two tools, trufflehog & gitDorker to scan the guilds Git repositories for any of these secrets. To ensure maximum coverage these tools scan all of the github history.
- **Javascript vuln scan on websites**, to identify known exploits of any JS libraries in use on public facing sites, this includes scanning atomic and hyperion JS libraries.
- **CMS scans - If a CMS system is used like wordpress**, Drupal or Joomla we also look at the installed plugins to identify any vulnerable plugins. 

It is of the upmost importance our Guilds are secure as they are the gatekeepers to the entire blockchain. I wrote a article last year explaining the importance of guild security.
https://medium.com/sentnl/the-importance-of-guild-security-afb96fa2c63e


**Update**: 

We completed a security audit for EOSarabia and Ledgerwise.

---
### 🔐 Smart Contract Audits	

At Sentnl we provide smart contract audits for EOSIO contracts on WAX.

**Update**: 


---
### 🔗 WaxRaidBot   

**Description:** WAXRaidbot is a powerful Telegram bot designed for the WAX blockchain community, offering both raid coordination and token buy tracking features for memecoins.


#### Features

*Raid Bot for Twitter*
- Coordinate Twitter raids with automatic progress tracking
- Real-time monitoring of likes, retweets, replies, and bookmarks
- Automatic channel locking during raids
- Customizable raid targets
- Progress visualization with coloured GIFs

*Buy Bot for memecoins*
- Real-time tracking of token purchases on wax.fun and Alcor Exchange (once a meme coin moves to Alcor)
- Customizable buy alerts
- Minimum buy amount filtering
- Dynamic emoji indicators based on purchase size
- Direct links to trading pairs

**URL:** https://waxraidbot.sentnl.io

---
### 📝 AI Summary tool	

**Description:** Trawls through the messages of certain  Telegram groups and creates daily summarizations. It also tries to filter the noise by calculating an importance score of messages based on sentiment and engagement.

**URLs:** https://github.com/ankh2054/tldr-summaries


**Update**: 

- We have updated the tool to use the new deepseek-r1 model for summarization.


---
### 🆘 Automated producer unreg tool

**Description:** It monitors our missing blocks API for your mainnet and testnet producers and if missing round(s) detected it will automatically unreg your producer.

**URLS**: https://github.com/ankh2054/unregbot


**Update**: 

- Updated the code to node use NodPulse to obtain healthy hyperion nodes instead of relying on a fix list of nodes.

---
### 🧰 Various community tools	


**Description:** Update JSON on chain to reflect bp.json

**URLS:** https://github.com/ankh2054/updateJSONtochain

**Description:** EOS monitor -  monitors your nodeos and alerts if if there any issues

**URLS:**  https://github.com/ankh2054/eosmonitor

**Description:** Fix Hyperion missing blocks -  A script that automates finding missing blocks in hyperion.

**URLS:**  https://github.com/eosrio/hyperion-history-api/scripts/fix_missing_blocks 
 
**Description:** Connects to the OpenAI API and scans all c++ files in your GitHub repository for EOSIO Smart contract vulnerabilities

**URLS:**  https://github.com/Sentnl/EOSIO-Vulnerability-Scanner 


**Update**: 

No update this month.

---

### 🐳 Docker Images

**Description**: Delphi oracle Docker to more easily run the oracle price feeds and push to chain.

**URLs**: https://github.com/ankh2054/delphioracle

**Description**: Automatically creates snapshots for WAX mainnet and testnet and 

**URLs**: https://github.com/ankh2054/snapshots.sentnl.io, https://github.com/ankh2054/snapshot-service

**Description**: Docker deployment to easily install EOSIO CDT using any version

**URLs**: https://github.com/ankh2054/eosio-cdt

**Update**: 


---

### ⛓ Missing Blocks API

An app that captures missing blocks for Mainnet and Testnet and exposes the information via an API. 
The process also captures any empty blocks on mainnet, with data also accessible via the API.


**Metrics**

Sengine uses the API to display the missed blocks for each guild.

**URL:** 
* https://github.com/ankh2054/missing-blocks
* https://missm.sentnl.io/documentation/static/index.html
* https://misst.sentnl.io/documentation/static/index.html


**Update**: 
- We have updated Fastify and WS libraries on missingblocks to latest stable versions. WS library had a DOS vulnerability that was fixed in the latest version.
- [status.wax.io](https://status.wax.io) is now utilising our missing blocks API to display the missed blocks on the status page.

---

### 📖 Security Wiki	

**Description:** Wiki all about security related to being a block producer. Also contains various examples of using our vulnerability API service, https://vuln.sentnl.io

For example:

* https://wiki.sentnl.io/security/cve-query-api-examples/hyperion-cve-query

**URL:** 

https://wiki.sentnl.io/security


**Update**: 


----
