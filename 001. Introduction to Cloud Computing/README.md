# Introduction to Cloud Computing

![demo](https://www.devopsschool.com/blog/wp-content/uploads/2023/12/image-182-1024x577.png)

## What is Cloud Computing?
Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet (“the cloud”) to offer faster innovation, flexible resources, and economies of scale. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Microsoft Azure.

---

## Key Benefits of Cloud Computing

### 1. Cost
Cloud computing eliminates the capital expense of buying hardware and software and setting up and running on-site datacenters—the racks of servers, the round-the-clock electricity for power and cooling, and the IT experts for managing the infrastructure. It adds up fast.

### 2. Speed (Agility)
Most cloud computing services are provided self service and on demand, so even vast amounts of computing resources can be provisioned in minutes, typically with just a few mouse clicks, giving businesses a lot of flexibility and taking the pressure off capacity planning.

### 3. Global Scale
The benefits of cloud computing services include the ability to scale elastically. In cloud speak, that means delivering the right amount of IT resources—for example, more or less computing power, storage, bandwidth—right when they’re needed and from the right geographic location.

### 4. Productivity
On-site datacenters typically require a lot of “racking and stacking”—hardware setup, software patching, and other time-consuming IT management chores. Cloud computing removes the need for many of these tasks, so IT teams can spend time on achieving more important business goals.

### 5. Performance
The biggest cloud computing services run on a worldwide network of secure datacenters, which are regularly upgraded to the latest generation of fast and efficient computing hardware. This offers several benefits over a single corporate datacenter, including reduced network latency for applications and greater economies of scale.

### 6. Reliability
Cloud computing makes data backup, disaster recovery, and business continuity easier and less expensive because data can be mirrored at multiple redundant sites on the cloud provider’s network.

---

## Economic Models: CapEx vs. OpEx

*   **Capital Expenditure (CapEx):** Spending money on physical infrastructure up front, and then deducting that expense from your tax bill over time. Be aware that CapEx has an upfront cost, which has a value that reduces over time.
*   **Operational Expenditure (OpEx):** Spending money on services or products now and being billed for them now. You can deduct this expense from your tax bill in the same year. There's no upfront cost. You pay for a service or product as you use it.

**Cloud computing is typically an OpEx model (Consumption-based model)**, meaning you pay only for the IT resources you use.

---

## Cloud Deployment Models

| Model | Description |
| :--- | :--- |
| **Public Cloud** | Owned and operated by a third-party cloud service provider, which delivers computing resources like servers and storage over the Internet. Microsoft Azure is an example of a public cloud. With a public cloud, all hardware, software, and other supporting infrastructure is owned and managed by the cloud provider. |
| **Private Cloud** | Cloud computing resources used exclusively by a single business or organization. A private cloud can be physically located on the company’s on-site datacenter. Some companies also pay third-party service providers to host their private cloud. A private cloud is one in which the services and infrastructure are maintained on a private network. |
| **Hybrid Cloud** | Combines public and private clouds, bound together by technology that allows data and applications to be shared between them. By allowing data and applications to move between private and public clouds, a hybrid cloud gives your business greater flexibility, more deployment options, and helps optimize your existing infrastructure, security, and compliance. |

---

## Cloud Service Models (IaaS, PaaS, SaaS)

### 1. Infrastructure as a Service (IaaS)
The most basic category of cloud computing services. With IaaS, you rent IT infrastructure—servers and virtual machines (VMs), storage, networks, operating systems—from a cloud provider on a pay-as-you-go basis.
*   **Your Responsibility:** OS, Middleware, Runtime, Data, Applications.
*   **Provider Responsibility:** Virtualization, Servers, Storage, Networking.
*   **Example:** Azure Virtual Machines.

### 2. Platform as a Service (PaaS)
Platform as a service refers to cloud computing services that supply an on-demand environment for developing, testing, delivering, and managing software applications. PaaS is designed to make it easier for developers to create web or mobile apps quickly, without worrying about setting up or managing the underlying infrastructure of servers, storage, network, and databases needed for development.
*   **Your Responsibility:** Data, Applications.
*   **Provider Responsibility:** OS, Middleware, Runtime, Virtualization, Servers, Storage, Networking.
*   **Example:** Azure App Service, Azure SQL Database.

### 3. Software as a Service (SaaS)
Software as a service is a method for delivering software applications over the Internet, on demand and typically on a subscription basis. With SaaS, cloud providers host and manage the software application and underlying infrastructure, and handle any maintenance, like software upgrades and security patching.
*   **Your Responsibility:** Data (and Access/Identities).
*   **Provider Responsibility:** Everything else (Application, Runtime, Middleware, OS, etc.).
*   **Example:** Microsoft 365, Outlook, Salesforce.

---

## The Shared Responsibility Model

As you move from on-premises to cloud models, the responsibility shifts from you to the cloud provider.

| Layer | On-Premises | IaaS | PaaS | SaaS |
| :--- | :---: | :---: | :---: | :---: |
| **Application** | You | You | You | Provider |
| **Data** | You | You | You | Provider |
| **Runtime** | You | You | Provider | Provider |
| **Middleware** | You | You | Provider | Provider |
| **O/S** | You | You | Provider | Provider |
| **Virtualization** | You | Provider | Provider | Provider |
| **Servers** | You | Provider | Provider | Provider |
| **Storage** | You | Provider | Provider | Provider |
| **Networking** | You | Provider | Provider | Provider |

*   **On-Premises:** You manage everything.
*   **IaaS:** You manage the OS and up. Provider manages physical infrastructure.
*   **PaaS:** You manage the applications and data. Provider manages the platform and infrastructure.
*   **SaaS:** You manage your data and user access. Provider manages the application and everything underneath.
