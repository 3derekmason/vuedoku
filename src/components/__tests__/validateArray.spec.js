import { expect, it } from "vitest";

import validateArray from "../util/validateArray";

const valid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const repeats = [1, 2, 3, 4, 5, 3, 6, 9, 8];

it("returns true if array contains no duplicates", () => {
  expect(validateArray(valid)).toBe(true);
});
it("returns false if array containsduplicates", () => {
  expect(validateArray(repeats)).toBe(false);
});
