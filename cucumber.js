module.exports = {
    default: {
        requireModule: [
            "ts-node/register"
        ],

        require: [
            "src/test/steps/**/*.ts",
            "src/test/hooks/**/*.ts"
        ],

        paths: [
            "src/test/features/**/*.feature"
        ],

        formatOptions: {
            snippetInterface: "async-await"
        },

        format: [
            "progress",
            "html:reports/cucumber-report.html",
            "json:reports/cucumber-report.json",

            //"allure-cucumberjs/reporter:allure-results"
        ],

        publishQuiet: true,
        //

        dryRun: false,
        timeout: 60000
    }
};