---
title: Microsoft
sidebar_position: 14
---

# Microsoft

Microsoft provides two primary gateways for interacting with its cloud services: **Microsoft Graph API** and **Azure Management API (ARM)**.

-   **Microsoft Graph** is the unified entry point for data and intelligence across Microsoft 365 (Users, Teams, Outlook).

-   **Azure APIs** are used for managing cloud infrastructure (Virtual Machines, Storage, Sentinel).

Think of Microsoft Graph as the API for **people and their work**, while Azure APIs are for **the hardware and services** running your environment.

### Prerequisites for Setup

To begin interacting with any of these APIs, you must have:

1.  **Admin or adequate role within Azure:** Any setup will require you to interact with Azure Entra Applications.

2.  **App Registration:** A registered application in the Entra ID portal to obtain a **Client ID** and **Tenant ID**.

3.  **Permissions:** Appropriate "API Permissions" (for Graph) or "Role Assignments" (for Azure) granted to your application.

* * *

[![Navigating between Azure, Graph, and others](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0FlZDVmYzc3MC0yNjA2LTQ0ZTItYmRiZC0yNjk5NzY2OTBlZmUlM0FNaWNyb3NvZnRfQXp1cmUuc3ZnLnBuZz90YWJsZT1ibG9jayZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZpZD0zMDY5M2EwOC0wYWIwLTgwMTEtOWY0YS1kNWM3Y2YzYTQyZWImY2FjaGU9djImd2lkdGg9MjAw)

Navigating between Azure, Graph, and others](/integrations/microsoft/navigating-between-azure-graph-and-others)

Navigating the ecosystem requires understanding the **Audience (aud)** of your token; a token for `graph.microsoft.com` will not work for `management.azure.com`. Developers must often manage multiple tokens if their workflow involves both user management (Graph) and infrastructure deployment (Azure).

[![Authentication](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0ExOTgwZjdhNy1lYjRhLTQyMDktOTc1ZC04NWRiZjAzMTJhMjAlM0FHcmFwaHRvb2xraXQud2VicD90YWJsZT1ibG9jayZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZpZD0yZjE5M2EwOC0wYWIwLTgwOTQtYTU0Yy1lYmNhYTBiOTkxNjYmY2FjaGU9djImd2lkdGg9MjAw)

Authentication](/integrations/microsoft/authentication)

Authentication is the process of proving your application's identity to Microsoft Entra ID to receive an access token. It ensures that only registered and verified entities can initiate a request to the cloud.

[![Connecting to an Azure Blob Container](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E0MGQyMGI1ZC03OWQ3LTQ5NTYtYTcxMS0zMjFkNTI3MzcyMmIlM0FNaWNyb3NvZnRfQXp1cmUuc3ZnLnBuZz90YWJsZT1ibG9jayZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZpZD0zMDY5M2EwOC0wYWIwLTgwNWEtYjgzMC1jNmY5ZmVjN2RlZmYmY2FjaGU9djImd2lkdGg9MjAw)

Connecting to an Azure Blob Container](/integrations/microsoft/connecting-to-an-azure-blob-container)

Connecting via Mindflow involves using a "Connector" that leverages Azure Storage APIs to automate file uploads or data processing. You will typically need your Storage Account name and either an **Account Key** or a **Shared Access Signature (SAS)** to establish the link.

[![Teams](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0FiNGZlMmYxOS05YjNlLTRlOWMtOGM5Mi04N2NhODI5MzJkNDYlM0FNaWNyb3NvZnRfT2ZmaWNlX1RlYW1zXygyMDE5MjAyNSkuc3ZnLnBuZz90YWJsZT1ibG9jayZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZpZD0zMDY5M2EwOC0wYWIwLTgwYjktYWI3Mi1mMzFlYzI3MmIwYmEmY2FjaGU9djImd2lkdGg9MjAw)

Teams](/integrations/microsoft/teams)

