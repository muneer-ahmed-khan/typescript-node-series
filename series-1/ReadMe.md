### Main Points

```
console.log('Hello');
return;
console.log('world!');
```

- This program will result in error on node terminal.
- An ECMAScript program is considered syntactically incorrect if it contains a return statement
that is not within a FunctionBody.
- In Node.js, each file is treated as a separate module. Under the hood, Node.js wraps them in a function like this.

```
function (exports, require, module, __filename, __dirname) {
  // code of the module
}
```
it proves that the our program is in a function.

- The top-level variables are scoped to the module and are not global throughout the whole project. The module object can be used to export values.
- To access it from another file, we use the require function.

- This module system is an implementation of the CommonJS format.

-  the “this” keyword references to the module.exports.

``` 
console.log(this === module.exports); // true
```

- <b>global</b> object is same as <b>window</b> object on browser side javascript.
- In the node js terminal the “this” keyword references to the global object.
- The <b>global</b> object is shared between all your modules.

- The <b>process</b> object is a property of the <b>global</b> object, and therefore it is available throughout your application

- ```process.argv``` property holds an array containing the command line arguments you pass when launching the Node.js process.

- The first element is the same as the ```process.execPath``` and it holds the absolute pathname of the executable that started the Node.js process.

- The second element is a path to the executed JavaScript file. The rest of the ```process.argv``` elements are any additional command line arguments.

- To run our scripts using <b>TypeScript</b> we need to install the ```typescript``` and ```ts-node``` packages.

- With TypeScript Node.js we use imports and exports like in ES6 Modules, but since Node.js does not yet support them, ```ts-node``` transpile our code to CommonJS.

- The ```fs``` module gives us an API to interact with the file system, for example, to read, create and delete files. All operations have synchronous and asynchronous forms, but it is heavily recommended to use asynchronous functions for better performance.

- The asynchronous function always takes a error-first callback as its last argument.

- With the help of a built-in utility called promisify, we can change the writeFile function in a way that it returns a promise.