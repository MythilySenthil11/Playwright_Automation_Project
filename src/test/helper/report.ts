import * as report from "multiple-cucumber-html-reporter";

report.generate({
  jsonDir: "./reports",
  reportPath: "./reports/html-report",

  pageTitle: "SmartCliff LMS Automation Report",
  reportName: "SmartCliff LMS - Playwright Automation Execution Report",

  displayDuration: true,
  displayReportTime: true,
  openReportInBrowser: true,
  hideMetadata: false,

  customData: {
    title: "Execution Information",
    data: [
      {
        label: "Application",
        value: "SmartCliff Learning Management System (LMS)"
      },
      {
        label: "Application URL",
        value: "https://lms-smartcliff.vercel.app/"
      },
      {
        label: "Framework",
        value: "Playwright + Cucumber + TypeScript"
      },
      {
        label: "Design Pattern",
        value: "Page Object Model (POM)"
      },
      {
        label: "Environment",
        value: process.env.ENV || "QA"
      },
      {
        label: "Browser",
        value: process.env.BROWSER || "Chromium"
      },
      {
        label: "Operating System",
        value: "Windows 11"
      },
      {
        label: "Executed By",
        value: "SmartCliff QA Team"
      },
      {
        label: "Execution Date",
        value: new Date().toLocaleString()
      }
    ]
  },

  metadata: {
    browser: {
      name: process.env.BROWSER || "Chromium",
      version: "Latest"
    },
    device: "Local Machine",
    platform: {
      name: "Windows",
      version: "11"
    }
  }
});