---
title: MCP Client
sidebar_position: 13
---

# MCP Client

**MCP** stands for **Model Context Protocol** it allows AI models to interact with external tools and data. This documentation explains how to implement **MCP** within Mindflow. To ensure scalability and protocol strictness, we use a modular **SWARM agent** approach that decouples intent, serialization, and transport.

## Architecture

To act as an MCP Client, we use three distinct components, each with a well-defined responsibility:

-   **The master agent:** Interacts directly with the user, interprets intent and orchestrates the overall workflow. It determines when a call to an MCP server is required and delegates accordingly to the `MCP expert` agent.

-   **The MCP expert agent:** Acts as a serializer, translating natural language into **JSON-RPC 2.0** compliant payloads. It understands the MCP protocol and prepares structured requests ready to be sent to the appropriate server through one of the `MCP transport` agents.

-   **The MCP transport agent:** Handles the HTTP transport layer that sends the requests to the target MCP server with the required authentication.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzc2MGM4YjQ1LTU1MGQtNDI3Ny05ZDhiLTFjMTA5NzlhMjQxMy9TY3JlZW5zaG90XzIwMjYtMDMtMDJfYXRfMTIuMDUuMTUucG5nP3RhYmxlPWJsb2NrJmlkPTMxOTkzYTA4LTBhYjAtODA0ZS05YjRkLWYzODQyOGJjODQ1ZSZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzU0MTY0NTgyMDcmc2lnbmF0dXJlPUpVaGdPQTQ4YTBKbVFHWnM3M1ZLbk10QkNPb0pkblZkRkFRbEY5RzRWZEk=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

### 1\. The MCP expert

This agent functions as a **Protocol Transformer**. Its sole responsibility is to ensure the output matches the MCP specification.

1.  You need to create a new SWARM agent in Mindflow name it `MCP expert`

2.  Add a **Flowhook Trigger,** add two properties which are the **action** (what I need to do) and **the MCP Server** (the target server).

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzE4ZjM2ZmNmLTYyOGMtNDkzNC1hN2Y2LWI2NjQ4ZGY0OGQzYy9TY3JlZW5zaG90XzIwMjYtMDItMjdfYXRfMTEuNTMuNDkucG5nP3RhYmxlPWJsb2NrJmlkPTMxOTkzYTA4LTBhYjAtODA2MC1iYjc2LWNjZDg4OTgyMGU4NSZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzU0MTY0NTgyMzUmc2lnbmF0dXJlPWJNUW5PZkhtSFRGclFuVjhzV28zOHdsNUVOTlBDMl9tMV93VFM4dmlUMHc=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

3.  Add an AI··Task and paste the following prompt:

### **Orchestrator system prompt**

markdown

`#Role You are an MCP-Orchestrating agent. Process user prompts, determine required actions, select the correct MCP server, and execute the appropriate tools.  #Step 1: Parse the user prompt Extract: Required Action, Required Data, and Target MCP Server.  #Step 2: Validate server availability If no server is found, return: {"error": {"code": "MCP_SERVER_NOT_FOUND", ...}}.  #Step 3: MCP Protocol lifecycle  1. **Discover capabilities:** List mandatory tools. 2. **Select the correct tool:** Validate inputs against the discovered schema. 3. **Call the tool:** Generate the correct JSON-RPC payload.  **Example payload:**  {   "jsonrpc": "2.0",   "method": "`<method_name>`",   "params": { "`<param>`": "`<value>`" },   "id": "`<unique_id>`" }  #Output Return ONLY a JSON object with the result. No markdown, no prose.`

