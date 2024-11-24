![Blacklusion Logo](https://blacklusion.com/resources/blacklusion_logo_192.png)

### <ins>General</ins>

|  |                                         |
| --- |-----------------------------------------|
| Website | https://blacklusion.io                  |
| Contact | hello@blacklusion.com                   |
| bp.json (mainnet) | https://blacklusion.io/wax.json         |
| bp.json (testnet) | https://blacklusion.io/wax-testnet.json |
| producer (mainnet) | blacklusionx                            |
| producer (testnet) | blacklusionx                            |
| Guild Jurisdiction | Munich, Germany                         |

### <ins>Noteworthy</ins>

Some "issues" related to the FIO Blockchain consumed a lot of my time this month. I will not go into detail here in this report, but essentially we had an unplanned case come up, that urgently required my attention.

Our testnet atomic node experienced some issues this month. We resolved the issue.

### <ins>API Services</ins>
| History (partial) | History (full) | History (testnet) | AA API     | Light-API | IPFS      |
|-------------------|--------|-------------------|------------|-----------|-----------|
| [ ]               | [ ] | [x]               | [x]        | [ ]       | [x]       |
| -                 | - | not tracked       | 1.68mio req | -         | not tracked |


### <ins>Contributions</ins>

### Validationcore

**URLs**: https://validationcore.io

**List of SCs**: -

**Update**:
- Maintenance
**Metrics**

Period:
- Huge Performance Improvements: This month we have developed & deployed changes for the frontend and APIs of the validationcore. Essentially calculating the statistics of a single guild or the overview of all guilds are the heaviest operations in the whole system. When we designed the queries a while back, the amount of data was a lot less. With the new queries, we ensure that the statistics are only calculated if absolutely necessary. Additionally, we have adjusted the architecture to make the all guilds query more easily cachable. When the user now loads a session (opens validationcore for the first time), the guild overview table only has to be calculated a single time, ensuring that all subsequent queries are instant. As a result our whole system as become a lot less "clogged", speeding up all queries. We will keep an eye on the current version and possibly create a replica database on a beefier server to ensure a snappy performance in the future.
- Validations load Instantly: The biggest difference is noticeable when loading the validation of a guild (hence no statistics). These queries now load in under 1 second
- We have gotten requests to add additional validations e.g. for IPFS. It is on our roadmap

Stats: Not tracked, but it is safe to say the validationcore is an essential part of the OIG evaluations itself :)

---

### illusive GG

**URLs**: https://illusive.gg

**List of SCs**: illusiveauth

**Update**:
- Maintenance
**Metrics**

Period: 15. September 2024 - 15 October 2024

Stats: 84 unique users

---

### OneApi

**URLs**: https://wax.oneapi.dev/v1/chain/get_info

**List of SCs**: -

**Update**:
- Upkeep

**Metrics**


Period: 15. September 2024 - 15 October 2024

Stats: 33.73k unique visitors |1.96M total requests (based on Cloudflare stats)

---

### Prometheus Exporter

**URLs**: https://github.com/Blacklusion/eosio-prometheus-exporter

**List of SCs**: -

**Update**: -

**Metrics**

Period: -

Stats: Other guilds are using our exporters. We do not have exact numbers, since it is an open-source repo and not a hosted service

---

### Blacklusion Pager
**URLs**: https://t.me/WaxPagerBot

**Update**: Operational

**Metrics**

Period: 15. September 2024 - 15. October 2024

Stats: 8 subscribers. The number by itself, does not sound impressive, but keep in mind that this tool is targeted towards guild operators. Taking this into account, a decent percentage of all guilds use the bot to monitor their infrastructure.


---


### <ins>Marketing</ins>

none

### <ins>Backups </ins>
URL: -

| Snapshot | Blocks Log | State History | Elastic Search | AA API |
|----------|------------|---------------|--------|--------|
| [ ]      | [ ]        | [ ]           | [ ] | [ ] |


### <ins>Feedback to OIG</ins>

There are a lot of calls happening recently and the timelines for the periods are sometimes tricky to find. Make a calendar we can subscribe to ✨

----

