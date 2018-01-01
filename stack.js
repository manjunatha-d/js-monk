const STACK_SIZE = 3;
let stack = [];

let push = element => {
  if (stack.length >= STACK_SIZE) {
    console.log(`Stack is full. ${element} could not be inserted.`);
  } else {
    stack.push(element);
    console.log('Pushed this sucker', element);
  }
};

let pop = () => {
  if (stack.length === 0) {
    console.log('Stack is empty. Nothing to pop.');
  } else {
    let removedElement = stack.pop();
    console.log('Removed this sucker: ', removedElement);
    console.log(stack);
  }
};

push(1);
push(2);
push(3);
push(4);
push(4);
push(4);
pop();
pop();
pop();
pop();
pop();