The Teams API (part of Microsoft Graph) allows you to automate channel creation, post messages, and manage membership. It is essential for building bots or "ChatOps" workflows that integrate external triggers directly into a collaboration space.

[![Kusto Query Language (KQL)](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0EyNTZjMjA4My1lZDI4LTQxZmEtYmIzMC03M2M2ODFjZjk0NzQlM0FHcmFwaF9BUElfbG9nby5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9MzA2OTNhMDgtMGFiMC04MGM0LTg5NjItZWRkN2JhMDU4NWVhJmNhY2hlPXYyJndpZHRoPTIwMA==)

Kusto Query Language (KQL)](/integrations/microsoft/kusto-query-language-\(kql\))

KQL is the read-only query language used to explore large datasets in Azure Monitor, Log Analytics, and Sentinel. It is the "SQL of the Microsoft Cloud," enabling you to filter, aggregate, and visualize security and performance data with high speed.

[![OData Query Parameters](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0ExMzc2ZTUxNi02ZjM4LTRjMzctOTM5MS1mMWMxY2M1YTIzZjklM0FHcmFwaF9BUElfbG9nby5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9MzA2OTNhMDgtMGFiMC04MDY2LWFjMjItZDg4YzczZDkzOWNjJmNhY2hlPXYyJndpZHRoPTIwMA==)

OData Query Parameters](/integrations/microsoft/odata-query-parameters)

OData parameters like `$filter`, `$select`, and `$expand` allow you to fine-tune API responses to get only the data you need. Using these parameters reduces network overhead and improves application performance by preventing "over-fetching" of data.

[![Azure Sentinel](https://image-forwarder.notaku.so/aHR0cHM6Ly9taWNyb3NvZnR0b3VjaC5mci9jZnMtZmlsZS9fX2tleS9jb21tdW5pdHlzZXJ2ZXItYmxvZ3MtY29tcG9uZW50cy13ZWJsb2dmaWxlcy8wMC0wMC0wMC0wMC0xNi9zdmdfMkQwMF9henVyZV8yRDAwX3NlbnRpbmVsLnN2Zw==)

Azure Sentinel](/integrations/microsoft/azure-sentinel)

Azure Sentinel (Microsoft Sentinel) uses its own set of APIs to manage security incidents, run hunting queries, and automate threat responses. While it can be accessed via the Azure Management API, many of its security-specific logs are also exposed through the **Microsoft Graph Security API**.

[![Microsoft Purview Audit Log Queries](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0FjODhmYjU5My01MTk4LTQxOGYtYmRjOC03MmYyMDI1Yzc2NzIlM0FHcmFwaF9BUElfbG9nby5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9MzBhOTNhMDgtMGFiMC04MGEyLWFhN2EtZDNhMzNhMjFmOWJmJmNhY2hlPXYyJndpZHRoPTIwMA==)

Microsoft Purview Audit Log Queries](/integrations/microsoft/microsoft-purview-audit-log-queries)

Microsoft provides companies with Purview **Unified Audit Log** (UAL) capabilities to allow them to, besides Purview’s capabilities, to define and run fine-grained queries across their whole Microsoft tenant.

[![Microsoft SharePoint (Files & Sites)](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E5ZTU4ZWM3NC0zNGVlLTQ4OGItYmM2Ny02ODQwZWQ0OGQyZjElM0FpbWFnZXMuanBlZz90YWJsZT1ibG9jayZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZpZD0zMmU5M2EwOC0wYWIwLTgwMmYtYjVkNi1lMTViOWVhY2Q3OWUmY2FjaGU9djImd2lkdGg9MjAw)

Microsoft SharePoint (Files & Sites)](/integrations/microsoft/microsoft-sharepoint-\(files-and-sites\))

Microsoft Graph provides access to **SharePoint sites**, **drives (document libraries)**, and **files**, enabling you to navigate folders, list/download/upload documents, and automate content workflows. Start with prerequisites (authentication, scopes, Site ID), then follow the navigation/file ops and Excel pages depending on your use case.
