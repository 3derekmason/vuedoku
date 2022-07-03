import checkRowLength from "./checkRowLength";

const checkBoardSize = (boardArray) => {
  if (boardArray.length !== 9) {
    return false;
  }
  let valid = true;
  boardArray.forEach((row) => {
    valid = checkRowLength(row);
  });
  return valid;
};

export default checkBoardSize;
