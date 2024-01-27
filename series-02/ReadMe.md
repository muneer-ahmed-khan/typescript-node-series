# [Series #02: EventEmitter in Node.js](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-02)

Welcome to the Node.js TypeScript [Series-02](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-02), focusing on EventEmitter. This is the second series following [Series-01](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-01) 

### Event Handling with EventEmitter

Using events is integral to JavaScript, and Node.js heavily relies on event-driven architecture. Many core objects inherit from the EventEmitter class.

```typescript
import * as EventEmitter from 'events';

const eventEmitter = new EventEmitter();

eventEmitter.on('event', function () {
  console.log('one');
});

eventEmitter.on('event', function () {
  console.log('two');
});

eventEmitter.on('event', function () {
  console.log('three');
});

eventEmitter.emit('event');
// Output: 
// one
// two
// three
```

### Pass Additional Data to Listeners

The ```emit``` function allows sending arguments to listener functions. The ```this``` keyword refers to the EventEmitter instance.

```typescript
eventEmitter.on('event', function (data) {
  console.log(data); // { key: value }
  console.log(this === eventEmitter); // true
});

eventEmitter.emit('event', { key: 'value' });
```

### Removing Listeners

To stop invoking a listener, use removeListener. Provide the event name and the reference to the callback function.

```typescript
function listener() {
  console.log('Event occurred!');
}

eventEmitter.on('event', listener);
eventEmitter.emit('event'); // Event occurred!

eventEmitter.removeListener('event', listener);

eventEmitter.emit('event'); // Nothing happened

```

### Synchronous Nature of Events

Node.js EventEmitter calls all listeners synchronously. Be cautious of stack overflow in synchronous calls.

```typescript
eventEmitter.on('event1', () => {
  console.log('First event here!');
  eventEmitter.emit('event2');
});

eventEmitter.on('event2', () => {
  console.log('Second event here!');
  eventEmitter.emit('event3');
});

eventEmitter.on('event3', () => {
  console.log('Third event here!');
  eventEmitter.emit('event1');
});

eventEmitter.emit('event1'); // May cause Maximum call stack size exceeded error

```
### Handling Events Just Once

Use once instead of on to register a listener that the EventEmitter calls not more than ```once``` for a particular event.

```typescript
eventEmitter.once('event', function () {
  console.log(this.counter++);
});
```

## Usage

The examples folder contains multiple examples of the ```EventEmitter``` class.
Uncomment the import statement of any example file in main.ts to see the result.

Run the program with the command:

```bash
npm start
```

## Main Points
- A lot of Node.js core depends on **event-driven** architecture.
- Certain objects can ``emit`` events, and we call them emitters. We can listen to those and react using callback functions called listeners.
- The ``on`` function is an alias for ```addEventListener```, and both functions act the same way.
- If you attach a listener after you call the ```emit``` function, the EventEmitter does not call it.
- The ```emit``` function allows sending arguments to the listener functions. - Inside a listener function, the ```this``` keyword refers to the instance of the EventEmitter.
- Use ```removeListener``` to remove a listener from a particular event.
- The EventEmitter executes all callbacks in a synchronous manner, potentially causing a stack overflow.
- When using the ```setTimeout``` function, it throws the callback to the end of the event loop, preventing stack overflow.
- Use ```once``` to register a listener called not more than once for a particular event.

Explore advanced topics and continue your learning journey by visiting [Series-03](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-03). While this series provides the synchronous nature of the EventEmitter in Node.js, Series-03 focus on ```Buffer``` in Node.js. **Enjoy coding!**
