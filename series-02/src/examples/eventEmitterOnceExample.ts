import * as EventEmitter from "events";

class MyEventEmitter extends EventEmitter {
  counter = 0;
}

const eventEmitter = new MyEventEmitter();

eventEmitter.once("event", function () {
  console.log(this.counter++);
});

eventEmitter.emit("event"); // 0
eventEmitter.emit("event"); // nothing happens
eventEmitter.emit("event"); // nothing happens
