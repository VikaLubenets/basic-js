const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  
  if (sampleActivity == null || typeof(sampleActivity) !== 'string' || isNaN(sampleActivity)){
    return false
  }

let num = parseFloat(sampleActivity);

let result = Math.ceil((MODERN_ACTIVITY / num) / Math.floor(0.000122));

return result

}

module.exports = {
  dateSample
};
