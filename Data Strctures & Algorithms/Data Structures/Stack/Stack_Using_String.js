const testStack = require('./TestStack');

const DEFAULT_MAX_SIZE = 1024;
const SEP_CHAR = '*^*';

const Stack = function(max_size = DEFAULT_MAX_SIZE, initialStore = '') {
  this.max_size = max_size;
  this.stackSize = 0;
  this.store = initialStore;
};

Stack.prototype.push = function(item) {
  if (this.stackSize >= this.max_size) {
    throw new Error('Stack overflow. Max size = ', this.max_size);
  }

  this.store = this.store.concat(SEP_CHAR, item.toString());
  return ++this.stackSize;
};

Stack.prototype.pop = function() {
  if (this.stackSize === 0) {
    throw new Error('Stack is empty');
  }

  // index of the item to be popped
  const index = this.store.lastIndexOf(SEP_CHAR);

  // pop the item
  const itemPopped = this.store.slice(index + SEP_CHAR.length);

  // remove the item from the store
  this.store = this.store.substring(0, index);

  //update the stack size
  this.stackSize--;

  return itemPopped;
};

Stack.prototype.getSize = function() {
  return this.stackSize;
};

const frames = new Stack(3, '_boom_boom');

testStack(frames);
