import { Selector, ClientFunction, t } from 'testcafe';

fixture('Basic finxture')
    .beforeEach(async () => {
        await t.navigateTo('https://www.google.com');
    });

test('Custom action type', async (t) => { 
    t.customActions.typeCustomText(Selector('#APjFqb'), 'test');
})