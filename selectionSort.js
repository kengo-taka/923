let nums = [5, 7, 9, 4, 1, 8, 25, 3];
let otherNums = [46, 2, 34, 90, 56, 27];
let finalTest = [5, 7, 98, 36, 47, 45, 5, 2]

// let nums = [5, 7, 9, 4, 1, 8, 25, 3];

const selectionSort = function (arr) {

  let t = 0;
  for (i = 0; i < arr.length; i++) {
    let min = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        // Find index of minimum number in the array
        min = j;
      }
    }

    // Swap numbers
    t = arr[min];
    arr[min] = arr[i]
    arr[i] = t
  }
  return arr
}

console.log(selectionSort(nums))
console.log(selectionSort(otherNums))
console.log(selectionSort(finalTest))