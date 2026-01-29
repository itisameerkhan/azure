# ☁️ Azure Core Services

![Core Azure Services](../assets/demo1.png)

The Azure Platform provides a vast array of services, but they can be broadly categorized into four core pillars: **Compute, Networking, Storage, and Databases.**

## 💻 1. Compute Services
Compute services are the backbone of any application, providing the processing power (CPU and Memory) needed to run your code.

*   **Virtual Machines (VMs):** IaaS. Windows or Linux virtual servers. You have full control over the OS and software.
    *   *Use Case:* Hosting custom applications, lift-and-shift migrations.
*   **App Service:** PaaS. A fully managed platform for building, deploying, and scaling web apps and APIs.
    *   *Use Case:* Hosting a standard React, Node.js, or .NET web application without managing servers.
*   **Azure Functions:** Serverless. Run small pieces of code (functions) without worrying about application infrastructure.
    *   *Use Case:* Processing background tasks, responding to triggers (like a database change or an HTTP request).

## 🌐 2. Networking Services
Networking services connect your cloud resources to each other and to the outside world.

*   **Virtual Network (VNet):** Your private network in the cloud. It isolates your resources securely.
    *   *Use Case:* Connecting VMs and databases securely so they can talk to each other but not the public internet.
*   **Load Balancer:** Distributes incoming network traffic across multiple servers (VMs) to ensure high availability and reliability.
    *   *Use Case:* Spreading user traffic across 3 web servers so if one fails, the others take over.
*   **VPN Gateway:** Sends encrypted traffic between an Azure virtual network and an on-premises location (your office) over the public internet.
    *   *Use Case:* Connecting your corporate office network to your Azure resources securely.

## 💾 3. Storage Services
Azure Storage offers durable, highly available, and scalable cloud storage.

*   **Blob Storage:** Object storage for massive amounts of unstructured data (text or binary data).
    *   *Use Case:* Storing images, videos, documents, and backups.
*   **File Storage (Azure Files):** Fully managed file shares in the cloud that are accessible via the industry-standard SMB protocol.
    *   *Use Case:* Migrating on-premise file servers to the cloud; shared storage for legacy apps.
*   **Disk Storage:** Block-level storage volumes managed by Azure and used with Azure Virtual Machines.
    *   *Use Case:* The "hard drive" (OS disk or Data disk) for your Virtual Machines.

## 🗄️ 4. Database & Analytics Services
Managed database services provide scalable, secure, and fully managed data storage, while analytics services help you gather, store, process, analyze, and visualize data of any variety, volume, or velocity.

*   **Azure SQL Database:** PaaS. A fully managed relational database engine based on the latest stable enterprise edition of SQL Server.
    *   *Use Case:* Modern cloud applications needing a relational database (rows and columns).
*   **Cosmos DB:** A globally distributed, multi-model database service (NoSQL).
    *   *Use Case:* Applications needing single-digit millisecond response times and global scale (e.g., gaming, IoT).
*   **Azure Database for MySQL:** PaaS. A fully managed MySQL database service.
    *   *Use Case:* LAMP stack applications (Linux, Apache, MySQL, PHP) or WordPress sites.
*   **Azure Synapse Analytics:** An enterprise analytics service that brings together big data and data warehousing.
    *   *Use Case:* Running complex queries across petabytes of data.

## 🤖 5. AI and Machine Learning
Azure provides a range of services to build, deploy, and manage AI models.

*   **Azure Machine Learning:** A cloud-based environment used to train, deploy, automate, manage, and track ML models.
    *   *Use Case:* Data scientists building custom predictive models.
*   **Azure AI Services (formerly Cognitive Services):** Pre-built APIs that enable your apps to see, hear, speak, understand, and interpret user needs.
    *   *Use Case:* Adding facial recognition, language translation, or sentiment analysis to your app without being an ML expert.

## 🔑 6. Identity
Identity services help you manage user identities and access control.

*   **Azure Active Directory (Azure AD) / Microsoft Entra ID:** Microsoft's cloud-based identity and access management service. It helps your employees sign in and access resources.
    *   *Use Case:* Single Sign-On (SSO) for thousands of cloud SaaS applications like Office 365, Salesforce, and your own custom apps.
    *   *Key Features:* Multi-Factor Authentication (MFA), Conditional Access.

