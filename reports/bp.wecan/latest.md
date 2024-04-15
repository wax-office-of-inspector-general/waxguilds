### <ins>General</ins>

|  |  |
| --- | --- |
| Website | https://wecan.dev/ |
| Contact | contact@wecan.dev |
| bp.json (mainnet) | https://wecan.dev/wax.json |
| bp.json (testnet) | https://wecan.dev/waxtest.json |
| producer (mainnet) | bp.wecan |
| producer (testnet) | wecan |
| Guild Jurisdiction | Ukraine (UA) |

### <ins>Noteworthy</ins>

We have faced a scripting bot attack on Hyperion Mainnet Public endpoint in between April 10-12 which was fended off successfully.
![image](https://github.com/We-Can-dev/reports/assets/89981724/c5b640f9-d39a-4da4-aa53-47a31e5f4e73)

On the other notes of Sys/Tech OPS work:
1. WIP on clustered deployment of NodeOS
2. WIP Datadog monitoring lib suite
3. WIP IBC

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [ ] | [x] | [x] | [x] | [x] | [x] |  [x] |
| - | 33M req/week | 60K req/week | 6.75M req/week | 43K req/week |  108K req/week |

WeCan status page: [https://status.wecan.dev/](https://status.wecan.dev/)

### <ins>Contributions</ins>

---
### R-Planet MMO Strategy game (Early Access Alpha) (rplainet.io alchemy game)
* Status: **in development**

**URLs:**
* Website: https://rplanet.io;
           https://rplanet.app/;
* App: https://play.google.com/store/apps/details?id=dev.wecan.rplanet; 
       https://apps.apple.com/es/app/r-planet/id1625678981;

**List of SCs**: rplanet, a.rplanet, (tbd)

**Update**:

The development of the R-Planet game is actively ongoing with various tasks at different stages of completion. The team is making progress on both design and development fronts. Continuous collaboration and effort are being put forth to enhance the gaming experience and meet user expectations.

The tasks listed below indicate ongoing development efforts and completed tasks within the project:


1. Implemented Alliance Invitations
    - Enabled sending alliance invitations
    - Added a button to player info for inviting to an alliance.
2. Refined Combat Formula for Weak Players
3. Implemented Swiping for Navigation (Users can now navigate through pages using swiping gestures, enhancing the user experience)
4. Implemented Alliance Unions: 
    - Alliance administrators are now able to manage alliances, declare enemies, and assign map colors (green for their own alliance, blue for friendly alliances, and red for enemies). 
5. Enhanced Combat Attack Confirmation
    - Implemented a confirmation dialog before sending combat attacks, ensuring player intention. 
6. Implemented View Mode for the Game
    - Implemented a view mode for the game where chat and action buttons are disabled upon entering
    - Players are not required to choose a faction upon entering the game in this mode.

Our players have received assistance from our moderators across various social platforms such as Discord, Twitter, and Telegram chats.

R-Planet is set to participate in the Top web3 conference in Dubai - https://web3dubai.io/. 
![image](https://github.com/We-Can-dev/reports/assets/89981724/c2a29f5c-dd4e-4f3c-8738-0643292a5721)

![image](https://github.com/We-Can-dev/reports/assets/89981724/92ed6962-4a06-4539-8e9d-5da1a504344e)

R-Planet is set to participate in April Fest by Spinnia
![image](https://github.com/We-Can-dev/reports/assets/89981724/8f6907f6-4f4f-4529-9afe-86bead47d55d)


**Metrics**

Period: March 15th, 2024 - April 15th 2024

Stats:

![image](https://github.com/We-Can-dev/reports/assets/89981724/321e4d64-c21f-4e89-b26c-e9ffd22fe754)
![image](https://github.com/We-Can-dev/reports/assets/89981724/0ed5005b-148c-44d3-b4df-4497e538a449)

---

### Prospectors
* Status: **release**

**URLs:**
* Website: https://prospectors.io, 
https://play.prospectors.io, 
https://wax.prospectors.io, 
https://grandland.prospectors.io

**List of SCs**: a.wallet, b.wallet  

**Update**: 

We actively engage with players through engaging posts on Prospectors' social media platforms such as Twitter, Discord, and Telegram channels. 
Our aim is to encourage them to participate by replying, communicating with other players, and visiting the game more frequently. 

Updated wax bank shortcut:

![image](https://github.com/We-Can-dev/reports/assets/89981724/e59e13a9-aee3-4414-bf99-df9253440fa2)

Also, we’ve been answering and helping players in Discord and Telegram chats and the Zendesk system all the time.  

**Metrics**

Period: March 15th, 2024 - April 15th 2024

Stats:

Prospectors world instances:
![image](https://github.com/We-Can-dev/reports/assets/89981724/dd2bf99b-f6f7-4cfe-8cc6-ca4ddf18d667)
![image](https://github.com/We-Can-dev/reports/assets/89981724/28d0c30f-4b65-48f3-afda-e18e1091d405)
![image](https://github.com/We-Can-dev/reports/assets/89981724/7c0b2c9b-7785-42e6-9c0d-9b753e803459)

---
### Pepper Stake
* Status: **release**
* Website: https://pepperstake.online/;
https://testnet.pepperstake.online/

**Metrics**

[report relevant metrics and metric period...]

Period: January 10th, 2024 - February 27th 2024

Stats: UAW, TVL, on-chain events, engagement time, user retention, onboarded users
---
### WAXSCAN
**WAX Block Explorer**
* Status: **release/ in development**
* Website: https://waxscan.wecan.dev/; 
https://waxscan-testnet.wecan.dev/

**Metrics**

[report relevant metrics and metric period...]

Period: January 10th, 2024 - February 27th 2024

Stats: UAW, TVL, on-chain events, engagement time, user retention, onboarded users
---
### Docker containers for WAX ecosystem
We keep building and testing latest versions of WAX pubilc infra components:
* Nodeos - https://hub.docker.com/r/wecandev/waxblockchain
* Delphioracle Pusher - https://hub.docker.com/r/wecandev/delphioracle-pusher
* Hyperion - https://hub.docker.com/r/wecandev/wax-hyperion-api
* AA - https://hub.docker.com/r/wecandev/eosio-contract-api-server
* Light-API - https://backup.wecan.dev/wax/light_api/
https://hub.docker.com/r/wecandev/eosio-lightapi-wsapi
https://hub.docker.com/r/wecandev/eosio-lightapi-dbwriter
https://hub.docker.com/r/wecandev/eosio-lightapi-chronicle
---

### <ins>Backups </ins>
URL: [https://backup.wecan.dev/](https://backup.wecan.dev/)

| Snapshot | Blocks Log | State History | Elastic Search | AA API | Light-API |
|--------|--------|--------|--------|--------|-------|
| [x] | [x] | [x] | [x] | [x] | [x] |


### <ins>Feedback to OIG</ins>

Keep up the good work.

----

