import * as EventEmitter from "events";

const eventEmitter = new EventEmitter();

eventEmitter.on("event1", () => {
  setTimeout(() => {
    console.log("First event here!");
    eventEmitter.emit("event2");
  });
});

eventEmitter.on("event2", () => {
  setTimeout(() => {
    console.log("Second event here!");
    eventEmitter.emit("event3");
  });
});

eventEmitter.on("event3", () => {
  setTimeout(() => {
    console.log("Third event here!");
    eventEmitter.emit("event1");
  });
});

eventEmitter.emit("event1");