## 🛠️ 7. Management
Tools to help you monitor, manage, and secure your Azure resources.

*   **Azure Portal:** The web-based console for managing your subscription and resources.
*   **Azure Monitor:** Collects, analyzes, and acts on telemetry data from your Azure and on-premises environments.
    *   *Use Case:* Detecting performance issues or errors in your applications.
*   **Cost Management:** Helps you monitor cloud spending and optimize costs.


---

# 💻 Azure Compute Service Options

Azure offers a wide range of compute services to host your applications. Here is a breakdown of the key services found in the Azure ecosystem:

![Compute Options](https://media.licdn.com/dms/image/v2/D4E12AQGZQbugeoIOkQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1683365228956?e=1771459200&v=beta&t=N6OH3mwxOxuK_psd40e5XbMRfyMlSljeCLlEyrNFwiw)

### 🖥️ 1. **Virtual Machine (VM)**
*   **Type:** IaaS (Infrastructure as a Service)
*   **Description:** A dedicated virtual server where you have full control over the Operating System (Windows/Linux) and installed software. You are responsible for patching and maintenance.
*   **Best For:** Migrating apps that require custom OS configurations or full control.

### 🌐 2. **Azure App Service**
*   **Type:** PaaS (Platform as a Service)
*   **Description:** A fully managed HTTP-based service for hosting web applications, REST APIs, and mobile backends. It handles scaling, load balancing, and patching automatically.
*   **Best For:** Hosting standard web apps (.NET, Java, Node.js, Python) without managing servers.

### ⚡ 3. **Azure Functions (Function Apps)**
*   **Type:** Serverless (FaaS - Function as a Service)
*   **Description:** Allows you to run small pieces of code (functions) responding to events (triggers) without worrying about the underlying infrastructure. You pay only when the code runs.
*   **Best For:** Event-driven architecture, background tasks, file processing.

### ☸️ 4. **Azure Kubernetes Service (AKS)**
*   **Type:** Container Orchestration (PaaS)
*   **Description:** A managed Kubernetes service that simplifies deploying, managing, and scaling containerized applications using Kubernetes.
*   **Best For:** Complex, multi-container microservices architectures requiring full orchestration capabilities.

### 📦 5. **Azure Container Instances (ACI)**
*   **Type:** Serverless Containers
*   **Description:** The fastest and simplest way to run a container in Azure, without managing any virtual machines or adopting a higher-level service.
*   **Best For:** Simple applications, task automation, and build jobs.

### 🐳 6. **Azure Container Apps**
*   **Type:** Serverless Containers
*   **Description:** A fully managed serverless container service built for microservices. It supports dynamic scaling (including scale to zero) based on HTTP traffic or event triggers (KEDA).
*   **Best For:** Microservices that need serverless scaling characteristics.

### 🍃 7. **Azure Spring Apps**
*   **Type:** PaaS
*   **Description:** A fully managed service for Spring Boot apps. It abstracts away the complexity of infrastructure management for Java Spring developers.
*   **Best For:** Enterprise Java Spring Boot applications.

### 🔢 8. **Azure Batch**
*   **Type:** Job Scheduling / HPC
*   **Description:** A platform service for running large-scale parallel and high-performance computing (HPC) batch jobs efficiently.
*   **Best For:** Image rendering, financial modeling, molecular simulation.

### 🕸️ 9. **Azure Service Fabric**
*   **Type:** Distributed Systems Platform
*   **Description:** A distributed systems platform that makes it easy to package, deploy, and manage scalable and reliable microservices and containers. (Both stateful and stateless).
*   **Best For:** Building microservices running on Windows/Linux with strict consistency requirements.

### 🧢 10. **Azure Red Hat OpenShift**
*   **Type:** PaaS (Managed OpenShift)
*   **Description:** A jointly managed service by Microsoft and Red Hat that provides fully managed OpenShift clusters on Azure.
*   **Best For:** Enterprises already using OpenShift on-premises looking to extend to the cloud.