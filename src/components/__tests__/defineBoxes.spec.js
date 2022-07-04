import { expect, it } from "vitest";

import defineBoxes from "../util/defineBoxes";

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
  [1, 2, 3, 9, 8, 7, 2, 4, 6],
  [4, 5, 6, 6, 5, 4, 8, 9, 7],
  [7, 8, 9, 3, 2, 1, 5, 3, 1],
  [1, 3, 5, 1, 2, 3, 9, 8, 7],
  [7, 9, 8, 4, 5, 6, 6, 5, 4],
  [6, 4, 2, 7, 8, 9, 3, 2, 1],
  [2, 4, 6, 1, 3, 5, 5, 4, 3],
  [8, 9, 7, 7, 9, 8, 2, 1, 6],
  [5, 3, 1, 6, 4, 2, 7, 8, 9],
];

it("returns a sorted array of box arrays", () => {
  expect(JSON.stringify(defineBoxes(input))).toEqual(JSON.stringify(expected));
});
