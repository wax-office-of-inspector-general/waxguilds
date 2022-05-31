## Anchor Unity-Integration

With the latest submission we published the 2 new Repositories anchorlink-sharp and anchorlinktransport-sharp while having updated the eosiosigningrequest-sharp repository to the latest version.

We believe the the development of this Unity Integration is absolutely necessary and after WAX announced that the WCW free-account-feature is stopped we quickly freed up internal capacities allowing us to make progress on this, while neglecting product development (Liquiid Universe) and the associated future income streams as other sources (not named here) where telling us about a possible free-account-solution based on Anchor and we saw the impact this integration could have on the ecosystem while it was long time to build it anyway.

The implementation of a custom protocol like the ESR + the integration of it into anchorlink-sharp and anchorlinktransport-sharp in a sustainable, reliable and maintainable way that works with current Wallets while supporting diverse Platforms (from desktop over browser to mobile and consoles) is a challenging task and a lot of Research + Development is involved in all stages of the development. Reengineering of the Typescript-Projects by Greymass allowing us to adopt changes in those Repositories relatively quickly is a tough target due to core differences in both languages + Unity-Specifics like the lack of anonymous types and networking in WebGL but will help with maintainability in the long run.

The current implementation does not work and is still work in progress, although we made more progress since the submission and are on the right path to a working integration.

**Sidenote:** There are multiple projects that tried to receive funding for such a project, which developed insufficient integrations based on jslibs which come with a number of drawbacks, or claimed to have developed an integration without ever proving or open-sourcing the code. Noone has done the integration in a sufficient way (so far) while it seems like everyone knows about the need and impact.

