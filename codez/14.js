/**
 * The following iterative sequence is defined for the set of positive integers:
 * n → n/2 (n is even)
 * n → 3n + 1 (n is odd)
 *
 * Using the rule above and starting with 13, we generate the following sequence:
 * 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 *
 * It can be seen that this sequence (starting at 13 and finishing at 1)
 * contains 10 terms. Although it has not been proved yet (Collatz Problem), it
 * is thought that all starting numbers finish at 1.
 *
 * Which starting number, under one million, produces the longest chain?
 */
var longestChain = function(upperBoundForNumber) {
  var maxLength = 0;
  var numberWithLongestChain = 1;
  var currentLength = null;

  for (var i = 1; i < upperBoundForNumber; i++) {
    currentLength = computeChainLength(i);
    if(maxLength < currentLength) {
      maxLength = currentLength;
      numberWithLongestChain = i;
    }
  }

  return numberWithLongestChain;
};

/**
 * Compute the suite length for a given number.
 * Makes use of a simple object cache to store chain length so that we don't
 * have to recompute it again.
 */
var chainCache = {};
var computeChainLength = function(number) {
  // The chain contains at least one member: the number itself
  var chain = [number];
  var chainLength = 1;

  while (number !== 1) {
    if (chainCache[number] !== undefined) {
      // We already know what's the chain length from there. Stop!
      chainLength += chainCache[number];
      break;
    }
    if (number % 2 === 0) {
      number /= 2
    } else {
      number = 3*number + 1;
    }
    chainLength++;
    chain.push(number);
  }

  // Once we have a chain, let's update the cache with its values.
  for (var i=0; i<chain.length; i++) {
    chainCache[chain[i]] = chainLength - i;
  }

  return chainLength;
};

console.log("Answer to problem #14 is: " + longestChain(1000000));
