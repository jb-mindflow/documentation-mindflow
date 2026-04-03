---
title: Use AI agent
sidebar_position: 8
---

# Use AI agent

## 1\. Calls to all our integration catalogs

The AI AGENT is designed to seamlessly interact with our full range of integrations via function calls, connecting with your tools—whether they are cloud platforms like AWS, Azure, and Google Cloud Platform, or enterprise management systems like CRM and ERP. By leveraging natural language understanding, it can execute specific actions based on the provided parameters. The agent dynamically makes multiple calls within the same tool as needed, depending on the instructions it receives, and aggregates the results to draw conclusions or return them in a precise format. It can also determine the appropriate sequence of actions to execute based on the outcomes of prior steps, enabling dynamic task execution.

Currently, each agent is configured to interact only with the tool selected from the list of credentials, ensuring secure and targeted task execution. Additionally, with the `Enable Sensitive Operations for Integrations` option, operations other than GET requests, which only allow data reading, are disabled by default. Enabling this option allows the agent to perform operations that can modify or delete data if the action is deemed legitimate based on the given prompt.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkZiNjM2YTRjOS05NTkwLTRjMzMtOTc2OS00M2FkNWMwMTZkNzMlMkZDYXB0dXJlX2RlY3Jhbl8yMDI0LTA5LTA5X2FfMTMuNTMuMzIucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPWJlM2Q5ZTBjLTdhYmQtNDM5MS05NjdiLTIwMTcyYjEzYWM0YiZjYWNoZT12MiZ3aWR0aD0yNDAw)

### 2\. Example Use

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkY5YTI1NmQ1Ni02MjUxLTQxNTQtYTI1YS1hNzRlZDFhMmJkOWQlMkZDYXB0dXJlX2RlY3Jhbl8yMDI0LTA5LTA5X2FfMTMuNTcuMTQucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTcyOWVkYWY1LTZiOTktNDY1ZS1hMDlhLTkwNWM4NDJjZjdiNSZjYWNoZT12MiZ3aWR0aD0xMTUy)

With this prompt, I’ll be able to retrieve the last five activities for the specified user. The agent will automatically determine the appropriate API call needed to fetch this information, without requiring manual selection.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkY3ODJlNDBkOS05NGQzLTQ2Y2MtYWFiOS1jM2EzOWM4NzRjMTAlMkZDYXB0dXJlX2RlY3Jhbl8yMDI0LTA5LTA5X2FfMTMuNTkuMjYucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTdhOGI0MTU4LTJjYmItNDBkYi1hNzFmLTViNDY1Y2NhMzg5ZiZjYWNoZT12MiZ3aWR0aD0xMDU2)

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkZmM2NiNzk5NS1jOTJkLTRkZmMtYTVlOC01NGJhMzc1MTA2NmElMkZDYXB0dXJlX2RlY3Jhbl8yMDI0LTA5LTA5X2FfMTQuMDAuMDEucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPWMwMzZjOTRkLTU5YzYtNGM0YS1hODYyLWZmYjA4YTdjMDQyZiZjYWNoZT12MiZ3aWR0aD0xMDU2)

And complete the list of fields required for the call to return the right information.

As with all Mindflow executions, the exact data returned by the tool is fully visible and accessible for review.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkY5YTRmMTdmOC00NjFiLTRiZTgtYWEwMy1mYjQyMjEyMDRlMjclMkZDYXB0dXJlX2RlY3Jhbl8yMDI0LTA5LTA5X2FfMTQuMDAuNDAucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTJhZTlkNWM1LWEzYWYtNGZkNy1hZTIzLTA4NjE3YWI0YTlkMCZjYWNoZT12MiZ3aWR0aD0xMDU2)

In our prompt, we request the result in the form of a JSON table mentioning the AI assessment.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkZlZmI4ZjBjMS03NzdlLTQ3M2QtYjdmZS05N2RkZDc4MzBhZTIlMkZDYXB0dXJlX2RlY3Jhbl8yMDI0LTA5LTA5X2FfMTQuMDIuNDQucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTEzNWMyZWEyLWZmYmItNDE1Ny04ZDAwLWY2MGI0NDI5MDBkOCZjYWNoZT12MiZ3aWR0aD04NjQ=)

You can see that the agent has adhered to the specified format. For example, we could include this summary in a ticket, rather than using the entire Google response in its raw form.

When a Playbook is running, several AI agents can be use to perform specific tasks. These agents share a common **thread**, enabling them to have the same context and respond more efficiently without having to rewrite the same context each time. What's more, the **reuse of information** produced by the other agents makes the process smoother, as each agent can chain its actions based on the results already obtained, thus avoiding redundancy and unnecessary repetition.

## 2\. **Evaluation, Synthesis and Specific Formats**

The agent can also be used to aggregate information. Depending on the prompt, it can provide evaluations, ratings, or summaries based on pre-defined criteria. Based on the information received or results generated, it can:

-   **Provide feedback**: Using performance criteria, the agent can offer objective insights.

-   **Assign a grade**: After analysis, the agent can evaluate an action, process, or service and assign a grade based on a specified scale.

-   **Generate a summary**: It can compile information gathered throughout the workflow into a standardized format, such as a report, summary, or dashboard.

-   **Support for specific formats**: The agent can export results in customized formats, such as JSON, CSV, Slack Block Kit, or AdaptiveCards for Teams messages, depending on the requirements.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkYzODY2ZWViZi02YTg5LTRmZTAtOTkxNi1kYjAxMWFkYWY5NTAlMkZDYXB0dXJlX2RlY3Jhbl8yMDI0LTA5LTA5X2FfMTQuNDUuMDAucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTZlYjYwODU4LTM4ZmEtNGRiNy1iOTRhLTYwMGVhN2RjOTM0ZCZjYWNoZT12MiZ3aWR0aD0yNDAw)

In the attached screenshot, you will receive the following message.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkZmZGRhMDdiYS0zNjAyLTQzNzQtYmY4Zi01NjMwMTc1MWUyZmYlMkZDYXB0dXJlX2RlY3Jhbl8yMDI0LTA5LTA5X2FfMTQuNDYuNTkucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTFhYTQ1NWQ3LTBlNzYtNDczMS05YTJjLWQ3MGNiMTk4Mjk5YyZjYWNoZT12MiZ3aWR0aD0yNDAw)
