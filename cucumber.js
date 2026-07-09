module.exports = {
    default: {
        requireModule: ["ts-node/register"],

        require: [
            "src/test/steps/**/*.ts",
            "src/test/hooks/**/*.ts"
        ],
        order:"defined",
        paths: [
            "src/test/features/**/*.feature"
        ],

        formatOptions: {
            snippetInterface: "async-await"
        },

        publishQuiet: true,
        dryRun: false,
        format: [
    "allure-cucumberjs/reporter",
    "json:reports/cucumber-report.json",
    "html:reports/cucumber-report.html",
    "message:reports/messages.ndjson",
    "rerun:rerun/@rerun.txt",
    "progress"
    ],
        parallel: 1
    },
    rerun:{
        requireModule: ["ts-node/register"],

        require: [
            "src/test/steps/**/*.ts",
            "src/test/hooks/**/*.ts"
        ],

        formatOptions: {
            snippetInterface: "async-await"
        },

        publishQuiet: true,
        dryRun: false,
        format: [
    "progress",
    "allure-cucumberjs/reporter",
    "json:reports/cucumber-report.json",
    "html:reports/cucumber-report.html",
    "message:reports/messages.ndjson",
    "rerun:rerun/@rerun.txt"
    ],
        parallel: 1
    }
};