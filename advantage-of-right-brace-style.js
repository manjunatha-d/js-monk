/*
* Demonstrates why right brace style (aka K&R style, 1TBS) is better than left brace style (aka Allman, GNU, Whitesmiths, et al) in JavaScript.
* For more info on indentation styles, visit https://en.wikipedia.org/wiki/Indent_style
*
* Difference between K&R style and 1TBS (One True Brace Style) ==> https://softwareengineering.stackexchange.com/questions/99543/what-is-the-difference-between-kr-and-one-true-brace-style-1tbs-styles
*
* Right brace style (K&R, 1TBS, and variants):
*   while (condition) {
*       statements;
*   }
*
*   Left brace style (Allman, GNU, and variants):
*   while (condition)
*   {
*       statements;
*   }
*
*  Run the program and check the console.
*/

/*
* Does what you expect it to do -- returns an object literal.
*/
function rightBraceStyle() {
    return {
        style: "right-brace"
    };
}

/*
* Surprise! returns `undefined` instead of object literal that you intended.
*
* This happens because of semicolon insertion feature of JavaScript. When it encounters `return`, it automatically adds a semicolon at the end of it,
* which makes it `return ;` ==> returns undefined.
*
* The remaining piece of code in the function `{ style: "left-brace"};` is considered as a block. `style` is considered as a label (something like goto in C).
* Since blocks do not end with semicolon, the last semicolon is considered as an empty statement.
*
*/
function leftBraceStyle() {
    return
    {
        style: "left-brace"
    };
}

console.log("Value returned from the function rightBraceStyle(): ", rightBraceStyle()); // logs { style: 'right-brace' }
console.log("Value returned from the function leftBraceStyle(): ", leftBraceStyle()); // logs undefined