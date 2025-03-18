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

### <ins>February 2025 Update</ins>
We are pleased to provide an update on the latest developments and contributions from Oneinacilian to the WAX blockchain ecosystem. 

### <ins>Noteworthy</ins>
Since our last update we have made progress on two key initiatives: We've implemented significant IPFS enhancements to improve content availability, distribution, and system performance.

During the most recent technical evaluation, we encountered an issue with missing blocks due to a clock misalignment. This was promptly identified and has since been fully rectified.

Our existing monitoring was focused on round performance rather than individual blocks, which meant the issue was not detected as early as it could have been. In response, we have enhanced our monitoring systems to track block production more granularly, ensuring faster detection and resolution of similar issues in the future.

We remain committed to maintaining high reliability and performance standards within the WAX network.

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [] | [x] | [x] | [x] | [x] | [x] |  [x] |
| - | 3338101 | 345127 | 365477 | 47937 |  47493 |


### <ins> IPFS Deployment Offering</ins>
Since the last update, we have developed and deployed a new IPFS hosting solution with enhanced features. This deployment integrates Prometheus and Grafana for advanced monitoring and performance tracking, including pre-configured dashboards for seamless adoption. The solution is designed to simplify the management and scalability of IPFS services while maintaining flexibility through Docker Compose-based deployment.

Update on IPFS Deploy
We are pleased to announce enhancements to our IPFS Deploy offering, with the addition of image and video resizing capabilities. These new features have been seamlessly integrated into the original codebase, allowing users to efficiently resize images and videos directly within the deployment environment.

This functionality enhances the versatility of our IPFS services, catering to a broader range of use cases, particularly for applications requiring optimised multimedia handling.

As always, the updated codebase is available for review, and we welcome feedback from the community to further improve this offering.
We have now switched our own IPFS deployment to https://github.com/oneinacillian/ipfs-deploy and successfully test the resizing of content through our IPFS hosted gateway on WAX: https://ipfs-gateway.oiac.io and will continue to monitor the stability.

IPFS Enhancements (February 2025)

We have implemented several key improvements to enhance the reliability, performance, and scalability of our IPFS infrastructure:

- **Content Availability Monitoring** – Added a replication endpoint to track content availability across the network.  
- **Content Distribution & Redundancy** – Introduced a dedicated content distribution endpoint to improve replication and ensure redundancy across the IPFS network.  
- **Protocol Upgrades** – Upgraded to Kubo v0.27.0, enhancing the routing system for better content discovery and distribution.  
- **Performance Optimisations** – Updated to Node.js 20.x LTS, delivering significant performance gains and improved memory management.  
- **Reproducible Builds** – Locked NPM dependencies to maintain consistency across different environments.  
- **Provider Discovery Improvements** – Enhanced provider discovery mechanisms for more reliable content replication and tracking.  
- **System Maintenance & Troubleshooting** – Improved logging and error handling to streamline system monitoring and issue resolution.  

These upgrades reinforce our commitment to maintaining a robust and efficient infrastructure for the WAX ecosystem.


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
We have made several updates and enhancements to the Auto-Build solution, improving its functionality, monitoring capabilities, and ease of use. Below is a summary of the changes:

## 1. Improved Navigation and Documentation
- Updated the README for easier navigation, including detailed descriptions of changes and implementations.

## 2. Nodeos Monitoring
- Built a custom exporter for chain data (nodeos).
- Created a managed dashboard to monitor chain information.

## 3. Hyperion Monitoring
- Added exporters for RabbitMQ, Redis, and Elasticsearch.
- Integrated Prometheus and Grafana services into the compose process during Python script execution.
- Developed managed dashboards for Redis, RabbitMQ, and Elasticsearch.

## 4. Atomic Monitoring
- Added exporters for PostgreSQL and Redis.
- Developed managed dashboards for PostgreSQL and Redis.

## 5. Elasticsearch Management
- Expanded the Python script to dynamically manage Elasticsearch exporter configurations in Prometheus.
- Extended `.env` to manage Elasticsearch heap dump and GC log parameters.
- Introduced health checks for Elasticsearch instances.
- Automated Elasticsearch configuration management.

---

These enhancements aim to provide a more robust and user-friendly Auto-Build solution, supporting efficient deployment, monitoring, and management of services.

For further details, please visit the repository here: [Docker Compose Autobuilds.](https://github.com/oneinacillian/docker_compose_autobuilds)

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
