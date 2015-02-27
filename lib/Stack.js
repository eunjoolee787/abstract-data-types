var LinkedList = require('./LinkedList');
var Node = require('./Node');
module.exports = Stack;

function Stack() {
  // Call parent "super" constructor method
  LinkedList.call(this);
}
  Stack.prototype = Object.create(LinkedList.prototype, {
    constructor: { value: LinkedList }
  });

  
// TODO: Extend LinkedList

/**
 * Pushes the value onto the top of the stack
 * @param  value The value to add to the stack
 */
Stack.prototype.push = function (value) {
  var node;
  if (!(value instanceof Node)) {
    node = new Node(value);
  }
  else {
    node = values;
  }
  this.add(node);
};

/**
 * Pops the value on top of the stack
 * @throws {Error} – Thrown when the stack is empty
 * @return The value on top of the stack
 */
Stack.prototype.pop = function () {
  //Remove th last node and return it's value
  return this.remove(this.length - 1).value;
};

/**
 * Peek at the value on top of the stack
 * @throws {Error} – Thrown when the stack is empty
 * @return The value on top of the stack
 */
Stack.prototype.peek = function () {
  var node = this.get(this.length -1);
  return node.value;
};