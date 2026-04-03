---
title: What is a Swarm of Agents?
sidebar_position: 12
slug: "/guides/building-flows/aiswarms:-multi-agent-orchestration"
---

# What is a Swarm of Agents?

This page covers everything you need to get started with AI··Swarm.

A swarm of agents is a group of AI or human agents working together to solve a problem.

This page focuses on one specific swarm pattern: _Orchestrator/Workers_. In this configuration, one agent receives a problem and delegates it—or parts of it—to workers.

:::note
💡
:::note
**Common Agentic Swarm Patterns**

-   **Orchestrator/Workers:** A central orchestrator agent delegates tasks to specialized worker agents. The orchestrator coordinates the overall workflow while workers handle specific subtasks.

-   **Hierarchical:** Multi-level organization where agents are arranged in layers. Higher-level agents supervise and coordinate lower-level agents, creating a management structure.

-   **Peer-to-Peer:** Agents collaborate directly with each other without a central coordinator. Each agent can communicate and negotiate with others to solve problems collectively.

-   **Pipeline:** Sequential processing where agents are arranged in a chain. Each agent performs a specific transformation or analysis before passing results to the next agent.

-   **Market-Based:** Agents bid for tasks using auction mechanisms. Tasks are allocated based on agent capabilities, availability, and bid prices.

-   **Blackboard:** Agents share a common knowledge space (the "blackboard"). Multiple agents can read from and write to this shared space, enabling collaborative problem-solving.

-   **Consensus:** Agents vote or negotiate to reach agreement on decisions. Useful when multiple perspectives need to be reconciled or when validation is required.

-   **Debate:** Agents argue different positions to explore a problem space. Through structured argumentation, the swarm arrives at well-reasoned conclusions.
:::
:::

Mindflow supports all these patterns by allowing you to mix no-code automation with AI··Tasks to compose agentic workflows. This means you can combine fuzzy logic (LLM-driven decisions) with deterministic logic (imperative steps), creating hybrid systems that leverage both AI reasoning and structured automation. Whether your workflow is purely LLM-driven, purely imperative, or a blend of both, Mindflow provides the flexibility to orchestrate those complex agentic behaviors.

# Build time

To understand how this works, let's build a simple example.

We'll create two flows:

-   The orchestrator

-   The worker (Mathematics teacher)

This modular approach lets you easily add more workers based on the job's requirements.

## The Worker

Name and describe this flow clearly—the LLM uses this information to make decisions.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzY2MDdjYTVlLWNhMDgtNDhmOS05M2VjLThlYmJmMGI1OTliYi9pbWFnZS5wbmc_dGFibGU9YmxvY2smaWQ9MmNiOTNhMDgtMGFiMC04MDMzLTgyYWMtZmY0ZjQ0ZDQ4NWQyJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmV4cGlyYXRpb25UaW1lc3RhbXA9MTc3NTI0MTQ5ODU4OSZzaWduYXR1cmU9Y3RPbkdGRzRfUEJBenpRSmRYekZkM1ljWTVwQVJrOWpNNjFtWXoxaTVNUQ==.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

Here's the flow to build:

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmL2E5ODNmODA0LWRiMDQtNDQyYS1iZjU3LTBlMzI1MmM4MzJhZi9pbWFnZS5wbmc_dGFibGU9YmxvY2smaWQ9MmNiOTNhMDgtMGFiMC04MDZlLWJhNmUtZWJkNGJjY2ExYzRiJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmV4cGlyYXRpb25UaW1lc3RhbXA9MTc3NTI0MTQ5ODU4OSZzaWduYXR1cmU9NzJjT0VndWRRc2xqMVFza3k5eG9XTmlranAxYjNjcTYwci1ESUExaWs1MA==.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

This flow consists of three steps:

-   a _Flowhook_

-   an _AI··Task_

-   a _Success_

To make a flow callable by an _AI··Task_ (or by another flow), include a _Flowhook_ as the first step and a _Success_ as the last step. These steps define the flow's contract—specifying the expected input and the data to be returned.

:::note
⚠️
:::note
**Name and describe this information clearly, as the LLM uses it to make inferences.**
:::
:::

Here are the details of each step:

