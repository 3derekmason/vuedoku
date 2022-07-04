import { expect, it } from "vitest";

import validateArray from "../util/validateArray";

const valid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const repeats = [3, 9, 1, 2, 8, 9, 5, 7, 4];
const invalidRange = [0, 1, 2, 3, 4, 5, 6, 7, 8];

it("returns true if array contains no duplicates", () => {
  expect(validateArray(valid)).toBe(true);
});
it("returns false if array containsduplicates", () => {
  expect(validateArray(repeats)).toBe(false);
});
it("returns true if includes values 1 - 9", () => {
  expect(validateArray(valid)).toBe(true);
});
it("returns true if includes values not 1 - 9", () => {
  expect(validateArray(invalidRange)).toBe(false);
});
