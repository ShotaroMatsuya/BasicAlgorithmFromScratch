function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] == elem) {
    return middle;
  }
  return -1;
}

let test1 = binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 9);
console.log(test1);

function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      // console.log(short[j], long[i + j]);
      if (short[j] !== long[i + j]) {
        // console.log('BREAK!');
        break; // i++ & j = 0
      }
      if (j === short.length - 1) {
        // console.log('FOUND ONE!');
        count++;
      }
    }
  }
  return count;
}

test1 = naiveSearch('lorie loled', 'lol');
console.log(test1);
