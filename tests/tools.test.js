// run tests with node --experimental-vm-modules node_modules/jest/bin/jest.js

import { generateRandomColor } from "../Tools";

describe("generateRandomColor", function () {
    test("returns a string with a length of 7", function () {
      expect(generateRandomColor().length).toBe(7);
    });

    test("returns a hexadecimal value", function () {
      const rule = /^#[0-9a-fA-F]{6}$/;
      expect(generateRandomColor()).toMatch(rule);
    });

    test("return different color every time", function () {
      expect(generateRandomColor()).not.toBe(generateRandomColor());
    });
});

import { shuffleArray } from "../Tools";

describe("shuffleArray", function () {
    test("returns an array", function () {
      const array = shuffleArray([1, 2, 3, 4, 5, 6]);
      expect(array).toBeInstanceOf(Array);
    });

    test("returns an array with the same length", function () {
      const array = shuffleArray([1, 2, 3, 4, 5, 6]);
      expect(array.length).toBe(6);
    });

    test("returns an array with the same elements", function () {
      const array = shuffleArray([1, 2, 3, 4, 5, 6]);
      expect(array.sort()).toEqual([1, 2, 3, 4, 5, 6].sort());
    });

    test("returns an array with different order", function () {
      const array = shuffleArray([1, 2, 3, 4, 5, 6]);
      expect(array).not.toEqual([1, 2, 3, 4, 5, 6]);
    });
});

import { sleep } from "../Tools";

describe("sleep", function () {  
    test("returns a promise", function () {
        expect(sleep(1000)).toBeInstanceOf(Promise);
    });

    test("returns a promise that resolves after the given time", function () {
        const startTime = Date.now();
        return sleep(1000).then(function () {
            expect(Date.now() - startTime).toBeGreaterThanOrEqual(1000);
        });
    });
});

import { validateName } from "../Tools";

describe("validateName", function () {
    test("returns a boolean", function() {
        expect(validateName("John", "Doe")).toBe(true || false);
    });

    test("returns true if the name is correct", function() {
        expect(validateName("Alice", "Smith")).toBe(true);
    });

    test("returns false if either of the namse is incorrect", function() {
        const invalidName = validateName("Alice123", "Smith");
        const invalidSurname = validateName("John", "Doe456");
        expect(invalidName && invalidSurname).toBe(false);
    });

    test("returns false if the name is empty", function() {
        expect(validateName("", "")).toBe(false);
    });

    test("does not throw an error if the name has an apostrophe", function() {
        expect(validateName("John's", "Doe")).toBe(true);
    });

    test("does not throw an error if the name has a hyphen", function() {
        expect(validateName("Alice", "Doe-Smith")).toBe(true);
    });

    test("does not throw an error if the name has a space", function() {
        expect(validateName("John", "Doe Smith")).toBe(true);
    });
});

import { generateRandomNumberInRange } from "../Tools";

describe("generateRandomNumberInRange", function () {
  test("does return an integer", function () {
    expect(typeof generateRandomNumberInRange(1, 10)).toBe("number");
  });

  test("does return a number in the given range", function () {
    const randomNumber = generateRandomNumberInRange(1, 10);
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(10);
  });

  test("throws an error if a non-number input value is given", function () {
    expect(generateRandomNumberInRange("a", "b")).toBe(undefined);
  });

  test("throws an error if minimum value is greater than maximum", 
    function () {
      expect(generateRandomNumberInRange(10, 1)).toBe(undefined);
    });

  test("throws an error if minimum value is equal to maximum", function () {
    expect(generateRandomNumberInRange(1, 1)).toBe(undefined);
  });

  test("does not throw an error with correct input values", function () {
    expect(generateRandomNumberInRange(1, 10)).not.toBe(undefined);
  });
});

import { reverseString } from "../Tools";

describe("reverseString", function () {
  test("reverses given string", function () {
    expect(reverseString("Hello World!")).toBe("!dlroW olleH");
  });

  test("returns an empty string being passed an empty string", function () {
    expect(reverseString("")).toBe("");
  });

  test("returns a single character being passed a single character", 
    function() {
      expect(reverseString("a")).toBe("a");
    });

  test("reverses a string with special characters", function () {
    expect(reverseString("Hello World!")).toBe("!dlroW olleH");
  });

  test("throws an error given a non-string value", function () {
    expect(reverseString(13)).toBe(undefined);
  });
});

import { getRandomElement } from "../Tools";

describe("getRandomElement", function () {
  test("returns a random element from an array every time", function () {
    const array = [1, 2, 3, 4, 5, 6];
    expect(getRandomElement(array)).not.toBe(getRandomElement(array));
  });

  test("returns one of the elements from given array", function () {
    const array = [1, 2, 3, 4, 5, 6];
    expect(array).toContain(getRandomElement(array));
  });

  test("throws an error given an empty array", function () {
    expect(getRandomElement([])).toBe(undefined);
  });

  test("throws an error given a non-array value", function () {
    expect(getRandomElement(13)).toBe(undefined);
  });

  test("returns the only element given a single element array", function () {
    expect(getRandomElement([13])).toBe(13);
  });
});
