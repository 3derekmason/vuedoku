const validateArray = (array) => {
  const checkArray = [];
  let result = true;
  array.forEach((value) => {
    if (checkArray.includes(value)) {
      result = false;
    }
    checkArray.push(value);
  });
  return result;
};

export default validateArray;
