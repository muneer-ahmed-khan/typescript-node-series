### Usage
- The ```utils``` folder contain multiple example of event emitter class. 

- Uncomment the import statement of any imported utils file in ```main.js``` to see the result.

- run the program with command
``` npm start ```

### Main Points
-  A lot of Node.js core depends on event-driven architecture. Because of it, a lot of objects that you can encounter inherit from the EventEmmiter class of builtin events package.

- Certain objects can emit events and we call them emitters. We can listen to those and react in a way using callback functions called listeners.
- An instance of the EventEmmiter has a method “on” that allows one or more function to be attached to an object.
- The instance of the EventEmmiter also has a method “emit” that emits an event and causes all the EventEmitter to call all the listeners.
- The EventEmmiter class calls all the register events synchronously.
- The “on” function is an alias for “addEventListener” and both functions act the same way.
- If you attach a listener after you call the emit function, the EventEmitter does not call it.
- The emit function allows you to send arguments to the listener functions. Inside of a listener function, the “this” keyword refers to the instance of the Event Emitter.
- If you use the arrow functions for event listeners the “this” keyword no longer references to the Node.js EventEmitter instance.
- Using the removeListener function you remove the listener from a particular event.
- If you added more than one instance of a listener, you need to remove it more than once to get rid of it. You can also use the removeAllListeners function to remove all listeners for a particular event.
- The event emitter executes all callbacks in a synchronous manner. Every time you call a function, its context is pushed on the top of the call stack. When the function ends, the context is taken off from the stack. If you call one function inside of the other, the data can pile up in your call stack and eventually cause it to overflow.
- When the Node.js interprets the setTimeout function, it sets off a timer. When it goes off, it throws the callback to the end of the event loop. Due to that, one function is not called inside of the other one and the call stack is not exceeded.
- You use “once,” you register a listener that the EventEmitter calls not more than once for a particular event.

