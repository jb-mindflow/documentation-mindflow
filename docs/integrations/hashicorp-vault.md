---
title: HashiCorp Vault
sidebar_position: 12
---

# HashiCorp Vault

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkZkNmI3NGNjYS0yYTllLTQ0YTItODg4NS03Y2U5ZTc5YWExZjUlMkZpbWFnZTkucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPWFhYzk0NGViLWI0NzctNDRkMi04MjEwLTI3MjI3NjZjNGMwNiZjYWNoZT12MiZ3aWR0aD0yNDA=)

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkY1ZmQ4MDJmNi1kMDgzLTQ3ZDQtYTA0Yi1kZTg5ZDQ3M2Y1YWUlMkZpbWFnZTMucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTZhNmI4Yjg2LWI5MDgtNDFjOS1iYTg0LWIzOTE2YzQ0MjhiMiZjYWNoZT12MiZ3aWR0aD0yNjQ=)

### About Mindflow

Mindflow is an AI-driven automation platform designed for SecOps. It empowers teams to operate at a new level of performance by intuitively automating repetitive mundane tasks and seamlessly orchestrating all their tools. With the largest library of integrated services in the market and revolutionary generative-AI automation, Mindflow makes impactful automation simple and gives back power to IT practitioners.

You can find a **[demo of Mindflow here](https://share.vidyard.com/watch/4H4VkRESpsBBoE4svi1gk6?)**.

### About the Vault Integration

We developed the integration based on the [Vault HTTP API documentation](https://developer.hashicorp.com/vault/api-docs). It is available to all Mindflow users and mutual customers.

![Hashicorp Vault integration in Mindflow](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkZiNGYwN2UxMi01MzhkLTQ1ZjAtOWU0NC03YjU1ZWZjYmFlMWElMkZpbWFnZTQucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTM4NjY0NTZhLTkyM2QtNGNiMi05NDljLWY3OGMyYWE1NWY5YyZjYWNoZT12MiZ3aWR0aD0xMTUy)

Hashicorp Vault integration in Mindflow

### **Authentication**

### Setting up

Before you can create and deploy a playbook in Mindflow, you would need to get the following information from Vault:

1\. **Vault Address**: Vault cluster URL

2\. **Vault Namespace**

3\. **role\_id**

3\. **Secret\_id**

All of this information is available in your organization’s Vault. Head over to a Vault Cluster and fetch the information using the steps below as a quick reference.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkY4Yzk5NjViYy00Y2NhLTRlNjEtODdlYy03YmM4NTQyYWRlOGYlMkZpbWFnZTYucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPWQ1YmU4YzY5LWIyMzYtNDM2OS05ZmI3LWRiNDllZTY1M2EzYyZjYWNoZT12MiZ3aWR0aD0xMTUy)

### Retrieve Token in Mindflow

Use the dedicated built-in step, **Transform Data**, to add the credentials you found using the steps above to retrieve the **token**.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkZhZjIzYzk1ZS1iMjQyLTRkNzYtOTkyOS1iMmU2NGFlZTVkNjAlMkZpbWFnZTEwLnBuZz90YWJsZT1ibG9jayZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZpZD0xOTQ2YzgwMi03Y2Y1LTQ5NDYtYTM2Yi1lMDMyMzYzZTk5ZWMmY2FjaGU9djImd2lkdGg9MTE1Mg==)

### Authentication Vault in Mindflow

Then, configure my Authenticate to Vault step to retrieve the token needed to interact with the endpoints available from the Hashicorp Vault API.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkY0ZDQ5NjZjYi0yMzQ1LTQ1ZDYtYTcyMy03ZjQ3YjFhZDMzMzclMkZpbWFnZTcucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTUzY2NlNmRlLWRiNGUtNDliMC04YzA4LWQ0ZGI1OWY0ZWU1OSZjYWNoZT12MiZ3aWR0aD0xMTUy)

When the step is run, it will return the token.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkZjOTVhMWJlZS1iOGI2LTRmZmYtYTg2YS1mZDZjM2YwNzBiODglMkZpbWFnZTIucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPWRmNGJkMmQwLWVjYzctNGQyNS1iOTA4LTRjZGU1NGM0MmE4ZiZjYWNoZT12MiZ3aWR0aD0xMTUy)

This token can now be used in Mindflow to authenticate and execute flows.

### **Example Use Cases**

### 1\. Generate Temporary AWS Credentials for Secure API Access

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkYxY2ZhMjNjMC00YzdlLTRkZDEtOGZhZS1mYzgwMWQyNjgxNDUlMkZpbWFnZTUucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPWU4MzgxOTc0LTljNDUtNDNhMS05YWUyLTRjMmVjNDJhZTliYyZjYWNoZT12MiZ3aWR0aD0xNDAw)

**Overview:** When a user sends a command, a Slack webhook initiates the flow. Vault generates temporary AWS credentials, updates AWS configurations, and logs the action in Jira. Confirmation is sent back to Slack.

**Benefits:** This use case enhances security by automating the issuance of temporary credentials, reducing manual errors. It logs all changes for compliance and auditing.

### 2\. Secure Jira Ticket Creation via Slack Using Vault

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkY1YjU2MGU1NS0xN2FkLTRiZTUtODU2OC1hMDBiNmM5YjI4ZTclMkZpbWFnZTgucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPWY0ZWZmNTk1LTY4ZTMtNGU4NS1hNDYzLTJjYWZkNGJmYzdkMyZjYWNoZT12MiZ3aWR0aD0xNDAw)

**Overview:** A Slack command triggers the flow to authenticate with Vault, retrieve a Jira token, and create a Jira issue, ensuring no credentials are stored.

**Benefits:** Increased security by centralized token management by streamlining issue reporting directly from Slack. This use case eliminates the need to store sensitive credentials.

### 3\. Monitor HashiCorp Vault Replication Status via Slack

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkYxZmNiODIzOC1jNjVmLTRhZTQtYWZiNC1hNmQxMmQ5NzJjMWMlMkZpbWFnZTExLnBuZz90YWJsZT1ibG9jayZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZpZD04M2ExM2Y2MS00ZDhiLTQwMjgtOTY0YS0xOTllNDY1YjI3Y2MmY2FjaGU9djImd2lkdGg9MTQwMA==)

**Overview:** The flow regularly checks Vault replication statuses, identifies issues, and reports them through Slack. Error handling is included to manage potential failures.

**Benefit:** Immediate notifications in Slack streamline incident response and quick remediation of replication issues.
