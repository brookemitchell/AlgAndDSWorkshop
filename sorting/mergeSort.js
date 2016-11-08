/*
MERGE SORT
*** Description
Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.
Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).
Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.
*** Exercises
- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity
- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]
Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]
*/
var test = require('ava')

function split (arr) {
    var size = Math.floor(arr.length / 2)
    return [arr.slice(0, size), arr.slice(size)]
}

// takes two sorted arrays
function merge (arr1, arr2) {
    const ret = []

    for ( let i = 0 , j = 0; ret.length < (arr1.length + arr2.length); ) {
        if(arr1[i] < (typeof arr2[j] === 'undefined' ?  Infinity : arr2[j])) {
            ret.push(arr1[i])
            i++
        }
        else {
            ret.push(arr2[j])
            j++
        }
    }
    return ret
}

test('merge two single element presorted arrays', t => {
    const arr1 = [5]
    const arr2 = [2]
    const act = merge(arr1, arr2)
    const exp = [2, 5]
    t.deepEqual(act, exp)
})

test('merge two presorted arrays', t => {
    const arr1 = [2, 9, 24]
    const arr2 = [5, 11 , 23, 48]
    const act = merge(arr1, arr2)
    const exp = [2, 5, 9, 11, 23, 24, 48]

    t.deepEqual(act, exp)

})


function mergeSort (arr) {
    if (arr.length === 1 ) {
        return arr
    }
    var [ left , right ] = split(arr)
    return merge( mergeSort(left) , mergeSort(right) )
}

test('split an array in two', t => {
    var array = [ 1, 2, 4, 5, 9 ]
    const act = split(array)
    const exp = [ [1,2], [4,5,9] ]
    t.deepEqual(act, exp)

})

test('return if array len 1', t => {
    var array = [ 1 ]
    const act = mergeSort(array)
    const exp = [ 1 ]
    t.deepEqual(act, exp)

})

test('sort list split in 2 evenly', t => {
    var array = [  2, 1, 5, 9 ]
    const act = mergeSort(array)
    const exp = [ 1,2,5,9 ]
    t.deepEqual(act, exp)
})

test('sort correctly when uneven', t => {
    var array = [ 2, 1, 99, 4, 5, 9 ]
    const act = mergeSort(array)
    const exp = [ 1,2,4,5,9, 99 ]
    t.deepEqual(act, exp)
})
