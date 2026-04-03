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

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmL2M1M2UzOGQ4LTUwMTQtNDBmZS05MWNkLTU5MTFiMmE2MzVlZC9TY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMDkuNTEucG5nP3RhYmxlPWJsb2NrJmlkPTJlZDkzYTA4LTBhYjAtODAxMC1hZDY3LWY3NmU0MzJlYTgwYyZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI4MjEyMzEmc2lnbmF0dXJlPVQ0N0p5U0xYa0tUVllRU09URF9tM0FzaTFjRTdxdk9SUXdQUklsa1ZhNDA=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

4.  On the left navigation bar, open Apps then click on `External Client Apps`.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzgwMThjZGM3LTFlNzYtNGQ1Ny04ODI0LWFiNmM4ZDQ1NWFkYS9TY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTAuMTkucG5nP3RhYmxlPWJsb2NrJmlkPTJlZDkzYTA4LTBhYjAtODA0OS04ZjI1LWVhZGYzNjc4MzFmNyZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI4MjEyMzEmc2lnbmF0dXJlPXhzMVdNNVRqMDluTGlTd2g4bHh2V042Ny0tSHpITm1jaHgxb21tWmZ4Sms=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

5.  Then, on the right of the window, click `New External Client App`.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzE2YjlkZDAyLWE4YTktNDYxMi05YmZjLWE3NDdjZDNmZGJiNC9TY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTAuMzEucG5nP3RhYmxlPWJsb2NrJmlkPTJlZDkzYTA4LTBhYjAtODBjZi1hMzJkLWQ2OGE0MTEzY2Y5MiZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI4MjEyMzEmc2lnbmF0dXJlPWg1OFAyT2NmU3RpNVR2dFhVUUdtaEwyZGF6RHp2eUdUeVFEX1JOa2FxWjQ=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

6.  In Basic Information, give a name to the External App, a contact email, and Distribution State.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzE2ZGE3M2Q2LTllNjItNGIyYS1iNmEwLTM2YTFmNzY0N2UyNC9TY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTAuNTUucG5nP3RhYmxlPWJsb2NrJmlkPTJlZDkzYTA4LTBhYjAtODAzNC04YzU2LWM4N2M4MDE0OWQxNyZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI4MjEyMzEmc2lnbmF0dXJlPTRIM0dZRTI4TGpaZXdJR2dzdVVtMk9uMld4SVJfa0ZtR1lEd0U5V0liMWs=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

7.  Open API (Enable OAuth Settings), click `Enable OAuth`.

8.  Populate the callback URL with `https://login.salesforce.com/services/oauth2/callback`.

9.  As OAuth Scopes, only select `Manager user data via APIs (api)` and `Perform requests at any time (refresh_token, offline_access)`. Find a list of all available scopes within the Scopes section of this document.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzhiMjkxNmIzLTg2MzktNDBlYS04M2VlLTYyY2M1ZDVhOWY5Zi9TY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTIuMzcucG5nP3RhYmxlPWJsb2NrJmlkPTJlZDkzYTA4LTBhYjAtODA1MS04NWU0LWVjMzU2Y2E3ODg5NCZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI4MjEyMzEmc2lnbmF0dXJlPVJCVGg4XzF5VjNFVWg0VnEzZmpVaDMxVnhIUUMyZlZjTlpDcEk3NkNUbUk=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

10.  Within Flow Enablement, only enable `Enable Client Credentials Flow`.

11.  Within Security, start by enabling `Require secret for Web Server Flow` and `Require secret for Refresh Token Flow`. You will be able to add more settings later on.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzcwNjhiOTRjLTQ5OWQtNGQ2Zi04NWYwLTA4NjliNDUyNzdiYi9TY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTMuMDQucG5nP3RhYmxlPWJsb2NrJmlkPTJlZDkzYTA4LTBhYjAtODBhZi1hY2MwLWQ3NTZlYWFkM2Y5ZCZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI4MjEyMzEmc2lnbmF0dXJlPUxlQ29ldXhVd19xSmV6VVNZZ2pBRzRqRlFWNkpqSFF3a2lMNWE3RlhfUmc=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

12.  You’re set, click `Create`.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzlkNmFkOGM1LTE3NjEtNDdjMC05MDJkLWUwMzUxMjk5N2QyNC9TY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTMuMjkucG5nP3RhYmxlPWJsb2NrJmlkPTJlZDkzYTA4LTBhYjAtODA1MS04ZThiLWMyYTJlZTQ3MjdhYiZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI4MjEyMzEmc2lnbmF0dXJlPUxZM0dxdTVHZlFXUDRzcjR5c01JcFEwVzJzR0JjTHdyWG9kd3I3RmFzbDA=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

14.  Now, within the App panel and the Policies blade, select `OAuth` within Start page dropdown.

14.  As the OAuth Start URL, fill in your environment URL up until `…force.com`.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzZhNjUyNWJiLTU0OWMtNDUyOC04ZmQxLTQ2OGU4ZDMyOTA5Zi9TY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTQuMTcucG5nP3RhYmxlPWJsb2NrJmlkPTJlZDkzYTA4LTBhYjAtODAzYy1iMjBhLWU2MGUxY2ZkNzM5NSZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI4MjEyMzImc2lnbmF0dXJlPW5BR2xsdzQ5emkwaGdiQUxjYzFuNEY4dHJqMnlkU21zLVd0YUN4czlwLVk=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

