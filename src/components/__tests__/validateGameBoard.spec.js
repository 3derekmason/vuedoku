import { expect, it } from "vitest";
import validateGameBoard from "../util/validateGameBoard";

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
const invalidRowBoard = [
  [3, 9, 1, 2, 2, 6, 5, 7, 4],
  [4, 8, 7, 3, 5, 9, 1, 2, 6],
  [6, 5, 2, 7, 1, 4, 8, 3, 9],
  [8, 7, 5, 4, 3, 1, 6, 9, 2],
  [2, 1, 3, 9, 6, 7, 4, 8, 5],
  [9, 6, 4, 5, 8, 8, 7, 1, 3],
  [1, 4, 9, 6, 7, 3, 2, 5, 8],
  [5, 3, 8, 1, 4, 2, 9, 6, 7],
  [7, 2, 6, 8, 9, 5, 3, 4, 1],
];
const invalidColumnBoard = [
  [3, 9, 1, 2, 8, 6, 5, 7, 4],
  [4, 8, 7, 3, 5, 9, 1, 2, 6],
  [6, 5, 2, 7, 1, 4, 8, 3, 9],
  [8, 7, 5, 4, 3, 1, 6, 9, 2],
  [2, 1, 3, 9, 6, 7, 4, 8, 5],
  [9, 6, 4, 5, 2, 8, 7, 1, 3],
  [4, 1, 9, 6, 7, 3, 2, 5, 8],
  [5, 3, 8, 1, 4, 2, 9, 6, 7],
  [7, 2, 6, 8, 9, 5, 3, 4, 1],
];
const invalidBoxBoard = [
  [3, 9, 1, 2, 8, 6, 5, 7, 4],
  [4, 7, 7, 3, 5, 9, 1, 2, 6],
  [6, 5, 2, 7, 1, 4, 8, 3, 9],
  [8, 8, 5, 4, 3, 1, 6, 9, 2],
  [2, 1, 3, 9, 6, 7, 4, 8, 5],
  [9, 6, 4, 5, 2, 8, 7, 1, 3],
  [1, 4, 9, 6, 7, 3, 2, 5, 8],
  [5, 3, 8, 1, 4, 2, 9, 6, 7],
  [7, 2, 6, 8, 9, 5, 3, 4, 1],
];
const incompleteBoard = [
  [3, 9, 1, 2, 8, 6, 5, 7, 4],
  [4, 8, 7, "", 5, 9, 1, 2, 6],
  [6, 5, 2, 7, 1, 4, 8, 3, 9],
  [8, 7, 5, 4, 3, 1, 6, 9, 2],
  [2, 1, 3, 9, 6, 7, "", 8, 5],
  [9, 6, 4, 5, 2, 8, 7, 1, 3],
  [1, 4, "", 6, 7, 3, 2, 5, 8],
  [5, 3, 8, 1, 4, 2, 9, 6, 7],
  [7, 2, 6, 8, 9, 5, 3, 4, 1],
];

it("returns true if entire game board is valid/complete", () => {
  expect(validateGameBoard(completeBoard)).toBe(true);
});

it("returns false if any part of game board is invalid", () => {
  expect(validateGameBoard(invalidRowBoard)).toBe(false);
  expect(validateGameBoard(invalidColumnBoard)).toBe(false);
  expect(validateGameBoard(invalidBoxBoard)).toBe(false);
  expect(validateGameBoard(incompleteBoard)).toBe(false);
});
