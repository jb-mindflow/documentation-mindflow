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

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmL2VmNjkwNWI0LWQyMTktNDFiZC1iYmVjLWFlNTJkMGQ2NGQzMS9hcGlfdG9rZW5zLnBuZz90YWJsZT1ibG9jayZpZD0zMzU5M2EwOC0wYWIwLTgwZjYtOWNiOS1jNWNjOTZhYWY5MjYmc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmZXhwaXJhdGlvblRpbWVzdGFtcD0xNzc1MjQyNjg3NTAwJnNpZ25hdHVyZT0zRkswOE9kSWFPOGFHYUJSZVRlYXpiYlY5a2NoQjlGTzFCRlYyNmp2M2JF.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

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

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzkwMGM0YjYwLWEyYzUtNDRkZC1hYmYyLWU3Y2ZmMjE2ZDgyMS9hcGlfdG9rZW5fY29uZi5wbmc_dGFibGU9YmxvY2smaWQ9MzM1OTNhMDgtMGFiMC04MGJkLThlNDUtYzk2Y2NlYjgyZDNiJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmV4cGlyYXRpb25UaW1lc3RhbXA9MTc3NTI0MjY4NzQ5NSZzaWduYXR1cmU9NnlNLTJJQ01CQl9pTWYtd1ZRVV9HWmJVTzgyOTJMc3Z3NzAwRnFaNF9YVQ==.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

### 3\. Generate and Save the Token

After clicking **Add**, Zabbix will generate the unique **Auth token** string.

> **CRITICAL:** This is the only time you will ever see the token value. Zabbix does not store the raw token in its database for security reasons.
> 
> 1.  Copy the token immediately.
> 
> 2.  Save it in a secure location (like a password manager or your Mindflow credentials vault).
> 
> 3.  Click **Close**.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmL2E5YzRkZWYwLTQzZDMtNGI2OS05NzdiLThlZjFkOGI4MWFiZS9hcGlfdG9rZW4ucG5nP3RhYmxlPWJsb2NrJmlkPTMzNTkzYTA4LTBhYjAtODA0Ny1hNWIyLWMzYTNmYjhkY2I4ZiZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI2ODc1MDImc2lnbmF0dXJlPWEzWVBMbmdwNFJsV05LMVFRcGZESHFha0ROa0o3OHNZNXhzQzFaeVdSLVE=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

### 4\. Regenerating or Revoking Tokens

-   **Regenerate:** If a token is lost or leaked, you can click on the token name in the list and select **Regenerate**. This provides a new string and immediately invalidates the old one.

-   **Disable/Delete:** Use the status toggle in the list to temporarily disable access, or select the checkbox and click **Delete** to remove the token permanently.

## Configure the Mindflow Credential

With the Zabbix API token copied, you must now create a corresponding secure credential within Mindflow to allow your workflows to communicate with the Zabbix API.

### 1\. Initiate Credential Creation

Within the Mindflow platform, navigate to your **Environments**. If you are creating a new credential, use the "Create credential" icon, which is shown here and highlighted in black:

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzI1MDBkNGRlLWVlNmUtNDk4Yy1iNmE1LTkxOWU2NGZhODIwYy9TY3JlZW5zaG90XzIwMjYtMDQtMDFfYXRfMDguNTguMzUucG5nP3RhYmxlPWJsb2NrJmlkPTMzNTkzYTA4LTBhYjAtODBmZC05ZDIyLWRhMjBlYzkzZDIyMSZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI2ODc0OTMmc2lnbmF0dXJlPVZUeUtPVmpoRm4xLVFxOTdsMXlwLUxBZFE1SmRqUEJDU1ROcmdsbms0TlE=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

Within the window the search interface in the **Create Credential** modal. Search for "zabbix" as shown below.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzhmMjY2ODhmLThhMGQtNGM1MS1hNzFjLWZmMzc1NWRmNThhYi9TY3JlZW5zaG90XzIwMjYtMDQtMDFfYXRfMDguNTguNTIucG5nP3RhYmxlPWJsb2NrJmlkPTMzNTkzYTA4LTBhYjAtODBjZi04NmJlLWZkYTNiODc5YjM0MiZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI2ODc0OTUmc2lnbmF0dXJlPU9xNFNwZUhfeFJLd1oweEVkWFJDNTBRYXEwMDRGUlZ0Mktaa1hELUR5VFE=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

### 2\. Fill Out Credential Details

Mindflow will open an integration-specific form to configure the connection. You must complete the required fields marked with an asterisk (\*). Refer to the configuration screen below:

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzk1YjQwODEzLTAxN2ItNDZlZC05Y2RlLTYwZmZjYWIwYTdmOS9TY3JlZW5zaG90XzIwMjYtMDQtMDFfYXRfMDguNTcuMjQucG5nP3RhYmxlPWJsb2NrJmlkPTMzNTkzYTA4LTBhYjAtODAxMC05MDNiLWZmNmFjYzg3NTJhNCZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI2ODc1MDEmc2lnbmF0dXJlPU1qX05MVXVwdkxxRzVHa3E1UVJNT2poUE5VVFRyVHhjSnZsYVU0MHNLOEk=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

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

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzJlNmE1MWM2LTU1ZWItNDNmMy05NmQ2LThkNjM0NGE1YTA3YS9TY3JlZW5zaG90XzIwMjYtMDQtMDFfYXRfMDkuMDYuMDUucG5nP3RhYmxlPWJsb2NrJmlkPTMzNTkzYTA4LTBhYjAtODA0OC04N2ZjLWVmMjJmNTZkYzBhNiZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI2ODc1MDAmc2lnbmF0dXJlPTR6UGdGQWdhNHBGRkkxb1lKVFdLLVRYaEoxcEZ5cnBUWllKUF9JbERaM2c=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

Assign the newly create credential within the Settings tab and click the play icon to trigger a unitary run of this step. If the pill turns green the integration is properly configured.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzI2ODliMTE0LTY3NmMtNDJhOS1hOTlhLWYwNjRkODM1Nzk2Zi9TY3JlZW5zaG90XzIwMjYtMDMtMjNfYXRfMTguMjUuNDEucG5nP3RhYmxlPWJsb2NrJmlkPTMzNTkzYTA4LTBhYjAtODBkZC04YTcyLWVhYjExZmYxY2ZmZCZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI2ODc1MDAmc2lnbmF0dXJlPThiRWRvM3RXTGdKYWZRMmNkR3RvOG03S0NEQ3BsaDBCU3g1SG1wZjVkSkE=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)
