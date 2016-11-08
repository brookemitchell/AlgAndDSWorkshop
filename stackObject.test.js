var test = require('ava')
var Stack = require('./stackObject.js')

test.beforeEach(t => {
    t.context.s0 = new Stack(0)
    t.context.s1 = new Stack(3)
    t.context.s1.push('one')
    t.context.s1.push('two')
    t.context.s1.push('four')
    t.context.s2 = new Stack(5)
})

test('method findMe to check if value is in stack', t => {

    var {s0, s1, s2} = t.context

    var act0 = s0.findMe('two')
    var exp0 = false

    var act = s1.findMe('two')
    var exp = true

    t.is(act, exp)

    var act2 = s1.findMe('NotThere')
    var exp2 = false

    t.is(act2, exp2)
})


test('number of pops until get certain value', t => {

    var {s0, s1, s2} = t.context
    var act = s1.until('one')
    var exp = 3
    t.is(act, exp)

    var act1 = s0.until('one')
    var exp1 = false
    t.is(act1, exp1)

    var act2 = s1.until('four')
    var exp2 = 1
    t.is(act2, exp2)

    var act3 = s1.until('two')
    var exp3 = 2
    t.is(act3, exp3)

    var myStack = new Stack(10)
    myStack.push(2)
    myStack.push(5)
    myStack.push(7)
    myStack.push(3)
    myStack.push(6)
    myStack.push(9)

    var actT = myStack.until(7)
    var expT = 4
    t.is(actT, expT)
})
