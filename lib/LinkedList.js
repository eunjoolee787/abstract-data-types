//npm test
var Node = require('./Node.js');
module.exports = LinkedList;

/**
 * A collection of Node objects.
 * @property {Node} head – The first Node object, defaults to `null`.
 * @property {Number} length - The length of the LinkedList, defaults to 0.
 */
function LinkedList (Node) {
  this.head = null;
  this.length = 0;
}

/**
 * Appends the Node object to the end of the linked list.
 * @param  {[type]} node [description]
 * @throws {TypeError} – Should only accept other Node objects.
 * @return {[type]}      [description]
 */
LinkedList.prototype.add = function (node) {
  // If there is no nodes in the linked list, assign the node to the head

  //Else go to the end of the list and add the node
  if(!(node instanceof Node)) {
    throw new TypeError();
  } else if (this.head === null){
    this.head = node;
    this.length++;
    return this.head = node;
  } else {
    var currentNode = this.head;
    // console.log(this.length);
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    } 
      currentNode.next = node;
      this.length++;
  } 
};

/**
 * Returns the n-th Node at the provided index.
 * @param  {Number} index – The index of the Node object.
 * @return {Node}       The Node object.
 */
LinkedList.prototype.get = function (index) {
  //do a loop 
  //checking the index
  //as well as next

  //go through the list until you get to the nth index
  if(index === 0) {
    return this.head;
  } 
  var indexObj = this.head;
  while (indexObj.next === index) {
    indexObj = indexObj.next;
  }
    return this.head.next;
};

/**
 * Removes the n-th Node at the provided index.
 * @param  {Number} index – The index of the Node object.
 */
LinkedList.prototype.remove = function (index) {
  // if (index === null) {
  //   return this.next;
  // }

  //go through the list until you get to the nth index
  if (this.length < 1 || this.head === null || index > this.length) {
    throw new Error();
  }
  // go through the list
  var currentNode = this.head;
  var previousNode;
  // 0 ------------> 1 ---> 2 ---> 3
  // ^--head   ^-- whaty happens to the rest of the list???
  for (var currentIndex = 0; currentIndex < index; currentIndex++) {
    previousNode = currentNode;
    // Set current node to the next node
    currentNode = currentNode.getNext();
  }
  if (currentNode === this.head) {
    this.head = currentNode.getNext();
  }
  else {
  //Found the node you remove!
    previousNode.setNext(currentNode.getNext());
  }
  this.length--;
  return currentNode;
};

