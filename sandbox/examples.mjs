// NOTE: to run - use: $ node --experimental-modules examples.mjs
// SEE: https://blog.logrocket.com/how-to-use-ecmascript-modules-with-node-js/

import { mergeSort } from "../sort/merge/js-example-01/merge-sort.mjs";

console.log("\n/////// MERGE SORT ////////\n");

const unsorted = [5, 1, 4, 3, 2];
console.log(mergeSort(unsorted));
