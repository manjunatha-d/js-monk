/**
 *  Modules
 * 
 * => A module is just a file with one or more functions that you can make available to other files/applications
 *      You can import them and use inside other files/applications.
 * => How can you expose functions that other files can use (without modules)? => Expose them on global scope, which is a bad practice.
 * => If the variables inside a module are not scoped to a function or a block, they will be scoped to that module,
 *       which means variables inside a module do not escape to global scope.
 * 
 * Syntax for importing a module:
 * 
 * 1. 3rd party modules => `import var_name from 'module_name';`
 * 2. Own files => `import var_name from 'path_to_file';`
 *                 '.js' file extension is optional. 'Own file' should export the functions/variables you want to import
 * 3. Importing only the functions/vars you need => It looks like destructuring, but it's not. It's just the syntac to import named exports.
 *         `import {uniq, shuffle} from 'lodash';`
 *  TODO: Is it destrucuring?? Figure it out.
 * 
 * 4. Changing variable names when you import named exports => Use `as` keyword
 *      import { apiKey as key, url as address} from 'path_to_file'
 * 
 * 
 * Syntax for exporting a module
 * 
 * 1. Default export => `export default var_name;`
 *      There can be only one default export in a module
 * 2. Named exports => ``
 *      You can have multiple named exports from a module. But every named export can be imported using the same name only.
 *      e.g. export const apiKey = 'BoomAPI'; => This can be imported as `import apiKey from 'path_to_file'. The var_name should be same in import and export
 *      This also won't work.
 *      You need to have curly braces around the var_name for importing the named exports
 * e.g. import { apiKey } from 'path_to_file'
 * 
 *  It looks like destructuring, but it's not. It's just syntax for importing named exports.
 * 
 * 3. Changing variable names when you export => Use `as` keyword
 *      export { apiKey as key, url as address}
 * 
 * 4. You can have files that use both default export and named exports
 *      e.g. export default function user(){}; 
 *           export function createUrl() {};
 * 
 *      Importing only default => import var_name from 'path_to_file';
 *      Importing both default and named => import var_name, { named_export1, named_export2 } from 'path_to_file'
 * 
 * 
 * Pros:
 * 
 * 1. You can reuse code
 * 2. You can expose functionalities that can be used in multiple files/applications
 * 3. Variables do not accidentally escape to the global scope.
 * 
 * 
 * Links:
 * 
 * 1. https://github.com/wesbos/es6-articles/blob/master/46%20-%20Creating%20your%20own%20Modules.md
 * 2. https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export
 * 3. https://github.com/wesbos/es6-articles/blob/master/47%20-%20More%20ES6%20Module%20Practice.md
 * 4. https://github.com/nodejs/node/wiki/ES6-Module-Detection-in-Node
 */