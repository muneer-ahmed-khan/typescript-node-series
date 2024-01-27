# [Series #03: Buffers](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-03)

Welcome to the Node.js TypeScript [Series-03](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-03), focusing on Buffer. This is the third series following [Series-02](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-02) 


#### Buffer Basics

The `Buffer` class in Node.js provides a way to work with binary data directly. It is a global object and does not require importing.

```typescript
// Creating a buffer with a specified size
const buffer1 = Buffer.alloc(10);

// Creating a buffer from an existing array
const buffer2 = Buffer.from([1, 2, 3]);

// Creating a buffer from a string with a specified encoding
const buffer3 = Buffer.from('hello', 'utf-8');
```

#### Reading and Writing Buffers
```typescript
const buffer = Buffer.alloc(10);

// Writing to a buffer
buffer.write('hello');

// Reading from a buffer
const data = buffer.toString('utf-8', 0, 5);
console.log(data); // Output: hello
```

#### Slicing Buffers
```typescript
const buffer = Buffer.from('Node.js TypeScript');

// Slicing a buffer
const slicedBuffer = buffer.slice(0, 4);
console.log(slicedBuffer.toString()); // Output: Node
```

### Usage

- The examples folder contains multiple examples of working with Buffers.
- Uncomment the import statement of any example file in ```main.ts``` to see the result.
Run the program with the command:
```bash
 npm start
 ```

### Main Points

- The Node.js buffer is designed for efficient manipulation of binary data.
- Represented as an array of bytes, each element in the buffer holds a value ranging from 0 to 255.
- Functioning as a memory chunk, the buffer conceptually resembles an array of numerical values.
- Computers store data in binary, a series of ones and zeros; before storage, numbers are converted to binary form.
- UTF-8, or Unicode Transformation Format (8-bit), serves as a variable-width character encoding capable of representing all Unicode characters.
- In JavaScript, a binary number is denoted by the prefix `0b`.
- The StringDecoder ensures decoded strings lack incomplete multi-byte characters, holding them in an internal buffer until the next `decoder.write()` call.
- Buffers can be created using `new Buffer()`, allowing individual index assignment.
- Allocation of a buffer with a specified size and default value is achieved with `Buffer.alloc(size, default_value)`.
- The `Buffer.from([1,2,3])` method creates a buffer with three values.
- Creating a buffer from a string is possible with `Buffer.from('Hello world')`, and conversion back to a string is facilitated by the `toString()` method.


Explore advanced topics and continue your learning journey by visiting [Series-04](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-04). While this series provides Buffers in Node.js, Series-04 focus on ```readable streams``` in Node.js. **Enjoy coding!**


