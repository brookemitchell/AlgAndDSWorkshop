/*
  INSERTION SORT
  *** Description
  Iterate over array and grow a sorted array behind current element.
  For each position, compare value of element with previous elements and swap positions if previous element is larger.
  example:
  [ 3 4 5|1 2 6 ]
  sorted|unsorted
  swaps:
  [ 3 4 1 5|2 6 ]
  [ 3 1 4 5|2 6 ]
  [ 1 3 4 5|2 6 ]
  now repeat for next unsorted element
  *** Exercises
  - Implement insertion sort for array of numbers
  - Identify time complexity
  - Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
  - Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]
  *** Extra credit
  - Implement shell sort, a generalization of insertion sort
  (https://en.wikipedia.org/wiki/Shellsort)
*/

var test = require('ava')

function insertionSort (arr) {

    for ( var i = 1 ; i < arr.length; i++ ) {
        var selected = arr[i]
        for (var j = i; j >= 0; j--) {
            if (selected < arr[j]) {
                arr[j + 1] = arr[j]
                arr[j] = selected
            }
        }
    }
    return arr
}

test('implement insertion sort', t => {

    var act = insertionSort([ 3, 4, 5, 1, 2, 6 ])
    var exp = [1, 2, 3, 4, 5, 6]

    t.deepEqual(act, exp)

    var act2 = insertionSort([ 3, 1, 2 ])
    var exp2 = [1, 2, 3]

    console.log(act2, exp2);
    t.deepEqual(act2, exp2)
})
