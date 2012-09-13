/*
 * 2520 is the smallest number that can be divided by each of the numbers from
 * 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the
 * numbers from 1 to 20?.
 */

var isPrime = function(number) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

var findNumberDivisibleByOneTo = function(maxDivisor) {
  // This will contain the divisors we have to test candidate numbers against.
  var divisors = [];

  // Base number will be the product of the prime divisors. The number we are
  // looking for MUST be a multiple of this base number.
  var baseNumber = 1;

  // Separates prime divisors from standard ones.
  for (var divisor = maxDivisor; divisor > 1; divisor--) {
    if (isPrime(divisor)) {
      baseNumber *= divisor;
    } else {
      divisors.push(divisor);
    }
  }

  // Now look for our number, one candidate at a time.
  for (var candidate = baseNumber;;candidate += baseNumber) {
    for (var i = 0; i < divisors.length; i++) {
      if (candidate % divisors[i] !== 0) {
        break;
      }
      if (i === divisors.length - 1) {
        return candidate; // Has won.
      }
    }
  }
};

// Moment of truth...
console.log("Answer to problem 5 is: " + findNumberDivisibleByOneTo(20));
