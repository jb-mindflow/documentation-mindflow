---
title: Zabbix
sidebar_position: 28
---

# Zabbix

## Introduction

To automate monitoring tasks or integrate Zabbix with third-party orchestration tools like Mindflow, you need a secure way to authenticate.

While Zabbix supports username/password authentication via the API, **API Tokens** are the modern, secure standard. They allow for long-lived, revocable access without exposing user credentials in scripts or automation workflows.

This guide covers the generation of a permanent or time-limited token that grants programmatic access to the Zabbix API based on the permissions of the assigned user.

## Walkthrough

### 1\. Access the API Token Section

Depending on your user permissions, there are two ways to reach the token management screen:

-   **As an Admin:** Go to **Administration → Users → API tokens**. This allows you to create tokens for any user in the system.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0FlZjY5MDViNC1kMjE5LTQxYmQtYmJlYy1hZTUyZDBkNjRkMzElM0FhcGlfdG9rZW5zLnBuZz90YWJsZT1ibG9jayZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZpZD0zMzU5M2EwOC0wYWIwLTgwZjYtOWNiOS1jNWNjOTZhYWY5MjYmY2FjaGU9djImd2lkdGg9MTMzMS45OTY1ODIwMzEyNQ==)

-   **As a Regular User:** Go to **User settings → API tokens** (accessible via the user icon in the top right).

-   _Note: Your User Role must have "Manage API tokens" enabled._

### 2\. Configure Token Details

Click the **Create API token** button in the top-right corner and fill in the following fields:

**Parameter**

**Description**

**Name**

A recognizable name for the token (e.g., "Mindflow Integration").

**User**

The user account the token will act as. The token inherits all permissions (Host groups, Templates, Actions) of this user.

**Description**

Optional notes on what this token is used for.

**Set expiration date**

Uncheck this for a "Permanent" token, or set a specific date/time for security compliance.

**Enabled**

Ensure this is checked to make the token active immediately.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E5MDBjNGI2MC1hMmM1LTQ0ZGQtYWJmMi1lN2NmZjIxNmQ4MjElM0FhcGlfdG9rZW5fY29uZi5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9MzM1OTNhMDgtMGFiMC04MGJkLThlNDUtYzk2Y2NlYjgyZDNiJmNhY2hlPXYyJndpZHRoPTEzNTcuOTg2MjA2MDU0Njg3NQ==)

### 3\. Generate and Save the Token

After clicking **Add**, Zabbix will generate the unique **Auth token** string.

> **CRITICAL:** This is the only time you will ever see the token value. Zabbix does not store the raw token in its database for security reasons.
> 
> 1.  Copy the token immediately.
> 
> 2.  Save it in a secure location (like a password manager or your Mindflow credentials vault).
> 
> 3.  Click **Close**.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0FhOWM0ZGVmMC00M2QzLTRiNjktOTc3Yi04ZWYxZDhiODFhYmUlM0FhcGlfdG9rZW4ucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTMzNTkzYTA4LTBhYjAtODA0Ny1hNWIyLWMzYTNmYjhkY2I4ZiZjYWNoZT12MiZ3aWR0aD0xMzExLjk5NjU4MjAzMTI1)

### 4\. Regenerating or Revoking Tokens

-   **Regenerate:** If a token is lost or leaked, you can click on the token name in the list and select **Regenerate**. This provides a new string and immediately invalidates the old one.

-   **Disable/Delete:** Use the status toggle in the list to temporarily disable access, or select the checkbox and click **Delete** to remove the token permanently.

## Configure the Mindflow Credential

With the Zabbix API token copied, you must now create a corresponding secure credential within Mindflow to allow your workflows to communicate with the Zabbix API.

### 1\. Initiate Credential Creation

Within the Mindflow platform, navigate to your **Environments**. If you are creating a new credential, use the "Create credential" icon, which is shown here and highlighted in black:

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0EyNTAwZDRkZS1lZTZlLTQ5OGMtYjZhNS05MTllNjRmYTgyMGMlM0FTY3JlZW5zaG90XzIwMjYtMDQtMDFfYXRfMDguNTguMzUucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTMzNTkzYTA4LTBhYjAtODBmZC05ZDIyLWRhMjBlYzkzZDIyMSZjYWNoZT12MiZ3aWR0aD0yNDAw)

Within the window the search interface in the **Create Credential** modal. Search for "zabbix" as shown below.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E4ZjI2Njg4Zi04YTBkLTRjNTEtYTcxYy1mZjM3NTVkZjU4YWIlM0FTY3JlZW5zaG90XzIwMjYtMDQtMDFfYXRfMDguNTguNTIucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTMzNTkzYTA4LTBhYjAtODBjZi04NmJlLWZkYTNiODc5YjM0MiZjYWNoZT12MiZ3aWR0aD0yNDAw)

### 2\. Fill Out Credential Details

Mindflow will open an integration-specific form to configure the connection. You must complete the required fields marked with an asterisk (\*). Refer to the configuration screen below:

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E5NWI0MDgxMy0wMTdiLTQ2ZWQtOWNkZS02MGZmY2FiMGE3ZjklM0FTY3JlZW5zaG90XzIwMjYtMDQtMDFfYXRfMDguNTcuMjQucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTMzNTkzYTA4LTBhYjAtODAxMC05MDNiLWZmNmFjYzg3NTJhNCZjYWNoZT12MiZ3aWR0aD0xNDA4LjAwMzU0MDAzOTA2MjU=)

Follow these steps to fill out the form:

**Field**

**How to Configure**

**Service \***

This will automatically display "Zabbix" and its version (e.g., 2.0.17 Native).

**Credential name \***

Enter a clear name, such as "Zabbix Integration Key".

**URL \***

Select **Custom** from the dropdown menu to provide your specific instance's API URL.

**Address \***

Enter the full URL to your Zabbix API, which usually ends in `/api_jsonrpc.php`. (e.g., `https://bright-bat.zabbix.cloud/api_jsonrpc.php`).

**Credential type**

Set this to **HTTP API Key** as shown in the example.

Header

Add an item and name it `Authorization`. The value to be added is as follows: `Bearer `<api_token>``.

Click **Update** or **Create** to save the credential securely. It is now ready to be used in your automated workflows.

### 3\. Test the credential

Once done, head over **Flows** and, within a test flow, create a step using the Zabbix API connector.

Create a step to an endpoint that should not require any extra configuration, like `users.get` or `map.get`.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0EyZTZhNTFjNi01NWViLTQzZjMtOTZkNi04ZDYzNDRhNWEwN2ElM0FTY3JlZW5zaG90XzIwMjYtMDQtMDFfYXRfMDkuMDYuMDUucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTMzNTkzYTA4LTBhYjAtODA0OC04N2ZjLWVmMjJmNTZkYzBhNiZjYWNoZT12MiZ3aWR0aD0yNDAw)

Assign the newly create credential within the Settings tab and click the play icon to trigger a unitary run of this step. If the pill turns green the integration is properly configured.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0EyNjg5YjExNC02NzZjLTQyYTktYTk5YS1mMDY0ZDgzNTc5NmYlM0FTY3JlZW5zaG90XzIwMjYtMDMtMjNfYXRfMTguMjUuNDEucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTMzNTkzYTA4LTBhYjAtODBkZC04YTcyLWVhYjExZmYxY2ZmZCZjYWNoZT12MiZ3aWR0aD0xNDA4LjAwMzU0MDAzOTA2MjU=)
