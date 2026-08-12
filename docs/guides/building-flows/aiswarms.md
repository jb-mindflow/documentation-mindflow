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

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E2NjA3Y2E1ZS1jYTA4LTQ4ZjktOTNlYy04ZWJiZjBiNTk5YmIlM0FpbWFnZS5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9MmNiOTNhMDgtMGFiMC04MDMzLTgyYWMtZmY0ZjQ0ZDQ4NWQyJmNhY2hlPXYyJndpZHRoPTk2MA==)

Here's the flow to build:

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0FhOTgzZjgwNC1kYjA0LTQ0MmEtYmY1Ny0wZTMyNTJjODMyYWYlM0FpbWFnZS5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9MmNiOTNhMDgtMGFiMC04MDZlLWJhNmUtZWJkNGJjY2ExYzRiJmNhY2hlPXYyJndpZHRoPTEwNTY=)

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

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0FhYTAzY2M1NS05ZTlmLTQwMjktOTE4My0zYzVkYzdhMDdiM2MlM0FpbWFnZS5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9MmNiOTNhMDgtMGFiMC04MDFlLTljOTctZDllN2FlZDBiZjFkJmNhY2hlPXYyJndpZHRoPTEwNTY=)

-   The _AI··Task_

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E3NWQ1YTlhOC1hNWU0LTRjZmEtYjJhOS0zYjJmNzE3OWNjZGMlM0FpbWFnZS5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9MmNiOTNhMDgtMGFiMC04MDhjLThhY2UtZTQzMGJkY2Y0NDU5JmNhY2hlPXYyJndpZHRoPTEwNTY=)

-   The _Success_ (defines the output)

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0FhMzNlMDI3MC1jNTM5LTRhNTAtYjgzMy1mNTI0MDkyNGFlZWYlM0FpbWFnZS5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9MmNiOTNhMDgtMGFiMC04MGRmLWJiOWUtZGU0ZjY3OTg4ODNmJmNhY2hlPXYyJndpZHRoPTEwNTY=)

## The Orchestrator

Start by creating the Orchestrator flow.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0FiOWRkNTU2NC1mYTIzLTRjYTktODE4NS05MzE5YzY2MzNmNTYlM0FpbWFnZS5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9MmNiOTNhMDgtMGFiMC04MDNmLTk2YWMtZjQyZGMzZDQwMzRjJmNhY2hlPXYyJndpZHRoPTEwNTY=)

Here's the flow to build:

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0FjMDcwOGU1MC00Y2FmLTQzNTctOWIxYi02YTcxODlkMDY2MmElM0FpbWFnZS5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9MmNiOTNhMDgtMGFiMC04MGUzLTkzYzAtZjkzM2FmNWJiYTc3JmNhY2hlPXYyJndpZHRoPTc2OA==)

This flow includes a simple AI··Task with a model and a prompt.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E2NGMwMTM3Ni0yZTJmLTRlMTctYmI2Zi1kZGQ3OTZiZTYxZmYlM0FpbWFnZS5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9MmNiOTNhMDgtMGFiMC04MDc4LWJlZmQtZTVmOGM5ZTM3ZGJmJmNhY2hlPXYyJndpZHRoPTEwNTY=)

An Agent has been added to help it complete its mission.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0FhMTYxYmM5Yy1lYzNlLTQ1MjktOTA5NC01ZGQyOWQ0NTdmMDAlM0FpbWFnZS5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9MmNiOTNhMDgtMGFiMC04MDEyLWI5OWItZGQzN2JhZmEzN2IwJmNhY2hlPXYyJndpZHRoPTk2MA==)

# Run time

## The Orchestrator

After running the Orchestrator, you can see in the log that the worker was called to solve the problem.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0EyYTZhNGExNy05NDdiLTQ4YzMtYmQ2MC1jMWEwMjU5M2U1ZjIlM0FpbWFnZS5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9MmNjOTNhMDgtMGFiMC04MDkzLTk1YjMtYzUwNTc3Yjg5N2NjJmNhY2hlPXYyJndpZHRoPTEyNDg=)

You can dive deeper to see the exact query and the worker's response.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0FmZTNmNTkwZi1lZDU3LTQ1ZTQtYWRkNy1kM2I2OGY3NzhlNDElM0FpbWFnZS5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9MmNjOTNhMDgtMGFiMC04MDg5LWE4NjYtZWRhZTViYjdmNmY3JmNhY2hlPXYyJndpZHRoPTEyNDg=)

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0FhNjQyMDhiNy03NWQ5LTRmMDItYjdhNy1lNDUzMGM3YmM2OTYlM0FpbWFnZS5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9MmNjOTNhMDgtMGFiMC04MGI5LTljOWUtZGE1YmU5NmU5NTc0JmNhY2hlPXYyJndpZHRoPTEyNDg=)

## The Worker (Mathematics teacher)

In the worker the execution logs are available.

The _Flowhook_ shows what was received.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0EyZWQ0OTIwNS1jMWQ5LTQ5MzctOTkzYi04MTU4NTcwYTNkNzAlM0FpbWFnZS5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9MmNjOTNhMDgtMGFiMC04MDhjLTkxMjItY2I1OWU5OTI0NWJjJmNhY2hlPXYyJndpZHRoPTEyNDg=)

In the _AI··Task_, you can see how the problem was solved.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E5YWQxOWEzOC1kYzYzLTQzYzgtODc1NC01ZDdmNTMxNDkwNmMlM0FpbWFnZS5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9MmNjOTNhMDgtMGFiMC04MGM4LTg4MTktZmRhMjkyZjkxNWM0JmNhY2hlPXYyJndpZHRoPTEyNDg=)

In the _Success_ step, you can see what the _Worker_ returns to the _Orchestrator_.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E0YTg4YTJhNy1lYWFiLTQ5OGEtODJiMy0xNGMyNjAyMWJhZDYlM0FpbWFnZS5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9MmNjOTNhMDgtMGFiMC04MGM3LWI3YTEtZmJjYzk5OWUzMzQ4JmNhY2hlPXYyJndpZHRoPTEyNDg=)
