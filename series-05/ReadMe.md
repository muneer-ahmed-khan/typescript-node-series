# [Series #05: Writeable Streams](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-05)

Welcome to the Node.js TypeScript [Series #05: Writeable Streams](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-05), focusing on Writeable Streams. This is the fifth series following [Series-04](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-04)

## Writable Streams in Node.js

A **Writable** stream represents a destination to which data can be written. It is part of the built-in Stream module in Node.js and is designed for handling output operations. Commonly used when you want to write data to an external destination, such as a file, network socket, or another stream.

### Using `fs.createWriteStream`

```typescript
import * as fs from 'fs';

const stream = fs.createWriteStream('./file.txt');

stream.write('Hello world!', () => {
  console.log('File created!');
});
```

### Handling 'finish' Event

```typescript
import * as fs from 'fs';

const stream = fs.createWriteStream('./file.txt');

stream.on('finish', () => {
  console.log('All the data is transmitted');
});

stream.write('Hello ');
stream.write('world!');
```

### Using Pipes

You can also combine readable and writable streams. For example, transferring data from one file to another.

```typescript
import * as fs from 'fs';

const readable = fs.createReadStream('./file1.txt');
const writable = fs.createWriteStream('./file2.txt');

readable.on('data', (chunk) => {
  writable.write(chunk);
});
```
### Custom Writable Stream

By default, when all data is transmitted, and the readable emits the 'end' event, the writable stream closes with the writable.end function.

```typescript
import * as fs from 'fs';
import * as util from 'util';
import { Writable } from 'stream';

const writeFile = util.promisify(fs.writeFile);

class WritableFileStream extends Writable {
  path: string;

  constructor(path: string) {
    super();
    this.path = path;
  }

  _write(chunk: any, encoding: string, next: (error?: Error) => void) {
    writeFile(this.path, chunk)
      .then(() => next())
      .catch((error) => next(error));
  }
}

const readable = fs.createReadStream('./file1.txt');
const writable = new WritableFileStream('./file2.txt');

readable.pipe(writable);

```


## Process Streams
The global process object in Node.js contains streams that our application can use.

### Using process.stdin

```typescript
let a;
let b;

process.stdin.on('data', (data) => {
  if (a === undefined) {
    a = Number(data.toString());
  } else if (b === undefined) {
    b = Number(data.toString());
    console.log(`${a} + ${b} = ${a + b}`);
    process.stdin.pause();
  }
});

```

As seen in the example, the process.stdin stream is initially in a paused mode. To listen for input, it needs to be resumed by attaching a 'data' event listener.

# Usage

- The `examples` folder contains multiple examples of writable streams.
- Uncomment the import statement of any imported examples file in `main.js` to see the result.
- Run the program with the command: `npm start`

# Main Points

## Writable Streams in Node.js

- A **Writable** stream represents a destination to which data can be written.
- Part of the built-in Stream module in Node.js, designed for handling output operations.
- Commonly used for writing data to external destinations like files, network sockets, or other streams.
- The **Writable** class is a core class in the stream module of Node.js, extendable to create custom writable streams with specific behavior.
- More general than `fs.createWriteStream`, allowing the creation of custom writable streams for various output destinations.

## Writing to Writable Streams

- Data can be written to a writable stream using the `write` method, supporting strings, buffers, or any type convertible to a buffer.
- Signal the end of data with the `end` method on the writable stream.
- The `finish` event is emitted when all data has been flushed to the underlying system.
- Writable streams emit `error` events; proper error handling is crucial.

## Custom Writable Streams

- Create custom writable streams by extending the **Writable** class.
- Implement the `_write` method to define the behavior when data is written to the stream.

## Flow Control in Writable Streams

- Writable streams implement flow control to handle situations where the internal buffer is full.
- The `write` method returns a boolean value, indicating whether it's okay to write more data.
- When `write` returns false, the stream is paused until the `drain` event is emitted.
- The `drain` event is useful when dealing with scenarios involving large amounts of data.
- When ```write``` returns false, it indicates that the writable stream's internal buffer is full, and further writes should be paused until the ```drain``` event is emitted.

## Pipes and Transform Streams

- The `pipe` function connects the output of a readable stream directly to the input of a writable stream.
- Transform streams are both readable and writable, allowing data transformations.

## Process Streams

- Standard streams in Node.js interact with the input, output, and error streams of a process.
- `process.stdin` is a readable stream for gathering data incoming to the process.
- Initially in a paused mode, the `stdin` stream can be resumed to listen for input by attaching a `data` event listener.
- Ensure to pause the flowing `stdin` stream to exit the process correctly.
- `process.stdout` and `process.stderr` are writable streams used in `console.log()` and `console.error()`.


Explore advanced topics and continue your learning journey by visiting [Series-06](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-06). While this series provides writeable streams in Node.js, [Series-06](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-06) focus on ```http module``` in Node.js. **Enjoy coding!**