/**
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */


var isPalindrome = function(number) {
  if (number.toString()
      === number.toString().split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

var getMax3DigitsPalindrome = function() {
  var maxPalindrome = 0;

  for (var i=999; i >= 100; i--) {
    for (var j=999; j >= 100; j--) {
      if(isPalindrome(i*j) && i*j > maxPalindrome) {
        maxPalindrome = i*j;
      }
    }
  }

  return maxPalindrome;
};

console.log(getMax3DigitsPalindrome());
