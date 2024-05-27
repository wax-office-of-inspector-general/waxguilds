### <ins>General</ins>

|  |  |
| --- | --- |
| Website | https://eosrio.io/ |
| Contact | founders@eosrio.io |
| bp.json (mainnet) | https://eosrio.io/wax.json |
| bp.json (testnet) | https://eosrio.io/wax-test.json |
| producer (mainnet) | eosriobrazil |
| producer (testnet) | eosriobrazil |
| Guild Jurisdiction | Brazil |

### <ins>Noteworthy</ins>

We had a downtime in the testnet Hyperion due to a physical drive failure. The drive was replaced, and we didn’t lose any data.

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [x] | [ ] | [x] | [x] | [ ] |  [ ] |
| - | - | - | - | ~x req | ~y req |

### <ins>Contributions</ins>

### Hyperion

**URLs**: https://github.com/eosrio/hyperion-history-api/releases/tag/v3.3.10-1

**Update**:
Updated to version 3.3.10, which includes important security patches, updated node-Abieos to use the latest Abieos from AntelopeIO/abieos, added get_filters API to show active filters in a given Hyperion API. 

Other than that we keep on supporting the community mainly through the telegram channel.

**Metrics**
71 forks of the Github Repository


---

### RS Abieos

**URLs**: https://medium.com/eos-rio/introducing-rs-abieos-a-high-performance-rust-wrapper-for-abieos-1db47fa95b00, https://github.com/eosrio/rs-abieos

**Update**:
EOS Rio has just launched rs_abieos on April 11th, a Rust Wrapper for Abieos focused on improving (de)serialization performance and solving the memory restrictions on Javascript for large-size tasks. The team is still running the benchmark tests, but initial tests have found up to 263x faster (de)serialization depending on the use case, we will publish the Github with the benchmark tests soon.


---

### Node Abieos

**URLs**: https://github.com/eosrio/node-abieos/releases/tag/v3.3.0

**Update**: Build system refactor to use the vanilla upstream Abieos library. This allows us to keep up with the latest changes and improvements from AntelopeIO and have a more stable and reliable library for the community.

**Metrics**
211 downloads last month. 4011 downloads all time.


---

### BP JSON

**URLs**: https://github.com/eosrio/bp-info-standard/releases/tag/v1.0.4

**Update**: We have created and keep maintaining the BP JSON standard for BPs to report their info. See changelogs for the latest changes, one of them being 'node.full' required on node params as per the most recent OIG guidelines requirement.
 

---
### Fleet SHiP Router

**Update**:
EOS Rio is working on a fully dedicated reverse proxy for the SHiP Protocol. Commonly used reverse proxies like HAProxy and NGINX can only work at the connection level, so if a server drops the connection with the client, the client will be reconnected with another backend server. This requires the developer to implement the reconnection handling and ensure that the data from the next backend is also valid for the previous request. 

Our approach was to develop a reverse proxy, the Fleet SHiP Router, that understands the SHiP protocol. It will keep the client-side connection alive in the case of a backend server drop. Another useful feature is that it can select the proper upstream depending on the request, for example, multiple SHiP servers where not all of them have full history. If the request was made for a range that a server doesn't have, it will try to fetch from another server before replying to the user.

This will significantly improve developers' experience, considering the current need to repeat the request or have the application actively manage it.

Launch is expected in Q2/2024.


---

### <ins>Marketing</ins>

Initiative A: wax-brasil management - EOS Rio is responsible for managing the wax-brasil discord channel. With more than 4.500 members in the channel.

### <ins>Backups </ins>
URL: 

| Snapshot | Blocks Log | State History | Elastic Search | AA API |
|--------|--------|--------|--------|--------|
| [ ] | [ ] | [ ] | [ ] | [ ] |


### <ins>Feedback to OIG</ins>
Keep up the great work! We would like to suggest less frequent updates on the guidelines. In our opinion, having stable guidelines for a while and then changes that are better discussed every 3 cycles for example can be more productive than changing it every cycle. 

----
