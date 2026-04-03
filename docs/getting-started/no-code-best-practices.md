---
title: No-Code best practices
sidebar_position: 5
---

# No-Code best practices

## Introduction

Building automations in a no-code platform like Mindflow is similar to writing software. While you don't write traditional code, the principles that ensure **quality**, **readability**, and **maintainability** still apply. Adopting best practices from day one will help you and your team build robust, scalable, and collaborative automation solutions.

This guide outlines the essential best practices for creating high-quality workflows in Mindflow.

## 1\. Naming conventions: Clarity is key

Clear and consistent naming is the foundation of a readable workflow. It allows anyone, including your future self, to understand the purpose of each component at a glance.

### **Workflows**

Use a structured and descriptive name that explains the workflow's primary function. A good pattern is `[Trigger/Source] - [Action] - [Object]`.

-   ❌ **Bad:** `New Flow 1`, `Jira`, `Phishing Test`

-   ✅ **Good:** `Jira-Ticket - Enrich IOCs - VirusTotal`, `MSGraph-Email - Triage Phishing Report`, `Okta - New User - Provision SaaS Apps`

### **Steps**

Rename every step to describe what it _**actually**_ _does_, not just what tool it uses.

-   ❌ **Bad:** `Transform Data`, `HTTP Request`, `Condition`

-   ✅ **Good:** `Extract URLs from Email Body`, `Query User Reputation in Splunk`, `Check if IP is Internal`

### **Variables**

Use a consistent format (like **camelCase** or **snake\_case**) and be descriptive.

-   ❌ **Bad:** `ip`, `data`, `u`

-   ✅ **Good:** `sourceIpAddress`, `jiraTicketDetails`, `userEmail`

## 2\. Documentation & readability

A workflow is only as good as it is understandable. Good documentation prevents tribal knowledge and makes collaboration and handoffs seamless.

### **Use workflow descriptions**

Always fill out the **Description** field for every workflow. Include:

-   **Goal:** What is the business purpose of this automation?

-   **Trigger:** How is it initiated (e.g., webhook from Jira, email to a specific mailbox)?

-   **Owner:** Who is the primary contact for this workflow?

-   **Expected Outcome:** What happens when the workflow runs successfully?

### **Leverage the "Notes" step**

Think of the **Notes** step as the equivalent of code comments. Use them to:

-   Explain complex business logic within a condition.

-   Document why a specific API endpoint or parameter was chosen.

-   Leave instructions for other team members.

-   Mark sections of the workflow (e.g., "--- Start of Enrichment Phase ---").

### **Maintain a clean canvas**

A tidy visual layout dramatically improves readability.

-   **Organize logically:** Arrange steps in a clean, top-to-bottom or left-to-right flow.

-   **Align steps:** Use the canvas grid to align your steps neatly.

-   **Avoid "spaghetti":** Minimize crossing lines. If a workflow becomes too complex, it's a sign you should break it into subflows.

## 3\. Modularity & reusability

Don't repeat yourself. Building reusable components saves time and reduces the chance of errors.

### **Create subflows (Child flows)**

If you find yourself building the same sequence of steps in multiple workflows, turn it into a subflow.

-   **Example:** A "User Enrichment" subflow that takes an email address as input and returns the user's name, department, and manager from your identity provider.

-   **Benefits:** This subflow can then be called by your Phishing, Suspicious Login, and Leaver workflows. If you need to update the logic, you only have to do it in one place.

### **Use global variables**

Store values that are used across workflow in **Global Variables**.

-   **Examples:** Admin email for notifications, Slack channel ID for alerts, tenant-specific IDs.

-   **Benefit:** If a value changes (e.g., the alerts channel is renamed), you only need to update the global variable, not every steps that uses it.

## 4\. Logic & efficiency

Build workflows that are not only functional but also resilient and efficient.

### **Always include error handling**

A workflow should not fail silently.

-   Use a **Condition** step after critical actions (like API calls) to check if the step was successful (e.g., `status_code == 200`).

-   Create a dedicated error-handling branch that sends a notification (via Slack or email) with the error details and the workflow execution ID.

### **Avoid hardcoding values**

Never hardcode sensitive or environment-specific data directly in a step.

-   ❌ **Bad:** Pasting an API key directly into an `HTTP Request` header.

-   ✅ **Good:** Storing the API key in the **Credentials Vault** and referencing it in the step.

### **Process data efficiently**

-   **Be specific:** Use functions like **JSONPath** to extract only the specific fields you need from a large API response. Passing large, unnecessary data objects from step to step can slow down execution and make debugging harder.

-   **Transform early:** Clean, format, and transform data as early as possible in the workflow so subsequent steps can work with predictable data structures.

## 5\. Testing & lifecycle Management

Treat your automations like production applications.

### **Use dedicated environments**

-   **Never build in Production.** Use at least two environments: a **Development/Staging** environment for building and testing, and a **Production** environment for live workflows.

-   This allows you to test changes safely without impacting live operations.

### **Test incrementally**

-   Use the **"Run Step"** button frequently as you build to test each step's output individually. This makes it much easier to catch and fix issues early.

### **Practice version control**

-   Before making significant changes to a production workflow, use the **"Copy Flow"** feature to create a new version (e.g., `PhishingTriage-v1.2`).

-   Test the new version thoroughly in your development environment before promoting it to production.
