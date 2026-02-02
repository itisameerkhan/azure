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
9. **Application Gateway**   🚦 
10. **DNS** 📒
11. **CDN Profiles** 🌍

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

## 3. 📍 IP Addresses

* An IP address is a unique identifier for a device on a network.

* It’s like a house number that allows devices to find and communicate with each other.

* In Azure, you can have two types of IP addresses:

    * Public IP address

    * Private IP address


## 4. 🛡️ Network Security Groups (NSG)

* A Network Security Group (NSG) is a security feature in Azure that allows you to control network traffic to and from your resources.

* It’s like a security guard that checks who enters and leaves a building.

* NSGs can be applied to subnets or individual VMs.

* They use rules to allow or deny traffic based on:

    * Source IP address

    * Destination IP address

    * Port number

    * Protocol (TCP, UDP, ICMP)

## 5. ⚖️ Load Balancers

* A Load Balancer is a service that distributes incoming network traffic across multiple servers so that:

    * No single server is overloaded

    * Application stays available even if one server fails

    * Load Balancer = traffic manager that spreads user requests across multiple servers to ensure high availability and performance.

**Azure Load Balancer** is a cloud service that distributes incoming network traffic across multiple resources, such as virtual machines. It ensures high availability and reliability by balancing the load and directing traffic to the healthiest instances. You can use it for both public and internal traffic, enhancing performance and reducing downtime. This service helps maintain consistent application performance even during high traffic periods.

## 6. 🔥 Azure Firewall

* A Firewall is a security service that inspects, allows, or blocks network traffic based on rules — to protect your Azure environment from unauthorized access and attacks.

* Azure Firewall is a managed, cloud-based network security service that protects your Azure resources from threats.

* It’s like a security guard that checks who enters and leaves a building.

* Azure Firewall can be applied to subnets or individual VMs.

* They use rules to allow or deny traffic based on:

    * Source IP address

    * Destination IP address

    * Port number

    * Protocol (TCP, UDP, ICMP)

## 7. 🚇 VPN Gateway

* A VPN Gateway is a service that allows you to securely connect your on-premises network to your Azure virtual network.

* It’s like a secure tunnel that allows data to travel between your on-premises network and your Azure virtual network.

* VPN Gateway can be applied to subnets or individual VMs.

* They use rules to allow or deny traffic based on:

    * Source IP address

    * Destination IP address

    * Port number

    * Protocol (TCP, UDP, ICMP)


## 8. 🚄 ExpressRoute

* ExpressRoute is a service that allows you to securely connect your on-premises network to your Azure virtual network.

* It’s like a secure tunnel that allows data to travel between your on-premises network and your Azure virtual network.

* ExpressRoute can be applied to subnets or individual VMs.

* They use rules to allow or deny traffic based on:

    * Source IP address

    * Destination IP address

    * Port number

    * Protocol (TCP, UDP, ICMP)


## 9. 🚦 Application Gateway

* Azure Application Gateway is a Layer-7 (HTTP/HTTPS) load balancer designed specifically for web applications.

* Unlike a normal Load Balancer, it understands web traffic (URLs, headers, cookies).

* Azure Application Gateway is a web traffic load balancer that helps you manage traffic to your web applications. 

* Unlike traditional load balancers that route traffic based on IP address and port, Application Gateway makes intelligent routing decisions based on HTTP request attributes like URL paths and host headers.

* For example, you can route requests with `/images` in the URL to servers optimized for images, while routing `/video` requests to servers optimized for video content. This application layer routing gives you more control over how traffic flows to your applications.

![demo](https://learn.microsoft.com/en-us/azure/application-gateway/media/application-gateway-url-route-overview/figure1-720.png)

## 10. 📒 DNS Zones

* **DNS (Domain Name System)** is like the phonebook of the internet. It translates human-readable domain names (like `google.com`) into IP addresses (like `142.250.190.46`).

* **Azure DNS** is a hosting service for DNS domains that provides name resolution using Microsoft Azure infrastructure.

* **DNS Zone:**
    * A DNS zone is a container for the DNS records for a specific domain.
    * For example, if you own the domain `contoso.com`, you create a DNS zone named `contoso.com` in Azure to host all the records (like `www.contoso.com`, `mail.contoso.com`) for that domain.

## 11. 🌍 CDN Profiles

* **CDN (Content Delivery Network)** is a distributed network of servers that can efficiently deliver web content to users.

* **CDN Profile** is a collection of CDN endpoints.

* It caches content (like images, videos, scripts) at edge servers close to the user.

* **Analogy:**
    * Think of it like Amazon delivery centers. Instead of shipping every package from one central warehouse (Origin Server) in New York to everywhere, they keep popular items in local delivery centers (Edge Servers) in every city. When you order, it comes from the nearest center, which is much faster.


