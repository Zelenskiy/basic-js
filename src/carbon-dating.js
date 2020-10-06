const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (typeof(sampleActivity) !== 'string'){
    return false;
  } else {
    if (sampleActivity === '' || sampleActivity === ' ' || sampleActivity === '   ' ){
      return false;
    }
    let x = parseFloat(sampleActivity);
    if( x > MODERN_ACTIVITY || x <= 0 || x > 9000 || x === null || x === undefined || x == NaN ){
      return false;
    }
    let k = 0.693 / HALF_LIFE_PERIOD;
    let t = Math.log(MODERN_ACTIVITY / x) / k;
    return Math.ceil(t);
  }
};
