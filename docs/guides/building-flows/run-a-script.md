---
title: Run a Script
sidebar_position: 9
---

# Run a Script

## **How to Run Script inside a Flow**

:::note
![Icon](https://www.notion.so/icons/traffic-cone_lightgray.svg?mode=light)

:::note
Please note the following current limitations of this alpha feature:

-   Custom modules cannot be imported.

-   It's not possible to perform a dry run of a single step.
:::
:::

It's now possible to use the **scripting** (source code) on our platform! This new feature allows you to automate workflows by incorporating Python and JavaScript directly into your flows. Below is a comprehensive guide to help you get started.

* * *

### **1\. Why Script capabilities**

The **Run Script** feature gives you full flexibility when pre-built actions are not enough.

While connectors and native blocks cover most common automation needs, scripting allows you to:

-   Handle **complex logic and conditional flows**

-   Transform and normalize **structured or nested data**

-   Build **custom validation or formatting rules**

-   Prototype advanced automation without waiting for a dedicated feature

In short, scripting bridges the gap between no-code automation and full-code flexibility, directly inside your flow. Mindflow is not a simple no-code platform, but a “no-jail no-code” platform, simple, but never blocked.

* * *

### **2\. Sandboxing & Security**

To ensure maximum security and platform stability, every script runs inside a **dedicated sandboxed execution environment**.

This environment is:

-   **Isolated** – Each execution runs independently from other users and flows

-   **Ephemeral** – The runtime is created on demand and destroyed after execution

-   **Stateless** – No data persists between executions

-   **Restricted** – System-level access is strictly controlled

Because of these security constraints:

-   You cannot execute system binaries or shell commands

-   You cannot access the host operating system

-   You cannot install external packages

-   You cannot perform privileged system operations

These limitations are intentional. They guarantee secure, predictable, and reliable execution for every workflow while protecting the platform and its users.

* * *

### **2.b Custom Binaries & Advanced Features**

Some advanced use cases require tools that depend on system-level binaries — for example:

-   OCR engines

-   PDF rendering tools like wkhtmltopdf

-   Image or document processing utilities

-   Other performance-intensive native libraries

Because scripts run in a secure sandbox, arbitrary binaries cannot be uploaded or executed.

For selected tools, we provide **signed and platform-approved executables** that are:

-   Compiled specifically for Mindflow compatibility

-   Security-reviewed before deployment

-   Tested within our sandbox constraints

-   Monitored for stability and performance

If you need a specific binary-backed capability, contact us. We evaluate requests on a case-by-case basis.

* * *

### **3\. Supported Languages**

You can now write and execute scripts using:

-   **Python 3**

-   **JavaScript (Node.js 18 & Node.js 22)**

Choose the language that best suits your needs, or even mix them within the same flow!

* * *

### **4\. Importing Standard Modules**

You can import standard modules in both languages. For instance:

**Python**

You can import modules like `json` or `http`. `import json import http.client`

**Javascript**

You can import modules similarly: `const http = require('http'); const fs = require('fs');`

In case you need custom packages (Python or JS), reach out to us and we’ll provide guidance.

* * *

### **5\. Using Data from the Flow**

“Complex” part begins here, because scripts run in a dedicated environment, it doesn’t have access to the state of the flow, meaning no access to steps output, variables, and such.

Therefore, you need to use a “function based” approach defining a contract of

-   input arguments

-   output values

Speaking about input arguments, these one are given as JSON using the “JSON Input” field.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly9maWxlLm5vdGlvbi5zby9mL2YvNTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmLzVlMzBiODYwLTdhNzItNDliYi1hMWM3LWZlMzc5NGIyMGYwMC9TY3JlZW5zaG90XzIwMjYtMDItMjZfYXRfMTEuNDAuMDAucG5nP3RhYmxlPWJsb2NrJmlkPTMxMzkzYTA4LTBhYjAtODAzNy05NDgyLWUwNGVjMWM4MzMxYiZzcGFjZUlkPTU1NjQzYjkwLTc0MzQtNDIyOC1hMGI5LTVkYTBkMmI4M2FhZiZleHBpcmF0aW9uVGltZXN0YW1wPTE3NzU0MTY0NTM3ODMmc2lnbmF0dXJlPXlGOExyRTJxeXFrczlkM0Q1ejFfTXB3OV9WckI3YXQ5NHpEZHZLaVc2UTA=.png?workspaceId=55643b90-7434-4228-a0b9-5da0d2b83aaf)

To use these data in your script, you need to play with the `mindflowData` variable in Javascript and `mindflow_data` in Python (matching casing according to language specificities).

**Python**

javascript

`flow_data = mindflow_data['FIELD NAME']`

**Javascript**

javascript

`const flowData = mindflowData['FIELD NAME']`

Then enjoy seamless coding experience.

* * *

### **6\. Getting result data**

Once you have processed your data, you’ll want to play with in the rest of your workflow.

To get it, it’s as easy as in basic coding, `return` .

**Python**

javascript

`return my_computed_data`

**Javascript**

javascript

`return myComputedData`

* * *

### **7\. Enhanced Coding Experience**

To make your scripting journey easier, we’ve included:

-   **Syntax highlighting**: Helps you write clean and readable code.

-   **Code completion**: Speeds up coding by auto-suggesting functions and variables.

-   **Full-screen mode**: Provides a larger workspace to focus on your code.

To enable full-screen mode, simply click on the **fullscreen icon** ↕️ while editing your script.

* * *

Ready to get started? Dive into scripting and take your automation to the next level!
