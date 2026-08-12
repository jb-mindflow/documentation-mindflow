---
title: Introduction
sidebar_position: 19
---

# Introduction

To integrate Salesforce into Mindflow, you will need to create and configure an External App within Salesforce, then create and configure a Credential in Mindflow.

This guide will walk you through the different steps to create and set up an External App in Salesforce and the configuration of the related credential in Mindflow.

# Prerequisites

1.  A service account dedicated to automation, for traceability and auditability purposes.

2.  Admin rights to create External Client Apps.

3.  Logged in your Mindflow platform.

# Walkthrough

1.  Log in to your Salesforce environment.

2.  Click the gear icon on the top right of your screen.

3.  Click `Setup`.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0FjNTNlMzhkOC01MDE0LTQwZmUtOTFjZC01OTExYjJhNjM1ZWQlM0FTY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMDkuNTEucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTJlZDkzYTA4LTBhYjAtODAxMC1hZDY3LWY3NmU0MzJlYTgwYyZjYWNoZT12MiZ3aWR0aD0xMzYzLjk1ODM3NDAyMzQzNzU=)

4.  On the left navigation bar, open Apps then click on `External Client Apps`.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E4MDE4Y2RjNy0xZTc2LTRkNTctODgyNC1hYjZjOGQ0NTVhZGElM0FTY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTAuMTkucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTJlZDkzYTA4LTBhYjAtODA0OS04ZjI1LWVhZGYzNjc4MzFmNyZjYWNoZT12MiZ3aWR0aD0xMzYzLjk1ODM3NDAyMzQzNzU=)

5.  Then, on the right of the window, click `New External Client App`.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0ExNmI5ZGQwMi1hOGE5LTQ2MTItOWJmYy1hNzQ3Y2QzZmRiYjQlM0FTY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTAuMzEucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTJlZDkzYTA4LTBhYjAtODBjZi1hMzJkLWQ2OGE0MTEzY2Y5MiZjYWNoZT12MiZ3aWR0aD0xMzYzLjkxNjc0ODA0Njg3NQ==)

6.  In Basic Information, give a name to the External App, a contact email, and Distribution State.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0ExNmRhNzNkNi05ZTYyLTRiMmEtYjZhMC0zNmExZjc2NDdlMjQlM0FTY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTAuNTUucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTJlZDkzYTA4LTBhYjAtODAzNC04YzU2LWM4N2M4MDE0OWQxNyZjYWNoZT12MiZ3aWR0aD0xMzYzLjkxNjc0ODA0Njg3NQ==)

7.  Open API (Enable OAuth Settings), click `Enable OAuth`.

8.  Populate the callback URL with `https://login.salesforce.com/services/oauth2/callback`.

9.  As OAuth Scopes, only select `Manager user data via APIs (api)` and `Perform requests at any time (refresh_token, offline_access)`. Find a list of all available scopes within the Scopes section of this document.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E4YjI5MTZiMy04NjM5LTQwZWEtODNlZS02MmNjNWQ1YTlmOWYlM0FTY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTIuMzcucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTJlZDkzYTA4LTBhYjAtODA1MS04NWU0LWVjMzU2Y2E3ODg5NCZjYWNoZT12MiZ3aWR0aD0xMzYzLjkxNjc0ODA0Njg3NQ==)

10.  Within Flow Enablement, only enable `Enable Client Credentials Flow`.

11.  Within Security, start by enabling `Require secret for Web Server Flow` and `Require secret for Refresh Token Flow`. You will be able to add more settings later on.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E3MDY4Yjk0Yy00OTlkLTRkNmYtODVmMC0wODY5YjQ1Mjc3YmIlM0FTY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTMuMDQucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTJlZDkzYTA4LTBhYjAtODBhZi1hY2MwLWQ3NTZlYWFkM2Y5ZCZjYWNoZT12MiZ3aWR0aD0xMzYzLjkxNjc0ODA0Njg3NQ==)

