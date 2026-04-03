---
title: Facebook
sidebar_position: 9
---

# Facebook

## Create a Facebook app and set up authentication on Mindflow

1.  Go to: [https://developers.facebook.com/apps/](https://developers.facebook.com/apps/)

2.  Click the `Create an app` button and fill in the required fields.

3.  Once the app is created, retrieve the `App ID` and the `App Secret` from _`App Settings`_ _>_ _`Basic`_.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkZmMDAyN2ZhYy03M2Y2LTRlYjUtOTQwNi01ODAxMGVmM2FjOTUlMkZEZXNpZ25fc2Fuc190aXRyZS5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD01NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYmaWQ9OTQwYzUwY2QtMTFjOS00Nzg1LWJlMmItZTI0YmUwMDk0MTlhJmNhY2hlPXYyJndpZHRoPTEzNjMuOTg0Mzc1)

4.  Go to your app's `Dashboard` and add the `Facebook Login` product.

5.  Click the `Vault` tab, then the `+ Add Credentials` button, and search for Facebook Lead Ads API.

6.  Choose `**OAuth 2.0 Authorization Code**` for the `Credential type` and fill in the fields as follows:

1.  `Client_id*` = Your `App ID`
2.  `Client_secret*` = Your `App Secret`
3.  `Authorization URL*` = _[https://www.facebook.com/v12.0/dialog/oauth](https://www.facebook.com/v12.0/dialog/oauth)_
4.  `Access token URL*` = _[https://graph.facebook.com/v12.0/oauth/access\_token](https://graph.facebook.com/v12.0/oauth/access_token)_
5.  `Scope(s)*`(Advanced) = The scopes relevant to the actions you want to perform

-   _e.g., (catalog\_management,ads\_management,business\_management leads\_retrieval,pages\_show\_list,pages\_manage\_metadata,pages\_read\_engagement,pages\_read\_user\_content,pages\_manage\_ads) for the Facebook Marketing API_

7.  Copy the `Callback URL`, return to Facebook, go to `Facebook Login` > `Settings`, and add the `Callback URL` in the `Valid OAuth Redirect URIs`. Click `Save changes`.

8.  Return to Mindflow and click `Authorize and create`. A Facebook window will open, click the button to validate the connection.

9.  Congratulations, you have configured OAuth 2.0 authentication for your Facebook app. You can now use it by selecting this credential in your steps to authenticate Facebook integrations.

:::note
➡️
:::note
Test webhook with test lead generator: [Generator](https://developers.facebook.com/tools/lead-ads-testing/)
:::
:::

## Create the webhook

1.  Go to the Dashboard of your Facebook app [https://developers.facebook.com/apps/your\_app\_id/dashboard/](https://developers.facebook.com/apps/your_app_id/dashboard/)

2.  Add the `Webhooks` product by clicking the `Set up` button.

3.  Click the `Webhook` page that appears on your sidebar.

4.  Select the desired topic (e.g., `Pages`) and click the `Subscribe to this object` button.

5.  Go to your playbook on Mindflow and click the `⚙️` icon.

6.  Click the `Triggers` section, check the `Webhook` box, and copy the `WEBHOOK (SYNCHRONOUS)`.

7.  Return to your Facebook app and fill in the required fields:

1.  `Callback URL` = The value previously copied from Mindflow.
2.  `Verify Token` = Any value (e.g., my\_verify\_token).

8.  Click the `Verify and save` button.

9.  Return to Mindflow and create a `webhook response` step.

10.  Configure it by adding a new `Body` of type `Text` and insert the `hub.challenge` value received from the Facebook webhook.

11.  Return to the Facebook app and click `Verify and save` again.

12.  You can now subscribe to events for the topic by clicking the `Subscribe` button and test your webhook with test data using the `Test` button.

13.  You can now delete the `webhook response` step from your playbook; your trigger is operational.
