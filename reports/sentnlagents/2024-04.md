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


### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [x] | [x] | [x] | [x] | [ ] | [ ] |  [ ] |
| - | 4337535 req | 337535 req | 1200000 req | ~x req |  ~y req |


### <ins>Contributions</ins>


### 🔎 Sengine	

**URLs**: https://wax.sengine.co , [https://github.com/ankh2054/oig-portal](https://github.com/ankh2054/oig-portal)


**Update**: 

We had a issue where sengine was marking a hyperion node as up, as it was checking for the latest action within hyperion using /v2/history/get_actions, yet the node's /v2/health was reporting older statistics,  due to the hyperion node proxying /v2/history requests to another hyperion. We have now upgraded the code to check both /v2/health (if available) and /v2/history/get_actions to determine the latest action timestamp.

We have also updated the history check to query a recent transaction as an additional check.



**Metrics**

We had bp.wecan use our manual scan facility 10 times, during the last month. The facility helps guilds to double check their services are up using all the sengine checks, by requesting a on demand scan.

Period:  February 28th, 2024 - April 15th 2024



---

### 🕷 Security Audits	

Every month we perform a security audit for a guild from the list below.

* WAXsweden
* EOSDetroit
* EOSdac
* EOSUSA
* AlohaEOS
* BlokCrafters
* Ledgerwise
* EOSarabia
* EOSRIO
* Eosphere
* Blacklusion
* Tokengamer
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

We completed a security audit for Alohaeos.

---

### 🧰 Various community tools	


* Update JSON on chain to reflect bp.json - script that automatically downloads your guilds JSON from your website and pushes it to chain using greymass producerjson contract using cron. https://github.com/ankh2054/updateJSONtochain

* EOS monitor - We created a EOS node monitoring tool that monitors your nodeos and alerts if if there any issues.- https://github.com/ankh2054/eosmonitor

* Hyperion missing blocks feature - A script that automates finding missing blocks in hyperion - https://github.com/eosrio/hyperion-history-api/scripts/fix_missing_blocks 

* API service to allow Guilds to search for all latest security vulnerabilities related to their infrastructure - https://vuln.sentnl.io

* This is a tool that connects to the OpenAI API and scans all c++ files in your GitHub repository for EOSIO Smart contract vulnerabilities. - https://github.com/Sentnl/EOSIO-Vulnerability-Scanner


**Update**: 

No update this month.


---

### 🐳 Docker Images

**URLs**:

* Delphi oracle Docker - We created a docker image to easily allow new Guilds get setup with pushing pricing feeds to the oracle.  https://github.com/ankh2054/delphioracle

* Snapshot service Docker and automated website - We created a docker image and ReactJS frontend to automate the setup of a snapshot service for WAX mainnet and testnet.
* https://github.com/ankh2054/snapshots.sentnl.io, https://github.com/ankh2054/snapshot-service


**Update**: 

No update this month.

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


---

### 📖 Security Wiki	

Wiki all about security related to being a block producer. Also contains various examples of using our vulnerability API service, https://vuln.sentnl.io

For example:

* https://wiki.sentnl.io/security/cve-query-api-examples/hyperion-cve-query

**URL:** 

https://wiki.sentnl.io/security



**Update**: 

No update this month.


### <ins>Marketing</ins>

[Describe your guilds marketing initatives. List only initiatives inside the last review period.]


### <ins>Backups </ins>

| Snapshot | Blocks Log | State History | Elastic Search | AA API |
|--------|--------|--------|--------|--------|
| [ ] | [ ] | [ ] | [ ] | [ ] |


### <ins>Feedback to OIG</ins>
*[valuable feedback for the WAX OIG around the topics governance, guidelines, ...]*


----
