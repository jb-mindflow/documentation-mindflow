---
title: Create a Webhook
sidebar_position: 2
---

# Create a Webhook

:::note
👉
:::note
It is not possible to use the Jira API to perform automated actions **without associating those actions with a user**. Any request made with an API token or OAuth will be logged as coming from the authenticated user, which constitutes a form of impersonation. To prevent automated actions from being executed under your personal account, the recommended approach is to create a dedicated user, for example named **“Mindflow BOT”**. All bot actions can then be performed **on behalf of this user**, ensuring clear and secure tracking while keeping your personal account separate.
:::
:::

[![Atlassian OAuth 2.0 Application](https://image-forwarder.notaku.so/aHR0cHM6Ly9pMC53cC5jb20vd3d3Lm9tbmlkZWZlbmQuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzAzLzBBdXRoX1RyYW5zLnBuZz9maXQ9MTAxNCUyQzY3NiZzc2w9MQ==)

Atlassian OAuth 2.0 Application](/integrations/atlassian/atlassian-oauth-2.0-application)[![Atlassian Jira Api key](https://image-forwarder.notaku.so/aHR0cHM6Ly9jZG4ud29ybGR2ZWN0b3Jsb2dvLmNvbS9sb2dvcy9qaXJhLTEuc3Zn)

Atlassian Jira Api key](/1c293a080ab080ee85a2ebf1f8a95bbe)

Reference: [https://developer.atlassian.com/server/jira/platform/webhooks/](https://developer.atlassian.com/server/jira/platform/webhooks/)

Procedure:

-   Connect to your Jira account

-   Create a webhook

-   Open `System` settings
-   Under `Webhooks` section, `Create a Webhook`
-   Refer to to configure the `URL` pointing to the associated playbook
-   Selects the Jira necessary events to trigger

Screenshots

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkZzZWN1cmUubm90aW9uLXN0YXRpYy5jb20lMkZkM2Y4MWFjMi00ZDIwLTQ5YWItODUwMS0zMDdiN2YyMGM2M2YlMkZVbnRpdGxlZC5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9ZDBmMGEwZTktMDY4Yy00Mzk2LTllYjQtNmViZjc0NTA5YTEzJmNhY2hlPXYyJndpZHRoPTE2MzI=)

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkZzZWN1cmUubm90aW9uLXN0YXRpYy5jb20lMkZjMGEyNmIwYy1kZjEzLTQ3OTQtYTk3Ni1mOTgyNjQxY2ZkMDUlMkZVbnRpdGxlZC5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9MTViZjhiNGMtNGQ1Yy00NzZhLTgzODEtOTQ1MzIwMjJjZWY0JmNhY2hlPXYyJndpZHRoPTE4MjQ=)

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkZzZWN1cmUubm90aW9uLXN0YXRpYy5jb20lMkZjMDliNTBkYS0zZDRhLTQ4NDMtOGNjMC05OTY2ZDMzNjMzM2IlMkZVbnRpdGxlZC5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9NGI3NzliMTEtODVhMy00Y2QwLWE2MDAtNGNkZTViYWZmYTQyJmNhY2hlPXYyJndpZHRoPTI0MDA=)
