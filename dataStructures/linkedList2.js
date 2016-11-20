var util = require('util')
var inspect = comment => util.inspect(comment, false, null)
var test = require('ava')

class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  add(value){
    var node = new Node(value)
    if (!this._head && !this._tail){     //If it's the first node
      this._head = node;                //1st node is head & tail
      this._tail = this._head;
    }
    else {
      this._tail.next = node
      this._tail = this._tail.next
    }
    this._length++
  }

  contains(val) {

    var top = this._head
    while (top) {
      if (top.value === val ) {
        return true
      }
      top = top.next
    }

    return false
  }

  size(){
    return this._length;
  }
}


test('add linkedList', t => {
  var act = new LinkedList()
  act.add(1)
  act.add(2)
  var exp = {
    _head: { value: 1, next: { value: 2, next: null } },
    _tail: { value: 2, next: null },
    _length: 2 }

  t.deepEqual(act, exp)
})

test('new linkedList', t => {
  var list = new LinkedList()
  list.add('waj')
  list.add(2)
  var act = list.contains('waj')
  var exp = true
  t.is(act, exp)

  var act2 = list.contains(1)
  var exp2 = false

  t.is(act2, exp2)
})
