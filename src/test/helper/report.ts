import report from "multiple-cucumber-html-reporter";

report.generate({
  jsonDir: "./reports",
  reportPath: "./reports/html-report",

  pageTitle: "SmartCliff LMS Automation Report",
  reportName: "SmartCliff LMS - Playwright Automation Execution Report",

  displayDuration: true,
  displayReportTime: true,
  openReportInBrowser: false, // Set to false for Jenkins
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
        label: "Framework Pattern",
        value: "Page Object Model (POM)"
      },
      {
        label: "Environment",
        value: process.env.ENV ?? "QA"
      },
      {
        label: "Browser",
        value: process.env.BROWSER ?? "Chromium"
      },
      {
        label: "Operating System",
        value: process.platform
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
      name: process.env.BROWSER ?? "Chromium",
      version: "Latest"
    },
    device: "Jenkins / Local Machine",
    platform: {
      name: process.platform,
      version: process.version
    }
  }
});
