---
title: ServiceNow
sidebar_position: 22
---

# ServiceNow

This section provides a comprehensive walkthrough for integrating ServiceNow with Mindflow to build powerful, automated workflows. By the end of these guides, you will have a functional pipeline that connects ServiceNow's robust ITSM capabilities with Mindflow’s orchestration engine.

## Introduction

ServiceNow is the backbone of enterprise operations, but its true power is unlocked when it talks to other tools in your stack. This tutorial focuses on setting up the essential "connectors"—**API Keys** for secure communication, **Business Rules** for triggering logic on record changes, and **Virtual Agent** configurations to bring Mindflow’s automation directly into your chat interfaces.

Whether you are looking to automate incident creation, sync data across platforms, or provide self-service bot actions, these steps establish the foundational bridge between ServiceNow and Mindflow.

## Guides

These guides are designed to be followed in sequence to ensure a secure and functional integration.

[![Create an API Key](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E0OGRiMjkyMC00NTMzLTQ1ZmUtYWE3NC1jMWU0ZGFmYTA2NjIlM0FzZXJ2aWNlbm93X2xvZ29faWNvbl8xNjg4MzUud2VicD90YWJsZT1ibG9jayZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZpZD0zMzU5M2EwOC0wYWIwLTgwMGEtOWZhZi1mMTYyN2ZiNTUxNjImY2FjaGU9djImd2lkdGg9MjAw)

Create an API Key](/integrations/servicenow/create-an-api-key)

To allow Mindflow to securely "talk" to your ServiceNow instance, you must define an authentication method.

-   **Purpose:** Establish a secure handshake between platforms using OAuth 2.0 or Basic Auth.

-   **Key Step:** You will navigate to **Application Registry** within ServiceNow to create a new Client ID and Client Secret, which Mindflow will use to authenticate requests.

[![Create Business Rules](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0FmZTAwYTAwMC1kOWEyLTRkNWUtYjkwYi0yYzA4ZmUzY2MzZDklM0FzZXJ2aWNlbm93X2xvZ29faWNvbl8xNjg4MzUud2VicD90YWJsZT1ibG9jayZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZpZD0zMzU5M2EwOC0wYWIwLTgwNzAtODQzNy1jNGY2MTdjNDVkMTgmY2FjaGU9djImd2lkdGg9MjAw)

Create Business Rules](/integrations/servicenow/create-business-rules)

Automation often needs to start the moment something happens inside ServiceNow (e.g., a new ticket is opened).

-   **Purpose:** Use server-side scripts to trigger external Webhooks or actions when a record is inserted or updated.

-   **Key Step:** You will configure a "Before" or "After" Business Rule that sends a payload to Mindflow whenever specific conditions (like "Priority is 1") are met.

[![Virtual Agent configuration with Mindflow](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0FjNjYxNmViOS02YzdjLTQzODQtOWM2Zi02OTM4ODZhOWVmYzElM0FzZXJ2aWNlbm93X2xvZ29faWNvbl8xNjg4MzUud2VicD90YWJsZT1ibG9jayZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZpZD0yZDM5M2EwOC0wYWIwLTgwNWUtOTU1YS1kZGZmMGNlY2M3NTAmY2FjaGU9djImd2lkdGg9MjAw)

Virtual Agent configuration with Mindflow](/integrations/servicenow/virtual-agent-configuration-with-mindflow)

Bring the power of Mindflow to your users via ServiceNow's conversational interface.

-   **Purpose:** Allow users to trigger complex workflows (like password resets or server restarts) directly through a chat bot.

-   **Key Step:** Within the **Virtual Agent Designer**, you will create a topic that calls a Mindflow workflow as a REST action, providing real-time self-service capabilities.
