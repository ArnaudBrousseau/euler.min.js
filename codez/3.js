/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

var number = 600851475143;

var isPrime = function(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

var getMaxPrimeFactor = function (num) {
  var primeFactor = 1;
  var upperBoundforPrimeFactor = Math.floor(Math.sqrt(num));

  for (var i = 2; i < upperBoundForPrimeFactor; i++) {
    if (num % i === 0) {
      if (isPrime(i)) {
        // We have a candidate (a prime factor)
        primeFactor = i;
      }
    }
  }
  return primeFactor;
};

console.log("Answer is: " + getMaxPrimeFactor(number));
