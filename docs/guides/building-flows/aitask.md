---
title: "AI··Task: Prompt guidelines"
sidebar_position: 11
slug: "/guides/building-flows/aitask:-prompt-guidelines"
---

# AI··Task: Prompt guidelines

AI**··**Task is designed to interact with external tools, such as calendar applications, messaging services, or collaboration platforms.

* * *

## **Let’s try it out !**

### **Simple task**

Create a new flow and click on `Add a step manually` then in `Build-In` : `AI Task`

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0EyNjE3ZTg2MS00M2ZkLTQ4NzgtYTJiOC1jZjM4NmFmYjg2ZWYlM0FTY3JlZW5zaG90XzIwMjUtMDktMDRfYXRfMTMuMTcuMzcucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTI2ZjkzYTA4LTBhYjAtODA1Ni1hYWQ2LWYyYmM0NDI3NDllOCZjYWNoZT12MiZ3aWR0aD0xNDIw)

In our case let’s say that we want to simulate the creation of an incident ticket and return the ticket ID, for this you need to :

-   Choose the `Model`

-   Write your prompt properly

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E0OGNiYzY4NS04NzVkLTRmOTMtOGRlYi1mNGYxOTA2YmM1NDAlM0FTY3JlZW5zaG90XzIwMjUtMDktMDRfYXRfMTMuMjUuMzIucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTI2ZjkzYTA4LTBhYjAtODA4OS05YjBiLWU4ZWUyNjc4Nzk0NCZjYWNoZT12MiZ3aWR0aD0xNDIw)

### **Adding tools**

If you want to use tools you can ! Imagine that you want to analyze IP adresse via `Virus Total.`

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0FiNjU1OWFjZS01NjdjLTRlZjQtOWM4ZC04MjFlZWZkOGNkNDclM0FTY3JlZW5zaG90XzIwMjUtMDktMDRfYXRfMTMuNDguMjAucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTI2ZjkzYTA4LTBhYjAtODBiNy1iYmFiLWQyNzMyNjM5ZDljMyZjYWNoZT12MiZ3aWR0aD0xNDIw)

To add tools you just need to go in the `Tools` tab, choose the correct service, select the credential then choose the desired operations.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E5YjZhZmQyOS02YWU3LTRkOGEtYTE4Mi1jYjFiYjYzODA1NjIlM0FTY3JlZW5zaG90XzIwMjUtMDktMDRfYXRfMTMuNDcuNDUucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTI2ZjkzYTA4LTBhYjAtODA3ZC1hMWI4LWVmMjRmZWIyMzkyMiZjYWNoZT12MiZ3aWR0aD0xNDE5Ljk2ODc1)

Run the flow then you can analyze the output of your `AI Task` :

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0EwM2M3YjkyNy00MzlkLTQzYTgtOTFkMC00NWFjNzZiYTZjNWElM0FTY3JlZW5zaG90XzIwMjUtMDktMDRfYXRfMTMuNTEuNTcucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTI2ZjkzYTA4LTBhYjAtODA1OS1hYTM1LWU1MDFjYzMyNmNmNiZjYWNoZT12MiZ3aWR0aD0xNDIw)

## Persistent memory across executions

Your AI Tasks can maintain **persistent memory across multiple executions**, enabling them to remember important information and build upon previous interactions. Each AI Task run also indicates whether that job will write updates back to memory.

### Memory configuration options

-   `**None**`: No memory is stored between runs.

-   **Use case**: One-off transformations like summarizing a single email or extracting fields from one document, where prior context could be noisy or risky.

-   `**New memory**`: Creates a fresh memory context for this task run.

-   **Use case**: Kick off a new project thread, such as onboarding a new customer, where you want continuity within that project but separation from everything else.

-   `**Previous step memory**`: Reuses the memory context created earlier in the same flow execution.

-   **Use case**: Multi-step flows where earlier steps capture requirements and later steps draft outputs, so the task stays consistent without re-passing the full context each time.

-   `**Advanced**`: Select or control memory behavior explicitly, such as choosing a specific memory context.

-   **Use case**: Shared but scoped assistants, like an internal IT helper that uses a per-team memory context while keeping other teams fully isolated.

* * *

## What is a good prompt

A good prompt follows a **clear and modular structure**. We recommend using the following blocks:

### `#ROLE`

Describes the **role and stance** of the AI.

> Example:
> 
> _You are acting as a SOC security analyst. You will use the resources described in_ _`#RESOURCES`__. You must execute a series of precise actions based on the instructions provided in_ _`#INSTRUCTIONS`__._

* * *

### `#INSTRUCTIONS`

Contains the **step-by-step process** (business logic, tool/API logic) and how to link it to the provided resources.

> Include:

-   The **expected business logic** or **workflow** (step by step)

-   Explicit references to data/API/parameters provided in `#RESOURCES`

-   If needed, fallback rules or expected error-handling behavior

> Example:

plain text

``1. Retrieve open incidents from the last 24h via Sentinel. 2. For each incident, identify related alerts. 3. Return a summary following the format defined in `#RESULT`.``

* * *

### `#RESOURCES`

Provides the **input data**, **business or technical context**, and tool/API descriptions.

> Include:

-   Data: variables, objects

-   Tool logic: specifics of an API (async behavior, required parameters, request/response structure)

-   Constraints or execution-related information

> Example:

plain text

`Azure Sentinel: - Each incident contains a list of related alerts to retrieve - Some APIs are asynchronous and return a job_id to be polled`

* * *

### `#RESULT`

Specifies the **expected response format**.

> Mandatory to ensure reliable parsing and smooth integration.

> Example:

plain text

`- Only reply with the result, no explanatory text. - Response format: {   "result": "Summary of incidents",   "rationale": "Explanation of the conclusion, step by step" } - Do not include ```json``` in the response.`

* * *

## Why structure a prompt?

-   **Improves accuracy** of actions, especially for multi-step, complex tasks

-   **Reduces errors**, especially in tool/API calls that are similar (e.g., RTR session vs admin session)

-   **Enhances resilience**: a well-structured prompt keeps working even with varying user input

-   **Helps users** clarify their intentions and expectations

* * *

## Best practices

1.  **Be explicit**: leave no room for ambiguity

2.  **Anticipate action sequences** (chained tool calls)

3.  **Define a structured output** (`#RESULT`)

4.  **Document tool/API constraints** in `#RESOURCES`

5.  **Always request rationale when relevant**, e.g.:

json

`{   "result": "benign",   "rationale": "The hash is known and marked as safe in VirusTotal" }`

* * *

## Useful resources

-   [OpenAI Prompting Guide – GPT 4.1](https://cookbook.openai.com/examples/gpt4-1_prompting_guide)

* * *

## Prompt examples

### 🔹 Simple example

plain text

`#ROLE You act as an IT assistant to create a ticket.  #INSTRUCTIONS Create an incident ticket with the provided data and return the ticket ID.  #RESOURCES incident:   title: "VPN connection failed"   user: "jdoe"   priority: "high"  #RESULT {   "ticket_id": "string" }`

* * *

### 🔹 Advanced example with tool calls

plain text

``#ROLE You act as a SOC analyst. You must perform actions on CrowdStrike via the API.  #INSTRUCTIONS 1. Start an RTR session for host X. 2. Execute command Y. 3. Retrieve the output (iterate if chunked). 4. Return the result in `#RESULT`.  #RESOURCES host_id: "abc-123" command: "netstat -ano" CrowdStrike API:   - /rtr/session/initiate   - /rtr/command   - /rtr/command/status (iterative)  #RESULT {   "result": "command output",   "rationale": "Details of the steps performed" }``
