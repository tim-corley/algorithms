# Algorithms

## Sort

### Naive Sort

- naive sort takes **quadratic** time complexity (`O(n^2)`)

#### Selection

#### Insertion

#### Bubble

### Optimal Sort

- optimal sort takes **log-linear** time complexity `O(nlog(n)`

#### Merge

- known as a **divide & conquer** algorithm
- is both **optimal** & **stable**
- time complexity: `O(nlog(n)`
  - outer loop: log(n) levels
  - inner loop: evaluate all items (n) on each level
- steps:

  1. recursively break down input (array) until each item is in it's own array (i.e. length = 1). this is a tree recursive structure.
  2. execute the merging with a helper / utility function (i.e. "subroutine")
     - responsible for comparing & combining 2 blocks into 1 block

- built-in functions utilized:

  - `.shift()` - removes first element from array and returns the item ([MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift))
  - `.slice()` - return a shallow copy of a portion of an array determined by passed in indexes ([MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice))
  - `.concat()` - merges two+ arrays into a new array ([MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat))

- Reference: https://www.digitalocean.com/community/tutorials/js-understanding-merge-sort

#### Heap

#### Quick

### Stable vs. Unstable Sort

- a stable sort will maintain a sub-order within a "new" order
- ex.: order `person` objects by name (alphabetically) and by age. a stable sort will maintain the alphabetical order when also ordering by age
- Stable:
  - Merge
  - Bubble
  - Insertion
- Unstable:
  - Selection
  - Heap
  - Quick

## Search
