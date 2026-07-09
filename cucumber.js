module.exports = {
    default: {
        requireModule: ["ts-node/register"],

        require: [
            "src/test/steps/**/*.ts",
            "src/test/hooks/**/*.ts"
        ],
        order: "defined",
        paths: [
            "src/test/features/**/*.feature"
        ],

        formatOptions: {
            snippetInterface: "async-await",
            resultsDir: "allure-results" // 1. Explicitly point to the target folder
        },

        publishQuiet: true,
        dryRun: false,
        format: [
            "allure-cucumberjs/reporter:./reports/allure-dummy.txt", // 2. Redirect stdout to avoid conflicts with 'progress'
            "json:reports/cucumber-report.json",
            "html:reports/cucumber-report.html",
            "message:reports/messages.ndjson",
            "rerun:rerun/@rerun.txt",
            "progress"
        ],
        parallel: 1
    },
    rerun: {
        requireModule: ["ts-node/register"],

        require: [
            "src/test/steps/**/*.ts",
            "src/test/hooks/**/*.ts"
        ],

        formatOptions: {
            snippetInterface: "async-await",
            resultsDir: "allure-results" // 1. Explicitly point to the target folder here too
        },

        publishQuiet: true,
        dryRun: false,
        format: [
            "progress",
            "allure-cucumberjs/reporter:./reports/allure-dummy.txt", // 2. Redirect stdout here too
            "json:reports/cucumber-report.json",
            "html:reports/cucumber-report.html",
            "message:reports/messages.ndjson",
            "rerun:rerun/@rerun.txt"
        ],
        parallel: 1
    }
};