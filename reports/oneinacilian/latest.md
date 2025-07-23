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


### <ins>July 2025 Update</ins>
We are pleased to provide an update on the latest developments and contributions from **One In A Cillian** to the WAX blockchain ecosystem. 

### <ins>Noteworthy</ins>

## July 2025 Update

This month we’re proud to announce the release of the **OIAC Hyperion K8s Suite** — a fully automated, production-grade Kubernetes deployment framework for WAX infrastructure.

🔗 Repository: [https://github.com/oneinacillian/hyperion-k8s](https://github.com/oneinacillian/hyperion-k8s)

The suite introduces a modular Kubernetes-based deployment architecture, allowing single-command provisioning of Elasticsearch, Redis, RabbitMQ, Kibana, and Hyperion — all orchestrated with GitOps via ArgoCD. Optional tooling includes Rancher and Harbor for secure image and cluster management.

### Key Features

- **Production-Ready Orchestration**: Built on K3s (lightweight Kubernetes), providing self-healing, rolling updates, health checks, and native scaling.
- **Idempotent Automation**: Each component deploys with a single script (`deploy.sh`), ensuring consistent, repeatable, and upgradeable infrastructure.
- **GitOps & Secure Image Management**: Seamless integration with ArgoCD and Harbor, with TLS and Ingress support out of the box.
- **Modular & Maintainable**: Each service is managed independently, improving observability, resilience, and developer velocity.
- **Local Development Support**: Docker Compose setups are included for local testing and development parity.

This marks a significant upgrade from traditional Docker Compose setups and reflects our long-term commitment to operational excellence and cloud-native best practices.

We believe this is the first publicly available Kubernetes deployment of Hyperion infrastructure in the WAX ecosystem.

### 🔹 OIG Note

We respectfully request full points under the **Docker Build Projects** category for this contribution. The OIAC Hyperion K8s Suite:
- Is fully open source and publicly maintained
- Is actively used in our infrastructure
- Provides modular, production-ready tooling
- Is designed for reuse by other guilds
- Represents meaningful technical advancement in deployment methodology

Ongoing work includes Helm/Kustomize support, further component expansion, and security hardening. We welcome feedback and collaboration from the wider WAX guild community.


### <ins>API Services</ins>

| History (partial) | History (full) | History (testnet) | AA API | Light-API  | IPFS |
|--------|--------|--------|--------|--------|--------|
| [] | [x] | [x] | [x] | [x] | [x] |  [x] |
| - | 3338101 | 345127 | 365477 | 47937 |  47493 |

---

### 🌱 Seed Node Endpoint Upgrade (May 2025)

We have upgraded our **Seed Node Endpoint** to meet the latest OIG requirements. Key improvements include:

- ✅ **Public availability**  
- ✅ **SLR ≥ 50%**  
- ✅ **Full `blocks.log` retained**  
- ✅ **Configured with `max-clients = 100`**

Monitoring and performance enhancements are actively ongoing to ensure continuous compliance with evolving OIG standards. These upgrades significantly improve **peering reliability** and **network synchronisation**, contributing to overall ecosystem stability.

---

### 🔐 Docker Stack Enhancements & Automated SSL Management (May 2025)

We have optimised our **Docker stack** with a built-in **reverse proxy**, and implemented **automated SSL certificate management** using **Certbot-HAProxy integration**. This setup streamlines deployments, enhances security, and eliminates the need for manual SSL handling.

Key Features:
- ✅ **Certbot integration** with **HAProxy** for seamless HTTPS configuration
- ✅ **Zero-downtime certificate renewals** using `SIGHUP` signalling
- ✅ **Service-specific certificate control** via environment flags
- ✅ **Automated HTTP-01 challenge handling** using shared Docker volumes
- ✅ **Support for Let's Encrypt staging and production** environments
- ✅ **Customisable renewal policies**

This robust configuration ensures **continuous SSL/TLS security** and significantly **reduces operational complexity**, allowing for secure, automated provisioning across services.

---

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

IPFS Enhancements (April 2025)

Enhancements have been made to our media handling and IPFS deployment to improve robustness, performance, and support for a broader range of formats. Key improvements include:  

- **Image processing enhancements**:  
  - Added support for multiple formats: WebP, AVIF, JPEG, and PNG  
  - Introduced quality control mechanisms  
  - Implemented caching for improved performance  

- **Video processing enhancements**:  
  - Added support for MP4 and WebM formats  
  - Introduced CRF-based quality control  
  - Added encoding presets to balance speed and quality  
  - Implemented streaming optimisations  

- **Performance improvements**:  
  - Added caching system  
  - Optimised IPFS configuration  
  - Improved Docker container setup  

- **Monitoring and reliability**:  
  - Added health check endpoint  
  - Improved error handling  
  - Implemented unique file naming to prevent conflicts  

These changes significantly improve the capability and stability of our media processing pipeline within the IPFS deployment.  

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

June 2025 update - We implemented high-availability RabbitMQ cluster (3 nodes with HAProxy load balancing) in Hyperion auto-build pipeline. Configuration is now fully automated via environment generation scripts. The upgrade eliminates single points of failure in messaging, improving reliability, uptime, and block sync resilience in Hyperion data services.

April 2025 update - We have extended the **Hyperion solution** by introducing a **proxy deployment component**, which is automatically generated by a Python utility. This prepares the environment based on the `.env` configuration settings.  

### Key Enhancements:  
- **Integrated Reverse Proxy** – The requirement for an external reverse proxy is now embedded within the Docker stack.  
- **Flexible Deployment** – Allows running a reverse proxy inside the Docker solution, even on hosts that already have a reverse proxy, via **custom port binding (configurable in `.env`)**.  
- **Resource Optimisation** – The component includes configurable resource allocation to **limit usage and prevent contention**.  

### Next Steps:  
We plan to **integrate a Certbot component** to automatically generate and rotate SSL certificates based on the **production aliases specified in `.env`**.  

https://github.com/oneinacillian/docker_compose_autobuilds/blob/main/README.md

March 2025 update - Improvements have been made to our Docker Compose auto-builds to enhance deployment efficiency and configurability based on specific environment needs. Key changes include:  

- **Added configurable memory and CPU limits** for each service, managed via environment variables (e.g., `REDIS_MEMORY=2g`, `REDIS_CPUS=1`).  
- **Applies to**: Redis, RabbitMQ, Hyperion, Node, Kibana, Prometheus, and Grafana.  
- **Helps prevent resource contention and ensures stable performance.**  
- **Introduced the `MONITORING_ENABLED` environment variable**:  
  - When disabled, removes Prometheus, Grafana, and all exporters (Elasticsearch, Redis, RabbitMQ, Nodeos).  
  - Useful for development environments or resource-constrained systems, reducing overhead when monitoring isn't needed.  

These changes improve system stability, efficiency, and flexibility across different deployment environments.  

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

**Update**: (May 2025)
## 🚀 Enhanced LightAPI & Chronicle Configuration

We have deployed a **production-grade Dockerized LightAPI and Chronicle implementation** featuring advanced WebSocket connection handling and **MariaDB optimisations**, specifically engineered to meet the **high-throughput demands of the WAX blockchain**.

The setup delivers **exceptional performance** through intelligent **resource allocation**, **custom-tuned database parameters**, and **enhanced monitoring**. Chronicle includes **automatic recovery and snapshot restoration capabilities (beta)**, enabling **reliable, uninterrupted data streaming**.

---

### 🔧 Key Enhancements

#### WebSocket & API Improvements
- Adaptive message batching for high throughput  
- Configurable queue sizes and processing delays  
- Heartbeat monitoring and intelligent reconnection  
- WebSocket performance logging and statistics

#### MariaDB Database Tuning
- Buffer pool size optimised for 64GB (on 128GB systems)  
- Enhanced I/O thread handling and temp table performance  
- Disabled query cache for optimised query throughput  
- Configurable memory limits and CPU allocation (8–16 cores)

#### Resource Management
- File descriptor limits increased for connection-heavy workloads  
- Efficient memory and CPU management to support parallel processing

#### Chronicle Enhancements
- Automatic snapshot restoration (beta)  
- Graceful shutdown and failure recovery  
- Block filtering, queue optimisation, and reporting customisation  
- Intelligent health monitoring and process control

---

### 🧱 Architecture Overview

**LightAPI**
- Multiple WebSocket servers (ports 5101–5105)  
- Main API (port 5001) and DB write service (port 8100)  
- Backed by MariaDB for high-speed storage

**Chronicle**
- Connects to WAX nodes to ingest blockchain data  
- Filters and forwards data to LightAPI  
- Supports snapshot restoration for fast sync

---

### 🧪 Monitoring & Performance

- WebSocket and process health checks  
- Memory usage and connection logs  
- Automatic recovery on failure  
- In-depth logging for diagnostics and tuning

---

### 🔐 Security & Maintenance

- Read-only DB access for API clients  
- Timeout and resource isolation  
- Process supervision and resource usage logging  
- Full support for Docker Compose deployments

---

### 🔄 Snapshot Restore (Beta)

- Supports syncing from clean database and snapshot files  
- Includes optimisations such as disabled doublewrite buffer, adjusted flush settings, and buffer pool tuning  
- Known limitations: full restore still under active development

---

#### 📝 Usage

```bash
git clone https://github.com/oneinacillian/lightapi
cd lightapi
docker-compose up -d

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

Thank you for considering our update. Oneinacillian remains committed to supporting the WAX blockchain through reliable infrastructure and innovative solutions. 
