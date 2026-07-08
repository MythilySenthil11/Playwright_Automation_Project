module.exports = {
  default: {
    requireModule: ["ts-node/register"],

    require: [
      "src/test/hooks/**/*.ts",
      "src/test/steps/**/*.ts"
    ],

    paths: ["src/test/features/**/*.feature"],

    publishQuiet: true,

    format: [
      "progress",
      "json:reports/cucumber-report.json",
      "html:reports/cucumber-report.html",
      "rerun:@rerun.txt",
      "allure-cucumberjs/reporter"
    ],

    parallel: 1
  },

  rerun: {
    requireModule: ["ts-node/register"],

    require: [
      "src/test/hooks/**/*.ts",
      "src/test/steps/**/*.ts"
    ],

    paths: ["@rerun.txt"],

    publishQuiet: true,

    format: [
      "progress",
      "json:reports/rerun-cucumber-report.json",
      "html:reports/rerun-cucumber-report.html"
    ],

    parallel: 1,
    dryRun : true
  }
};