12.  You’re set, click `Create`.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E5ZDZhZDhjNS0xNzYxLTQ3YzAtOTAyZC1lMDM1MTI5OTdkMjQlM0FTY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTMuMjkucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTJlZDkzYTA4LTBhYjAtODA1MS04ZThiLWMyYTJlZTQ3MjdhYiZjYWNoZT12MiZ3aWR0aD0xMzYzLjk1ODM3NDAyMzQzNzU=)

14.  Now, within the App panel and the Policies blade, select `OAuth` within Start page dropdown.

14.  As the OAuth Start URL, fill in your environment URL up until `…force.com`.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E2YTY1MjViYi01NDljLTQ1MjgtOGZkMS00NjhlOGQzMjkwOWYlM0FTY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTQuMTcucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTJlZDkzYTA4LTBhYjAtODAzYy1iMjBhLWU2MGUxY2ZkNzM5NSZjYWNoZT12MiZ3aWR0aD0xMzYzLjk1ODM3NDAyMzQzNzU=)

15.  Within OAuth Flows and External Client App Enhancements, enable `Enable Client Credentials Flow` and, set, as Run as, a service account email address.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0EwMzQyMjE2OS1lMTE0LTQxNmUtODRjMy0wZjlkMThlNjY3MGElM0FTY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTQuMzYucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTJlZDkzYTA4LTBhYjAtODA4MC1iZjI1LWQxNjM1YWYwMjI1NiZjYWNoZT12MiZ3aWR0aD0xMzYzLjk1ODM3NDAyMzQzNzU=)

16.  Note that you are able, in App Authorization, to enforce some limitations, such as Refresh token validity period, IP whitelisting, etc. Depending on your subscription plan, you may benefit from IP whitelisting. Reach your Customer Success to know more about that.

17.  Click `Save`.

18.  Now, on to the last part. Open the Settings blade of the app you created. Open OAuth Settings and click on `Consumer Key and Secret`.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E1NjBjYmY3My05OTNhLTRmZGYtODExNS1mZjBiODMyYzMxNzglM0FTY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTUuMTEucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTJlZDkzYTA4LTBhYjAtODBjMS04YTQ3LWU5MWMxMWJjMzg5NCZjYWNoZT12MiZ3aWR0aD0xMzYzLjk1ODM3NDAyMzQzNzU=)

19.  This will open a new window requesting to approve the access through a temporary code sent to your email address.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E1ODFmYWE0Ni1iODk1LTQ4NzEtYjZlYi04NzQyYzY5MTA5MWElM0FTY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTUuMTcucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTJlZDkzYTA4LTBhYjAtODAyNC04NzJlLWMwNzI5ZmFlZjk0ZSZjYWNoZT12MiZ3aWR0aD0xMzYzLjkxNjc0ODA0Njg3NQ==)

20.  Once done, you will be able to see yout `Consumer Key` and your `Consumer Secret`. Store them in a secure manner. You will need them to configure the credential in Mindflow.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0FjMGNmN2JiNC0zOGJjLTRlYTYtOWY4ZS01MmMwMTY3ZThlMWYlM0FTY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTcuMDQucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTJlZDkzYTA4LTBhYjAtODBhZi1iNjdjLWUzMjljNmIyYTc5NSZjYWNoZT12MiZ3aWR0aD0yNDAw)

21.  Now, login to Mindflow. Open the Environments tab and, within the target environment, click Create a credential (if credentials already exist in the target environment, click the `+` icon on the right, right next to the Environment’s members icons.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0ExZTk4ZTM2MS1jZGQyLTQ4NGYtYTI0Ny05N2M5MGM1OGIwNTglM0FTY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMzMuNDgucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTJlZDkzYTA4LTBhYjAtODA1OS1hYWY0LWZmZWRmZDA0NjY5MyZjYWNoZT12MiZ3aWR0aD0xMzYzLjkxNjc0ODA0Njg3NQ==)

22.  Then, within Service, look for Lightning Platform API (mind the different versions, choose v65.0).

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E4YmQwZTU0OC0yYzkzLTRmNjktYjVjNC0xZGZkYWNjMmRkOTklM0FTY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMzQuMDQucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTJlZDkzYTA4LTBhYjAtODA1MC1iNWE1LWYwZjFlODFjZDY5YyZjYWNoZT12MiZ3aWR0aD0xMzYzLjkxNjc0ODA0Njg3NQ==)

