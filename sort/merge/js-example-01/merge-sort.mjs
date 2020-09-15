const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9];

// MERGE
// utility function to merge two sorted arrays
const merge = (sortedArrA, sortedArrB) => {
  let sorted = [];

  // as long as there are items in both arrays...
  while (sortedArrA.length && sortedArrB.length) {
    // compare first items in each array, if a < b remove it from array and push to new, sorted array
    if (sortedArrA[0] < sortedArrB[0]) {
      sorted.push(sortedArrA.shift()); // where shift() removes & returns first item of array
    } else {
      sorted.push(sortedArrB.shift());
    }
  }
  // add any remaining items (from input) to the sorted array
  return sorted.concat(sortedArrA.slice().concat(sortedArrB.slice()));
};

// console.log(merge([2, 5, 10, 57], [9, 12, 13]));

// SORTING
// recursively break down array until length === 1
// use merge utility function to begin rebuilding
export const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2),
    left = mergeSort(arr.slice(0, mid)),
    right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

console.log(mergeSort(unsortedArr));
