import * as EventEmitter from "events";

const eventEmitter = new EventEmitter();

function listener() {
  console.log("Event occurred!");
}

eventEmitter.on("event", listener);
eventEmitter.emit("event"); // Event occurred!

eventEmitter.removeListener("event", listener);

eventEmitter.emit("event"); /// Nothing happened