:::note
💡
:::note
This agent template is available in our agent library : [https://mindflow.io/use-cases/mcp-expert](https://mindflow.io/use-cases/mcp-expert)
:::
:::

### 3\. The MCP transport agent

Once the `MCP expert agent` has generated the JSON-RPC payload, you need a way to send it to your server.

**Resources:** Link the `MCP expert` AI··Task to the `MCP transport` agents.

**Credentials**: You must add your credentials into your environment so the server can authenticate.To do this use the service: `HTTP` and refer to the documentation of the tool.

1.  Create a second SWARM agent named **MCP transport**.

2.  Add a **Flowhook Trigger** you need to add one property which is the **payload** (retrieve from the MCP expert)

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzkxY2QyNDQ0LTNhYjctNDIxNi1hNGFhLTdlNjI4MzBkYWQyZi9TY3JlZW5zaG90XzIwMjYtMDItMjdfYXRfMTEuMjQuMDAucG5nP3RhYmxlPWJsb2NrJmlkPTMxOTkzYTA4LTBhYjAtODA4ZC1hMmM2LWQ3Yzk3ODQyYmE1OCZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzU0MTY0NTgyMTkmc2lnbmF0dXJlPVFYQ0NNZmoyRDIzTFFHNDNURGRHUkZwNXdXSFN5N040Uy1Sb2I4cWZLSm8=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

3.  Configure this agent with an **HTTP Request** action.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmL2MwNjEzYzhlLWEwM2YtNDNiYS04MGZkLWE5NWRmNDFjMGFkNi9TY3JlZW5zaG90XzIwMjYtMDItMjZfYXRfMTYuNTcuMTcucG5nP3RhYmxlPWJsb2NrJmlkPTMxOTkzYTA4LTBhYjAtODBhNy1iMDQyLWY0NzIxMzA1NWU4YSZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzU0MTY0NTgyMTcmc2lnbmF0dXJlPUItaGR4X1RiYzFYdlc1ZUhaVEhNZ0E5N2oxVEVZQXZScWlsNFptS1UwRzA=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

-   **Method:** `POST`

-   **URL:** Your MCP Server endpoint (local or hosted).

-   **Body:** Pass the JSON output directly from the Orchestrator.

4.  At the end add a **Success** step with the body of the HTTP response.

:::note
💡
:::note
This agent template is available in our agent library : [https://mindflow.io/use-cases/agent-mcp-transport-agent-github](https://mindflow.io/use-cases/agent-mcp-transport-agent-github)
:::
:::

### 4\. The master agent

At the end you will need a master agent to orchestrate all your SWARM agent. Add a prompt which explain **how to orchestrate your SWARM agents** and what do you want from them. You will need to add these resources:

markdown

`#RESOURCES Action: /{Input Message} MCP server: {TOOL}`

:::note
💡
:::note
You can use [this](https://docs.mindflow.io/guides/building-flows/aitask:-prompt-guidelines) documentation to write a clear prompt.
:::
:::

## Multi-server architecture

For generic or large-scale use cases involving multiple external tools _(e.g., GitHub, Notion, Slack)_, a single-agent approach can lead to context bloat and decreased reliability.

We recommend a **distributed swarm** structure for example:

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzBkMWRhNTYwLTRjNTktNGQ3YS1iMjVmLWU3ZjUyOWQ2ZDQ4NC8yNGQwMjQwZS04OTAwLTQ4MjktOWM4Zi1jNWNlYWI1N2Y5NzQucG5nP3RhYmxlPWJsb2NrJmlkPTMxOTkzYTA4LTBhYjAtODAzYi1iOTIxLWQ2ZDNkOTM5NWQzZiZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzU0MTY0NTgyMjEmc2lnbmF0dXJlPVdUSmZLSzg2NVRtVFB2VjEwZXlYSEFhVExoVl9xZUFMbUVQWkw1RkJ2WU0=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

### The modular setup

-   **master agent:** Acts as the primary interface. It maintains a high-level catalog of available s**ub-agents** (one for each MCP Server).

-   **Dedicated MCP expert sub-agents:** Instead of one generic expert, create specialized agents (e.g., `MCP-GitHub`, `MCP-Notion`).

-   **Logic:** Each sub-agent contains a generic **MCP expert** prompt.
-   **transport:** Each is coupled with a specific **MCP transport agent** containing the credentials and endpoints for that service.

### Why use this approach?

1.  **Context optimization:** The `MCP expert` only receives the schema and transport logic for the specific server it is calling. This prevents "Context Pollution" and reduces token costs.

2.  **Orchestration clarity:** From the master agent's perspective, it sees a clean list of tools. It doesn't need to manage the underlying JSON-RPC complexity for every single server at once.

3.  **Portability:** You can easily share specific "bundles" of MCP servers across different workflows or teams without exposing unrelated credentials.
