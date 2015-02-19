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
  if(!(node instanceof Node)) {
    throw new Error;
  } else if (this.head === null){
    this.head = node;
    this.length++;
    return this.head = node;
  } else {
    var currentNode = this.head;
    console.log(this.length);
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

};

/**
 * Removes the n-th Node at the provided index.
 * @param  {Number} index – The index of the Node object.
 */
LinkedList.prototype.remove = function (index) {

};
