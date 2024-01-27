# [Series #04: Readable Streams](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-04)

Welcome to the Node.js TypeScript [Series #04: Readable Streams](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-04), focusing on Readable Streams. This is the fourth series following [Series-03](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-03)


#### Streams
- Streams have been a fundamental concept in programming, especially in Node.js, where they efficiently handle reading and writing data.
- This series focuses on the first of several types of streams: the readable stream.

#### Reading a File

```typescript
import * as fs from 'fs';

const stream = fs.createReadStream('./file.txt');

stream.on('data', (chunk) => {
  console.log('New chunk of data:', chunk);
});
```
The data event is emitted as the file is split into multiple chunks, each represented as a Buffer instance.

#### Modes of a Readable Stream

- Readable streams can be in two modes: paused and flowing.
- They start in the paused mode by default. Switch to flowing mode by attaching a 'data' event listener or using methods like resume().

```typescript
import * as fs from 'fs';

const stream = fs.createReadStream('./file.txt');

stream.on('data', (chunk) => {
  console.log('New chunk of data:', chunk);
});

// Switch to flowing mode manually
stream.resume();
```

#### Creating a Custom Readable Stream

```typescript
import { Readable } from 'stream';

const stream = new Readable();

stream.push('Hello');
stream.push('World!');
stream.push(null);

stream.on('data', (chunk) => {
  console.log(chunk.toString());
});
```

#### Read Function and '```readable```' Event

- The read function pulls data from the internal queue. It is called automatically in flowing mode.
- Use the 'readable' event in paused mode.

```typescript
import { Readable } from 'stream';

const stream = new Readable();

stream.push('Hello');
stream.push('World!');
stream.push(null);

stream.on('readable', () => {
  let data;
  while (null !== (data = stream.read())) {
    console.log('Received:', data.toString());
  }
});
```
The 'readable' event is emitted before the 'end' event.


## Usage

- The `examples` folder contains multiple examples of readable streams.
- Uncomment the import statement of any example file in `main.js` to see the result.
- Run the program with the command:
  ```sh
  npm start
  ```



## Main Points

- Streams play a vital role in dealing with reading/writing data efficiently in Node.js.
- Streams are encountered when working with files or handling HTTP requests.
- They efficiently handle collections of data that may not be available all at once.
- Streams are memory-efficient for large datasets as they don't need to fit entirely in memory.
- Use `fs.createReadableStream` for a more efficient approach than `fs.readFile`.
- Readable Streams are instances of EventEmitter, enabling listening for incoming data.
- They emit events like 'data' when new data is available and 'end' when no more data to read.
- Chunks are represented as Buffer instances, with the 'data' event emitted for each chunk.
- Convert Buffer to a string using the `toString` method or `StringDecoder` class.
- Readable Streams have two modes: paused and flowing.
- Switch to flowing mode by adding a 'data' event listener or using methods like `resume()`.
- Readable Streams handle back pressure, adjusting the data flow based on the consumer's processing ability.
- Back pressure in the context of a readable stream refers to a mechanism used to manage the flow of data between a readable stream and a writable stream when the writable stream is not able to keep up with the rate at which data is being provided by the readable stream. It's a way to prevent overwhelming the writable stream with more data than it can handle, avoiding potential issues like increased memory usage or slowdowns.
- The `createReadStream` method from the `fs` module simplifies the creation of readable streams for file reading.
- The `Readable` class is a foundation for creating custom readable streams with complete flexibility.

## Overview of Readable Class:

### Creation:

- Create an instance using `createReadStream` from the `fs` module or extend the class for custom streams.

### Events:

- `data`: Emitted when data is available to be read.
- `end`: Emitted when there is no more data to be read.
- `error`: Emitted when an error occurs.
- `close`: Emitted when the stream and associated resources are closed.

### Methods:

- `read(size)`: Reads and returns a chunk of data with the specified size. If no size is provided, it reads all available data.
- `setEncoding(encoding)`: Sets the encoding for the stream.
- `pause()`: Pauses the stream, switching it to paused mode.
- `resume()`: Resumes a paused stream, switching it to flowing mode.


Explore advanced topics and continue your learning journey by visiting [Series-05](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-05). While this series provides readable streams in Node.js, [Series-05](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-05) focus on ```writable streams``` in Node.js. **Enjoy coding!**


