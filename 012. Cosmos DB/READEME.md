# Cosmos DB

![demo](https://www.sqlnethub.com/wp-content/uploads/2018/10/what-is-azure-cosmos-db.jpg)

Azure Cosmos DB is a fully managed NoSQL database service provided by Microsoft in the Microsoft Microsoft Azure cloud platform. It is designed to store and manage large amounts of data across the globe with high availability and low latency. Cosmos DB supports multiple data models like document, key-value, graph, and column-family, which makes it flexible for modern applications such as web apps, mobile apps, IoT systems, and real-time analytics. It automatically scales based on demand and ensures high performance without manual infrastructure management.


## 1️⃣ Turnkey Global Distribution

Azure Cosmos DB provides automatic multi-region data distribution. This means your data can be replicated across multiple countries or regions without manual setup. Businesses do not need to configure complex replication systems — Azure handles it internally.

### Key Points:

* 🌍 Automatically replicates data to multiple regions.
* 🔄 No manual configuration required.
* 🚀 Improves performance for global users.
* 🛡️ Helps in disaster recovery and fault tolerance.

---

## 2️⃣ Regional Presence (54+ Regions)

Azure Cosmos DB is available in more than 54 Azure regions worldwide. This wide presence ensures that applications can serve users from the nearest location, reducing delay and improving experience.

### Key Points:

* 🌎 Available in 54+ global regions.
* ⚡ Users access data from the closest region.
* 📈 Supports global business expansion.
* 🔁 Enables multi-region failover.

---

## 3️⃣ Always On (99.999% Availability)

Cosmos DB guarantees 99.999% availability for both read and write operations. This ensures business continuity and minimal downtime.

### Key Points:

* 🔓 99.999% uptime guarantee.
* 📖 Read and ✍️ write operations are both covered.
* 🏢 Suitable for mission-critical applications.
* 🛠️ Backed by Microsoft SLA (Service Level Agreement).

---

## 4️⃣ Elastic Scale

Cosmos DB can handle traffic from thousands to hundreds of millions of requests per second. It automatically scales based on application demand.

### Key Points:

* 📊 Handles very high traffic.
* 🔄 Auto-scale feature available.
* 💼 Ideal for growing startups and large enterprises.
* 💰 Pay only for the throughput you configure.

---

## 5️⃣ Low Latency Guarantee

Cosmos DB guarantees less than 10 milliseconds read and write latency for the 99th percentile. This means almost all user requests are processed extremely fast.

### Key Points:

* ⚡ Under 10ms response time.
* 📱 Great for real-time apps (chat, gaming, e-commerce).
* 📈 Consistent performance even at high load.
* 🌍 Fast response globally.

---

## 6️⃣ Consistency Options

Cosmos DB provides multiple consistency models. Organizations can choose the balance between strong consistency (accurate data everywhere) and performance.

### Key Points:

* 🧩 Five consistency levels available.
* ⚖️ Balance between accuracy and speed.
* 🏦 Strong consistency for banking apps.
* 📱 Eventual consistency for social media apps.

---

## 7️⃣ No Schema or Index Management

Cosmos DB is schema-agnostic, meaning you do not need to define a fixed table structure in advance. It also automatically indexes data.

### Key Points:

* 📂 No predefined schema required.
* 🔍 Automatic indexing enabled.
* 🛠️ Reduces database administration effort.
* 🚀 Faster development and flexibility.

---


## ⭐ Key Features 

## 1️⃣ SQL (Core API)

The SQL API (also called Core API) is the primary and most commonly used API in Azure Cosmos DB. It allows developers to store data in JSON format and query it using SQL-like syntax.

### Key Points:

* 📄 Stores data as JSON documents.
* 🔍 Uses SQL-like queries (easy for SQL developers).
* 🚀 Most commonly used Cosmos DB API.
* 💼 Suitable for web and mobile applications.

---

## 2️⃣ Cassandra API

This API allows applications that are built using Apache Cassandra to work directly with Cosmos DB without major changes.

### Key Points:

* 🔄 Compatible with Cassandra applications.
* 📊 Designed for high scalability.
* 🏢 Used in large distributed systems.
* 💡 Helps migrate Cassandra workloads to Azure easily.

---

## 3️⃣ MongoDB API

This API makes Cosmos DB compatible with MongoDB applications. Developers can use existing MongoDB drivers and tools.

### Key Points:

* 🍃 Supports MongoDB queries and drivers.
* 🔁 Easy migration from MongoDB to Cosmos DB.
* 📦 Works with existing MongoDB applications.
* 🚀 Ideal for startups already using MongoDB.

---

## 4️⃣ Gremlin API (Graph API)

Gremlin API is used for graph-based data. Graph databases are useful when relationships between data are important (like social networks or recommendation systems).

### Key Points:

* 🔗 Manages highly connected data.
* 👥 Useful for social media and fraud detection.
* 📈 Great for recommendation engines.
* 🧠 Uses Gremlin query language.

---

## 5️⃣ Azure Table Storage API

This API provides compatibility with Azure Table Storage. It is useful for simple key-value storage scenarios.

### Key Points:

* 🗂️ Stores key-value structured data.
* ⚡ Lightweight and cost-effective.
* 🔄 Easy migration from Azure Table Storage.
* 🏢 Suitable for simple applications and logs.

---


## ⭐ CosmosDB Structure

![demo](https://learn.microsoft.com/en-us/azure/cosmos-db/media/account-databases-containers-items/cosmos-entities.png)

This image explains the **internal structure of Azure Cosmos DB** and how data components are organized depending on the API you choose. It shows the hierarchy starting from the account level down to containers and items, and also highlights additional features available inside containers.

Let’s understand it in a simple HR-friendly way.

---

## 🔹 1️⃣ Database Account → Databases → Containers

At the top level, we have the **Cosmos DB Account** (also called Database Account). Inside that account, we create **Databases**, and inside each database, we create **Containers**.

This follows a clear hierarchy:

* 📦 **Database Account**
* 📁 **Databases**
* 🗂️ **Containers**
* 📄 **Items**

This structure helps organize data in a scalable and secure way.

---

## 🔹 2️⃣ Container (Very Important Component)

A **Container** is the most important logical unit in Cosmos DB because:

* It stores your actual data (items).
* It manages throughput (RU/s).
* It handles partitioning.
* It supports server-side logic.

### Inside a Container, we can have:

* ⚙️ **Stored Procedures** – Predefined backend logic stored in the database.
* 🧩 **User-Defined Functions (UDFs)** – Custom functions used inside queries.
* 🔔 **Triggers** – Automatically execute before or after data operations.
* 🔄 **Merge Procedures** – Used for merging operations.
* ⚠️ **Conflicts** – Handled in multi-region write scenarios.
* 📄 **Items** – Actual records stored inside the container.

👉 Important: Containers are where performance and scaling decisions happen.

---

## 🔹 3️⃣ Container Representation Based on API

Depending on which API you select in Cosmos DB, a container is represented differently:

* 📄 **Collection** → SQL API or MongoDB API
* 📊 **Table** → Table API
* 🔗 **Graph** → Gremlin API
* … (other types depending on API)

So the name changes, but logically it is still a container.

---

## 🔹 4️⃣ Items (Actual Data Records)

Items are the actual data stored inside a container.

Depending on the API, items are called different things:

* 📄 **Document** → SQL / MongoDB API
* 📊 **Row** → Table API
* 🔵 **Node** → Graph API
* ➖ **Edge** → Graph API (relationship between nodes)

Again, the terminology changes based on API, but functionally they are individual data records.

---

## ⭐ Request Units (RU)

Request Units (RU/s) in Azure Cosmos DB represent the measure of performance and throughput. Instead of charging separately for CPU, memory, and disk usage, Cosmos DB uses Request Units to combine all resource consumption into a single unit. Every operation (read, write, query) consumes a certain number of RUs. The more complex the operation, the more RUs it consumes. This model helps organizations plan performance and cost in a predictable way.

Azure Cosmos DB measures the cost of all database operations using Request Units (RUs). Instead of charging separately for CPU, memory, storage, and networking, Cosmos DB combines everything into a single measurement called RU. It also explains that RU per second (RU/s) acts like a “currency” for database throughput — meaning it represents how much work your database can handle every second.

![demo](../assets/demo35.png)

## ⭐ Partitions 

**Partitions in Azure Cosmos DB** are used to divide and distribute data inside a container so that the database can scale efficiently. When the amount of data or traffic increases, Cosmos DB automatically spreads the data across multiple partitions. This ensures high performance, better availability, and horizontal scaling. Without partitioning, handling large-scale applications would be difficult and slow.

![demo](../assets/demo36.png)

---

### What is Partitioning?

Partitioning means:

* Dividing container data into smaller groups.
* Distributing data across multiple storage units.
* Improving scalability and performance.

It helps Cosmos DB handle:

* 📈 Large datasets
* 🚀 High traffic
* 🌍 Global applications

---

### 1️⃣ Logical Partition

A **Logical Partition** is created based on the **Partition Key** you choose while creating the container.

All items with the same partition key value belong to the same logical partition.

### Example:

If partition key = `country`

* All items with `country = India` → One logical partition
* All items with `country = USA` → Another logical partition

### Key Points:

* 🔑 Created using partition key value.
* 📦 Groups related data together.
* ⚖️ Each logical partition has a size limit (20 GB).
* 🚀 Important for query performance.
* 🎯 Choosing the correct partition key is critical.

---

### 2️⃣ Physical Partition

A **Physical Partition** is the actual storage unit managed internally by Cosmos DB.

Cosmos DB automatically:

* Creates physical partitions.
* Distributes logical partitions across them.
* Balances load when data grows.

You do NOT control physical partitions — Azure manages them automatically.

### Key Points:

* 🖥️ Actual storage and compute unit.
* ⚙️ Automatically managed by Azure.
* 📊 Each physical partition has throughput limits.
* 🔄 Automatically splits when storage or RU/s increases.

---

### Logical vs Physical Partition (Simple Comparison)

| Logical Partition            | Physical Partition                 |
| ---------------------------- | ---------------------------------- |
| Based on partition key value | Based on storage & throughput      |
| Visible to developer         | Managed internally                 |
| Groups related items         | Stores multiple logical partitions |
| Max 20 GB per key            | Automatically splits when needed   |

---

### Why Partitioning is Important

Partitioning helps in:

* 📈 Horizontal scaling
* ⚡ Faster query performance
* 💰 Efficient RU usage
* 🌍 Global distribution support
* 🛡️ High availability

---

### Simple Real-Time Example

Imagine an e-commerce app:

Partition key = `userId`

* All orders of one user go to one logical partition.
* Cosmos DB distributes users across physical partitions.
* If traffic increases, Cosmos DB automatically adds more physical partitions.

This ensures performance remains stable even with millions of users.

---

## ⭐ SQL API

The SQL API in Azure Cosmos DB (also called the Core API) is the most commonly used API to interact with Cosmos DB. It allows developers to store data in JSON document format and query it using a SQL-like language. Even though Cosmos DB is a NoSQL database, the SQL API makes it easy for developers who already know SQL to work with it. It is highly scalable, globally distributed, and optimized for modern web and mobile applications.

```sql
SELECT * FROM c WHERE c.city = "Hyderabad"
```

```json
{
  "id": "101",
  "name": "Ameer",
  "city": "Hyderabad",
  "age": 25
}
```
![demo](../assets/demo37.png)

---

## ⭐ Azure cosmosdb demo

### ⚡ Create a cosmosdb account

![demo](../assets/demo38.png)


### ⚡ Azure Cosmos DB for NoSQL

![demo](../assets/demo39.png)

### **Workload Type**

Workload Type defines how Azure configures and optimizes your Cosmos DB account during setup. In your screenshot, it is set to **Learning**, which is designed for beginners, low-cost usage, and quick experimentation. It provides simple default settings suitable for practice environments.

| Setting       | Selected Value | Purpose                                    |
| ------------- | -------------- | ------------------------------------------ |
| Workload Type | Learning       | Optimized for beginners and low-cost setup |

---

### **Subscription**

Subscription determines the billing account under which your Azure resources are created and managed. In your case, it is set to **Azure subscription 1**, meaning all usage and charges for this Cosmos DB account will be tracked under this subscription.

| Setting      | Selected Value       | Purpose                                             |
| ------------ | -------------------- | --------------------------------------------------- |
| Subscription | Azure subscription 1 | Manages billing, usage tracking, and access control |

---

### **Resource Group**

Resource Group is a logical container that organizes related Azure resources for easier management. In your setup, it is set to **ameerkhan-resourcegroup**, which means this Cosmos DB account will be grouped with other resources inside that project container.

| Setting        | Selected Value          | Purpose                                          |
| -------------- | ----------------------- | ------------------------------------------------ |
| Resource Group | ameerkhan-resourcegroup | Organizes and manages related resources together |

![demo](../assets/demo40.png)

### **Account Name**

Account Name uniquely identifies your Cosmos DB account in Azure. In your setup, it is set to **ameer-cosmos**, which will be used as the global endpoint name to access the database. This name must be unique across Azure because it becomes part of the database URL.

| Setting      | Selected Value | Purpose                                                   |
| ------------ | -------------- | --------------------------------------------------------- |
| Account Name | ameer-cosmos   | Unique identifier and endpoint name for Cosmos DB account |

---

### **Availability Zones**

Availability Zones provide higher availability by distributing your database across separate physical locations within a region. In your setup, it is set to **Disable**, which means the account will run in a single zone. This is fine for learning or testing but not ideal for production systems that require high availability.

| Setting            | Selected Value | Purpose                                                            |
| ------------------ | -------------- | ------------------------------------------------------------------ |
| Availability Zones | Disable        | Runs database in a single zone (lower cost, suitable for learning) |

---

### **Location**

Location defines the Azure region where your Cosmos DB account will be deployed. In your setup, it is set to **(US) East US 2 EUAP**, which means your data will be stored and processed in that region. Choosing a region closer to your users improves performance and reduces latency.

| Setting  | Selected Value      | Purpose                                            |
| -------- | ------------------- | -------------------------------------------------- |
| Location | (US) East US 2 EUAP | Determines where the database is physically hosted |

![demo](../assets/demo41.png)

### **Capacity Mode**

Capacity Mode defines how Azure Cosmos DB will handle performance (Request Units) and how you will be billed. In your screenshot, the option **Provisioned Throughput** is selected. This means you predefine the number of RU/s (Request Units per second), and Azure guarantees that performance level. It is suitable when your traffic is steady and predictable.

| Setting       | Selected Value         | Purpose                                         |
| ------------- | ---------------------- | ----------------------------------------------- |
| Capacity Mode | Provisioned Throughput | Pre-configured RU/s with guaranteed performance |

---

### **Provisioned Throughput**

Provisioned Throughput allows you to decide how many RU/s your database should handle. You pay hourly based on the RU/s you configure. It supports two modes: Manual (fixed RU/s) and Autoscale (automatically adjusts RU/s based on traffic).

| Feature   | Meaning                    | Best For                     |
| --------- | -------------------------- | ---------------------------- |
| Manual    | Fixed RU/s                 | Stable, predictable traffic  |
| Autoscale | RU/s adjusts automatically | Variable but regular traffic |

---

### **Serverless**

Serverless mode is ideal when traffic is unpredictable or low. Instead of predefining RU/s, you only pay for the RUs you actually consume. It automatically scales based on demand and does not require capacity planning.

| Feature    | Meaning                   | Best For                               |
| ---------- | ------------------------- | -------------------------------------- |
| Serverless | Pay only for consumed RUs | Testing, development, low traffic apps |

---

![demo](../assets/demo42.png)

### **Apply Free Tier Discount**

The Free Tier option allows you to use Azure Cosmos DB with limited resources at no cost. As shown in your screenshot, selecting **Apply** gives you up to 1000 RU/s and 25 GB of storage free for one account per subscription. This is ideal for learning, testing, or small applications, and it helps reduce your monthly cost.

| Setting   | Selected Value | Purpose                                   |
| --------- | -------------- | ----------------------------------------- |
| Free Tier | Apply          | Provides 1000 RU/s and 25 GB storage free |

---

### **Limit Total Account Throughput**

This option allows you to set a maximum limit on the RU/s that can be provisioned for the account. It helps prevent unexpected charges by restricting how much throughput can be configured. You can modify or remove this limit later if needed.

| Setting          | Selected Value | Purpose                                                |
| ---------------- | -------------- | ------------------------------------------------------ |
| Throughput Limit | Enabled        | Prevents unexpected high billing due to increased RU/s |
