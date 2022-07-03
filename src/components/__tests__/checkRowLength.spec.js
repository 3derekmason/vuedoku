import { expect, it } from "vitest";

import checkRowLength from "../util/checkRowLength";

it("returns true if length of input array is 9", () => {
  const testRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(checkRowLength(testRow)).toBe(true);
});

it("returns flase if length of input array is not 9", () => {
  const shortRow = [1, 2, 3, 4, 5, 6, 7];
  const longRow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  expect(checkRowLength(shortRow)).toBe(false);
  expect(checkRowLength(longRow)).toBe(false);
});
