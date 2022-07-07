import { it, expect } from "vitest";

import boardIsFull from "../util/boardIsFull";

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

const incompleteBoard = [
  [0, 9, 1, 2, 8, 6, 5, 7, 4],
  [4, 8, 7, 0, 5, 9, 1, 2, 6],
  [6, 5, 2, 7, 1, 4, 8, 0, 9],
  [8, 7, 5, 4, 0, 1, 6, 9, 2],
  [2, 1, 3, 9, 6, 7, 4, 8, 5],
  [9, 6, 4, 5, 2, 8, 7, 1, 3],
  [1, 4, 9, 0, 7, 3, 2, 5, 8],
  [5, 3, 8, 1, 4, 2, 9, 0, 7],
  [7, 2, 0, 8, 9, 5, 3, 4, 1],
];

it("returns true if board contains no empty spaces", () => {
  expect(boardIsFull(completeBoard)).toBe(true);
});
it("returns false if board contains empty spaces", () => {
  expect(boardIsFull(incompleteBoard)).toBe(false);
});
