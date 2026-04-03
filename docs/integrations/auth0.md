---
title: Auth0
sidebar_position: 1
---

# Auth0

Users will find in this section technical documentation about Auth0, how to set up the integration between Mindflow and Auth0 and how to use Auth0 API filtering and searching capabilities.

* * *

[![Setting up Auth0 integration](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E1ODk3YTZlZS1iNmMzLTQyYzgtYTYwNi00MDdlMWY3MjRjNjUlM0FhdXRoMC1sb2dvLWR4Z3o4bnQwd2lzbWs0cHBwdWo2eWsud2VicD90YWJsZT1ibG9jayZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZpZD0zMGQ5M2EwOC0wYWIwLTgwNDQtYjRjOC1kMjJmZTFhMDMxZGYmY2FjaGU9djImd2lkdGg9MjAw)

Setting up Auth0 integration](/integrations/auth0/setting-up-auth0-integration)

To integrate Auth0, first create a Machine-to-Machine (M2M) application in your Auth0 dashboard to generate your required Domain, Client ID, and Client Secret. Next, securely input these credentials into Mindflow's Environments panel to establish an automated, userless connection to the Auth0 Management API.

[![Using Auth0 filtering capabilities through API](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2F0dGFjaG1lbnQlM0E4NDI1YTBmOC04NjJiLTQxYzctYWNlMy05ZTBhZjg3OGYwZmMlM0FhdXRoMC1sb2dvLWR4Z3o4bnQwd2lzbWs0cHBwdWo2eWsud2VicD90YWJsZT1ibG9jayZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZpZD0zMGQ5M2EwOC0wYWIwLTgwNzctYjM5Yi1jYmNhZjhkY2FhOWImY2FjaGU9djImd2lkdGg9MjAw)

Using Auth0 filtering capabilities through API](/integrations/auth0/using-auth0-filtering-capabilities-through-api)

Once connected, you can leverage the Auth0 Management API's `q` parameter using Lucene query syntax to precisely search and filter your user base. This powerful feature allows you to use logical operators, wildcards, and exact matches to query both standard profile fields and custom nested metadata.
