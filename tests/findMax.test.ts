import {findMax} from "../utils/findMax";

test("findMax test", () => {
    const testingNumbers = [0, 5, 2, 4, 8];
    const wrongTestingNumbers = ["0", 5, 4, 3, true];
    //findMax given the array of numbers should not throw
    expect(() => findMax(testingNumbers)).not.toThrow();
    //findMax given the array of not only numbers should throw
    // expect(() => {
    //     findMax(wrongTestingNumbers)
    // }).toThrow();
    expect(typeof findMax(testingNumbers)).toEqual("number");
})