-   [https://pomelo.io/grants/4im.rnzcm4](https://pomelo.io/grants/4im.rnzcm4) 50-200k USD, not developed due to missing funds
-   [https://nice1.org/](https://nice1.org/) , [https://docs.nice1.dev/](https://docs.nice1.dev/) , [https://twitter.com/Nice1BlockChain](https://twitter.com/Nice1BlockChain) (either jslib- or webview-based. Never published, it is questionable whether it works at all)
-   [https://github.com/protonnz/proton-unity-demo](https://github.com/protonnz/proton-unity-demo) (jslib)
-   [https://labs.wax.io/proposals/65](https://labs.wax.io/proposals/65) 105k USD, not developed yet, not publicly available and no information about how it will look (e.g jslib-based or not etc.).
    
A look at the requested funds gives an idea of the scope of the project, while it can be assumed that cost efficiency and profit have already been planned in.
  

*As a Guild and Company trying to build out the ecosystem, trying to deliver the tools needed by the community to evolve, we don't understand why the development of this project seems to have been just ignored in the rating, especially if we free up internal resources and neglect possible additional revenue-streams while favoring what the community needs..*

  
## Unity3D Plugins in general

Unity3D is already the most used Gaming Engine on WAX and on the market (targeting browser and mobile devices) and the adoption of Unity3D in decentralized Gaming is continuously expanding. We are of strong belief that a full suite of multi-platform compatible full-feature Plugins/SDKs/Tools will lead into huge advantages for WAX and can be a unique selling proposition for WAX in combination with the speed, costs and the general environment and community WAX provides.Of our 19 public open source repositories 13 are directly Unity3D-related while we also always ensure that they all are also usable for the general .NET and C# developers-community

As a rough overview regarding only Unity3D-Plugins, fully developed, usable and accessible through our public respostiry are: 
  - AtomicAssets
 - AtomicMarket
 - Hyperion
 - EosSharp (like eos-js)
 - DfuseGraphQl
 - DfuseGraphQL-Subscriptions
 - DfuseWebsockets  

We also don’t really understand while the continuous development and maintenance of these tools and the support we have to provide to the community is valued with 48 points while other things like infrastructure-statistics websites or blogs with minimal functionallity are valued with the same amount or even a higher amount of points.

  
### Plugin Documentation
Missing Documentation is in progress as it was was stated in previous submissions as well as we tried to seek additional funding through pomelo. Increased progess on documentation means we have to hire additional personnel which we currently do not have the necessary funds for. We are, as stated in the submission, also in contact with other BPs which want to market our tools to the public to strengthen WAX adoption in the Gaming Area and we are collaboratively working on a plan to speed up the process while delivering documentation that fits the needs of both the WAX as the traditional Game Developers Community.

*Other Companies will invest their own money in documentation and marketing of our tools, if that doesn’t show the impact and importance of what we do, we really don’t know what does.*

  
## Atomic Assets API

Regarding the Atomic Assets API we have been granted 0 points, the API is up and running as described in the submission. There were two additional readers configured in the DB which led to problems with infrastructure-stats sites like tools.ledgerwise.io reporting the API as not working properly due to how they parse the readers-array of the health-endpoint-response. Apart from that the Service has been running fine for weeks, now the analysis in those tools should also work as expected and we hope to receive the points as the service is (for weeks) fully available and usable.

There are still problems with our "old" Hyperion-API while we still clean up the completely new Hyperion- and Elastic-Cluster and are synchronizing two mainnet-nodes with full history, state-history and trace-history. We would not recommend to use the currently available History-API as long as there are alternatives available so having not received any points for this API seems like a reasonably fair valuation.

## DeepReader

Since the evaluation of individual projects in Development is difficult and I know that the IGs usually do not have the time to look at every project in detail, I would like to explain in the following the development of the project so far as well as the further planning and give you at least a very rough outline of what happened so far. (the following is not official Documentation or a proposal as there was not enough time to work it out)

### Current status
The ecosystem has several history and streaming solutions that cover specific use cases and come with individual advantages and disadvantages. Among them native History, Hyperion, Dfuse, Chronicle, Eosio-Light-Api, Eosio-Contract-Api and more. Every of the named solutions have advantages over others, but none of them have the full feature set needed, or hosting of the solution is too expensive while maintenance is too complex.

  

### Goal
The goal of this project is to combine the best parts of the individual solutions and to further improve individual components of previous solutions.  

#### Advantages and disadvantages of individual solutions, ideas for improvement.
|  | Advantages | Disadvantages |
| -- |--| -- |
| Hyperion | Hosting Simplicity, Filtering, Rich Indexing. Relatively fast | Relying on SHiP - no full deltas. No solid streaming-functionality. No Lifecycle-management. neither GraphQl-Queries nor Subscriptions, high storage consumption, no direct Action-Delta-Mapping 
| Dfuse | Rich indexing, not relying on SHiP - full deltas, Action-Delta-Mapping, Tracking of diverse other data not tracked in SHiP| Complex Hosting, Super high storage consumption, High-maintenance, Heavy costs |
| Eosio-Contract-API |Hosting Simplicity, Modular approach (custom modules possible), Relational data storage, less storage-intense | Relying on SHiP - no full deltas, Only partial data stored, Complex Action-Delta-Mapping, Special Purpose |
| Chronicle |Hosting Simplicity, Streaming functionality| Relying on SHiP - no full deltas |
| Eosio-Light-API | Hosting Simplicity, Special Purpose - blockchain accounts and token balances| Relying on SHiP - no full deltas, Only partial data stored, Special Purpose |

**Sidenote deltas and full-deltas:** SHiP only catches and stores the "end-delta" while deep-mind logs every individual delta happening. As an example this means that, if a user makes use of a DeFi-protocoll and pushes a transaction with 1 WAX as transfer-input and the Defi-contract adds and subs balances, only the "end-delta" the, difference between the previous and the new balance is logged. Deep-mind logs in comparision contain every change to the balance, if the contract adds 0.1 WAX to the balance of the user 5 times, deep-mind will log 5 deltas with 0.1 WAX while SHiP will log one delta of 0.5 WAX. In many applications like DeFi and Gaming this could make a meaningful difference. 

**Sidenote action-delta mapping** Currently there is no reliable and sustainable way to map deltas and actions received through SHiP with each other. Only in specific cases and at high effort it is possible to achieve a relatively reliable mapping (see eosio-contract-api or talk to pink.gg). deep-mind logging has this functionallity built-in and allows to map actions and deltas 100% precise, reliable and sustainable while providing additional data (explained above). 


### Planned Features
Regarding the development of the DeepReader-Solution we defined that the following features should be part of the solution:
- Streaming
	- Websocket
	- GraphQl-Subscriptions
	- Additional Sockets especially for the Gaming-Sector
- Full Deltas
- Action-Delta-Mapping 
- Lower latency-streaming (*while* deep-mind-enriched blocks are created, without waiting until the block was finalized)
- multiple Database/Storage-Providers for different use-cases but with the same APIs
- Lifecycle-management
- Custom ABI-Serialization/-Deserialization
- Backward compatibility with Hyperion (e.g. v2-Endpoints)
- Filtering
- Modularity/Extensibility
- Compression

  
  

### deep-mind logger

A brief summary of the complexity of the project as well as an outlook on the time invested for both research and development.

SHiP offers the possibility to store blocks, deltas and traces and to provide them via a websocket connection. Blocks, deltas and traces are sent in binary form, but as complete objects, a reconstruction of e.g. blocks or transactions over a multitude of single messages is not necessary, only the deserialization of the binary data into usable objects is required.

#### SHiP vs. deep-mind deserialization & re-construction of deep-mind enriched Blocks

While SHiP offers the possibility to provide blocks, deltas and traces via a websocket connection (only historical data, SHiP never streams data of the actively produced Block), which can be deserialized directly into usable objects, the process using the deep-mind-logger is much more complex. The deep-mind-logger logs individual details in both, binary and json format to the standard output ( stdout ) throughout the whole process *while* (not after) a block is produced or replayed. If a process (here DeepReader) starts the Nodeos process with deep-mind-logging enabled and redirects the standard output to internal consumers, the deep-mind-logs can be consumed and complex enriched blocks, transactions, traces, deltas, etc. can be reconstructed within the solution. Reconstruction of these deep-mind enriched blocks is a complex but elementary component of dfuse and DeepReader and is what allows the application to receive much more detailed data with lower latency than while consuming SHiP. There is neither official and detailed information about how deep-mind enriched Blocks etc. have to be re-constructed nor how exactly individual deep-mind-logs have to be deserialized and in addition, the current development with different EOSIO base repositories (B1, ENF) and their differences complicates the overview. See the official and super detailled (that’s irony) deep-mind-logging documentation ([https://github.com/EOSIO/eos/blob/26a4d285d0be1052d962149e431eb81500782991/docs/01_nodeos/06_logging/20_third_party_logging/10_deep_mind_logger.md](https://github.com/EOSIO/eos/blob/26a4d285d0be1052d962149e431eb81500782991/docs/01_nodeos/06_logging/20_third_party_logging/10_deep_mind_logger.md)). A tremendous amount of research, digging through hundreds of files of multiple branches of the different repositories of B1 (mostly eos, fc, eos-vm), mandel (mandel, mandel-fc, mandel-vm) and the dfuse-repositories (to be able to reconstruct deep-mind enriched blocks in the same way) + communication with involved parties and following the active development the different versions was needed to gather all the required information. Every individual type has to match the c++-equivalent on a binary-level by 100% to be able to successfully deserialize the information logged via deep-mind-logging and to construct deep-mind-enriched blocks.

The DeepReader.Types-Project ([https://github.com/liquiidio/deepreader/tree/main/DeepReader.Types](https://github.com/liquiidio/deepreader/tree/main/DeepReader.Types)) contains classes for every individual Type used + XML-comments about the source-file in the eosio-repositories for most EOSIO-types (see DeepReader.Types/Eosio/Chain and DeepReader.Types/Fc). We will continue adding and maintaining documentation which might be used as a source for a better deep-mind documentation in the future.

Internally we call the above mentioned process "Stage1 - Deserialization and Re-Construction of Deep-Mind Enriched Blocks"

#### Deserialization

The standard eosio-deserialization-process is relying on iteration through structs, types, variants, fields etc. of ABI-Files and the use of Type-Sepcific Type-Readers and Type-Writers. While this process is sufficient if the amount of data that needs to be deserialized or serialized is low (e.g end-user applications) due to the amount of iterations and string-comparisons needed to find types and their readers/writers + language-dependant construction of local objects it comes with performance-drawbacks for applications deserializing or serializing a massive amount if this kind of data (Hyperion uses custom C++-library making use of ABIs, returning json-objects, dfuse uses a mix of predefined types and ABI-deserialization, eosio-contract-api uses ABI-deserialization only). The current DeepReader-implementation uses .NETs Reflection capabilities instead of ABI-deserialization to deserialize types and their properties in combination with a micro-optimized Deserializer to deserialize binary-data into their object representation. Mastering Reflection and writing applications that heavily make us of this feature is from being an easy task and much time was spent on this to implement an alternative for the standard ABI-deserialization. To increase the performance even more and to get rid of the drawbacks that come with Reflection we are in the process of developing static Deserializers for the individual types as a parallel solution to allow even faster deserialization. The work done on this custom Deserializer also involved a lot of R&D on various topics from Marshalling, blittable types, Heap and Stack allocations, different binary readers, Garbage-Collection of MemoryStreams and Buffers, BufferPooling and much more and is still an active process that we plan to further develop to get the absolute maximum out of this crucial process.

The Deserialization-Process doesn’t stop with re-construction of EOSIO- and dfuse-types and continues with individual types used and specific by smart contract developers. The “custom ABI-AssemblyGenerator” is able to generate and inject Assemblies including Classes or Structs for each individual Type used/defined by a smart contract which allows deserialization of Action-Data in a more performant way. The current implementation also uses Reflection here but we are planning to even generate static deserialization-methods for these individual types at runtime to allow the most performant deserialization for ActionData, possible. Currently, every History-solution stores deserialized Data in object-representation and we are investigating if a high-performance-deserializer would allow storage of serialized to reduce the overall storage-consumption.

#### Post-Processing
Deep-mind enriched blocks are heavily enriched with additional data like RamOps, TableOps, LimitOps, PermOps (Unfortunately the documentation on these types is spread over various sources, mainly the GraphQl-Documentation which should tell about Service-internal implementation) and more while not beeing in the best format for further processing and storage. As an example comes each xxOp-object with uint Actionindex, referencing the Action this xxOp was created by. In "Stage 2 - The Postprocessing Stage" we *flatten* and restructure Blocks, Transactions and xxOps to make them fit into the needs by the application while improving further processing and storage due to the use of Stack-allocated structs instead of Heap-Allocated classes. We also convert eosio-names (string) received through deep-mind json-logs back to their binary equivalent to reduce storage size

#### Storage and Indexing/Ingestion
For the selection of suitable storage providers and their optimized integration into the project, a great deal of research and development must also be carried out on an ongoing basis. Currently our focus is on *Elasticsearch* and *Microsoft's Faster* while we continuously investigate further database solutions like RocksDB, Postgres, several KV-Stores etc.. 

#### Elasticsearch
So far we think the use of Elasticsearch could be improved and accelerated by a few changes, e.g. Elasticsearch has integrated lifecycle management (not used in Hyperion) or binary data sets can be indexed in compressed form, while the deserialized object itself does not have to be stored. Lifecycle-management could be a very valubale feature when it comes to data of certain contracts. As an example, currently it is only possible to either have full AlienWolds-History - or to have none. Lifecycle-management would allow the API-hoster to define specific lifecycles for individual contracts so that AlienWorlds-history could automatically be cleared and removed after a cycle of 2 weeks which would allow API-hosters to keep a defined set of specific history without having to decide between all and none. Hyperion also uses eosio-names in string-from instead of their binary equivalent which should increase both search and storage-consumption. Converting an eosio-name (string) to its binary equivalent at query time seems reasonable. Whether these optimizations really have the desired effect and are worthwhile is hard to predict, only trial and agile development will tell, all this is still a very early stage and potentially new Ideas to improve the solution will come up over time that we will research and check the feasability of. 

#### Microsoft Faster
Microsft Faster v2 is close to beeing released. We still believe it could be very powerful in combination with EOSIO-based history-solutions (see Research-Papers https://www.microsoft.com/en-us/research/project/faster/ and other Articles https://www.alibabacloud.com/blog/faster-how-does-microsoft-kv-store-achieve-160-million-ops_596767). Unfortunately the secondary indexing framework based on Microsoft Fishstore (https://github.com/microsoft/FishStore) is delayed for another ~ 2 months (see https://github.com/microsoft/FASTER/discussions/489). Until then we will probably focus on Elasticsearch or other Storage Providers. We are closely following the Development of Faster to stay up to date and to be able to extend the integration as soon as possible while adopting changes. 

"Stage 3 - Storage and indexing" is under development (+ Research), currently only Microsoft Faster in it's current form (without secondary indexes) is implemented to verify first feasability. 


#### APIs
Once The first 3 stages of the whole process are developed as far as needed and the right optimizations are in place we will start to add diverse APIs (standard REST, GraphQl, GraphQL-Subscriptions etc.) and do additional feasability-studies on Caching, Module-Injection (at runtime), 

We also believe it would be great to offer interfaces via common protocols like AMQP/RabbitMQ etc. to allow third parties to consume deserialized deep-mind enriched blocks or flattened postprocessed information without having to run the same code twice. The current situation where eosio-contract-api and hyperion are running similar deserialization-workers, consuming the same data through the same API (SHiP Websockets) doesn't seem like a clever design choice for bigger infrastructures and over time more and more of this kind of service (SHiP Websockets consumers and deserializers + individual logic) will come up.

#### Last words
Starting with public discussions with major leaders of the community and in diverse chats over planning and a lot of research until we started the development we have already spent months on this project and already mentioned it in our submissions months ago (without receiving any points for the tiem spent on it). We clearly do not understand why the project is granted zero points, we believe the potential impact and value of the described solution and the work put into it is valuable and requires a lot of experience and time. 


## Oracle-Feed
We upgraded our oracle-service which now is, like requested by the IGs, pushing 3 data-points per minute so we hope to be granted the additional 13.25 points.
