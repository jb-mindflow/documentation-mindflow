---
title: PagerDuty + Mindflow Integration Benefits
sidebar_position: 17
---

# PagerDuty + Mindflow Integration Benefits

-   Notify on-call responders based on critical incidents, specific triggers or thresholds detected by Mindflow

-   Enrich PagerDuty incidents with actionable data from Mindflow’s extensive integrations catalog with context, such as user activities, threat intelligence, or related incidents, directly in PagerDuty.

-   Use Mindflow's security orchestration automation and response (SOAR) capabilities in workflows to categorize alerts by urgency and send appropriately prioritized incidents to PagerDuty.

-   Automatically update in PagerDuty, such as acknowledgments or resolutions, based on information received from workflows in MIndflow for consistent and accurate incident management.

-   Resolve PagerDuty alerts seamlessly when Mindflow detects that predefined resolution criteria have been met, such as service metrics returning to normal.

-   Extend PagerDuty’s functionality by orchestrating with 4,000+ integrations, AI agents, or dynamic data transformation and filters.

# How it Works

-   Mindflow integrates the PagerDuty APIs to enable mutual users to automate their workflows and orchestrate PagerDuty with 4000+ tools on the marketplace.

-   Events triggered or received in Mindflow from 3rd party integrations can automatically create new incidents or update existing ones in PagerDuty.

-   Mindflow workflows can enable users to enrich PagerDuty incidents by adding contextual data from other integrated tools in the user’s stack (ex: SIEM, EDR, MDM, communication channels, etc.).

-   Mindflow has a bi-directional integration with PagerDuty. Incidents are updated and synchronized in real-time.

-   When incidents are resolved in Mindflow based on user-configured filters and conditions, they are automatically closed in PagerDuty, reducing manual work and improving operational efficiency.

# Requirements

-   PagerDuty integrations require an [Admin base role](https://support.pagerduty.com/docs/user-roles) for account authorization. If you do not have this role, please reach out to an Admin or Account Owner within your organization to configure the integration.

-   The user must have the access to generate and use API keys

# Support

If you need help with this integration, please contact [support@mindflow.io](mailto:support@mindflow.io) or the use chat button at the bottom right of the screen in the Mindflow platform.

# Integration Walkthrough

## Integrating With a PagerDuty Service

1.  From the **Configuration** menu, select **Services**.

2.  There are two ways to add an integration to a service:

-   **If you are adding your integration to an existing service or a service without any integration**:

1.  Click the “**+Add another integration**” on the integrations tab in the service

2.  Search “**Mindflow**” and select it to add the integration to your service

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkZlMDMxODAwYy0yZWI0LTRmOGUtYjc1OC1mZGI0YTc3ZWM4ZGIlMkZTY3JlZW5zaG90XzIwMjQtMTItMDRfYXRfMTYuNTMuMzQucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTgyNzhmNGY0LWRjNDUtNDJlMS04MDQxLTU5YTljMmQwYTkyMiZjYWNoZT12MiZ3aWR0aD0xMDU2)

-   **If you are creating a new service for your integration**: Please read our documentation in section [Configuring Services and Integrations](https://support.pagerduty.com/docs/services-and-integrations#section-configuring-services-and-integrations) and follow the steps outlined in the [Create a New Service](https://support.pagerduty.com/docs/services-and-integrations#section-create-a-new-service) section, selecting **Mindflow** as the **Integration Type** in step 4. Continue with the **In Mindflow** section (below) once you have finished these steps.

3.  In the Integrations tab on the service page, you will find the **Integration Key.** Keep this key saved in a safe place, as it will be used when you configure your workflows **In Mindflow** in the next section.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkYzYjBkNmE5YS1hMDYyLTQwYTUtOGVlMi1hODllZTFiMzM2NjclMkZNRlBEX0ludGVncmF0aW9uX0tleS5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9MGJhNzE1YWYtNDBmNC00MjAwLTg2NzMtZTEwYjkxNDZkZDRiJmNhY2hlPXYyJndpZHRoPTEzNTkuOTg0Mzc1)

### Creating PagerDuty API Keys

1.  In PagerDuty, from the top-level menu click on **Integration** → **API Access Keys**

