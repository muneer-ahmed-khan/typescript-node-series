import { Readable } from "stream";

const stream = new Readable({
  encoding: "utf8",
});

const read = stream.read.bind(stream);
stream.read = function (data) {
  console.log("read() called", data);
  return read();
};

stream.push("Hello");
stream.push("World!");
stream.push(null);

stream.on("data", (chunk) => {
  console.log("data event", chunk);
});

// stream.on("readable", () => {
//   let chunk;
//   console.log("Stream is readable (new data received in buffer)");
//   // Use a loop to make sure we read all currently available data
//   while (null !== (chunk = stream.read())) {
//     console.log(`Read ${chunk.length} bytes of data...`);
//   }
// });

stream.on("end", () => {
  console.log("stream ended");
});

stream.on("error", (error) => {
  console.log("error in stream ", error);
});

stream.on("close", () => {
  console.log("stream close");
});
