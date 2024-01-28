# [Series #09: Node.js Event Loop](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-09)

Welcome to the Node.js TypeScript [Series #09: Node.js Event Loop](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-09), focusing on Node.js Event Loop. This is the ninth series following [Series-08](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-08)

# Event Loop in Node.js

JavaScript and the Node.js environment utilize the Event Loop, a fundamental concept in the Node.js runtime environment. The Event Loop allows Node.js to handle multiple operations concurrently without the need for multi-threading. It operates on a single thread, utilizing non-blocking I/O operations. In this context, we explore the different phases of the event loop, focusing on functions like `setTimeout`, `setInterval`, `setImmediate`, and `process.nextTick`.

## Timers Phase

The first phase of the event loop is Timers. This phase executes callbacks scheduled by `setTimeout` and `setInterval`. `setTimeout` sets a timer that executes a function after a specified threshold, not necessarily at an exact time. Similarly, `setInterval` causes a function to execute repeatedly with a specified time delay between each call.

**Example:**

```javascript
console.time('setTimeout');
setTimeout(() => {
  console.log('Timer went off');
  console.timeEnd('setTimeout');
}, 100);
```

## Poll Phase

During the Poll phase, Input/Output related callbacks execute, such as those connected to the File System module. If there are events, they are handled one by one. If no events are present, Node.js waits briefly for new events to execute immediately.

## Check Phase

The Check phase runs immediately after the Poll phase and invokes callbacks set up using the `setImmediate` function. It executes a script once the current Poll phase completes.

**Example:**

```javascript
setTimeout(() => {
  console.log('set timeout');
}, 0);

setImmediate(() => {
  console.log('set immediate');
});
```

# Close Callbacks Phase

In the Close Callbacks phase, callbacks like the 'close' event emitted when a socket is closed using the `socket.destroy()` function are executed.

## `process.nextTick`

Though not technically part of the event loop, `process.nextTick` fires immediately on the same phase as the event loop. It invokes more immediately than `setImmediate`, making it unique.

In summary, understanding the event loop and its phases, along with these functions, provides insights into how Node.js handles asynchronous operations efficiently.







### Usage
- The ```examples``` folder contain multiple example of Creating a server, receiving requests.

- Uncomment the import statement of any imported examples file in ```main.js``` to see the result.

- run the program with command
``` npm start ```

### Main Points
- The Node.js event loop is a fundamental concept in the Node.js runtime environment, enabling the handling of multiple operations concurrently on a single thread.
- Node.js operates on a single thread, utilizing non-blocking I/O operations for efficient task execution.
- The event loop follows an event-driven architecture, generating events upon completion of I/O operations or asynchronous tasks, placing them in an event queue.
- Callback functions play a crucial role in Node.js, associated with asynchronous operations and added to the event queue upon completion.
- Node.js constantly executes the event loop in iterations known as ticks, initializing it on start with phases defining the order of operations.
- Phases of the Event Loop include Timers, Poll, Check, Close Callbacks, and process.nextTick.
- Timers phase executes callbacks scheduled by functions like setTimeout and setInterval, with setTimeout specifying a threshold for callback execution.
- Pending callbacks phase handles callbacks for system operations, such as TCP errors.
- Poll phase executes Input/Output related callbacks, waiting for events to execute them immediately.
- Check phase runs after the Poll phase, invoking callbacks set up using the setImmediate function.
- Close callbacks phase runs callbacks, such as the 'close' event emitted when a socket is closed using socket.destroy().
- process.nextTick is not technically part of the event loop but fires immediately on the current phase, providing unique functionality.


Explore advanced topics and continue your learning journey by visiting [Series-10](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-10). While this series provides Event Loop in Node.js, [Series-10](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-10) focus on ``` Child Processes``` in Node.js. **Enjoy coding!**













