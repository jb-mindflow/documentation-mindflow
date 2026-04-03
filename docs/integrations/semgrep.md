---
title: Semgrep
sidebar_position: 20
---

# Semgrep

**Service Overview**

Semgrep is an intelligent code analysis and security scanning service that empowers software developers and security teams to identify and remediate code vulnerabilities efficiently. With its advanced pattern-based approach, Semgrep helps organizations proactively detect security issues, compliance violations, and other code quality concerns throughout the software development lifecycle.

**Key Features**

1.  **Pattern-based Code Scanning:** Semgrep uses a powerful pattern-matching engine to analyze source code and identify potential security flaws, coding errors, and adherence to best practices. It supports multiple programming languages, making it versatile for diverse software projects.

2.  **Custom Rule Creation:** The service allows users to create custom rules to tailor code scanning to their specific security and coding standards. This flexibility ensures a comprehensive analysis of codebases according to unique project requirements.

3.  **Continuous Integration (CI) Integration:** Semgrep seamlessly integrates with popular CI/CD platforms, enabling automatic code scanning during the development process. Developers receive real-time feedback on issues, promoting early bug detection and faster remediation.

4.  **Security and Compliance Rule Sets:** Semgrep includes a comprehensive library of security and compliance rule sets developed by industry experts and the open-source community. These rule sets align with best practices, security standards, and regulatory frameworks.

5.  **Extensive Language Support:** The service supports a wide range of programming languages, including but not limited to Python, JavaScript, Java, C/C++, and Go, making it suitable for diverse software stacks.

**Key Benefits**

-   **Early Bug Detection:** By analyzing code as it is written, Semgrep helps catch bugs and security issues early in the development process, reducing the time and effort required for later bug fixing.

-   **Customizable and Adaptable:** With the ability to create custom rules and apply various rule sets, organizations can align Semgrep's scanning capabilities with their specific security policies and coding conventions.

-   **Continuous Security Feedback:** The seamless integration with CI/CD pipelines provides developers with immediate feedback, fostering a security-conscious development culture and reducing time-to-fix for vulnerabilities.

-   **Comprehensive Security Scanning:** Semgrep's extensive language support and diverse rule sets ensure a thorough examination of codebases, addressing various security concerns and compliance requirements.

-   **Open Source Community:** Semgrep is built on an open-source foundation, actively maintained by a large and engaged community, providing access to continuously updated rules and enhancements.

Semgrep is an indispensable tool for organizations committed to building secure and reliable software applications, enhancing overall code quality, and reducing security risks.

## **Getting Started with Semgrep**

1.  Go to https://semgrep.dev/orgs/-/settings/tokens, and click on the **`Create new token`** button

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkZzZWN1cmUubm90aW9uLXN0YXRpYy5jb20lMkZkYjA5YzFhYS0wNjQ3LTRkYmMtYjMwZC1iOTQ3OGM2NzRjMWMlMkZTY3JlZW5zaG90XzIwMjMtMDgtMDNfYXRfMTYuMTkuMDgucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPWE4YWU3ZmU4LWEyOWQtNDI5ZC1hYzk4LTMzNDc0YWE1MmZjNCZjYWNoZT12MiZ3aWR0aD0yNDAw)

2.  Copy the token and click on the **`update`** button

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkY1NTY0M2I5MC03NDM0LTQyMjgtYTBiOS01ZGEwZDJiODNhYWYlMkYxNzRiZjE4OS0wNjNlLTQ2NTktODVhNy0wY2ZjNmE2MWU3MWIlMkZDYXB0dXJlX2RlY3Jhbl8yMDIzLTExLTA1X2FfMTIuMjIuNDIucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPWI3NWMxODE0LWEzOWMtNDIwYy1hN2UyLWZlZGE1ODg3M2E2ZiZjYWNoZT12MiZ3aWR0aD0yNDAw)

3.  Click on the **`+`** and then click on the ⚙️ in the add step menu.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkZzZWN1cmUubm90aW9uLXN0YXRpYy5jb20lMkZlNDIzYjY3Yy0zZWY3LTQ5Y2EtOTgzZC0xOWRhY2E1ZTE2YjYlMkZTY3JlZW5zaG90XzIwMjMtMDgtMDNfYXRfMTYuMjAuMzAucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPWYwZTZkZGZkLWRlM2QtNGJjNS1hYjExLThjMjBlZGM2Y2UxZiZjYWNoZT12MiZ3aWR0aD0yNDAw)

4.  Search for Semgrep in the search bar, click on the first result and then click on the **`+`** integration button.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkZzZWN1cmUubm90aW9uLXN0YXRpYy5jb20lMkYyMGMxYmE4YS0wNzFkLTQyMDktYWVlZS05ODMyZTYwOWFkNTclMkZTY3JlZW5zaG90XzIwMjMtMDgtMDNfYXRfMTYuMjAuNDIucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPWEwMWY5ZDMzLTMyMTctNGQ1MS1hMjAxLTQyNjM2MjA5OTE1ZSZjYWNoZT12MiZ3aWR0aD0yNDAw)

