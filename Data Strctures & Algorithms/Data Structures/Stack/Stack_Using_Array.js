const testStack = require('./TestStack');

const DEFAULT_MAX_SIZE = 1024;

const Stack = function(max_size = DEFAULT_MAX_SIZE, initialStore = []) {
  this.max_size = max_size;
  this.store = initialStore;
};

Stack.prototype.push = function(item) {
  if (this.store.length >= this.max_size) {
    throw new Error('Stack overflow. Max size = ', this.max_size);
  }

  return this.store.push(item);
};

Stack.prototype.pop = function() {
  if (this.store.length === 0) {
    throw new Error('Stack is empty');
  }

  return this.store.pop();
};

Stack.prototype.getSize = function() {
  return this.store.length;
};

const frames = new Stack();

testStack(frames);
