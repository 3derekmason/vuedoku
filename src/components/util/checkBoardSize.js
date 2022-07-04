import checkRowLength from "./checkRowLength";

const checkBoardSize = (boardArray) => {
  // Return false if board has more or less than 9 rows
  if (boardArray.length !== 9) {
    return false;
  }
  let isValid = true;
  // Check the length of each row
  boardArray.forEach((row) => {
    // If checkRowLength returns false for any row, isValid will also be marked as false
    isValid = checkRowLength(row);
  });
  return isValid;
};

export default checkBoardSize;
