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