5.  Click on the **`+`** button and search for semgrep in the search bar, then select one of the following actions

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkZzZWN1cmUubm90aW9uLXN0YXRpYy5jb20lMkY2MDhlZWVmZC1jMDRjLTRkYTMtYjUxNy01MmQ1NmMwNTMwZTIlMkZTY3JlZW5zaG90XzIwMjMtMDgtMDNfYXRfMTYuMjEuMDAucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTczZmJiN2YxLWM0MDctNGFmNS1iNGI2LTFlNmY5MzZlZjA3ZSZjYWNoZT12MiZ3aWR0aD0yNDAw)

6.  Fill in the mandatory fields of the input category

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkZzZWN1cmUubm90aW9uLXN0YXRpYy5jb20lMkY4NWNlZjgxMy1lOWE3LTQyYWMtYmJjNi02NDUyOWQ0ZmZkODglMkZTY3JlZW5zaG90XzIwMjMtMDgtMDNfYXRfMTYuMjEuMTIucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPWUyYzU0ZmFkLTdkZTgtNDIxZC04YjcwLTUyNzVhMzlhYWEwNyZjYWNoZT12MiZ3aWR0aD0yNDAw)

7.  Go to the settings section, click in the **`Credential`** field and click on the **`Create a credential`** button.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkZzZWN1cmUubm90aW9uLXN0YXRpYy5jb20lMkYyNjk5YzYzMS0xMDBmLTRhZjYtYjVkZC05OWQ2ZmM2Y2I0M2YlMkZTY3JlZW5zaG90XzIwMjMtMDgtMDNfYXRfMTYuMjIuMDEucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTRiY2U0OWIwLTVkODEtNDY2My1hM2VjLWNmMjE5ODZkYmE5NiZjYWNoZT12MiZ3aWR0aD0yNDAw)

8.  Select **`HTTP API Key`** type

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkZzZWN1cmUubm90aW9uLXN0YXRpYy5jb20lMkY3MTA2OWYxOC02MzQzLTRkMmUtYWMzMy1mYjgxMGY3MjVkMDglMkZTY3JlZW5zaG90XzIwMjMtMDgtMDNfYXRfMTYuMjIuMTUucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTkzMjQ5Nzk0LTIwNGQtNDU2Mi1hYzg1LWM5NzRmNDFhNjBhMiZjYWNoZT12MiZ3aWR0aD0yNDAw)

9.  Insert _Authorization_ in the **`Key`** field and _Bearer <YOUR\_API\_KEY>_ in the `**Value**` field.

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkZzZWN1cmUubm90aW9uLXN0YXRpYy5jb20lMkY3N2JlZGFiZC03MDY5LTQ1NmEtYTFkMi0xN2QwYzI3NGVlMmUlMkZTY3JlZW5zaG90XzIwMjMtMDgtMDNfYXRfMTYuMjIuMzUucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPWRmYjEwYjI0LTQ2ZmMtNDUyYy1hODg3LWNlZDMzMGM4MjJlNSZjYWNoZT12MiZ3aWR0aD0yNDAw)

10.  Run your flow by clicking on the ▶️ icon at top left

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkZzZWN1cmUubm90aW9uLXN0YXRpYy5jb20lMkZiNjVlODAyNi01NTk0LTQxYTktOGU5ZS1kMjA3OTFjODIzZjMlMkZTY3JlZW5zaG90XzIwMjMtMDgtMDNfYXRfMTYuMjMuMjAucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPTU0NmFkMTE5LTE0MGUtNGJkMC04NDJjLWViZmJiMmEzMGM2ZSZjYWNoZT12MiZ3aWR0aD0yNDAw)

11.  Congratulations on deploying and running your first flow with Semgrep integration 🎉

![Image without caption](https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkZzZWN1cmUubm90aW9uLXN0YXRpYy5jb20lMkZlZTE3MDhlNy04NTRkLTQ1YWItODkyMy01YjhmOWIxYzdkNTYlMkZTY3JlZW5zaG90XzIwMjMtMDgtMDNfYXRfMTYuMjMuMDYucG5nP3RhYmxlPWJsb2NrJnNwYWNlSWQ9NTU2NDNiOTAtNzQzNC00MjI4LWEwYjktNWRhMGQyYjgzYWFmJmlkPThlODM5MTBlLTZlOGItNDk5NC1hMThlLWM2ZDRkN2Q0YmNhMiZjYWNoZT12MiZ3aWR0aD0yNDAw)
