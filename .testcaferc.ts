let os = require("os");
import { Selector, ClientFunction, Role, t } from 'testcafe';

module.exports = {
    browsers: ["chrome"],
    src: ["tests", "definitions.d.ts"],
    screenshots: {
        path: "tests/screenshots/",
        "takeOnFails": true,
        "pathPattern": "${DATE}_${TIME}/test-${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.png"
    },
    quarantineMode: false,
    stopOnFirstFail: true,
    skipJsErrors: false,
    skipUncaughtErrors: true,
    concurrency: 1,
    selectorTimeout: 3000,
    assertionTimeout: 1000,
    pageLoadTimeout: 1000,
    disablePageCaching: true,
    hostname: "localhost",
    customActions: {
        async typeText(inputSelector: Selector, text: string) {
            await this.click(inputSelector);
            await this.typeText(inputSelector, text);
        }
    }
};
