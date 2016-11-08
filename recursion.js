var test = require('ava')

var one = ` Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this. `

function loopN (n) {
    console.log(n);
    if (n <= 0) {
        return n
    }
    loopN(n - 1)
}

test( one, t => {
    var act = loopN(3)
    var exp = 0


    t.pass()
}  )

function exponent(base, expo) {
    if (expo === 1 ) {
        return base
    }

    return base * exponent(base, expo - 1)
}


//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

test('exponent', t => {
    var act = exponent(3, 3)
    var exp = 27
    t.is(act, exp)

})

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(arr, num) {
    var start = 0
    var end = arr.length - 1
    if ( arr.length === 0 ) {
        return arr
    }

    if (arr.length === 1 ) {
        return [ arr[0] * num ]
    }

    return [arr[0] * num].concat(recursiveMultiplier(arr.slice(1), num))
}


test('recursiveMultiplier', t => {
    var act = recursiveMultiplier([1, 2, 3], 3)
    var exp = [3, 6, 9]

    var act2 = recursiveMultiplier([1, 1, 1], 4)
    var exp2 = [4, 4, 4]

    var act3 = recursiveMultiplier([1], 3)
    var exp3 = [3]

    var act4 = recursiveMultiplier([], 3)
    var exp4 = []

    t.deepEqual(act, exp)
    t.deepEqual(act2, exp2)
    t.deepEqual(act3, exp3)
    t.deepEqual(act4, exp4)

})

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverse (arr) {
    var reversedArr = []
    function addItems (orderedArr) {

        if (orderedArr.length > 0) {
            reversedArr.push(orderedArr.pop())
            addItems(orderedArr)
        }
        return
    }
    addItems(arr)

    return reversedArr

}

test.only('recursiveReverse', t => {
    var act = recursiveReverse([1])
    var exp = [1]

    var act2 = recursiveReverse([1, 2, 3])
    var exp2 = [3, 2, 1]


    var act3 = recursiveReverse([1, 2, 3, 4, 5])
    var exp3 = [5, 4, 3, 2, 1]


    t.deepEqual(act, exp)
    t.deepEqual(act2, exp2)


})
