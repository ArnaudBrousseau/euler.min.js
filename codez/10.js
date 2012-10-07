/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
 */

var isPrime = function(num) {
  var upperBoundForDivisor = Math.sqrt(num);
  for (var i=2; i <= upperBoundForDivisor; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
var computePrimeSumBelow = function(num) {
  sum = 0;
  for (var i=2; i<num; i++) {
    if (isPrime(i)) { sum += i; }
  };
  return sum;
};

console.log("Answer to problem #10 is: " + computePrimeSumBelow(2000000));
