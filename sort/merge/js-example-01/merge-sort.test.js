import { mergeSort } from "./merge-sort.mjs";

test("returns sorted array from an unsorted one", () => {
  expect(mergeSort([3, 7, 1, 5, 9, 2, 6])).toEqual([1, 2, 3, 5, 6, 7, 9]);
});
