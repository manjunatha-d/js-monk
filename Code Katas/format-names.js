/* 
    Format a string of names like 'Bart, Lisa & Maggie'.

    Given: an array containing hashes of names

    Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

    Example:

    list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
    // returns 'Bart, Lisa & Maggie'

    list([ {name: 'Bart'}, {name: 'Lisa'} ])
    // returns 'Bart & Lisa'

    list([ {name: 'Bart'} ])
    // returns 'Bart'

    list([])
    // returns ''
    Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/

// Recursive Solution

function list(names) {
  length = names.length;

  if (length === 0) return "";
  if (length === 1) return names[0].name;
  if (length === 2) return `${names[0].name} & ${names[1].name}`;

  return `${names[0].name}, ${list(names.slice(1))}`;
}

// P.S: Feels happy solving this using recursion
