/*
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
 * that the 6th prime is 13.
 * What is the 10 001st prime number?
 */

var isPrime = function(number) {
  var upperLimitForDivisor = Math.sqrt(number);

  for (var i = 2; i <= upperLimitForDivisor; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

var findNthPrime = function(n) {
  var rank = 1;
  var prime = 2;
  var nextCandidate = 2;

  while (rank < n) {
    nextCandidate ++;
    if (isPrime(nextCandidate)) {
      rank ++;
      prime = nextCandidate;
    }
  }

  return prime;
};

console.log("Answer to problem #7 is: " + findNthPrime(10001));
