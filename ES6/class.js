/**
 * Class
 * 
 * Declaring classes
 *  1. Class declaration => class Dog {}
 *  2. Class expression => const Dog = class {}
 * 
 * => The only method that is absolutely required when you declare a new class is constructor()
 * => When you create a class that extends another class, don't forget to call super() inside the constructor of the child class.
 *      You need to create the parent object before you extend it.
 * 
 * Declaring constructor: constructor() {}. There is no `function` keyword
 * 
 * Pros:
 * 
 *  1. Provides nice syntax for the developers coming from class oriented languages like Java
 *  2. You can write static methods. // You can also do it without the keyword `class`
 *  3. You can extend native objects like Array. // You can also do it without classes
 * 
 * Links:
 * 
 * 1. https://github.com/wesbos/es6-articles/blob/master/52%20-%20Say%20Hello%20to%20Classes.md
 * 2. https://github.com/wesbos/es6-articles/blob/master/53%20-%20Extending%20Classes%20and%20using%20super().md
 * 3. https://github.com/wesbos/es6-articles/blob/master/54%20-%20Extending%20Arrays%20with%20Classes%20for%20Custom%20Collections.md
 */

 class Test {
     constructor() {
         console.log('Test Constructor');
     }
 }

 console.log('typeof Test (class): ', typeof Test); // logs `function`

 // Inheritance without the keyword `class`

 function Dog(name, breed) {
     this.name = name;
     this.breed = breed;
 }

 Dog.prototype.bark = function() {
     console.log(`Bow Bow, my name is ${this.name}`);
 }

 Dog.prototype.cuddle = function() {
     console.log('Cuddle cuddle!!');
 }

 // static method
 Dog.info = () => console.log('A dog is 100 times better than a cat');

 const Sarasu = new Dog('Casper', 'Labrador');

 Sarasu.bark();
 Sarasu.cuddle();
 Dog.info(); // invoking static method
//  Sarasu.info(); // TypeError: Sarasu.info is not a function


 // Inheritance using the keyword `class`

 class classyDog{
     constructor(name, breed) {
         this.name = name;
         this.breed = breed;
     }

     bark() {
        console.log(`Classy Bow Bow, my name is ${this.name}`);
     }

     // You should not use comma to separate methods. It results in SyntaxError: Unexpected token ,
     cuddle() {
        console.log('Classy Cuddle cuddle!!');
     }

     // static methods => prefix the keyword `static`
     static info() {
         console.log('A Classy Dog is 100 times better than a normal dog');
     }
 }

 const classySarasu = new classyDog('Sarasu', 'German Sherpherd');

 console.log('\n************************************\n');
 classySarasu.bark();
 classySarasu.cuddle();
 classyDog.info();
//  classySarasu.info(); // TypeError: classySarasu.info is not a function
