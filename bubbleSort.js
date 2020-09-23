let nums = [5, 7, 9, 4, 1, 8, 25, 3];
let otherNums = [46, 2, 34, 90, 56, 27];
let finalTest = [5, 7, 98, 36, 47, 45, 5, 2]


const bubbleSort1 = function (arr) {
  let t = 0;
  let swapCount = Infinity;

  while (swapCount != 0) {
    swapCount = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        t = arr[j]
        arr[i] = arr[i + 1]
        arr[i + 1] = t
        swapCount += 1;
      }
    }
  }
  return arr
}

const bubbleSort = function (arr) {
  let t = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        t = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = t
      }
    }
  }
  return arr;
}

console.log(bubbleSort(nums));
console.log(bubbleSort(otherNums));
console.log(bubbleSort(finalTest));
console.log(bubbleSort1(nums));