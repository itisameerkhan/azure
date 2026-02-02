# Storage 

![demo](https://www.c-metric.com/wp-content/uploads/2020/02/Azure_Storage.jpg)

In Azure, the term **"Storage type"** refers to the different types of storage services offered by Azure to store data. These types of storage services vary in their performance, durability, and cost characteristics, and are designed to meet specific data storage needs.

## Types of Storage in Azure

1. **Azure Blob Storage**

2. **Azure File Storage**
3. **Azure Queue Storage**
4. **Azure Table Storage**
5. **Azure Disk Storage**

## 📦 Azure Blob Storage

Blob storage is a non-relational object storage service in the cloud, used for unstructured data such as images, audio, video, and documents. It provides scalable, durable, and highly available data storage with low latency and high throughput. Blob storage can be accessed through REST APIs or client libraries for easy integration with other applications.

## Key Features of Blob Storage

- It can store and serve unlimited amounts of unstructured data.

- Offers high durability through automatic and configurable data replication.
- Provides secure and fast access to data through HTTP/HTTPS and REST APIs.
- Supports multiple data types including block blobs, append blobs, and page blobs.
- Pay-as-you-go pricing based on data usage and storage.
Can integrate with other Azure services, such as Azure Functions and Azure Data Lake.
Supports encryption of data at rest and in transit, and also role-based access control.

## Applications of Blob Storage

- Storing and serving large files such as images, audio, and video.

- As a highly durable data storage, Blob storage can be used to store backup data.
- Storing large data sets for processing and analysis with tools such as Azure Data Lake.


---


## 📁 Azure File Storage 

Azure File Storage is a cloud service in Microsoft Azure that provides a fully managed shared file system in the cloud. It allows you to store files and folders just like a traditional file server, but without maintaining any physical hardware. Multiple systems—such as Azure Virtual Machines, on-premises servers, and user devices—can access the same files at the same time, making it ideal for shared drives and legacy applications.

## Key Features of File Storage

- Multiple replicas of data are maintained to ensure data availability even in the event of hardware failures.

- It can store and serve unlimited amounts of data.

- Supports encryption of data in transit and at rest, and role-based access control.

- It can be used with other Azure services, such as virtual machines and Azure Functions.

- Can be accessed from anywhere over SMB, REST APIs, or client libraries.

- Pay-as-you-go pricing based on data usage and storage.

## Applications of File Storage

- Providing network file shares for cloud-based applications.

- Migrating on-premises file servers to the cloud.

- Storing application data, such as user profiles, documents, and images.

--- 

## 💬 Azure Queue Storage

Queue storage in Azure is a fully managed, cloud-based service for storing and retrieving large numbers of messages. It is used to build asynchronous, loosely-coupled, scalable, and reliable applications by allowing communication between microservices.

## Key Features of Queue Storage

- Can store and retrieve millions of messages.

- Offers high durability through automatic and configurable data replication.

- Provides secure and fast access to messages through REST APIs or client libraries.

- Supports asynchronous communication between microservices to handle workloads in parallel.

- Pay-as-you-go pricing based on data usage and storage.
It can be integrated with other Azure services, such as Azure Functions and Azure Event Grid.
Supports data encryption in transit and at rest, and role-based access control.

## Applications of Queue Storage

- Queues can schedule and manage tasks in a scalable and reliable manner.

- By distributing tasks across multiple consumers, queues can be used to balance workloads and distribute processing.

- Queues can be used to decouple communication between microservices, allowing for independent scaling and maintenance of each service.

---

## ⏹️ Table Storage

Table storage in Azure is a NoSQL key-value store for semi-structured data, designed for use with structured data that doesn't fit well into a traditional relational database. It provides a simple, scalable, and cost-effective way to store and retrieve large amounts of structured data.

## Key Features of Table Storage

- Can store and retrieve billions of entities.

- Supports schemaless data storage, allowing for flexible and evolving data structures.

- Offers fast and predictable query performance for key-value and structured data.

- Pay-as-you-go pricing based on data usage and storage.

- Provides secure and fast access to data through REST APIs or client libraries.

- It can be integrated with other Azure services, such as Azure Functions and Azure Event Grid.

- Supports data encryption in transit and at rest, and role-based access control.

## Applications of Table Storage

- Storing structured data, such as product catalogs, user profiles, and event logs.

- Storing session state for web applications and services.

- Storing and processing data for real-time analytics and reporting.

---

## 💾 Disk Storage

Azure Disk storage is a durable, high-performance, and highly available storage solution for virtual machines (VMs) in Azure. It provides disk-based storage volumes for Azure VMs, allowing VMs to persist data even if the underlying VM instance is deleted.

## Key Features of Disk Storage

- Offers high durability through automatic and configurable data replication.

- Provides fast and predictable disk performance, with low latency and high throughput.
- Can scale up to provide additional storage capacity as needed.

- Pay-as-you-go pricing based on data usage and storage.

- Can be easily attached to and detached from VMs, allowing for flexible storage management.

- Supports encryption of data in transit and at rest.

## Applications of Disk Storage

- Storing and managing data for Azure VMs, including operating system disks and data disks.

- Storing and managing data for databases, such as SQL Server, Oracle, and NoSQL databases.

- Storing and managing data for applications, such as web applications, mobile applications, and big data applications.

---