const countNInBoard = (n, boardArray) => {
  let count = 0;
  boardArray.forEach((row) => {
    row.forEach((value) => {
      if (value === n) {
        count++;
      }
    });
  });
  return count;
};

export default countNInBoard;
