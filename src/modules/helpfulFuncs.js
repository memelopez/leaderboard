// /src/moduleshelpfulFuncs.js - handy functions

// function to help validate input
const validateInput = (name, score) => {
  if (name === null || name === '' || typeof name !== 'string') {
    return false;
  }
  if (Number.isNaN(score)) {
    return false;
  }
  return true;
};

export default validateInput;