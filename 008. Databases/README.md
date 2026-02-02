# Databases

![deom](https://miro.medium.com/1*17Jv1Dzy0GWDQhgfHEPVZA.jpeg)

## Azure SQL Database

Azure Databases are cloud-based data storage services provided by Microsoft Azure. They allow companies to store, manage, and access application and business data securely without maintaining physical servers. Azure databases are reliable, scalable, and secure, making them suitable for modern applications that require high availability and performance.

## Common Types of Azure Databases

- Azure SQL Database – Used for structured data like tables and records

- Azure Cosmos DB – Used for large-scale, fast, and flexible data storage

- Azure MySQL / PostgreSQL – Used for web and backend applications

## SQL Server in Azure

A **cloud-based offering** of Microsoft SQL Server, integrated within the Azure cloud platform. It provides the functionality of SQL Server with the **scalability**, **flexibility**, and **global presence** of Azure.

### Key Features

- **Fully Managed PaaS**: Available as single databases or managed instances.
- **High Compatibility**: Use PaaS benefits while maintaining near 100% compatibility with SQL Server.
- **IaaS Option**: Run SQL Server on Virtual Machines for full control over the environment.
- **Built-in Analytics**: Facilitates large-scale data storage and analysis.
- **Seamless Integration**: Connects easily with services like **Power BI** and **Azure Data Factory**.

---

## 🌍 Cosmos DB

Azure Cosmos DB is a fully managed NoSQL cloud database service provided by Microsoft Azure. It is designed to store and manage very large amounts of data with high speed, high availability, and global access. Cosmos DB is commonly used in modern applications where data needs to be read and written quickly, such as web apps, mobile apps, and real-time systems. Azure handles scaling, security, backups, and performance automatically, so developers can focus on application logic instead of database management.

**Cosmos DB** is a globally distributed, multi-model database service offered by Microsoft Azure, designed for modern app development.

### Key Features

- **Fully Managed NoSQL**: A fully managed NoSQL database service by Microsoft Azure.
- **Performance**: Designed for scalability, high availability, and low-latency performance.
- **Multi-Model Support**: Supports multiple data models like document, key-value, graph, and column-family.
- **Global Replication**: Automatically replicates data across multiple Azure regions.
- **Availability**: Ensures high availability and data proximity to users worldwide.

### Real-Time Applications

- **IoT Telemetry**: Retail, gaming leaderboards.
- **Globally Distributed Apps**: Social media platforms, e-commerce sites.
- **Large-Scale Data Processing**: Personalized recommendations, real-time analytics.

--- 

## Azure Data Factory

**Azure Data Factory (ADF)** is a cloud-based data integration service that allows you to create data-driven workflows for orchestrating and automating data movement and data transformation.

### Key Concepts

- **Pipelines**: Logical grouping of activities that perform a unit of work.
- **Activities**: Processing steps in a pipeline (e.g., copying data, running a script).
- **Datasets**: Data structures within the data stores, which point to or reference the data you want to use.
- **Linked Services**: Connection strings that define the connection information needed for Data Factory to connect to external resources.

### Why Use Azure Data Factory?

- **ETL/ELT**: Build complex Extract-Transform-Load (ETL) or Extract-Load-Transform (ELT) processes.
- **Data Movement**: Copy data between supported data stores (on-premises and cloud).
- **Orchestration**: Schedule and monitor data processing workflows.
- **Serverless**: Fully managed, serverless data integration service.
