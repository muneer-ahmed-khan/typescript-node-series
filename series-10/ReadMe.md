### Usage
- The ```examples``` folder contain multiple example of Creating a server, receiving requests.

- Uncomment the import statement of any imported examples file in ```main.js``` to see the result.

- run the program with command
``` npm start ```

### Main Points
- **Node.js** is single-threaded by nature, most of the Input / Output operations work in separate threads.
- The reading of the file is not interrupted it runs in a separate, parallel thread.
- Even though the Node.js is single-threaded by nature, some actions take place in separate threads.
- The library that handles asynchronous I/O is libuv and has a defined set of threads called the Worker Pool.
- The default number of threads is 4, but you can change it by setting the  UV_THREADPOOL_SIZE environment variable.
- Even if we assume that a Node.js process is single-threaded, we can still create more than one. To make a new process, we can use the child process module.
- We can control its input stream and listen to its output stream.
- **spawn** can execute any operating system command in a separate process.
- By calling spawn, we create an instance of a **ChildProcess**. Some of the things we get access from it are standard input/output streams.
- The child process module also has the exec function. It creates a shell, so you can type in a full command that you want to execute.
- The ```spawn``` function is used to spawn a new process and execute a command. It does not create a shell to execute the command, making it more efficient. It returns a spawned child process, and you can communicate with it using streams.
- The ```exec``` function is used to execute a command in a shell. It provides a callback function to capture the output and any errors.
- The ```execFile``` function is used to run an executable file directly, without using a shell. It is generally more efficient than ```exec```.
Similar to ````exec````, it provides a callback for handling output and errors.
- Advantage of ```exec``` command is fully functional shell and  ```exec``` works with callbacks instead of streams.
- The ```execFile``` function acts a bit like a combination of both ```spawn``` and ```exec```.
- In Node.js, the ```fork``` method is a variant of the ```spawn``` function provided by the ```child_process``` module.
- The primary use of ```fork``` is for creating child processes that run separate Node.js instances.
- The ```fork``` method is particularly useful for scenarios where you want to run multiple Node.js instances concurrently, each handling a specific task, and where communication between these processes is necessary.
- ```message``` Event emitted when the parent and child processes communicate using the ```send``` method.
- An important observation is that the forked process inherits the  ```process.execArgv``` property: if you use TypeScript, it contains the path to the ```ts-node``` executable. In result, the forked processes run with TypeScript too.
- To communicate with it we can take advantage of the ```message``` event. The process emits it when you use the  ```process.send() ```function to send a message.
- We call the ``` process.disconnect()``` by which the main process can stop listening for events and can come to an end.
- Otherwise, our primary process would endlessly wait for messages from the child.
- Multiple processes can work in parallel, but it is not yet multithreading programming in the conventional sense. While processes can communicate with each other, they can’t share any data that they work on.










