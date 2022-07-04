import { expect, it } from "vitest";

import defineColumns from "../util/defineColumns";

const input = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [9, 8, 7, 6, 5, 4, 3, 2, 1],
  [2, 4, 6, 8, 9, 7, 5, 3, 1],
  [1, 3, 5, 7, 9, 8, 6, 4, 2],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [9, 8, 7, 6, 5, 4, 3, 2, 1],
  [2, 4, 6, 8, 9, 7, 5, 3, 1],
  [1, 3, 5, 7, 9, 8, 6, 4, 2],
  [5, 4, 3, 2, 1, 6, 7, 8, 9],
];

const expected = [
  [1, 9, 2, 1, 1, 9, 2, 1, 5],
  [2, 8, 4, 3, 2, 8, 4, 3, 4],
  [3, 7, 6, 5, 3, 7, 6, 5, 3],
  [4, 6, 8, 7, 4, 6, 8, 7, 2],
  [5, 5, 9, 9, 5, 5, 9, 9, 1],
  [6, 4, 7, 8, 6, 4, 7, 8, 6],
  [7, 3, 5, 6, 7, 3, 5, 6, 7],
  [8, 2, 3, 4, 8, 2, 3, 4, 8],
  [9, 1, 1, 2, 9, 1, 1, 2, 9],
];

it("returns a sorted array of column arrays", () => {
  expect(JSON.stringify(defineColumns(input))).toEqual(
    JSON.stringify(expected)
  );
});
