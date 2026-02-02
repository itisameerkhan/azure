# Networking

![demo](https://media.istockphoto.com/id/2154887234/photo/futuristic-digital-network-background-people-and-cloud-computing-with-connections-technology.jpg?s=612x612&w=0&k=20&c=mZ9e-TfDny-WfCM9R_wCc8dMNRfcLoWEbqpIGWygdlk=)

**Networking** in Azure means how resources in Azure connect, communicate, and stay secure — with each other, with the internet, and with your office/home network.

## 🧠 Think of it like a city

* VNet → City

* Subnet → Area/colony

* IP Address → House number

* NSG → Security guard

* Load Balancer → Traffic police

* Firewall → City gate security

## 📍 Core Parts of Azure Networking

1. **Virtual Network (VNet)** ☁️

2. **Subnets** 🏘️
3. **IP Addresses** 📍
4. **Network Security Groups (NSG)** 🛡️
5. **Load Balancer** ⚖️
6. **Azure Firewall** 🔥
7. **VPN Gateway** 🚇
8. **ExpressRoute** 🚄
9. **Application Gateway** 🚦
10. **DNS** 📒

---

![demo](../assets/demo2.png)

## 🗺️ 1. Virtual Network

* A Virtual Network (VNet) in Azure is a private, isolated network where your Azure resources communicate securely.

* It’s like your own private cloud network inside Azure.

* You define the IP address range (CIDR block).

* Resources inside VNet can talk to each other using private IPs.

### Whats inside VNet

* Virtual Machines (VMs)

* Kubernetes (AKS)

* Azure Bastion

* Private Endpoints (SQL, Storage, Cosmos DB)

* Application Gateways

* VPN Gateways

---

## 2. 🌆 Subnets

* A Subnet is a smaller network inside a Virtual Network (VNet).

* Subnet = a logical division of a VNet that helps organize, secure, and control network traffic.

* A Subnet is a range of IP addresses inside a VNet.

* It’s like dividing a city into different areas or colonies.

* Each subnet has its own security rules (NSG).

* You can place different types of resources in different subnets.