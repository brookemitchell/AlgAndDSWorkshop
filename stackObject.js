function Stack(capacity) {
    this.storage = {}
    this.count = 0
    this.capacity = capacity
}

function MinStack(capacity) {
    Stack.call(this, capacity)
    this._min = new Stack(capacity)
}

MinStack.prototype = Object.create(Stack.prototype)
MinStack.prototype.constructor = Stack

MinStack.prototype.push = function (value) {
    var currentMin = ( this._min.peek() || 100 )

    if (value < currentMin) {
        this._min.push(value)
    }
    else {
        this._min.push(currentMin)
    }
    Stack.prototype.push.call(this, value)

}

Stack.prototype.sort = function () {
    var newStorage = {}
    for (i = 0 ; i < this.count -1 ; i++) {

    }

}


Stack.prototype.push = function(value) {

    if (this.count >= this.capacity) {
        return "Max capacity already reached. Remove element before adding a new one."
    }

    this.storage = Object.assign(this.storage, {
        [this.count] : value,
    })
    this.count += 1
    return this.count

};
// Time complexity:

MinStack.prototype.pop = function ( ) {
    this._min.pop()
    return Stack.prototype.pop.call(this)
}

Stack.prototype.pop = function() {
    // implement me...
    var oldLast = this.storage[this.count -1]
    this.count -= 1
    delete this.storage[this.count]
    return oldLast
};
// Time complexity:

MinStack.prototype.min = function ( ) {
    return this._min.peek()
}

Stack.prototype.peek = function() {
    return this.storage[this.count - 1]
};
// Time complexity:

Stack.prototype.count = function() {
    return this.count
};

Stack.prototype.findMe = function  (el) {

    for (var i = this.count - 1; i >= 0; i-- ) {
        if (this.storage[i] == el) {
            return true
        }
    }
    return false

}

Stack.prototype.until = function until (val) {

    if (this.count === 0 ) {
        return false
    }

    var jumps = 1

    for (var i = this.count - 1; i >= 0; i--) {
        if (this.storage[i] === val) {
            return jumps
        }
        jumps++
    }
    return false


}

Stack.prototype.min = function min ( ) {
    return 1
}

module.exports = {Stack, MinStack}
