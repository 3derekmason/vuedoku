import validateArray from "./validateArray";
import checkBoardSize from "./checkBoardSize";
import defineColumns from "./defineColumns";
import defineBoxes from "./defineBoxes";

const validateGameBoard = (boardArray) => {
  let isValid = checkBoardSize(boardArray);
  const columns = defineColumns(boardArray);
  const boxes = defineBoxes(boardArray);

  boardArray.forEach((row) => {
    if (!validateArray(row)) {
      isValid = false;
    }
  });

  columns.forEach((column) => {
    if (!validateArray(column)) {
      isValid = false;
    }
  });

  boxes.forEach((box) => {
    if (!validateArray(box)) {
      isValid = false;
    }
  });

  return isValid;
};

export default validateGameBoard;