23.  Once select, the form will update with new fields. Start by setting the Credential type to OAuth 2.0 Client Credentials.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0EyOTVhZmVhNy1mMmNiLTRlYmItYTA5Ny03YzRhZmU0M2VmZGIlM0FTY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMzQuMTkucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTJlZDkzYTA4LTBhYjAtODA2Zi1hOGNjLWRmNWY4NjVlMGZiYiZjYWNoZT12MiZ3aWR0aD0xMzYzLjkxNjc0ODA0Njg3NQ==)

24.  Then:

1.  update the Instance field with your Salesforce environment name.
2.  Within Client Id, copy and paste your Consumer Key.
3.  Within Client Secret, copy and paste your Consumer Secret.
4.  Within Access Token URL, replace {instance} with your environment name up until `…salesforce.com`.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0FhYzA0MmE1Ny00ZTU3LTQ1NGItYTAwZC04YjZmN2JkYmNhZmUlM0FTY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMzUuMjAucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTJlZDkzYTA4LTBhYjAtODBkNS05YzMxLWU2ZGE3MmY0MDQ1MSZjYWNoZT12MiZ3aWR0aD0xMzYzLjkxNjc0ODA0Njg3NQ==)

25.  Click `Save`. Your integration to Saleforce is configured!

# Scopes

### Identity and Core Access

-   **id, profile, email, address, phone:** Allows the app to access the Identity URL service to retrieve specific user profile details.

-   **openid:** Grants access to the current user's unique identifier via the OpenID Connect protocol.

-   **web:** Allows the app to use the logged-in user’s session to manage data via a web browser.

-   **api:** Grants access to all Salesforce REST, SOAP, and Bulk API resources for data management.

-   **full:** Provides access to all data and services accessible by the user, including all other specific scopes.

### Feature-Specific Access

-   **chatter\_api:** Grants access to Chatter REST API resources, including feeds, groups, and users.

-   **visualforce:** Allows the application to access and render custom Visualforce pages.

-   **lightning:** Grants access to Lightning Experience features and custom Lightning components.

-   **content:** Allows the app to manage Salesforce Content resources like Libraries, Files, and Documents.

-   **wave\_api:** Provides access to the Analytics (CRM Analytics) REST API resources and datasets.

-   **eclair\_api:** Specifically grants access to the geo-spatial chart data used within Analytics.

-   **pardot\_api:** Allows the app to manage Pardot marketing automation services and data.

-   **sfap\_api:** Grants access to the underlying Salesforce API Platform services.

-   **chatbot\_api:** Provides the permissions necessary to interact with Salesforce Einstein Chatbot services.

-   **interaction\_api:** Grants access to the Interaction Service API for real-time event processing.

-   **einstein\_gpt\_api:** Allows the application to interact with generative AI and Einstein GPT services.

### Data Cloud (CDP) Scopes

-   **cdp\_api:** A "master scope" that grants access to all Data Cloud API resources.

-   **cdp\_ingest\_api:** Allows the application to push or stream data into Data Cloud via the Ingestion API.

-   **cdp\_profile\_api:** Grants access to Unified Profile data and calculated attributes within Data Cloud.

-   **cdp\_query\_api:** Allows the app to execute ANSI SQL queries against Data Cloud data lakes.

-   **cdp\_segment\_api:** Grants permission to manage and retrieve Data Cloud segments for marketing.

-   **cdp\_identityresolution\_api:** Allows management of the rules that link various data points to a single person.

-   **cdp\_calculated\_insight\_api:** Grants access to predefined multidimensional metrics known as Calculated Insights.

### Headless and Session Management

-   **refresh\_token, offline\_access:** Allows the app to request a new access token without the user re-logging in (maintains long-term access).

-   **pwdless\_login\_api:** Grants access to the Headless Passwordless Login API for custom authentication flows.

-   **forgot\_password:** Allows the app to trigger and manage the Headless Forgot Password process.

-   **user\_registration\_api:** Grants access to the Headless Registration API to sign up new users.

-   **custom\_permissions:** Allows the app to check for specific custom permissions assigned to the user.
