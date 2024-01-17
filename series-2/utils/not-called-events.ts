import * as EventEmitter from "events";

const eventEmitter = new EventEmitter();

eventEmitter.emit("event");

eventEmitter.on("event", function () {
  console.log("Event occured!"); // not logged into the console
});
