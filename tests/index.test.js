import {
    generateRandomColor,
    generateRandomNumberInRange,
    getRandomElement,
    reverseString,
    validateName
} from "../utilities/index";

test("generating random color that is not null", () => expect(generateRandomColor()).not.toBeNull());
test("generating random color that is defined", () => expect(generateRandomColor()).toBeDefined());
test("generating random color that is truthy", () => expect(generateRandomColor()).toBeTruthy());

test("generating a random number that is not null", () => expect(generateRandomNumberInRange(10, 20)).not.toBeNull());
test("generating a random number that is defined", () => expect(generateRandomNumberInRange(10, 20)).toBeDefined());
test("generating a random number that is truthy", () => expect(generateRandomNumberInRange(10, 20)).toBeTruthy());

test("getting a random array element that does is not null", () => expect(getRandomElement(["one", "two", "three"])).not.toBeNull());
test("getting a random array element that is defined", () => expect(getRandomElement(["one", "two", "three"])).toBeDefined());
test("getting a random array element that is truthy", () => expect(getRandomElement(["one", "two", "three"])).toBeTruthy());

test("reversing a string", () => expect(reverseString("July")).toEqual("yluJ"));
test("reversing a string with space", () => expect(reverseString("Hello world!")).toEqual("!dlrow olleH"));
test("reversing a palindrome", () => expect(reverseString("kayak")).toEqual("kayak"));
test("reversing a string that is not empty", () => expect(reverseString("Adele")).not.toEqual(""));

test("validating a proper name", () => expect(validateName("Daria", "Zawiałow")).toBe(true));
test("validating function with one argument", () => expect(validateName("Daria")).toBe(false));
test("validating function with a falsy argument", () => expect(validateName("", "Zawiałow")).toBe(false));
test("validating function with an array argument", () => expect(validateName("Daria", [])).toBe(false));
test("validating function with a number argument", () => expect(validateName(123, "Zawiałow")).toBe(false));
test("validating function with a null argument", () => expect(validateName("Daria", null)).toBe(false));