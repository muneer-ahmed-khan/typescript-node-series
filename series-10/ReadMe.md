Welcome to the Node.js TypeScript [Series #10: Child Processes](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-10), focusing on Node.js child processes module. This is the 10th series following [Series-09](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-09)




#### Node.js Single-Threaded Nature:
- While Node.js is often associated with running one task at a time, it is not strictly single-threaded due to the asynchronous nature of many operations.
- Input/Output (I/O) operations, despite the single-threaded nature, often work in separate threads, allowing concurrency.

#### Creating a Big File:
- The `dd` command is used to create a large file (`file.txt`) with 400 blocks of 1048576 bytes, totaling 400MB of data.

```bash
dd if=/dev/zero of=file.txt count=400 bs=1048576
```
the count statement in the above specify the size of file in MB currently it will be 400MB file generated with the command.

## Reading File and Concurrency

The `readFile` function is used to read the created file, and despite the potentially time-consuming task, the event loop remains active. This demonstrates that even during I/O operations, Node.js can handle other tasks concurrently.

```typescript
import { readFile } from 'fs';

readFile('./file.txt', () => {
  process.exit();
});
```

## Running Additional Tasks During File Reading
Snippet  prints numbers every ten milliseconds using `setInterval` while reading the file. The event loop continues working, showing that some actions, like reading a file, happen in separate threads.

```typescript
import { readFile } from 'fs';

console.time('reading file');
readFile('./file.txt', () => {
  console.timeEnd('reading file');
  process.exit();
});

let i = 0;
setInterval(() => {
  console.log(i++);
}, 10);
```

## Child Processes with spawn

Demonstrates the use of the `spawn` function from the child process module to execute an operating system command (`ls`) in a separate process. Accesses standard input/output streams (`stdin`, `stdout`, and `stderr`) of the child process.

```typescript
import { spawn } from 'child_process';

const child = spawn('ls');

child.stdout.on('data', (data) => {
  console.log(data.toString());
});
```

## Piping Streams and Additional Arguments

Shows how to pipe streams between processes, using the example of counting characters in the created file using the `wc -c` command in a separate process. Passes additional arguments to the command using an array.

```typescript
import { spawn } from 'child_process';
import { createReadStream } from 'fs';

const readableStream = createReadStream('./file.txt');
const wc = spawn('wc', ['-c']);

readableStream.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
  console.log(`Number of characters: ${data}`);
});
```


## exec and execFile

Introduces the `exec` and `execFile` functions from the child process module. `exec` creates a shell and works with callbacks, allowing the execution of full commands. `execFile` operates with callbacks but does not create a shell.

```typescript
import { exec, spawn, execFile } from 'child_process';

spawn('ls | grep .txt'); // throws an error

exec('ls | grep .txt', (error, response) => {
  console.log(response);
});

execFile('ls', (error, result) => {
  console.log(result);
});
```

## Child Process Events and Communication

Discusses events emitted by child processes, such as exit, disconnect, and error. Introduces the `fork` function for spawning new Node.js processes. Demonstrates communication between parent and child processes using the `message` event.

```typescript
import { fork } from 'child_process';

const child = fork('./child.ts');

child.send(20);

child.on('message', (message: number) => {
  console.log('Result: ', message);
});
```

## Handling Child Processes with Promises

Refactors the code to handle child processes using promises for better readability. Shows an example of calculating the factorial of a number in a child process.

```typescript
import { fork } from 'child_process';

factorial(20)
  .then((result) => {
    console.log('Result: ', result);
  })
  .catch(() => {
    console.log('An error occurred');
  });

function factorial(n: number) {
  return new Promise((resolve, reject) => {
    const child = fork('./child.ts');
    child.send(n);
    child.on('message', (result: number) => {
      resolve(result);
    });
    child.on('error', () => {
      reject();
    });
  });
}
```











### Main Points

- Node.js, by default, is single-threaded, but many Input/Output operations work in separate threads, providing a level of concurrency.

- File reading in Node.js does not interrupt the main thread; instead, it occurs in a separate, parallel thread.

- Despite Node.js' single-threaded nature, certain actions, especially those involving I/O operations, take place in separate threads.

- The libuv library handles asynchronous I/O and employs a set of threads known as the Worker Pool.

- The default number of threads in the Worker Pool is 4, but this can be adjusted by setting the `UV_THREADPOOL_SIZE` environment variable.

- Even if we consider a Node.js process as single-threaded, it's possible to create additional processes using the child process module.

- Using the child process module, we can control the input and output streams of a new process.

- The `spawn` function in the child process module can execute any operating system command in a separate process.

- When using `spawn`, an instance of a `ChildProcess` is created, providing access to standard input/output streams.

- The `exec` function in the child process module creates a shell for executing a full command, providing a callback for output and error handling.

- The `execFile` function runs an executable file directly, without using a shell, offering efficiency similar to `exec` but generally more preferable.

- The `fork` method in Node.js is a variant of `spawn` and is used for creating child processes running separate Node.js instances.

- `fork` is particularly useful for concurrent execution of multiple Node.js instances, each handling specific tasks, and enables communication between these processes.

- The `message` event is emitted when parent and child processes communicate using the `send` method.

- When using `fork`, the forked process inherits the `process.execArgv` property, making it run with TypeScript if applicable.

- Communication between processes is facilitated by taking advantage of the `message` event and using `process.send()` to send messages.

- Calling `process.disconnect()` is crucial to allow the main process to stop listening for events and conclude gracefully.

- Without calling `process.disconnect()`, the primary process would endlessly wait for messages from the child, leading to potential issues.

- While multiple processes in Node.js can work in parallel, it does not represent traditional multithreading programming, as processes can communicate but cannot share working data.


### Usage
- The ```examples``` folder contain multiple example of Creating a server, receiving requests.

- Uncomment the import statement of any imported examples file in ```main.js``` to see the result.

- run the program with command
``` npm start ```


Explore advanced topics and continue your learning journey by visiting [Series-11](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-11). While this series provides child processes module Node.js, [Series-11](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-11) focus on ``` Cluster module``` in Node.js. **Enjoy coding!**










