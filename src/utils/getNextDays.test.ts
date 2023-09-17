import { getNextDays } from "./getNextDays"

describe("getNextDays", () => { // here is a title of tests group
    it("should be return the next five days", () => { // we can use 'it' or 'test' - 'it' is a alias
        // here we let's execute our test...
        const days = getNextDays();

        expect(days.length).toBe(5); // the expect is that the method return 5 days (a array with 5 dates)...
    });
});