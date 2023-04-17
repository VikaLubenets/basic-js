const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  
  let string = String(str);
  let repeatNum = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = String(options.addition);
  let additionNum = options.additionRepeatTimes || 1;
  let addSeparator = options.additionSeparator || '|';
  let addStr = "";
  let result = "";

  for(let i = 0; i < repeatNum; i++){
    for(let j = 0; j < additionNum; j++){
      addStr += (addition + addSeparator);
    }
    addStr += addition;
    result += string + addStr + separator;
  }

  result += string + addStr;

  return result;

}

module.exports = {
  repeater
};
