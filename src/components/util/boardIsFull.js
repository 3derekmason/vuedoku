const boardIsFull = (boardArray) => {
  let result = true;
  boardArray.forEach((row) => {
    result = !row.includes(0);
  });
  return result;
};

export default boardIsFull;
