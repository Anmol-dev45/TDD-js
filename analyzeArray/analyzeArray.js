function analyzeArray(arr) {
  return {
    average: avg(arr),
    min: min(arr),
    max: max(arr),
    length: arr.length,
  };
}

function min(arr) {
  let min = arr[0];
  for (elm of arr) {
    if (min > elm) min = elm;
  }
  return min;
}

function max(arr) {
  let max = arr[0];
  for (elm of arr) {
    if (max < elm) max = elm;
  }
  return max;
}

function avg(arr) {
  return Math.round(arr.reduce((total, curr) => curr + total, 0) / arr.length);
}

module.exports = analyzeArray;
