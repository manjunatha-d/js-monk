http://wiki.c2.com/?DynamicScoping

In lexical scoping (and if you're the interpreter), you search in the local function (the function which is running now), then you search in the function (or scope) in which that function was defined, then you search in the function (scope) in which that function was defined, and so forth. "Lexical" here refers to text, in that you can find out what variable is being referred to by looking at the nesting of scopes in the program text.

In dynamic scoping, by contrast, you search in the local function first, then you search in the function that called the local function, then you search in the function that called that function, and so on, up the call stack. "Dynamic" refers to change, in that the call stack can be different every time a given function is called, and so the function might hit different variables depending on where it is called from.
