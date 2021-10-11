const fs = require('fs');
const createTestCafe = require('testcafe');
const {BeforeAll, AfterAll, setDefaultTimeout, Before, After} = require('@cucumber/cucumber');
const { default: TestCaseHookDefinition } = require('@cucumber/cucumber/lib/models/test_case_hook_definition');
const timeout = 200000;
let cafeRunner = null;
let n = 0;

setDefaultTimeout(timeout);

function createTestFile() {
    fs.writeFileSync('cucumbertest.js',
        'import testControllerHolder from "./features/support/testControllerHolder.js";\n\n' +
        'fixture("cucumberfixture")\n' +
        'test\n' +
        '("test", testControllerHolder.capture)')
}

function runTest(n, browser) {
    createTestCafe('localhost')
        .then(function(tc) {
            cafeRunner = tc;
            const runner = tc.createRunner();
            return runner
                .src('./cucumbertest.js')
                .screenshots('reports/screenshots/', true)
                .browsers(browser)
                .run();
        });
}

BeforeAll( function() {
    runTest(n,'chrome');
    n+=2;
    createTestFile();

});

Before( function() {
    console.log('\n\n*****Test Scenario Execution*****\n\n');
    return this.waitForTestController.then(function(testController) {
        return testController.maximizeWindow();
    });
});

AfterAll(function() {
    function closeSession() {
            cafeRunner.close();
            process.exit();
    }
    setInterval(closeSession, 5000);
});