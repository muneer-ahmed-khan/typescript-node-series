# [Series #13: Worker Threads in Node.js](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-13)

Welcome to the Node.js TypeScript [Series #13: Worker Threads in Node.js](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-13), focusing on Node.js **Worker Threads** module. This is the 13th series following [Series-12](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-12)


# Introduction to TypeScript Worker Threads

## Background
Running multiple pieces of code concurrently can be achieved using various approaches. The child process module, covered in the 10th part of this series, allows creating additional Node.js processes. However, each process has its own memory space and managing environments for Node.js code, making it resource-intensive. Threads, as compared to multiple processes, are lighter in terms of resources.

## TypeScript Support in Worker Threads
While the Worker Threads module is relatively new, it has solid TypeScript support. The DefinitelyTyped repository covers all necessary use cases. TypeScript support is crucial as Worker Threads is still in the experimental stage, undergoing active development. The `--experimental-worker` flag is no longer needed.

```typescript
import { Worker } from 'worker_threads';
 
const worker = new Worker('./worker.ts');
```

Currently, TypeScript files (.ts) are not directly supported. A workaround involves creating corresponding JavaScript files (.js) for workers:

```javascript
// worker.js
const path = require('path');
 
require('ts-node').register();
require(path.resolve(__dirname, './worker.ts'));
```

A more efficient solution is to pass the file name using `workerData`.

### Communicating Between Threads
#### Passing Data to Worker Thread
Use `workerData` to send data to a newly created worker. The data must be compatible with the **structured clone** algorithm.

```typescript
// main.ts
import { Worker } from 'worker_threads';
 
const worker = new Worker('./worker.js', {
  workerData: {
    path: './worker.ts'
  }
});
```

### Communicating with Parent Thread
Communication from worker to main thread can be achieved using `parentPort`.

```typescript
// worker.ts
import { parentPort, workerData } from 'worker_threads';
 
function factorial(n: number): number {
  if (n === 1 || n === 0) {
    return 1;
  }
  return factorial(n - 1) * n;
}
 
parentPort.postMessage(
  factorial(workerData.value)
);
```

### Listen for the `message` Event in the Main Thread:

```typescript
// main.ts
import { Worker } from 'worker_threads';
 
const worker = new Worker('./worker.js', {
  workerData: {
    value: 15,
    path: './worker.ts'
  }
});
 
worker.on('message', (result) => {
  console.log(result);
});
```

### Main Points
- The ```child process``` module enables the creation of additional Node.js processes, each with its own memory space.
- Child processes operate independently, managing their own environment for running Node.js code.
- Child processes takes a bit memory and takes some time to run.
- Threads, compared to multiple processes, are lighter when it comes to resources.
- With the  new Worker, we create a Worker in a similar way that we create a child process.
- For ```.ts files``` When using the child process module, the new process inherits the  ```process.execArgv``` property and therefore it runs with TypeScript but it doesn't happen with worker thread.
- We can use the  ```workerData``` parameter to send data to the newly created worker.
- When you are inside of a worker, you can read the ```workerData``` by importing it from the **Worker Threads** module.
- The easiest way to communicate the worker thread with the main thread is to use  ```parentPort``` that can be imported inside of a worker.
- We can use the  ```postMessage``` function to send data back to the main thread.
- We can pass data through Threads with ```parentPort```, ```workerData``` and ```MessageChannel```.
- ```MessageChannel``` does not have any methods on its own. The only two properties it has are  ```port1``` and  ```port2```, both instances of ```MessagePort```.
- The ```MessageChannel``` is capable of working without involving any Worker Threads.
- The  ```transferList``` that the error mentions is an additional argument of the  ```postMessage``` function.
- The  ```transferList``` doesn't clone the the port but return the original object .
- ```postMessage``` By default, creates a clone of the data that we send, but we can change that behavior with the  ```transferList```.
-  Array is cloned in the ```transferList``` list. The more complex the data structure, the more computing power it takes to clone it.
- ```ArrayBuffer``` distinct from the Buffer is an easy method is to use representing an array of 8-bit unsigned integers without cloning.
- ```ArrayBuffer``` data is not available in main thread while used again.
- ```SharedArrayBufferTo```  create Uint8Array using a special type of a buffer.
- This way the array is neither cloned, nor it is unavailable to the sender.



### Usage
- The ```examples``` folder contain multiple example of worker threads.

- Uncomment the import statement of any imported examples file in ```main.js``` to see the result.

- run the program with command
``` npm start ```


Explore advanced topics and continue your learning journey by visiting [Series-14](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-14). While this series provides **Worker Threads** module Node.js, [Series-14](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-14) focus on ```Performance Hooks``` in Node.js. **Enjoy coding!**