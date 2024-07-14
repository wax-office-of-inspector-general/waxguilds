### <ins>General</ins>

|  |  |
| --- | --- |
| Website | https://eosphere.io |
| Contact | info@eosphere.io |
| bp.json (mainnet) | https://eosphere.io/wax/bp.json |
| bp.json (testnet) | https://eosphere.io/waxtestnet/bp.json |
| producer (mainnet) | eosphereiobp |
| producer (testnet) | eosphereiobp |
| Guild Jurisdiction | Australia (AU) |

### <ins>Noteworthy</ins>
Our WAX Mainnet Hyperion Service has been migrated to our Perth DC. The primary reason is the cost of Enterprise NVMe SSD’s, it’s more cost effective and easier to procure our own hardware in our own DC rather than lease from a bare metal provider. Interestingly we have provisioned the exact same Dell 740XD server in our Perth DC, so queries appear to be just as fast as before.

Our Perth DC has started handling production loads and appears to working well.

Our Store-1 server that hosts our public Hyperion Snapshots was extremely utilised this last month, I don’t think I have ever seen 1Gb/s of internet traffic for a single server on our infrastructure before.

![image](https://github.com/Rossco99/waxguilds/assets/12730423/237ca2b2-ac07-43fd-bbe8-d6c1ed24f2bb)

Our upgrades to v5.0.1wax01 are ongoing.

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [ ] | [x] | [x] | [x] | [ ] | [ ] |  [ ] |
| - | - | - | - | ~x req |  ~y req |

### <ins>Contributions</ins>

### HeadsUp - Monitoring and Alerts

**URLs**: https://github.com/eosphere/HeadsUp-Monitoring-Alerts 

**Update**: 
In this last period, the HeadsUp Team have been testing the release candidate that will be used as final for the v0.1 Beta as all phase features have now been incorporated.

As you have heard us mention before we have found bugs and tricky gremlins that needed to be taken care of.

However we are in the home straight, with only one issue remaining.. we have found a bug with the Ingestor disconnecting and reconnecting.

Mark is on the case, we suspect that it has to do with with an unexpected API response from a node that was experiencing networking issues.. the ingestor didn't know what to do with this response.

We expect to release v0.1 in the coming week.

Please join our Telegram Group (https://t.me/headsup_monitoring_alerts) for the latest release information as well as github links and instructions .

---

### WAX Technical How To

**URLs**: https://medium.com/eosphere/wax-technical-how-to/home

**Update**: 
If you are technically curious or interested in running services on the WAX network, be sure to have a look at our WAX Technical How To series published monthly in the EOSphere Blog on Medium.

These guides are being added to the WAX Developer GitHub.

This month we added another guide to our WAX Hyperion Full History Series, that details setting up Data Tiering in your Elasticsearch cluster to make more effective use of your hardware resources.

Using Data Tiers with WAX Hyperion Full History
https://medium.com/eosphere/wax-technical-how-to-15-10-030540d30a23

---

### Commercial API Services

**URLs**: https://eosphere.io/services, https://developer.wax.io/operate/wax-api-services

**Update**:
EOSphere offer Commercial Solutions for WAX Services.

We are able to host or operate your own infrastructure for the following:
- Hyperion Full History
- Atomic API
- WAX Protocol Network API

At this point, we unfortunately aren’t able to provide this service to other WAX Guilds. However, you are welcome to use our ElasticSearch Snapshot Repository API.

Please contact us at info@eosphere.io to discuss your needs so we can craft a suitable solution for you.

---

### Cooperation on the WAX Developer Portal

**URLs**: https://developer.wax.io, https://developer.wax.io/operate/wax-infrastructure

**Update**: 
We recently added a comprehensive guide on how to visualise metrics from a WAX Load Balancer using Elasticstack

---

### Metrics

Period: May 15th, 2024 - May 29th 2024 (2 Weeks)

**Infrastructre Stats**:
- 44.32.51% of Requests are Normal API, 55.69% are Hyperion API (Results are a bit skewed this last period due to the “Too Many Requests” 429 policy being triggered. Over 193 Million requests hit this policy this last two weeks.)
- 12 to 22 Million HTTP "200"`s served per day
- 348 Million Requests this last two weeks
- Typically we have around 2Mil WAX Mainnet Successful Push Actions per day, however the data is also skewed due to the 429 policy.
- 2 Million Requests served by our Atomic API per day

**Medium Stats**:
![image](https://github.com/Rossco99/waxguilds/assets/12730423/19fd8509-3909-4570-8990-f8b4742a6216)


**Public Facing Dashboard**

We provide transparency of our service availability through our **WAX Public Facing Service Dashboard** https://wax.status.eosphere.io/

![image](https://github.com/Rossco99/waxguilds/assets/12730423/a2a03eae-7640-47cd-b399-5fb9b871d78b)

As can be seen , we have experienced a few network challenges this last 24 hours.

This rolling 2 hour view is built out of constructed queries from multiple global regions (California, Montreal, Frankfurt, Singapore, Sydney) and will provide a quick and realistic view on our WAX public services status.

---

### <ins>Marketing</ins>

Initiative A: Regular Community Update

We publish our Monthly community update regularly in the EOSphere Blog and advertise across our applicable socials.

Here is May -> https://medium.com/eosphere/eosphere-guild-may-24-update-23d3b577474f

TELEGRAM | MEDIUM | YOUTUBE | FACEBOOK | TWITTER | INSTAGRAM

### <ins>Backups </ins>
URL: https://snapshots.eosphere.io/

| Snapshot | Blocks Log | State History | Elastic Search | AA API |
|--------|--------|--------|--------|--------|
| [x] | [x] | [x] | [x] | [x] |


### <ins>Feedback to OIG</ins>
None at this time, good luck with the election @rakeden

----

