import { expect, it } from "vitest";

import countNInBoard from "../util/countNinBoard";

const completeBoard = [
  [3, 9, 1, 2, 8, 6, 5, 7, 4],
  [4, 8, 7, 3, 5, 9, 1, 2, 6],
  [6, 5, 2, 7, 1, 4, 8, 3, 9],
  [8, 7, 5, 4, 3, 1, 6, 9, 2],
  [2, 1, 3, 9, 6, 7, 4, 8, 5],
  [9, 6, 4, 5, 2, 8, 7, 1, 3],
  [1, 4, 9, 6, 7, 3, 2, 5, 8],
  [5, 3, 8, 1, 4, 2, 9, 6, 7],
  [7, 2, 6, 8, 9, 5, 3, 4, 1],
];

it("returns correct count of given value present in game board", () => {
  expect(countNInBoard(1, completeBoard)).toBe(9);
  expect(countNInBoard(2, completeBoard)).toBe(9);
  expect(countNInBoard(3, completeBoard)).toBe(9);
  expect(countNInBoard(0, completeBoard)).toBe(0);
  expect(countNInBoard({ a: 1 }, completeBoard)).toBe(0);
  expect(countNInBoard("invalid input", completeBoard)).toBe(0);
});
