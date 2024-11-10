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
Our Canada DC disk array that was hosting our WAX Mainnet Hyperion ES Snapshots has been repaired and we 70% of the way through uploading the 30TB snapshot. Hyperion ES Snapshots are still being hosted in our Perth DC for now.

We had an upstream internet outage in Perth for 90mins on the 7th/8th October due to an environmental issue experienced by our provider. All services restored successfully after the issue was remediated.

HeadsUp v0.1.6 was released.

Be sure to check out the public showcase of HeadsUp to get a feel for the platforms capability here -> https://headsup.eosphere.io/

We have also started the process of refreshing our servers in Sydney, currently waiting on hardware.

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [ ] | [x] | [x] | [x] | [ ] | [ ] |  [ ] |
| - | - | - | - | ~x req |  ~y req |

### <ins>Contributions</ins>

### HeadsUp - Monitoring and Alerts

**URLs**: https://github.com/eosphere/HeadsUp-Monitoring-Alerts 

**Update**: 

The EOSphere Team have just released HeadsUp v1.6.0 ,this release includes a multitude of bug fixes and new features:

- Removed the old buggy metric History API Connects and replaced it with a metric for ‘Last Indexed Action’. **This is excellent to track whether your indexer is indexing actions in the indexed block.**
- Fixed spelling of Address in Add Node window
- Fixed deleting of a chain deletes associated alerts
- Fixed an error showing that alerts had been active for 54 years
- Can now change the type of a node after creating it, without needing to delete and recreate
- Latency shows as N/A when node not connected
- Reminders for node not connected fixed
- Fixed an error causing ‘create node’ button to be clicked twice before creating node on some browsers
- Fixed an error causing default monitoring and alerting settings not to be applied upon creation
- Updated the silencing module to work for connects and latency alerts which take a URL parameter
- Added node sort_order to each row on the chain page node tables
- When creating a new node, the default value for sort_order reflects the next number up from the others in the table
- Changed the vote rank alert to be ‘alert me when vote rank changes’, allowing users to disable vote rank notifications by turning this off

Take a look at the public showcase -> https://headsup.eosphere.io/

Please join our Telegram Group (https://t.me/headsup_monitoring_alerts) for the latest release information as well as github links and instructions .

---

### WAX Technical How To

**URLs**: https://medium.com/eosphere/wax-technical-how-to/home

**Update**: 
If you are technically curious or interested in running services on the WAX network, be sure to have a look at our WAX Technical How To series published monthly in the EOSphere Blog on Medium.

These guides are being added to the WAX Developer GitHub.

This month we created a guide that covers how to configure and start receiving HeadsUp Alerts through Telegram using the Bot API.

**Configure HeadsUp Telegram Alerts**

https://medium.com/eosphere/wax-technical-how-to-25-1cb831003433

---

### Cooperation on the WAX Developer Portal

**URLs**: https://developer.wax.io, https://developer.wax.io/operate/wax-infrastructure

**Update**: 

We recently added an article on ZFS deduplication

---

### Metrics

Deeper statistics are available in our Regular Community Update.

Period: September 26th 2024 - October 10th 2024 (2 Weeks)

**Infrastructre Stats**:
- 51.93% of Requests are Normal API, 48.07% are Hyperion API
- 8 to 16 Million HTTP "200"`s served per day
- 280 Million Requests this last two weeks
- We provide for around 1 to 2Mil WAX Mainnet Successful Push Actions per day.
- 960k Requests served by our Atomic API per day

**Medium Stats**:

![image](https://github.com/user-attachments/assets/97f2b4c5-e959-4d3a-b0ee-33799aac68a7)

![image](https://github.com/user-attachments/assets/a56d7bae-83ab-4dcc-acce-ed38fc8c4f22)

**Public Facing Dashboard**

We provide transparency of our service availability through our **WAX Public Facing Service Dashboard** https://wax.status.eosphere.io/

![image](https://github.com/user-attachments/assets/4a2139bd-a58f-4c6a-b285-5f7e8b54899a)

This rolling 2 hour view is built out of constructed queries from multiple global regions (California, Montreal, Frankfurt, Singapore, Sydney) and will provide a quick and realistic view on our WAX public services status.

---

### <ins>Marketing</ins>

Initiative A: Regular Community Update

We publish our Monthly community update regularly in the EOSphere Blog and advertise across our applicable socials.

Here is October -> https://medium.com/eosphere/eosphere-guild-october-24-update-4de552cf4179

TELEGRAM | MEDIUM | YOUTUBE | FACEBOOK | TWITTER | INSTAGRAM

### <ins>Backups </ins>
URL: https://snapshots.eosphere.io/

| Snapshot | Blocks Log | State History | Elastic Search | AA API |
|--------|--------|--------|--------|--------|
| [x] | [x] | [x] | [x] | [x] |


### <ins>Feedback to OIG</ins>
All good for now thanks.

----