-   The _Flowhook_ (defines the expected input)

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmL2FhMDNjYzU1LTllOWYtNDAyOS05MTgzLTNjNWRjN2EwN2IzYy9pbWFnZS5wbmc_dGFibGU9YmxvY2smaWQ9MmNiOTNhMDgtMGFiMC04MDFlLTljOTctZDllN2FlZDBiZjFkJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmV4cGlyYXRpb25UaW1lc3RhbXA9MTc3NTI0MTQ5ODU5OSZzaWduYXR1cmU9MElubWU1TnF0TFVycVNGQUhMbFMxWHAySmlySnVaeEdTNzZMNzFCZC1CUQ==.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

-   The _AI··Task_

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzc1ZDVhOWE4LWE1ZTQtNGNmYS1iMmE5LTNiMmY3MTc5Y2NkYy9pbWFnZS5wbmc_dGFibGU9YmxvY2smaWQ9MmNiOTNhMDgtMGFiMC04MDhjLThhY2UtZTQzMGJkY2Y0NDU5JnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmV4cGlyYXRpb25UaW1lc3RhbXA9MTc3NTI0MTQ5ODU4OSZzaWduYXR1cmU9Y1lBN3dUaUZZRXdDNThGZ2x3X2hIcXpna0dNVklYYWF5S3h5UXRMOWRnYw==.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

-   The _Success_ (defines the output)

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmL2EzM2UwMjcwLWM1MzktNGE1MC1iODMzLWY1MjQwOTI0YWVlZi9pbWFnZS5wbmc_dGFibGU9YmxvY2smaWQ9MmNiOTNhMDgtMGFiMC04MGRmLWJiOWUtZGU0ZjY3OTg4ODNmJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmV4cGlyYXRpb25UaW1lc3RhbXA9MTc3NTI0MTQ5ODU5OSZzaWduYXR1cmU9aTd0SE9GY1VTVVhyVFlabHdJbmNBYVJDdDdCRjdZSlN4NlhIZjZrWFFJWQ==.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

## The Orchestrator

Start by creating the Orchestrator flow.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmL2I5ZGQ1NTY0LWZhMjMtNGNhOS04MTg1LTkzMTljNjYzM2Y1Ni9pbWFnZS5wbmc_dGFibGU9YmxvY2smaWQ9MmNiOTNhMDgtMGFiMC04MDNmLTk2YWMtZjQyZGMzZDQwMzRjJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmV4cGlyYXRpb25UaW1lc3RhbXA9MTc3NTI0MTQ5ODU4OSZzaWduYXR1cmU9TzJGRl95Q2thREdvOG8wLXN2bGRzLUE2cjZqekt1Tk0zNk9BUzJvS3dPdw==.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

Here's the flow to build:

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmL2MwNzA4ZTUwLTRjYWYtNDM1Ny05YjFiLTZhNzE4OWQwNjYyYS9pbWFnZS5wbmc_dGFibGU9YmxvY2smaWQ9MmNiOTNhMDgtMGFiMC04MGUzLTkzYzAtZjkzM2FmNWJiYTc3JnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmV4cGlyYXRpb25UaW1lc3RhbXA9MTc3NTI0MTQ5ODU5OSZzaWduYXR1cmU9c1UxT2NDaGhsQlNkX3V4aE5BNHk3Y0NodlNCV1V2SjdwbGZ6bWh1Mm1Cbw==.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

This flow includes a simple AI··Task with a model and a prompt.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzY0YzAxMzc2LTJlMmYtNGUxNy1iYjZmLWRkZDc5NmJlNjFmZi9pbWFnZS5wbmc_dGFibGU9YmxvY2smaWQ9MmNiOTNhMDgtMGFiMC04MDc4LWJlZmQtZTVmOGM5ZTM3ZGJmJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmV4cGlyYXRpb25UaW1lc3RhbXA9MTc3NTI0MTQ5ODU5OSZzaWduYXR1cmU9ejB5RlRWQlFvaXI0M2thaG1fdHA3ay1MZDVZTTlFa3dYNVMtXzVuaS1XWQ==.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

An Agent has been added to help it complete its mission.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmL2ExNjFiYzljLWVjM2UtNDUyOS05MDk0LTVkZDI5ZDQ1N2YwMC9pbWFnZS5wbmc_dGFibGU9YmxvY2smaWQ9MmNiOTNhMDgtMGFiMC04MDEyLWI5OWItZGQzN2JhZmEzN2IwJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmV4cGlyYXRpb25UaW1lc3RhbXA9MTc3NTI0MTQ5ODU5OSZzaWduYXR1cmU9OW50V3lFdDVNbHIxMVpQT25RT2w5cTUwZTJHU1Rncld1MEZXVl8wRzlCWQ==.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