2.  Create a new API key and save it for later. It will be used in setting up your **PagerDuty credentials** step in Mindflow

* * *

## In Mindflow

### Activating PagerDuty Events V2 API in Mindflow

1.  Go to **Integrations**

2.  Search for **PagerDuty**

3.  Toggle and activate the **PagerDuty Events V2** integration.

-   Mindflow supports PagerDuty API, PagerDuty Events V2 API, PagerDuty Jira Server Integration API, and PagerDuty Slack Integration API.

4.  The **PagerDuty Events V2** integration has now been activated

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkY4ODAzOWViNC1lNDA4LTQxMzItOWU4Yi04N2YzOTg1YzBhMDUlMkZTY3JlZW5zaG90XzIwMjQtMTItMDRfYXRfMTcuNDEuMDAucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTc0MGI0NTYxLTczMGMtNGJmZi05Nzk2LWVmNTFhNzAzYjhhMyZjYWNoZT12MiZ3aWR0aD0yNDAw)

### Setting up PagerDuty Credentials

Now, we will use the API key you created previously in the **“Creating PagerDuty API Keys”** step.

1.  In Mindflow, go to the **Vault**

2.  Click on +**Create** to open the new credential creation popup

3.  Complete the popup fields as described below:

-   **Service**: Search and select PagerDuty V2 Events

-   **Credential Name**: Give a name to credential, at users’ discretion

-   **Workspace**: Choose the Mindflow workspace you want to allocate the credential to. You can also allocate the credential to all workspaces.

-   **Credential type**: Choose HTTP API Key

-   **Headers:** Add the PagerDuty API key in correct format. `Authorization: Token token=y_NbAkKc66ryYTWUXYEu` . You can learn more about API authentication in [PagerDuty docs](https://developer.pagerduty.com/docs/ZG9jOjExMDI5NTUx-authentication).

Your PagerDuty credential is ready to use. All credentials in the Vault are stored in customer specific cloud tenants and are not exposed in any logs, telemetry, or workflows.

### Automating PagerDuty

1.  Go to your workspace and create a new workflow

2.  Open the workflow → Click on `**+**` or right click anywhere → Choose PagerDuty Events V2 integration

3.  Choose an API call

4.  Build your workflow as per your use case

5.  Click on settings ⚙️ toggle to open the API call settings and fill in the relevant information

-   For PagerDuty Events V2 API, **Routing Key = Integration Key** (mention above)

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkYwN2ZkYzk0Ny05Zjk3LTQzMzItYmQ0Yi02NDY5NGFhZmFkOWMlMkZTY3JlZW5zaG90XzIwMjQtMTItMDRfYXRfMTguMDAuMTEucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPWE4OTZiYjZiLWU4MzItNDRhNC05MTNmLWRjNjY2MjVlN2NmMSZjYWNoZT12MiZ3aWR0aD0xMzAzLjk2ODc1)

-   The rest of the fields are depending on the API call. Some API calls might require properties such as Dedup key, Payload, etc. They can be added by clicking on **Advanced.**

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkYxMDI4MzEwMC05ZDRhLTQwY2QtYjU4Mi03ZGIzZTAxNjZmODAlMkZTY3JlZW5zaG90XzIwMjQtMTItMDRfYXRfMTguMDIuMjIucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTY4NDE0OTQ2LWUzZjItNDBkYy1hYWNkLWU0NGMxMGRkNzJmZSZjYWNoZT12MiZ3aWR0aD04NjQ=)

# How to Uninstall

1.  Go to Vault in Mindflow

2.  Search for your **PagerDuty** credentials

3.  Click on menu toggle on the left of the credential and click “**Delete credential**”

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkY2NTllY2MxMy05YWMwLTQ3YTAtODYzOS1iOWY2NmU3MjJiYjAlMkZTY3JlZW5zaG90XzIwMjQtMTItMDRfYXRfMTYuNDMuMTMucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTM1ZGIxYmU3LTU5MGMtNGYwYi04NmY1LTk5MmI3ZmM1NDdkMiZjYWNoZT12MiZ3aWR0aD0xMzU5LjkzNzU=)

_Once the credentials are deleted, the PagerDuty integration can no longer be used in Mindflow._
