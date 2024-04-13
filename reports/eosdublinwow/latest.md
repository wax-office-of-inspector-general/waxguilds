### <ins>General</ins>

|  |  |
| --- | --- |
| Website | https://eosdublin.com |
| Contact | hello@eosdublin.com |
| bp.json (mainnet) | https://eosdublin.com/wax.json |
| bp.json (testnet) | https://eosdublin.com/wax-testnet.json |
| producer (mainnet) | eosdublinwow |
| producer (testnet) | eosdublinwow |
| Guild Jurisdiction | Ireland |

### <ins>Noteworthy</ins>
We upgraded Hyperion infrastructure by adding a new server, with another 10 TB of NVMe storage, to the existing elasticsearch cluster. Some shards were moved to the new server to balance the storage.

During the process of moving the shards, the elasticsearch cluster was marked as "Yellow" which was picked up as downtime by the monitoring services (https://wax.validationcore.io/stats/guild/eosdublinwow).

The partial downtime (~1D) was reported in advance in the "Wax Guilds Public" telegram channel, and noted by Kaefer. 

### <ins>API Services</ins>

| Chain API | History (full) | History (testnet - full) | AA API |
|---|---|---|---|
| [x] | [x] | [x] | [x] |
| - | - | - | - |

*Metrics to be tracked*

### <ins>Contributions</ins>

### 1. Wax School Project 
**URLs**:
- [wax.school - main website](https://wax.school)
- [Wax School on Medium](https://medium.com/@waxblockchain)
- [Wax School on Twitter/X](https://twitter.com/waxschool_)
- [Wax School on Youtube](https://www.youtube.com/channel/UCwV0PjHGLr3jzwkHTLxwlpg)


New Medium articles added:
 - [WAX School Top 3 Highlights 05/04/24–11/04/24](https://medium.com/@waxblockchain/wax-school-top-3-highlights-05-04-24-11-04-24-c3b5f6e21db0)
 - [WAX School Top 3 Highlights 22/03/24–04/04/24](https://medium.com/@waxblockchain/wax-school-top-3-highlights-22-03-24-04-04-24-c76ebb778cdd)
 - [WAX x Amazon AWS](https://medium.com/@waxblockchain/wax-x-amazon-aws-cb3ad4022618)
 - [WAX School Top 3 Highlights 07/03/24–21/03/24](https://medium.com/@waxblockchain/wax-school-top-3-highlights-07-03-24-21-03-24-4b364e1ffade)


**Metrics**

On Twitter/X ~6000 new impressions


---
### 2. Antelope Java SDK

**URLs**:
- Antelope Java SDK [https://github.com/mcicu/antelope-java-sdk](https://github.com/mcicu/antelope-java-sdk) (main library)
- Softkey signature provider [https://github.com/mcicu/antelope-java-softkey-signature-provider](https://github.com/mcicu/antelope-java-softkey-signature-provider) 
- RPC provider [https://github.com/mcicu/antelope-java-rpc-provider](https://github.com/mcicu/antelope-java-rpc-provider)
- ABIEOS serialization provider [https://github.com/mcicu/antelope-java-abieos-serialization-provider](https://github.com/mcicu/antelope-java-abieos-serialization-provider)
- Demo project integrating the libraries
[https://github.com/mcicu/antelope-java-sdk-demo](https://github.com/mcicu/antelope-java-sdk-demo)

Since the last guild report we updated the demo project to contain examples on how to purchase blockchain resources (ram and cpu).

We are in active discussions to have the next release under the official antelope.io namespace.

**Metrics**

*Untracked at this point*

---

### <ins>Marketing</ins>
Done through the Wax School Project, we got around ~6000 new impressions on Twitter/X.

### <ins>Backups </ins>

| Snapshot | Blocks Log | State History | Elastic Search | AA API |
|--------|--------|--------|--------|--------|
| [ ] | [ ] | [ ] | [ ] | [ ] |


### <ins>Feedback to OIG</ins>
*None currently*

----

