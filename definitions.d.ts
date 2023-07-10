//definitions.d.ts
import 'testcafe';
declare global {
    interface CustomActions {
        selectFromDropdown: (dropdownSelector: Selector) => TestControllerPromise
    }
}
