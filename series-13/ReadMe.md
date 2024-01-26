### Usage
- The ```examples``` folder contain multiple example of worker threads.

- Uncomment the import statement of any imported examples file in ```main.js``` to see the result.

- run the program with command
``` npm start ```

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
