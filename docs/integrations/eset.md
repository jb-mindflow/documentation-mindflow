---
title: ESET
sidebar_position: 8
---

# ESET

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkYyY2IxNzIzNy1jY2QwLTRlN2EtYWYxYy0xMzI5ODMwZTYxM2QlMkZMT0dPLU1pbmRmbG93X2lvLW9uV2hpdGUucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTJmNDkzYTA4LTBhYjAtODBkMC05MDk5LWVkN2I5MzZjNDcxMiZjYWNoZT12MiZ3aWR0aD0zODQ=)

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkZmOTBmNmQxNC1lOWNhLTQ1MzItYTIzZi02ZTQ3Y2M4MDdiZDUlMkZFU0VUX2xvZ29fRFNfUFBfaG9yaXpvbnRhbF9jb2xvcl9SR0JfbGFyZ2UucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTJmNDkzYTA4LTBhYjAtODAyMC05NjUyLWQzNTA1Mzc1ZDQwMCZjYWNoZT12MiZ3aWR0aD00ODA=)

## Prerequisites

Before starting the integration, ensure you have the following:

-   Administrator access to your **ESET PROTECT Hub** account.

-   Sufficient permissions to create new users and view integration settings.

-   An active account on the **Mindflow** platform.

## Step 1: Configuration in ESET

The ESET Connect API uses user-based authentication. Unlike a simple static API key, you must create a dedicated ”API User”. Mindflow will use these credentials to automatically generate and renew access tokens.

Here are some quick steps to guide you. Follow ESET's [doc](https://help.eset.com/eset_connect/en-US/create_api_user_account.html) for the complete process and API docs.

### Creating the API User

1.  Log in as a Superuser to your **ESET PROTECT Hub** account.

2.  Navigate to **Users** and add a new user.

### Enabling integration permissions

When creating the user, it is crucial to enable specific rights for the API.

1.  Fill in the mandatory information (Name, Surname, Email).

2.  **Important**: In the Access Rights section, check the **Integrations** option.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9oZWxwLmVzZXQuY29tL2VzZXRfY29ubmVjdC9lbi1VUy9pbWFnZXMvcHJvdGVjdF9odWJfZW5hYmxlX2FwaS5wbmc=)

3.  This option allows the user to interact with ESET Connect (the API gateway).

4.  Finalize the creation. The user will receive an email to set their password.

:::note
🛡️
:::note
The password you define for this user will be used as the ”API Secret” or ”Password” in Mindflow. Choose a strong and complex password.
:::
:::

## Step 2: Configuration in Mindflow

Now that we have an ESET user with API rights, we will configure Mindflow to authenticate.

### Accessing Integrations

1.  Log in to your Mindflow account.

2.  In the left sidebar, click on the **Integrations** section.

3.  Use the search bar to find ”ESET” and activate APIs you need.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzM3NWE3MzgxLTA3YmQtNDNkYy1hMjc4LTgzMDcyZDNkYWRjZC9pbWFnZS5wbmc_dGFibGU9YmxvY2smaWQ9MmY0OTNhMDgtMGFiMC04MGNhLWJmZGItZTA4ZGQzODYzMGQ0JnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmV4cGlyYXRpb25UaW1lc3RhbXA9MTc3NTI0MTUxMzc4OCZzaWduYXR1cmU9dGdsTm0zdG5mMld0OHI3OUlURHNWNk10WXdRWWhKeEc2a2V6aXUyRlVKRQ==.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmL2MzYzM0MzE3LTEwYjQtNDIzNC04YWY2LWJhMWU1YWVjYTY1Ni9pbWFnZS5wbmc_dGFibGU9YmxvY2smaWQ9MmY0OTNhMDgtMGFiMC04MDJiLTkwYzUtZjY3ZTdlOTM4ZTVhJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmV4cGlyYXRpb25UaW1lc3RhbXA9MTc3NTI0MTUxMzgwMiZzaWduYXR1cmU9WElSR3hMWnJRYXcxVW1scV8wUzFmc1RQY29oYVVJTVB2TDdITkVSRHdQUQ==.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

### Adding a new credential

1.  In the left sidebar, click on the **Environment** section.

2.  Click on **+** Add Credential.

You will see a form asking for connection details. ESET Connect typically uses OAuth2 or Basic authentication which exchanges your credentials for a Token. Mindflow handles this exchange for you.

### Filling in the credentials details

1.  Users should select “ESET” under “Credential Type” while creating the credential.

2.  Fill in the fileds with the data retrieved in Step 1.

-   **Credential name**: Give it a clear name (e.g., ESET Connect Prod).

-   **Username**: The email/login of the API user created in ESET.

-   **Password**: The API user’s password.

