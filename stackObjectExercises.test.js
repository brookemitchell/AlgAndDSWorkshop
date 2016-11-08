var test = require('ava')
var {Stack, MinStack} = require('./stackObject.js')

// 1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.

test.beforeEach(t => {
    t.context.s0 = new MinStack(0)
    t.context.s1 = new MinStack(5)
    t.context.s2 = new MinStack(10)
    t.context.s1.push(3)
    t.context.s1.push(3)
    t.context.s1.push(4)
    t.context.s1.push(4)
    t.context.s1.push(1)

    t.context.s2.push(9)
    t.context.s2.push(13)
    t.context.s2.push(8)
    t.context.s2.push(81)
    t.context.s2.push(4)
    t.context.s2.push(4)
    t.context.s2.push(8)
})

test('implement min method', t => {

    var {s0, s1, s2} = t.context

    var act = s1.min()
    var exp = 1

    t.is(act, exp)

    var act1 = s2.min()
    var exp1 = 4

    t.is(act1, exp1)

    var act2 = s1.pop()
    var exp2 = 1

    t.is(act2, exp2)

    var act3 = s1.min()
    var exp3 = 3

    t.is(act3, exp3)
})
