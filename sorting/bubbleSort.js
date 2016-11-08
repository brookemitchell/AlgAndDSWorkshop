var test = require('ava')
/*
  Bubble SORT
  *** Description
  - For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.
  Variants:
  - Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
  (https://en.wikipedia.org/wiki/Cocktail_sort)
*/

function bubbleSort (arr) {

    for (var x = arr.length; x >= 0 ; x--) {

        var preSorted = true
        for (var i = 0; i < x; i++) {
            var currentVal = arr[i]
            var nextVal = arr[i+1]
            debugger

            if (nextVal && arr[i] > arr[i+1]){
                arr[i] = nextVal
                arr[i+1] = currentVal
                preSorted = false
            }
        }
        if (preSorted) return arr

    }
    return arr
}

test('implement bubble sort', t => {
    t.truthy(bubbleSort)
    var arr = [3, 5, 1]
    var arr2 = [3, 3, 4, 4562, 3245, 2345, 1234, 134, 5, 1]
    var arr3 = [1, 2, 3]


    var act = bubbleSort(arr)
    var exp = [1, 3, 5]

    t.deepEqual(act, exp)

    var arr = [3, 5, 1]

    t.truthy(bubbleSort)

    var act2 = bubbleSort(arr2)
    var exp2 = [1, 3, 3, 4, 5 , 134, 1234, 2345, 3245, 4562]
    t.deepEqual(act2, exp2)

    var act3 = bubbleSort(arr3)
    var exp3 = [1, 2, 3]
    t.deepEqual(act3, exp3)
})

function cocktailSort (arr) {

    return arr
}

test.only('implement cocktail sort', t => {

    t.truthy(cocktailSort)
    var arr = [3, 5, 1]


    var act = cocktailSort(arr)
    var exp = [1, 3, 5]

    t.deepEqual(act, exp)

})