-   **Authentication Token URL**: [The endpoint URL for Authentication](https://help.eset.com/eset_connect/en-US/prerequisites.html); use the domain according to the location of your ESET PROTECT/ESET Inspect Server (EU, DE, US, JPN, CA).

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmL2RkYWVjMjZkLWZjMWEtNDA5Ni1hOGMwLTY5NDgyNmFkMDIzYy9pbWFnZS5wbmc_dGFibGU9YmxvY2smaWQ9MmY0OTNhMDgtMGFiMC04MDFkLThhNWUtY2JkYTI4ZGVhNmZmJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmV4cGlyYXRpb25UaW1lc3RhbXA9MTc3NTI0MTUxMzc4NiZzaWduYXR1cmU9Rko2c2VGYzlnaUx3RXNVWDZZRm52WnI4bFlYY2cycUNqWmprRDdKMzJGOA==.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

:::note
ℹ️
:::note
Mindflow will use this Username and Password to call the ESET `/oauth/token` endpoint automatically. You do not need to manually generate the token every time; Mindflow handles token rotation before it expires (typically valid for 1 hour).
:::
:::

**Things to consider:**

-   Save the URL field as `Any`

-   This enables seamless sharing of credential across various ESET API connectors even if they refer to different domains (incident-management, device-management, etc.)

-   User can set-up “Vendor level” or “Integration Level Credentials” —a vendor level credential will work with all ESET services, so it’s the recommended approach.

## Validation and testing

To verify that the connection is operational:

1.  Go to the Mindflow **Flow Editor**.

2.  Create a new flow.

3.  Add a simple ESET action, for example, **List Detections** or **Get User Info**.

4.  Select the Credential you just created.

5.  Run the test. If the action returns a `**200 OK**` status or a list of data, the integration is suc- cessful.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzUwNWEyYzdjLTQ1ZGYtNDFjMC05NzcxLTdjYzczMzMzZjJlZC9pbWFnZS5wbmc_dGFibGU9YmxvY2smaWQ9MmY0OTNhMDgtMGFiMC04MDcxLTkyOTQtZjA2YzBiN2EzZGM1JnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmV4cGlyYXRpb25UaW1lc3RhbXA9MTc3NTI0MTUxMzc4NiZzaWduYXR1cmU9aXlVTjl0OG1NVFA0V1A2dHhKd3dSZlk5MTZZS3lZbUJocTN2aEF1YUo0MA==.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmL2MxZTBkM2JhLTZkM2MtNGM0Yy04ODcyLTI0NjYwNzdiNGVjYy9pbWFnZS5wbmc_dGFibGU9YmxvY2smaWQ9MmY0OTNhMDgtMGFiMC04MDFkLTk0N2UtZjg5YjkxZTI3MzhlJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmV4cGlyYXRpb25UaW1lc3RhbXA9MTc3NTI0MTUxMzc5NCZzaWduYXR1cmU9ZWRXbS1MOHEwajJfQ2hTVUVxUkQ5REhXdkhLNzBGNDJoNUdJX2xUempKWQ==.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

## Use Cases

You can now start automating ESET workflows in Mindflow. Check all Mindflow use cases here.

### Automated Threat Detection and Remediation with ESET Protect and Slack Notifications

Import and use this flow [here](https://mindflow.io/use-cases/threat-detection-remediation-eset-protect-slack).

### **Perform weekly scans on quarantined objects on ESET**

Import and use this flow [here](https://mindflow.io/use-cases/perform-weekly-scans-on-quarantined-objects-on-eset-protect).

## Resources

1.  [ESET API Docs](https://help.eset.com/eset_connect/en-US/swagger_api.html)

2.  [ESET Connect](https://help.eset.com/eset_connect/en-US/)

3.  [ESET Docs about Mindflow](https://help.eset.com/eset_connect/en-US/mindflow.html)

## About Mindflow

Mindflow is a no-code enterprise automation platform that empowers SOCs, IT teams, and enterprises to orchestrate, automate, and optimize their workflows. Mindflow bridges the gap between manual processes and cutting-edge automation, helping organizations reduce response times, improve operational efficiency, and strengthen their security posture.

With an intuitive drag-and-drop interface, a fleet of AI agents, and LLM orchestration capacities, Mindflow empowers users to automate without requiring coding skills. It integrates seamlessly with thousands of tools and APIs, enabling organizations to unify their tech stacks and extract maximum value from their existing investments.

Learn more about Mindflow, visit [mindflow.io](https://mindflow.io/) or find us on [LinkedIn](https://www.linkedin.com/company/mindflow/) and [X](https://x.com/Mindflow_io)

## **About ESET**

ESET provides cutting-edge digital security to prevent attacks before they happen. By combining the power of AI and human expertise, ESET stays ahead of known and emerging cyber threats — securing businesses, critical infrastructure, and individuals.

Whether it’s endpoint, cloud or mobile protection, its AI-native, cloud-first solutions and services remain highly effective and easy to use. ESET technology includes robust detection and response, ultra-secure encryption, and multi-factor authentication.

With 24/7 real-time defense and strong local support, we keep users safe and businesses running without interruption. An ever-evolving digital landscape demands a progressive approach to security: ESET is committed to world-class research and powerful threat intelligence, backed by R&D centers and a strong global partner network.

For more information, visit [www.eset.com](http://www.eset.com/) or follow us on [LinkedIn](https://www.linkedin.com/company/eset), [Facebook](https://www.facebook.com/eset), and [X](https://twitter.com/eset).;
