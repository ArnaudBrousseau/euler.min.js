/**
 * 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 * What is the sum of the digits of the number 2^1000?
 */

/**
 * JavaScript does weird things with big numbers. For that reason, we
 * re-implement addition and hold numbers into arrays of digits.
 * Come on, that's a lot of fun!
 */
var digitSumForPowerOfTwo = function(power) {
  var number = [1]; // that's 2^0

  for (i=0; i<power; i++) {
    doubleNumber(number);
  }

  return getDigitSum(number);
};

/**
 * Doubles a number. A number is given as an array of its digits, from the
 * least significant to the most significant. For instance, 124 will be
 * represented as [4,2,1].
 * This function is non-pure as it mutates the array passed in.
 */
var doubleNumber = function(digits) {
  var extra = 0, digit, i;

  for (i=0; i<digits.length; i++) {
    digit = digits[i];
    digits[i] = 2*digit % 10 + extra;

    if (2*digit + extra >= 10) {
      extra = 1;
    } else {
      extra = 0;
    }
  }

  if (extra === 1) {
    digits.push(1);
  }
};

/**
 * Simple function to get the sum of a number, represented as mentioned before.
 * I would use reduce if I authorized myself to use ES5 features, but whatever.
 */
var getDigitSum = function(digits) {
  var sum = 0, i;
  for (i=0; i<digits.length; i++) {
    sum += digits[i];
  }
  return sum;
}

console.log("Answer to problem #16 is: " + digitSumForPowerOfTwo(1000));
