const {inspect} = require('util')
const full = e => inspect(e, false, null)

/*
LINKED LIST
Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.
*** Operations:
** Part 1
myList.forEach(callbackFn)
invoke callback function with the value of each node
myList.print()
=> string with all values in list (ex: '0, 1, 2, 3')
myList.insertAfter(refNode, value)
=> new node
insert new node associated with value passed in after refNode
myList.removeAfter(refNode)
=> removed node
remove node after the refNode
myList.insertHead(value)
=> new head
insert new head node at the beginning of the list with the value passed in
myList.removeHead()
=> removed head node
remove the head node of the linked list
myList.findNode(value)
=> first node that has a value matching what was passed in
* Optimization:
Say we have a linked list that has 100 items and we want to add an item to the very end. How would you do that with your current implementation? How can you modify the data structure to add an item to the end in constant time?
myList.appendToTail(value)
=> new tail node
add a new tail node at the end of the list with the associated value passed in
myList.removeTail()
=> removed tail node
remove the tail node from the list
** Part 2
Now let's think about creating insertBefore and removeBefore methods for the nodes in our list. Can you think of an efficient way to do so?
Think about time complexity. What would it be for your current implementation of a linked list?
How can we modify our data structures (Node and Linked List classes) so that we can make these O(1) operations?
Once you've come up with a plan, implement the following methods.
myList.insertBefore(refNode, value)
=> new node inserted
insert new node with associated value before refNode
myList.removeBefore(refNode)
=> removed node
remove node before the refNode passed in
*** Additional Exercises:
Implement a circularly linked list:
https://en.wikipedia.org/wiki/Linked_list#Circularly_linked_list
Reimplement stack and queue data structures using linked lists.
 */

var test = require('ava')

// PART 1

function Node(value, next = null) {
  this.next = next;
  this.value = value;
}

Node.of = (v, n) => new Node(v, n)

function LinkedList(node) {
  if (node === undefined) console.log('Must provide value for first node');
  this.head = node
}

LinkedList.prototype.forEach = function(callback) {
  // implement me...
    var next = this.head
    while(next) {
        next.value = callback(next.value)
        next = next.next
    }
    return this.head
};

test('maps correctly w one', t => {
    var list = new LinkedList(Node.of(1))
    var act = list.forEach(e => e * 2)
    var exp = new Node(2)
    t.deepEqual(act, exp)
})

test('maps correctly w many', t => {
    var list = new LinkedList(Node.of(1, Node.of(2, Node.of(99))))
    var act = list.forEach(e => e * 2)
    var exp = {next:{next:{next:null,value:198},value:4},value:2}
    t.deepEqual(act, exp)
})

// Time complexity:

LinkedList.prototype.print = function() {
  // implement me...
  var res = []
  this.forEach(e => res.push(e))
  return res.join(', ')
};

test('prints', t => {
    var list = new LinkedList(Node.of(1, Node.of(2, Node.of(99))))
    var act = list.print()
    var exp = '1, 2, 99'
    t.deepEqual(act, exp)
})
// Time complexity: n

LinkedList.prototype.insertAfter = function(nodeNumber, newNode) {
  // implement me...
  var index = 0
  var node = this.head
  while (node) {
    if (nodeNumber === index) {
      newNode.next = node.next
      node.next = newNode
    }
    index += 1
    node = node.next
  }
  return new LinkedList(this.head)
};

test('inserts after n nodes', t => {
  var list = new LinkedList(Node.of(1, Node.of(2, Node.of(99))))
  var act = list.insertAfter(1, Node.of(3))
  var exp = new LinkedList(Node.of(1, Node.of(2, Node.of(3, Node.of(99)))))
  t.deepEqual(act, exp)
})
// Time complexity: n

LinkedList.prototype.removeAfter = function(nodeAfter) {

  var index = 0
  var node = this.head
  while (node) {
    if (nodeAfter === index) {
      node.next = node.next.next
    }
    index += 1
    node = node.next
  }

  return new LinkedList(this.head)
};
// Time complexity:

test('inserts after n nodes', t => {
  var list = new LinkedList(Node.of(1, Node.of(2, Node.of(99))))
  var act = list.removeAfter(0)
  var exp = new LinkedList(Node.of(1, Node.of(99)))
  t.deepEqual(act, exp)
})

LinkedList.prototype.insertHead = function(node) {
  // implement me...
  node.next = this.head
  this.head = node
  return new LinkedList(this.head)
};
// Time complexity:

test('inserts new head', t => {
  var list = new LinkedList(Node.of(1, Node.of(2, Node.of(99))))
  var act = list.insertHead(Node.of(0))
  var exp = new LinkedList(Node.of( 0, Node.of(1, Node.of(2, Node.of(99)))))
  t.deepEqual(act, exp)
})

LinkedList.prototype.removeHead = function() {
  // implement me...
  this.head = this.head.next
  return new LinkedList(this.head)
}

test('remove head', t => {
  var list = new LinkedList(Node.of(1, Node.of(2, Node.of(99))))
  var act = list.removeHead()
  var exp = new LinkedList(Node.of(2, Node.of(99)))
  t.deepEqual(act, exp)
})

LinkedList.prototype.findNode = function(value) {
  // implement me...
  var resValue

  this.forEach(e => {
    console.log(e, value.value);
    if(value === e) {resValue = e}
  })

  return Node.of(resValue)
};
// Time complexity:


test('find node', t => {
  var list = new LinkedList(Node.of(1, Node.of(2, Node.of(99))))
  var act = list.findNode(Node.of(2))
  var exp = Node.of(2)
  t.deepEqual(act, exp)
})

test('find nonexistant node', t => {
  var list = new LinkedList(Node.of(1, Node.of(2, Node.of(99))))
  var act = list.findNode(Node.of(3))
  var exp = Node.of(undefined)
  t.deepEqual(act, exp)
})

LinkedList.prototype.appendToTail = function(value) {
  // implement me...
};
// Time complexity:
// PART 2:

LinkedList.prototype.insertBefore = function(node, value) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.removeBefore = function(node) {
  // implement me...
};
// Time complexity:



/*
*** Exercises:
1. Implement a stack using a linked list.
2. Implement a queue using a linked list.
3. Write a method that remove duplicates from an unsorted linked list. What is the time complexity? Re-implement the method without using any additional storage structure (constant space complexity). What is the time complexity?
4. Reverse a linked list. Do not use any additional storage structures.
5. Find the kth to last element of a singly linked list.
6. Detect if a linked list has a loop.
7. Check if a linked list is a palindrome.
8. Given two linked lists that represent numbers, return a linked list that represents the sum of those numbers:
  4 2 5        (4 -> 2 -> 5)
+ 7 3 1        (7 -> 3 -> 1)
--------
1 1 5 6   (1 -> 1 -> 5 -> 6)
 */
