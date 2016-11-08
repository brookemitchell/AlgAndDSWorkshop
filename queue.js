var test = require('ava')

function Queue(capacity = Infinity) {
    this._capacity = capacity
    this._values = {}
    this._head = '0'
    this._tail = '0'
    this._count = 0
}

Queue.prototype.enqueue = function(value) {
    if (this._count >=  this._capacity) {
        return "Error: Max capacity hit - already full"
    }

    this._values[this._tail++] = value
    return ++this._count
};

Queue.prototype.dequeue = function() {
    var oldFirst = this._values[this._head]

    delete this._values[this._head]
    this._head++
    this._count = this._count  === 0 ? this._count : this._count -1
    return oldFirst
};

Queue.prototype.peek = function() {
    return this._values[this._head]
};

Queue.prototype.getCount = function() {
    return this._count
};

test.beforeEach( t => {
    t.context.zeroCap = new Queue(0)
    t.context.smallCap = new Queue(3)
    t.context.noCap = new Queue()

    var sm = t.context.smallCap
    sm.enqueue('one')
    sm.enqueue('two')
    sm.enqueue('three')
})

test('dequeues correctly', t => {
    var sm = t.context.smallCap
    t.is(sm.dequeue(), 'one')
    t.is(sm.dequeue(), 'two')
    t.is(sm.dequeue(), 'three')
    t.is(sm.dequeue(), undefined)

})

test('dequeues correctly', t => {
    var sm = t.context.smallCap
    t.is(sm.dequeue(), 'one')
    t.is(sm.dequeue(), 'two')
    t.is(sm.dequeue(), 'three')
    t.is(sm.dequeue(), undefined)

})

test('rejects adding to zero cap', t => {
    var act = t.context.zeroCap.enqueue('one')
    var exp = 'Error: Max capacity hit - already full'
    t.is(act, exp)
})

test('enques correctly', t => {
    var sm = t.context.smallCap

    var act = t.context.smallCap._values['2']
    var exp = 'three'

    t.is(act, exp)

})



