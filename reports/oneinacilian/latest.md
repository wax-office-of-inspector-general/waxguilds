### <ins>General</ins>

![oiac-logo](https://user-images.githubusercontent.com/89456085/136773956-b263025a-424d-4995-b55a-5d835e98632c.png)

|  |  |
| --- | --- |
| Website | https://www.oiac.io |
| Contact | cillian@oiac.io |
| bp.json (mainnet) | https://www.oiac.io/wax.json |
| bp.json (testnet) | https://www.oiac.io/waxtest.json |
| producer (mainnet) | oneinacilian |
| producer (testnet) | oneinacilian |
| Guild Jurisdiction | London |

### <ins>October 2024 Update</ins>
We are pleased to provide an update on the latest developments and contributions from Oneinacilian to the WAX blockchain ecosystem. 

### <ins>Noteworthy</ins>
Since our last update we have introduced Hyperion full snapshots to support synchronisation and backup needs, as well as a Validator Checker Utility to assist in tracking key OIG portals for downtime or disruptions. Additionally, we have addressed recent challenges in block production to maintain the stability and integrity of our services.

During the evaluation period, 81 blocks were missed, which impacted our recent technical evaluation score. After investigating the issue, it was identified and promptly rectified to ensure it does not recur. We remain committed to maintaining high standards of service and will continue to monitor our infrastructure closely to avoid further disruptions.

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [] | [x] | [x] | [x] | [x] | [x] |  [x] |
| - | 3610553 | 269885 | 387068 | 48094 |  46993 |


### <ins>New Service Offering: Hyperion Full Snapshots</ins>
We are now hosting Hyperion full snapshots via the following domain:
https://hyperionmainsnaps.oiac.io/

 * Purpose: These full snapshots assist developers and block producers by providing rapid synchronisation and a reliable backup of Hyperion data.
 * Frequency: Hosted and updated regularly to ensure timely availability for users.
This service reflects our continued commitment to offering high-quality infrastructure support for the WAX blockchain.

### <ins>New Service Offering: Validator Checker Utility</ins>
At Oneinacillian, we understand the importance of tracking validator portals for downtime and missed events. While most guilds monitor their own services, keeping a frequent eye on the health of key portals is crucial.

To support the WAX ecosystem, we are excited to introduce our new Validator Checker Utility. This tool monitors the Sengine, LedgerWise, and ValidationCore portals, detecting any changes or potential disruptions and reporting them through Prometheus via a Prometheus gateway.

 * Repository: [Validator Checker Utility](https://github.com/oneinacillian/validatorchecker)
 * Documentation: Follow the README for setup instructions.
We intend to share this utility with other guilds imminently, as we believe it will enhance the monitoring and reliability of the WAX blockchain network. As this is the first release, we will ensure it stays up to date with any changes to the monitored portals and welcome feedback to improve the tool further.

### <ins>Docker Project</ins>

https://github.com/oneinacillian/docker_compose_autobuilds  

**Update**: 
We have made several improvements to our Docker project, including:

 * Control Hyperion versions as a variable to allow seamless testing and switching between different versions.
 * Control Elasticsearch memory parameters through variable settings for optimal performance.
 * Test and validate the latest Hyperion release (3.3.10-1) within the stack, confirmed by successful indexer jobs and API health checks.
 * Customise nodeos deployments with dynamic modifications to adapt to different startup environments, ensuring greater flexibility in version control. 

---

### <ins>Telegram Bot for Block Producer Notifications </ins>

**Update**: 
No major update this period

---

### <ins>Full State History Snapshots</ins>

**Update**: 
No major update this period

* Repository URL: https://stateblocks.oiac.io
* Frequency: 2 Weekly
* Purpose: These snapshots are essential for maintaining a complete and accurate history of the blockchain state, facilitating development and ensuring data integrity.

---

### <ins>Full Blocks Snapshots</ins>

**Update**: 
No major update this period

* Repository URL: https://stateblocks.oiac.io
* Frequency: 2 Weekly
* Purpose: These snapshots are crucial for developers and block producers to have a comprehensive record of all blocks, ensuring seamless synchronisation and recovery processes.

----

### <ins>LightAPI Services</ins>

**Update**:
No major update this period

* Repository URL: https://light-api.oiac.io
* Purpose: These services offer lightweight and efficient access to blockchain data, supporting various applications and integrations.

---

### <ins>IPFS Gateway Services</ins>

**Update**:
No major update this period

* Repository URL: [https://light-api.oiac.io](https://ipfs-gateway.oiac.io)
* Purpose: The IPFS gateway provides decentralised access to blockchain-related files and data, ensuring reliable and fast retrieval for DApps, NFTs, and other decentralised applications.

---

### <ins>Marketing</ins>

None at this point

### <ins>Backups </ins>

None at this point

### <ins>Feedback to OIG</ins>

None at this point

----

Thank you for considering our update. Oneinacillian remains committed to supporting the WAX blockchain through reliable infrastructure and innovative solutions. Our latest offerings—Hyperion full snapshots and the Validator Checker Utility—are designed to provide valuable tools for the community, further enhancing transparency and performance. We look forward to receiving feedback from the OIG and the wider community as we continue to refine our services.
