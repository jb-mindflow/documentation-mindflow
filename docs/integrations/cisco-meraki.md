---
title: Cisco Meraki Dashboard
sidebar_position: 5
---

# Cisco Meraki Dashboard

## Introduction

Connecting the Cisco Meraki Dashboard to Mindflow allows you to automate network management, security monitoring, and device orchestration. This setup relies on a **Bearer Token (API Key)**, which provides full programmatic access to your Meraki organizations and networks.

* * *

## 1\. Generate a Cisco Meraki API Key

To interact with the Meraki API, you must first enable API access for your organization and generate a personal API key.

### Step 1.1: Enable API Access

1.  Log in to the **Cisco Meraki Dashboard**.

2.  Navigate to **Organization > Configuration > Settings**.

3.  Ensure that the **Dashboard API access** is set to **"Enable access to the Cisco Meraki Dashboard API"**.

4.  Click **Save Changes**.

### Step 1.2: Generate Your Key

As shown in your Meraki screenshot:

1.  Go to your profile (top right) and select **My Profile**.

2.  Scroll down to the **API & Webhooks** section.

3.  Under **Personal API keys**, click the **Generate API Key** button.

4.  **Copy your API key immediately.** Meraki only shows this key once. If you lose it, you will have to revoke the old one and generate a new one.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0FhNjJhMmEyZS1kZmNkLTQ1MGMtYWY5OS01MzNmNGU0NTVmOWYlM0FTY3JlZW5zaG90XzIwMjUtMDMtMTdfYXRfMTEuMDMuNDFfQU0ucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTMzNTkzYTA4LTBhYjAtODA5Yi05ZDU4LWQ3NTU1ZGIxZGYxYiZjYWNoZT12MiZ3aWR0aD0yNDAw)

## 2\. Configure the Mindflow Credential

Now, you will take that API key and securely store it in Mindflow to enable your automated workflows.

### Step 2.1: Select the Meraki Service

1.  In the Mindflow platform, navigate to your **Environments**.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0EyYmNkNjVmNy0xMTFkLTQ2M2MtYjU1My0zNjcyYjI0Y2VhYTUlM0FTY3JlZW5zaG90XzIwMjYtMDQtMDFfYXRfMDguNTguMzUucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTMzNTkzYTA4LTBhYjAtODA0My05NzVhLWNjOWRlZmMxNzc0OSZjYWNoZT12MiZ3aWR0aD0yNDAw)

2.  Click **Create Credential** and search for **"Cisco Meraki Dashboard"**.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E3Yjk3ZjVhYy1iYmQxLTQxZjAtOTBlYy02YzQwMDljYmQwYmYlM0FTY3JlZW5zaG90XzIwMjYtMDQtMDFfYXRfMDkuMjIuMzUucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTMzNTkzYTA4LTBhYjAtODA5OS1hYjA4LWY5Y2UyMGVlZDRkMCZjYWNoZT12MiZ3aWR0aD0xMzMyLjAzMTM3MjA3MDMxMjU=)

### Step 2.2: Basic Configuration

Mindflow provides a native form for Meraki. Fill out the following fields as shown in the screenshots below:

-   **Credential name \***: Provide a descriptive name (e.g., "Meraki Production Key").

-   **URL \***: This is usually pre-filled as `https://api.meraki.com/api/v1`. Keep this default unless you are using a specific regional shard.

-   **X-Cisco-Meraki-API-Key \***: Paste your API key here.

### Step 2.3: Advanced Header Configuration (Optional/Alternative)

If you prefer to use the **Advanced** settings or are working with a generic HTTP connector, you can configure the authentication via the **Headers** section:

**Field**

**How to Configure**

**Service \***

This will automatically display **Cisco Meraki Dashboard** (Native).

**Credential name \***

Enter a unique name (e.g., `Meraki_Production_Key`).

**URL \***

Select the default: `https://api.meraki.com/api/v1`.

Header

Click Add item, name the item `Authorization`. As value type in `Bearer `<api_token>``

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0FmYjE3ZmRiMC1hMWNkLTRjNGEtYTFkZS03YmJiY2M1NjVlZjYlM0FTY3JlZW5zaG90XzIwMjYtMDQtMDFfYXRfMDkuMjIuNTMucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTMzNTkzYTA4LTBhYjAtODBkMC05ZTZjLWQyMWY4OTM4MDhkMiZjYWNoZT12MiZ3aWR0aD0xNDA4LjAwMzU0MDAzOTA2MjU=)

1.  Click on the **Advanced** toggle.

2.  Expand the **Headers** section.

3.  Add an item with the Key: `**Authorization**`.

### Step 2.4: Save and Test

Click **Create**. Your Cisco Meraki credential is now securely stored and ready to be pulled into any Mindflow action, allowing you to automate everything from SSID management to security group updates.
