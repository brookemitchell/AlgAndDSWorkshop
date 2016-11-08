/*
  QUICK SORT
  *** Description
  Like merge sort, quick sort employs a divide and conquer strategy.
  It has a partitioning step, in which you pick an element (called a pivot) and partition the array so that all smaller elements come before pivot and all larger elements come after. The pivot will be in its final position. Recursively apply this to the subarray of smaller elements and the subarray of larger elements.
  *** Exercises
  - Write a partition helper function. For choice of pivot, for a basic implementation, we recommend choosing either the first or last element in the subarray. If you need hints, look up the Lumoto partiton scheme. Test this out before moving forward!
  - Implement quicksort
  - Identify time complexity
  - Consider implications for choice of pivot (https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot)
  *** Extra Credit
  Variants:
  - Implement a multi-pivot quicksort (ex: partition into 3 subarrays using 2 pivots)
*/
var test = require('ava')

function swap (arr, lo = 0, hi = arr.length - 1) {
    while ( !(lo === hi) ) {
        if ( arr[lo] <= arr[hi]){
            lo++
        }
        else {
            // swap pivLoc and pivot
            var pivVal = arr[hi]
            arr[hi] = arr[lo] // [ 1, 4, 2, 9, 7, 8 ]
            arr[lo] = arr[ hi - 1 ] // [ 1, 7, 2, 9, 4, 8 ]
            arr[hi - 1] = pivVal
            hi--
        }
    }
    return hi
}

test('swaps pivot to correct point', t => {
    var arr = [ 1, 8, 2, 9, 7, 4 ]
    swap(arr)
    var exp = [ 1, 2, 4, 9, 7, 8]
    t.deepEqual(arr, exp)

    var arr2 = [  8, 2, 9, 7, 4]
    swap(arr2)
    var exp2 = [  2, 4, 9, 7, 8]
    t.deepEqual(arr2, exp2)

    var arr3 = [  9, 7, 4]
    swap(arr3)
    var exp3 = [  4, 7, 9]
    t.deepEqual(arr3, exp3)
})

function quickSort(arr, lo = 0 , hi = arr.length - 1) {
    console.log(arr, lo, hi);
    if (lo >= hi) return arr

    const p = swap(arr, lo, hi)

    return [...quickSort(arr, lo, p-1), arr[p], ...quickSort(arr, p+1,hi )]
}

test('run a quickSort', t => {
    var arr = [ 1, 8, 2, 9, 7, 4 ]
    quickSort(arr)
    var exp = [ 1, 2, 4, 7, 8, 9]
    t.deepEqual(arr, exp)

})

test('handle doubles', t => {

    var arr2 = [ 1, 8, 2, 9, 2, 7, 4 ]
    quickSort(arr2)
    var exp2 = [ 1, 2, 2, 4, 7, 8, 9]
    t.deepEqual(arr2, exp2)


})

test('handle lots', t => {

    var arr2 = [  8, 2, 99, 31, 9, 999 , 89,989, 2, 7, 4 ]
    quickSort(arr2)
    var exp2 = [ 1, 2, 2, 4, 7, 8, 9]
    t.deepEqual(arr2, exp2)


})
