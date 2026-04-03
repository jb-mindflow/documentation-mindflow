---
title: CrowdStrike
sidebar_position: 6
---

# CrowdStrike

The guides in this sections are designed to help you connect your environment to Falcon and build powerful automated workflows.

To get started, follow these core tracks:

[![Create an API Key](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E3Yzk1MzJjZi02NmJlLTRjN2EtOGI3OC1iODAyOWJhNjRiNGQlM0ExNzI4NjgzMDQ1LWZhbGNvbi1sb2dvLXNxdWFyZS10cmFuc3BhcmVudC53ZWJwP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTMwNjkzYTA4LTBhYjAtODA0Zi05MTU1LWZjYTQ1MDAzOTVkMyZjYWNoZT12MiZ3aWR0aD0yMDA=)

Create an API Key](/integrations/crowdstrike/create-an-api-key)

**The Foundation.** Learn how to generate OAuth2 credentials (Client ID and Secret) and define the specific API scopes required for your automation to interact with the Falcon cloud securely.

[![Create Webhook Rules](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E0ZjY3MThkNS1iNDQ1LTRmM2QtYjIxNi1jZWU1MzYzYWFmZGIlM0ExNzI4NjgzMDQ1LWZhbGNvbi1sb2dvLXNxdWFyZS10cmFuc3BhcmVudC53ZWJwP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTMwNjkzYTA4LTBhYjAtODAxMy1iNGFjLWQ4OGQ2NGYyMTIzZCZjYWNoZT12MiZ3aWR0aD0yMDA=)

Create Webhook Rules](/integrations/crowdstrike/create-webhook-rules)

**Real-Time Response.** Move beyond polling. This guide explains how to set up real-time notifications via Falcon Fusion or the Event Stream, allowing Falcon to push alerts directly to your platform.

[![Falcon Query Language](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E5OGRmMjYzNi0yYmIzLTQzYTYtODUxYS0zOTc5OWYzZjM4Y2IlM0ExNzI4NjgzMDQ1LWZhbGNvbi1sb2dvLXNxdWFyZS10cmFuc3BhcmVudC53ZWJwP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTMwNjkzYTA4LTBhYjAtODAxOS1hOGNkLWVmZDYwNGQ4OTc4NyZjYWNoZT12MiZ3aWR0aD0yMDA=)

Falcon Query Language](/integrations/crowdstrike/falcon-query-language)

**Data Precision.** Master the filtering syntax used by the Falcon API. Learn to use logical operators and property filters to retrieve only the specific hosts, detections, or vulnerabilities relevant to your task.

[![Real Time Response](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E2Mjc4OTQ0Yy1kYTM3LTQzNTItYjczMC1mMGY1ZTAyNGQ2MGQlM0ExNzI4NjgzMDQ1LWZhbGNvbi1sb2dvLXNxdWFyZS10cmFuc3BhcmVudC53ZWJwP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTMwNjkzYTA4LTBhYjAtODA0Mi04OTU5LWNhZDVmM2NlOWEwZSZjYWNoZT12MiZ3aWR0aD0yMDA=)

Real Time Response](/integrations/crowdstrike/real-time-response)

**Real-Time Response** (RTR) provides a direct, interactive interface to remote hosts for live investigation, forensic collection, and immediate threat remediation. This guide covers how to automate session lifecycles, execute custom scripts, and audit remote actions to maintain complete control over your environment.

* * *

### Prerequisites

-   **Administrative Access:** Required to manage API clients and webhooks in the Falcon Console.

-   **Cloud Region:** Identify your base URL (e.g., `api.crowdstrike.com` vs `api.us-2.crowdstrike.com`).