# Run time

## The Orchestrator

After running the Orchestrator, you can see in the log that the worker was called to solve the problem.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzJhNmE0YTE3LTk0N2ItNDhjMy1iZDYwLWMxYTAyNTkzZTVmMi9pbWFnZS5wbmc_dGFibGU9YmxvY2smaWQ9MmNjOTNhMDgtMGFiMC04MDkzLTk1YjMtYzUwNTc3Yjg5N2NjJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmV4cGlyYXRpb25UaW1lc3RhbXA9MTc3NTI0MTQ5ODU4OSZzaWduYXR1cmU9V3NudGU0WTRUd1NScjFraklLVTBnUVI2dm4tV0s1d19TdXhacFZGOTRNMA==.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

You can dive deeper to see the exact query and the worker's response.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmL2ZlM2Y1OTBmLWVkNTctNDVlNC1hZGQ3LWQzYjY4Zjc3OGU0MS9pbWFnZS5wbmc_dGFibGU9YmxvY2smaWQ9MmNjOTNhMDgtMGFiMC04MDg5LWE4NjYtZWRhZTViYjdmNmY3JnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmV4cGlyYXRpb25UaW1lc3RhbXA9MTc3NTI0MTQ5ODU4OSZzaWduYXR1cmU9LWk2eG5sTVdDSFczeDB3WHRvMTFTeEpxeE1IRldQZExKSWVpWWRkTkVsdw==.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmL2E2NDIwOGI3LTc1ZDktNGYwMi1iN2E3LWU0NTMwYzdiYzY5Ni9pbWFnZS5wbmc_dGFibGU9YmxvY2smaWQ9MmNjOTNhMDgtMGFiMC04MGI5LTljOWUtZGE1YmU5NmU5NTc0JnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmV4cGlyYXRpb25UaW1lc3RhbXA9MTc3NTI0MTQ5ODYwMCZzaWduYXR1cmU9WDlSTUtXZGRrN2J1aFB1WVJoNkhQS25YVU11VlNkb0tNX1RIU05INEUxSQ==.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

## The Worker (Mathematics teacher)

In the worker the execution logs are available.

The _Flowhook_ shows what was received.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzJlZDQ5MjA1LWMxZDktNDkzNy05OTNiLTgxNTg1NzBhM2Q3MC9pbWFnZS5wbmc_dGFibGU9YmxvY2smaWQ9MmNjOTNhMDgtMGFiMC04MDhjLTkxMjItY2I1OWU5OTI0NWJjJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmV4cGlyYXRpb25UaW1lc3RhbXA9MTc3NTI0MTQ5ODU4OSZzaWduYXR1cmU9a3RUNmJmcXNwamljVHlQbFFhSWFaVWZsYzNFZkN0WDF5YUEtM1VDUU0zUQ==.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

In the _AI··Task_, you can see how the problem was solved.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzlhZDE5YTM4LWRjNjMtNDNjOC04NzU0LTVkN2Y1MzE0OTA2Yy9pbWFnZS5wbmc_dGFibGU9YmxvY2smaWQ9MmNjOTNhMDgtMGFiMC04MGM4LTg4MTktZmRhMjkyZjkxNWM0JnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmV4cGlyYXRpb25UaW1lc3RhbXA9MTc3NTI0MTQ5ODU5OCZzaWduYXR1cmU9cFM1eFRUMDBKZ2c1WnVienJUOFZMdGo2bXlxUFBPUVU3QjY4NHhCU1dnTQ==.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

In the _Success_ step, you can see what the _Worker_ returns to the _Orchestrator_.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzRhODhhMmE3LWVhYWItNDk4YS04MmIzLTE0YzI2MDIxYmFkNi9pbWFnZS5wbmc_dGFibGU9YmxvY2smaWQ9MmNjOTNhMDgtMGFiMC04MGM3LWI3YTEtZmJjYzk5OWUzMzQ4JnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmV4cGlyYXRpb25UaW1lc3RhbXA9MTc3NTI0MTQ5ODU4OSZzaWduYXR1cmU9eXdEUGNERzExWTB5eWE2TzF6VTJDZXNRQ19NT3dEbUdaOFlLbUd1TEJNVQ==.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)
