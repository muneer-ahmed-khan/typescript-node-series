# [Series #01: The Basics of Node.js](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-01)

Welcome to the TypeScript Node.js [Series-01](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-01) repository, where I explore the basics of Node.js with TypeScript. This series covers fundamental concepts, examples, and practical applications.

## Understanding Node.js

Node.js is an environment for running JavaScript outside of a browser. After installing Node.js, you can execute JavaScript code in your terminal. If you've worked on front-end code, chances are you already have Node.js installed, as it comes with Node Package Manager (npm).

To check your Node.js version, run:

```bash
node -v
```

## Modules

In this series, I focus on TypeScript, but it's crucial to understand Node.js modules. Each file in Node.js is treated as a separate module, wrapped in a function. This scoping ensures top-level variables are module-specific, not global. The `module` object facilitates value exports.

```javascript
function (exports, require, module, __filename, __dirname) {
  // code of the module
}
```

This module system follows the CommonJS format, with ```this``` referencing module.exports.

```js
console.log(this === module.exports); // true
```

## Global Object

Node.js has a ```global``` object, analogous to the browser's ```window``` object. When running Node.js in the terminal, the ```this``` keyword refers to the global object. Variables declared with ```var``` are attached to the global object, shared between all modules.

## Process Arguments

The ```process``` object, a property of the ```global``` object, provides information about the Node.js app environment. I focus on the ```process.argv``` property, holding an array of command line arguments passed when launching the Node.js process.

```bash
node ./main.js one two three
```

## Running a TypeScript Project

To run TypeScript scripts, initialize your project using npm and install TypeScript and ts-node.

```bash
npm init -y
npm install -D ts-node typescript @types/node
```
Use a `tsconfig.json` file for TypeScript configuration. Scripts can then be executed using:
```bash
npm start
```

## File System
The ```fs``` module provides an API for file system interactions. While it offers synchronous and asynchronous forms, I recommend asynchronous functions for better performance. The promisify utility converts callback-based functions to promises.

```ts
import * as fs from 'fs';
import * as util from 'util';

const writeFile = util.promisify(fs.writeFile);
```


## tsconfig.json

### Compiler Options

- **sourceMap**: Enables the generation of source map files. This is useful for debugging, allowing you to map the compiled JavaScript code back to your original TypeScript code.

- **target**: Specifies the ECMAScript target version for the generated JavaScript code. In this case, it is set to "es2017," indicating ECMAScript 2017.

- **alwaysStrict**: Enforces strict mode in all generated JavaScript files, promoting safer and more predictable code.

- **noImplicitAny**: Flags an error if TypeScript implicitly assigns the `any` type to a variable. This encourages explicit type declarations, enhancing code clarity and reliability.


##### Exclude

- **node_modules**: Specifies that the TypeScript compiler should exclude the `node_modules` directory when compiling TypeScript files. This directory typically contains third-party dependencies and doesn't need to be compiled.

---


## Creating a New File
To create an empty file:
```bash
npm start -- touch ./file.txt
```

## Reading the Content of a File
To read the content of a file:
```bash
npm start -- cat ./file.txt
```

Explore advanced topics and continue your learning journey by visiting [Series-02](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-02). While this repository provides a foundation in the basics, Series-02 offers the synchronous nature of the EventEmitter in Node.js. **Enjoy coding!**

