const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  let result = [];
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === '--discard-next'){
      result.pop(arr[i+1]);
    } else if (arr[i] === '--discard-prev'){
      result.pop(arr[i-1]);
    }else if (arr[i] === '--double-next'){
      result.push(arr[i+1]);
    }else if (arr[i] === '--double-prev'){
      result.push(arr[i-1]);
    } else {
      result.push(arr[i])
    }

  }

return result;

}

module.exports = {
  transform
};
