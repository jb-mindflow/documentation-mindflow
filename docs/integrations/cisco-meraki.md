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

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmL2E2MmEyYTJlLWRmY2QtNDUwYy1hZjk5LTUzM2Y0ZTQ1NWY5Zi9TY3JlZW5zaG90XzIwMjUtMDMtMTdfYXRfMTEuMDMuNDFfQU0ucG5nP3RhYmxlPWJsb2NrJmlkPTMzNTkzYTA4LTBhYjAtODA5Yi05ZDU4LWQ3NTU1ZGIxZGYxYiZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzU0MTY0Njc2NzImc2lnbmF0dXJlPUN4dWI0MXZHZzU1YXFfZkZ5cUYzRVlZTVdxdHcxRVlBZnQ5VmJyRHJtV0k=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

## 2\. Configure the Mindflow Credential

Now, you will take that API key and securely store it in Mindflow to enable your automated workflows.

### Step 2.1: Select the Meraki Service

1.  In the Mindflow platform, navigate to your **Environments**.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzJiY2Q2NWY3LTExMWQtNDYzYy1iNTUzLTM2NzJiMjRjZWFhNS9TY3JlZW5zaG90XzIwMjYtMDQtMDFfYXRfMDguNTguMzUucG5nP3RhYmxlPWJsb2NrJmlkPTMzNTkzYTA4LTBhYjAtODA0My05NzVhLWNjOWRlZmMxNzc0OSZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzU0MTY0Njc2Njkmc2lnbmF0dXJlPTlDUWl6Mk9URFh6SGl4TXc1NzVLLWtCZXkzcHNqa3AzQ2FOX09XQVRvc2s=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

2.  Click **Create Credential** and search for **"Cisco Meraki Dashboard"**.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzdiOTdmNWFjLWJiZDEtNDFmMC05MGVjLTZjNDAwOWNiZDBiZi9TY3JlZW5zaG90XzIwMjYtMDQtMDFfYXRfMDkuMjIuMzUucG5nP3RhYmxlPWJsb2NrJmlkPTMzNTkzYTA4LTBhYjAtODA5OS1hYjA4LWY5Y2UyMGVlZDRkMCZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzU0MTY0Njc2NzYmc2lnbmF0dXJlPXkxd242QW5PY0h0b2F1Tm1Zd2x2QzBlLXM1TGJsbjhYUnAxeTdXZmI0YkE=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

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

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmL2ZiMTdmZGIwLWExY2QtNGM0YS1hMWRlLTdiYmJjYzU2NWVmNi9TY3JlZW5zaG90XzIwMjYtMDQtMDFfYXRfMDkuMjIuNTMucG5nP3RhYmxlPWJsb2NrJmlkPTMzNTkzYTA4LTBhYjAtODBkMC05ZTZjLWQyMWY4OTM4MDhkMiZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzU0MTY0Njc2NTUmc2lnbmF0dXJlPWRfTjBFODdtNjdKVzVuVUlNTXRZS210MGhzc05QRU5WLUZ4MV9rc2J0MFE=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

1.  Click on the **Advanced** toggle.

2.  Expand the **Headers** section.

3.  Add an item with the Key: `**Authorization**`.

### Step 2.4: Save and Test

Click **Create**. Your Cisco Meraki credential is now securely stored and ready to be pulled into any Mindflow action, allowing you to automate everything from SSID management to security group updates.
