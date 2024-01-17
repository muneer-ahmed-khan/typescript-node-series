import * as EventEmitter from "events";

const eventEmitter = new EventEmitter();

eventEmitter.on("event", function (data) {
  console.log(data); // { key: value }
  console.log(this === eventEmitter); // true
});

eventEmitter.emit("event", {
  key: "value",
});
