/**
 * Starting in the top left corner of a 2×2 grid, there are 6 routes (without
 * backtracking) to the bottom right corner.
 * How many routes are there through a 20×20 grid?
 */

var GRID_DIM = 20;

/**
 * This will cache our results (x,y) => numPaths
 * We don't want to recompute things over and over do we?
 */
var cache = {
  '20,20': 0 // bottom right corner. Duh, we arrived at our destination.
};


/**
 * The idea here is to work backwards.
 * We begin at (GRID_DIM, GRID_DIM) and compute how many paths there are to go
 * from an increasingly far away point. This way, we can cache and reuse our
 * results really easily instead of having crazy call stacks due to recursion.
 */
var getRoutesForGrid = function() {
  var results;
  for (var i=GRID_DIM; i>0; i--) {
    // Warm up the cache by computing possible routes for squares of sizes
    // incrementally bigger.
    results = getNumPathsFrom(i, i);
  }

  // And now do the big calculation
  return getNumPathsFrom(0, 0);
};

var getNumPathsFrom = function(x, y) {
  var cachedResult = cache[x + ',' + y];

  if (cachedResult !== undefined) {
    return cachedResult;
  }
  if (x === GRID_DIM || y === GRID_DIM) {
    // We're on an edge
    cache[x + ',' + y] = 1
    return 1;
  }

  // Not result for (x, y). Let's look at (x+1, y)...
  var right = getNumPathsFrom(x + 1, y)
  cache[parseInt(x+1) + ',' + parseInt(y)] = right

  // ...and (x, y+1). Chances are we will reach an edge.
  var bottom = getNumPathsFrom(x , y + 1)
  cache[parseInt(x) + ',' + parseInt(y+1)] = bottom

  // Since from a given (x, y) we can only go right or bottom,
  // The number of possible paths from (x, y) is the sum of the possible
  // paths from (x+1, y) and (x, y+1).
  cache[parseInt(x) + ',' + parseInt(y)] = bottom + right;
  return bottom + right;
};

console.log("Answer to problem #15 is: " + getRoutesForGrid());
