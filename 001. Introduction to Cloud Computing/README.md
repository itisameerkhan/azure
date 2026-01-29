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

### Comparing Deployment Models

| Model | Description | Advantages | Disadvantages | Use Cases |
| :--- | :--- | :--- | :--- | :--- |
| **Public Cloud** | Owned and operated by a third-party provider. Resources are delivered over the Internet and shared by multiple organizations (multi-tenant). | • **Lower Costs:** No hardware purchase required.<br>• **No Maintenance:** Provider manages infrastructure.<br>• **Scalability:** Near-unlimited resources available on demand.<br>• **High Reliability:** Vast network of servers ensuring uptime. | • **Security Concerns:** Shared resources may not meet strict compliance needs.<br>• **Less Control:** You don't own the hardware or control performance tuning.<br>• **Cost predictability:** Can get expensive if not managed correctly. | • Web applications and websites.<br>• Development and testing environments.<br>• Startups needing quick deployment.<br>• SaaS applications. |
| **Private Cloud** | Resources used exclusively by a single business. Can be on-premises or hosted by a third-party service provider. | • **Control:** Complete control over privacy and security.<br>• **Security:** Resources are not shared with others.<br>• **Compliance:** Easier to meet strict regulatory requirements. | • **Higher Cost:** Significant upfront CapEx investment.<br>• **Maintenance:** You are responsible for hardware updates and patching.<br>• **Limited Scalability:** Limited by the hardware you own. | • Financial institutions with strict data regulations.<br>• Government agencies.<br>• Legacy applications requiring specific hardware control.<br>• Large enterprises with stable, predictable demand. |
| **Hybrid Cloud** | Combines public and private clouds, allowing data and apps to move between them. Provides "the best of both worlds". | • **Flexibility:** Run sensitive workloads privately and scale to public cloud for bursts.<br>• **Compliance:** Keep critical data secure while using public cloud for other tasks.<br>• **Transition:** Step-by-step migration to the cloud. | • **Complexity:** More difficult to set up and manage.<br>• **Cost:** Requires maintaining both environments.<br>• **Networking:** Requires robust connectivity between clouds. | • Handling traffic spikes (cloud bursting).<br>• Storing sensitive processing on-premises while using public cloud for analytics.<br>• Gradual cloud migration strategies. |

---

## Cloud Service Models (IaaS, PaaS, SaaS)

### 1. Infrastructure as a Service (IaaS)
IaaS is the most flexible cloud service because it gives you nearly total control over the hardware that runs your application. Instead of buying hardware, with IaaS, you rent it.

*   **Definition:** Renting infrastructure (servers, VMs, storage, networks, OS) on a pay-as-you-go basis.
*   **Analogy:** Renting a car. You drive it, you put gas in it, you choose where to go, but you don't perform the maintenance on the engine.
*   **Common Scenarios:**
    *   **Lift-and-shift migration:** Moving on-prem applications to the cloud with minimal changes.
    *   **Testing and Development:** Quickly setting up and tearing down environments.
    *   **Storage, backup, and recovery:** Efficiently managing data needs.
*   **Your Responsibility:** OS, Middleware, Runtime, Data, Applications.
*   **Provider Responsibility:** Virtualization, Servers, Storage, Networking.
*   **Example:** Azure Virtual Machines, Azure Virtual Networks.

### 2. Platform as a Service (PaaS)
PaaS is designed to support the complete web application lifecycle: building, testing, deploying, managing, and updating. It allows you to focus on the *code* rather than the *plumbing*.

*   **Definition:** Provides a managed environment for developing, testing, delivering, and managing software applications.
*   **Analogy:** R renting a hotel room. You have a place to sleep and amenities, but the housekeeping and maintenance are done for you.
*   **Common Scenarios:**
    *   **Development framework:** Provides a framework that developers can build upon to develop or customize cloud-based applications.
    *   **Analytics or Business Intelligence:** Tools provided as a service to mine data.
*   **Your Responsibility:** Data, Applications.
*   **Provider Responsibility:** OS, Middleware, Runtime, Virtualization, Servers, Storage, Networking.
*   **Example:** Azure App Service, Azure SQL Database, Azure Logic Apps.

### 3. Software as a Service (SaaS)
SaaS is the most complete cloud service model. You are essentially "renting" fully developed software.

*   **Definition:** Delivering software applications over the Internet where the cloud provider hosts and manages the application.
*   **Analogy:** Taking a bus. You just get on and go to your destination; you don't drive or maintain the vehicle.
*   **Common Scenarios:**
    *   **Email and collaboration:** using Outlook and Office 365.
    *   **Customer Relationship Management (CRM):** using Salesforce or Dynamics 365.
*   **Your Responsibility:** Data (and Access/Identities).
*   **Provider Responsibility:** Everything else (Application, Runtime, Middleware, OS, etc.).
*   **Example:** Microsoft 365, Skype, Dynamics 365.

#### Comparison at a Glance

| Feature | IaaS | PaaS | SaaS |
| :--- | :--- | :--- | :--- |
| **Control** | High (Most control) | Medium | Low (Least control) |
| **Maintenance** | Medium (OS patching, etc.) | Low (Platform managed) | None (Provider managed) |
| **Flexibility** | High | Medium | Low |
| **Cost** | Pay-as-you-go (variable) | Moderate | Subscription (fixed) |

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
