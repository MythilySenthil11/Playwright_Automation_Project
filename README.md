# 🎭 Playwright Automation Framework

<p align="center">

<img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white"/>
<img src="https://img.shields.io/badge/Cucumber-23D96C?style=for-the-badge&logo=cucumber&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/POM-Architecture-blue?style=for-the-badge"/>
<img src="https://img.shields.io/badge/BDD-Cucumber-orange?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Jenkins-CI%2FCD-red?style=for-the-badge&logo=jenkins&logoColor=white"/>

</p>

---

# 📌 Project Overview

This repository contains an End-to-End Automation Testing Framework developed using **Playwright**, **Cucumber BDD**, and **TypeScript**.

The framework follows the **Page Object Model (POM)** architecture and is designed to create scalable, reusable, and maintainable UI automation scripts.

### 🌐 Application Under Test

> https://lms-smartcliff.vercel.app

---

# 🚀 Tech Stack

- Playwright
- Cucumber BDD
- TypeScript
- Node.js
- Page Object Model (POM)
- JSON Data Driven Testing
- HTML Reporting
- Jenkins CI/CD

---

# ✨ Framework Features

- ✔ Playwright Automation
- ✔ Cucumber BDD Framework
- ✔ TypeScript Support
- ✔ Page Object Model (POM)
- ✔ Reusable Components
- ✔ JSON Data Driven Testing
- ✔ Hooks (Before & After)
- ✔ HTML Report Generation
- ✔ Failed Test Re-execution
- ✔ Screenshot on Failure
- ✔ Cross Browser Support
- ✔ Jenkins Integration
- ✔ Environment Configuration

---

# 📂 Project Structure

```text
PLAYWRIGHT_AUTOMATION_PROJECT
│
├── .github
├── env
├── src
│   └── test
│       ├── constants
│       ├── features
│       ├── helper
│       ├── hooks
│       ├── pages
│       ├── steps
│       ├── test-data
│       ├── types
│       ├── utilities
│       └── world
│
├── .gitignore
├── cucumber.js
├── package.json
├── package-lock.json
├── playwright.config.ts
└── tsconfig.json
```

---

# ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/MythilySenthil11/Playwright_Automation_Project.git
```

### Navigate to the Project Directory

```bash
cd Playwright_Automation_Project
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

---

# ▶️ Execution Commands

### Execute All Test Cases

```bash
npm test
```

### Execute Smoke Tests

```bash
npx cucumber-js --tags "@Smoke"
```

### Execute Regression Tests

```bash
npx cucumber-js --tags "@Regression"
```

### Execute Failed Scenarios

```bash
npm run test:rerun
```

### Generate HTML Report

```bash
npm run report
```

### Execute Tests & Generate Report

```bash
npm run test:report
```

---

# 📊 Reporting

The framework generates:

- Multiple Cucumber HTML Reports
- JSON Reports
- Browser Information
- Execution Duration
- Test Summary
- Failed Scenario Details
- Environment Information
- Screenshots on Failure

### Report Location

```text
reports/html-report
```

---

# 📸 Screenshot Support

Failed test screenshots are automatically captured during execution.

### Screenshot Location

```text
reports/screenshots
```

---

# 🔄 CI/CD Integration

This framework supports Jenkins Pipeline execution with:

- GitHub Integration
- Automatic Dependency Installation
- Playwright Browser Installation
- Test Execution
- HTML Report Publishing
- Failed Test Re-execution

---

# 🏗 Framework Architecture

```text
Feature Files
      │
      ▼
Step Definitions
      │
      ▼
Page Object Model
      │
      ▼
Playwright Actions
```

---

# 👥 Contributors

This project was collaboratively developed by:

| Name | Role |
|------|------|
| **Mythily** | Team Lead |
| **Krishnaprasath** | QA Automation Engineer |
| **Jerishwin Joseph** | QA Automation Engineer |
| **Subathra** | QA Automation Engineer |
| **Tamil Kumar** | QA Automation Engineer |

---

# 👨‍💻 Author

**Mythily**

QA Automation Engineer

GitHub: https://github.com/MythilySenthil11/Playwright_Automation_Project


---

<p align="center">

Built with ❤️ using Playwright, TypeScript & Cucumber BDD

</p>