15.  Within OAuth Flows and External Client App Enhancements, enable `Enable Client Credentials Flow` and, set, as Run as, a service account email address.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzAzNDIyMTY5LWUxMTQtNDE2ZS04NGMzLTBmOWQxOGU2NjcwYS9TY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTQuMzYucG5nP3RhYmxlPWJsb2NrJmlkPTJlZDkzYTA4LTBhYjAtODA4MC1iZjI1LWQxNjM1YWYwMjI1NiZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI4MjEyMzEmc2lnbmF0dXJlPUNaalYzN2J0REFveWxLWldyZWdPZ1I5aFIzZFpXdzFMcVJPV3J3YWxVTVE=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

16.  Note that you are able, in App Authorization, to enforce some limitations, such as Refresh token validity period, IP whitelisting, etc. Depending on your subscription plan, you may benefit from IP whitelisting. Reach your Customer Success to know more about that.

17.  Click `Save`.

18.  Now, on to the last part. Open the Settings blade of the app you created. Open OAuth Settings and click on `Consumer Key and Secret`.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzU2MGNiZjczLTk5M2EtNGZkZi04MTE1LWZmMGI4MzJjMzE3OC9TY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTUuMTEucG5nP3RhYmxlPWJsb2NrJmlkPTJlZDkzYTA4LTBhYjAtODBjMS04YTQ3LWU5MWMxMWJjMzg5NCZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI4MjEyMzEmc2lnbmF0dXJlPUR5M3M3TzF2N3VuVUJsNVloLWhfZ01Rc2gzREZyWThGNU1jMlRUUWxDdVU=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

19.  This will open a new window requesting to approve the access through a temporary code sent to your email address.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzU4MWZhYTQ2LWI4OTUtNDg3MS1iNmViLTg3NDJjNjkxMDkxYS9TY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTUuMTcucG5nP3RhYmxlPWJsb2NrJmlkPTJlZDkzYTA4LTBhYjAtODAyNC04NzJlLWMwNzI5ZmFlZjk0ZSZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI4MjEyMzImc2lnbmF0dXJlPWdzZEp6blhkSHQxbXRoWkJkVkJtU0xZNDBzdXN4dVE4T1M2SFRkSWY5UGs=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

20.  Once done, you will be able to see yout `Consumer Key` and your `Consumer Secret`. Store them in a secure manner. You will need them to configure the credential in Mindflow.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmL2MwY2Y3YmI0LTM4YmMtNGVhNi05ZjhlLTUyYzAxNjdlOGUxZi9TY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMTcuMDQucG5nP3RhYmxlPWJsb2NrJmlkPTJlZDkzYTA4LTBhYjAtODBhZi1iNjdjLWUzMjljNmIyYTc5NSZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI4MjEyMzEmc2lnbmF0dXJlPWhldWViWkJQM0dISmVRNXhLR1VycVh2TUphRlh3Uy1JUTdmNTBDY1loMVk=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

21.  Now, login to Mindflow. Open the Environments tab and, within the target environment, click Create a credential (if credentials already exist in the target environment, click the `+` icon on the right, right next to the Environment’s members icons.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzFlOThlMzYxLWNkZDItNDg0Zi1hMjQ3LTk3YzkwYzU4YjA1OC9TY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMzMuNDgucG5nP3RhYmxlPWJsb2NrJmlkPTJlZDkzYTA4LTBhYjAtODA1OS1hYWY0LWZmZWRmZDA0NjY5MyZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI4MjEyMzEmc2lnbmF0dXJlPW1mU1kzZERtSEVmZUxWVHJ2b3JlYUJPVkpVRW45YWtvT0d4Nk9DUzFvaEU=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

22.  Then, within Service, look for Lightning Platform API (mind the different versions, choose v65.0).

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzhiZDBlNTQ4LTJjOTMtNGY2OS1iNWM0LTFkZmRhY2MyZGQ5OS9TY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMzQuMDQucG5nP3RhYmxlPWJsb2NrJmlkPTJlZDkzYTA4LTBhYjAtODA1MC1iNWE1LWYwZjFlODFjZDY5YyZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI4MjEyMzEmc2lnbmF0dXJlPVpJQzdkc1JrbkloVmtQQ2NFeHRWOU1lLTR1dGd6YndqaWlTTVI3cFhoT00=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

23.  Once select, the form will update with new fields. Start by setting the Credential type to OAuth 2.0 Client Credentials.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzI5NWFmZWE3LWYyY2ItNGViYi1hMDk3LTdjNGFmZTQzZWZkYi9TY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMzQuMTkucG5nP3RhYmxlPWJsb2NrJmlkPTJlZDkzYTA4LTBhYjAtODA2Zi1hOGNjLWRmNWY4NjVlMGZiYiZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI4MjEyMzEmc2lnbmF0dXJlPWNwTXVlT3hmME1DVFZjYmU0cVFHb3hTZS1RZmV3NzA2amwxTXVLT015bGM=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

24.  Then:

1.  update the Instance field with your Salesforce environment name.
2.  Within Client Id, copy and paste your Consumer Key.
3.  Within Client Secret, copy and paste your Consumer Secret.
4.  Within Access Token URL, replace {instance} with your environment name up until `…salesforce.com`.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmL2FjMDQyYTU3LTRlNTctNDU0Yi1hMDBkLThiNmY3YmRiY2FmZS9TY3JlZW5zaG90XzIwMjYtMDEtMTlfYXRfMTcuMzUuMjAucG5nP3RhYmxlPWJsb2NrJmlkPTJlZDkzYTA4LTBhYjAtODBkNS05YzMxLWU2ZGE3MmY0MDQ1MSZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzUyNDI4MjEyMzQmc2lnbmF0dXJlPXVTQXFUZ3Q3ekVNZTJIRGowelJqZUF5NDZncWl3YXN0NFpYOHptcjBMMTg=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

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
