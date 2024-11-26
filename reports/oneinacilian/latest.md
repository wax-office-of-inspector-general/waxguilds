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

### <ins>November 2024 Update</ins>
We are pleased to provide an update on the latest developments and contributions from Oneinacilian to the WAX blockchain ecosystem. 

### <ins>Noteworthy</ins>
Since our last update we have made progress on two key initiatives: the deployment of a new IPFS hosting solution with advanced monitoring capabilities and the development of an automated Hyperion deployment framework to streamline scalability and flexibility. Both offerings are designed to enhance operational efficiency and support the broader WAX community.

During the evaluation period, blocks were missed, which has again impacted our technical evaluation score. We know the cause, and we are confident that it will not be recurring issue. We remain committed to maintaining high standards of service and will continue to monitor our infrastructure closely to avoid further disruptions.

### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [] | [x] | [x] | [x] | [x] | [x] |  [x] |
| - | 3338101 | 345127 | 365477 | 47937 |  47493 |


### <ins>New Service Offering: IPFS Deployment Offering</ins>
Since the last update, we have developed and deployed a new IPFS hosting solution with enhanced features. This deployment integrates Prometheus and Grafana for advanced monitoring and performance tracking, including pre-configured dashboards for seamless adoption. The solution is designed to simplify the management and scalability of IPFS services while maintaining flexibility through Docker Compose-based deployment.

For full details and setup instructions, please refer to our repository: [IPFS Deployment Repository.](https://github.com/oneinacillian/ipfs-deploy)

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
We have further enhanced our Hyperion auto-build framework, introducing customisation options and optimisations to improve deployment flexibility and scalability.

One of the key advancements is the ability for users to specify the number of Elasticsearch nodes they wish to include in their deployment. Based on a simple configuration variable, a custom Docker Compose YAML file is automatically generated to scaffold the desired setup, while the default Hyperion compose remains available for use:

  * For example, setting MOUNT_OF_NODE_INSTANCES=2 will scaffold a two-node Elasticsearch cluster, while MOUNT_OF_NODE_INSTANCES=3 will scaffold a three-node cluster, and so on.
    
In addition, we have made modifications to the RabbitMQ deployment, enabling custom adjustments to the environment to meet varied operational requirements. These enhancements align with Hyperion's most suitable components and deployment needs, further optimising its overall performance.

These updates have been tested successfully, with ongoing refinements being made to ensure a robust and efficient deployment process. We believe these enhancements represent an important step forward in simplifying and scaling Hyperion deployments.

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
