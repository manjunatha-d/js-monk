function TestStack(stack) {
  console.log('===============================================');
  console.log('INITIAL STATE');
  console.log('===============================================');
  console.log('Initial size => ', stack.getSize());
  console.log('MAX_SIZE => ', stack.max_size);
  console.log('Initial Store => ', stack.store.toString());
  // console.log('Initial pop', stack.pop()); // throws 'stack is empty' error

  console.log('===============================================');
  console.log('TEST PUSH()');
  console.log('===============================================');
  console.log('Size after pushing 1 => ', stack.push(1));
  console.log('Size after pushing 2 => ', stack.push(2));
  console.log('Size after pushing 3 => ', stack.push(3));
  // console.log('Size after pushing 4', stack.push(4)); // throws 'stack overflow' error

  console.log('===============================================');
  console.log('TEST POP()');
  console.log('===============================================');
  console.log('Pop() => ', stack.pop());
  console.log('Size after popping once => ', stack.getSize());
  console.log('Pop() => ', stack.pop());
  console.log('Size after popping twice => ', stack.getSize());
}

module.exports = TestStack;
