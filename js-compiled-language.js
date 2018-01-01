// Compiled languages => You run your source code through a compiler, and distribute the resulting binary / executable file.
// Interpreted language => The source code is translated and executed everytime you run the program.

// Program Translation => Converting code written in hight level programming language to a low level language that the computer canc understand.

//     Gist => In compiled languages, the program is translated once, and the resulting executable can be run multiple times.
// In interpreted languages, the program is translated, and executed everytime you run it.

// The code below has syntax error in line 5.
// If JS was interpreted, it should have executed the first 4 lines, printed 1, 2, 3, 4, and then printed the syntax error in line 5
// But it prints the error straight away, because it compiles the code first.

//     SyntaxError: Invalid or unexpected token


console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log(');