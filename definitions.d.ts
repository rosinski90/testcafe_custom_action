//definitions.d.ts
import 'testcafe';
declare global {
    interface CustomActions {
        typeCustomText: (dropdownSelector: Selector, text: string) => TestControllerPromise
    }
}
