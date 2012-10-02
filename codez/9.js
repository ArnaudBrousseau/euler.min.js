/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 * a^2 + b^2 = c^2
 *
 * For example, 32 + 42 = 9 + 16 = 25 = 52.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

var isPythTriplet = function(a, b, c) {
  if (a > 0 && a < b && b < c && a*a + b*b === c*c) {
    return true;
  } else {
    return false;
  }
};

var findPythTriplet = function(sum) {

  // Okay, let's think. We are searching for 0 < a < b < c and a + b + c =1000
  // and a^2 + b^2 = c^2.
  // That means that:
  // - a is in [1.996]
  // - b is in [2, 997]
  // - c is in [3, 998]
  //
  // If we want to fix c and search for possible (a, b) values we have:
  // | a + b = 1000 - c
  // | a^2 + b^2 = c^2
  //
  // Hence:
  // | a^2 + 2ab + b^2 = 1000*1000 - 2*1000*c + c^2 (1)
  // | a^2 + b^2 = c^2                              (2)
  //
  // Which yields:
  // 2ab = 10^6 - 2000c ((1)*(1) - (2))
  //
  // Now, we know a >=1 and b >=2. So:
  // => 4 < 10^6 - 2000c
  // => 2000c + 4 < 10^6
  // => c < (10^6 - 4) / 2000
  //
  // +--------------------------+
  // |=> c < 499 (rounded down) |
  // +--------------------------+

  a = 1;
  b = 2;
  c = 499;

  for(c; c > 3; c--) {
    for (a=1; a < 1000 - c - 1; a++) {
      b = 1000 - c - a;
      if (a < b && isPythTriplet(a, b, c)) {
        return a*b*c;
      } else if (b < a) { break; }
    }
  }

};

// Now run this sh*t
console.log("Answer to problem #9 is: " + findPythTriplet(1000));
