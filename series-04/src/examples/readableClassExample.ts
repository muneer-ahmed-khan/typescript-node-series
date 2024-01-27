import { Readable } from "stream";

const stream = new Readable();

// stream push data to internal buffer
stream.push("Hello");
stream.push("World!");
stream.push(null);

stream.resume();

stream.on("data", (chunk) => {
  console.log("more chunk", chunk.toString());
});
