### Usage
- The ```examples``` folder contain multiple example of Creating a server, receiving requests.

- Uncomment the import statement of any imported examples file in ```main.js``` to see the result.

- run the program with command
``` npm start ```

### Main Points
- JavaScript and the Node.js environment uses the Event Loop.
- The Node.js event loop is a fundamental concept in the Node.js runtime environment.
- It refers to the mechanism that allows Node.js to handle multiple operations concurrently without the need for multi-threading.
- Node.js operates on a single thread, meaning it has only one main execution thread for JavaScript code.
- Node.js uses non-blocking I/O operations. When a function initiates an I/O operation (e.g., reading a file or making a network request), it doesn't wait for the operation to complete. Instead, it continues executing other tasks.
- Node.js follows an event-driven architecture. Events are generated when I/O operations or other asynchronous tasks complete. These events are placed in an event queue.
- The event loop continuously checks the event queue for new events. If there is an event, it is processed, and the associated callback function is executed.
- Callback functions are essential in Node.js. When an asynchronous operation is initiated, a callback function is provided. When the operation completes, the associated callback is added to the event queue.
- Through the event loop, Node.js can handle multiple concurrent operations. While one operation is waiting for I/O, the event loop can execute other tasks, ensuring efficient use of resources.
- The Node.js event loop is the mechanism that enables asynchronous, non-blocking I/O operations and facilitates the handling of multiple tasks concurrently within a single-threaded environment.
- Node.js constantly executes the event loop, and every iteration of it we call a **tick**.
- **Node.js** initializes the **event loop** on start, and each iteration has a set of **phases** defining an order of operations.
- Every **phase** has its queue of functions to execute.
- Phases of **Event Loop**:
    - **Timers**
        - The first phase is the **timers**. During that phase, the event loop executes callbacks scheduled by the **setTimeout** and **setInterval**.
        - The  **setTimeout** function specifies a timer with a **threshold** after which the provided callback should be executed rather than the exact time. 
        - The **setInterval** function to execute repeatedly with a certain time delay between each call.
        - The **setInterval** delays the function regularly regardless of the state of the previous function call.
        - The recursive **setTimeout**, on the other hand, schedules a new function call when the previous one ends.
    - **Pending callbacks, idle, and prepare**
        - **Pending callbacks** phase executes callbacks for some systems operations, such as TCP errors.
        - The next phases we call **idle** and **prepare**, but the Node.js only uses them internally.
    - **Poll**
        - Input/Output related callbacks execute during the **poll** phase.
        - For example, the ones connected to the **File System** module.
        - Node.js waits a bit for new events to come up here and execute them immediately.
    - **Check**
        - The **check** phase runs immediately after the **poll** phase and invokes callbacks set up using the  **setImmediate** function.
        - It is designed to execute a script once the current **poll** phase completes.
        - Node.js waits a bit for new events to come up here and execute them immediately.
    - **Close callbacks**
        - In this phase, the ```close``` callbacks run. An example of that is the ```‘close‘``` event emitted when a socket is closed using the  ```socket.destroy()``` function.
- ```process.nextTick```
    - it is not technically part of the event loop.
    - the ```process.nextTick``` fires immediately on the same phase that the event loop currently is.











