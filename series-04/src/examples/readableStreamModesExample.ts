import * as fs from "fs";

const stream = fs.createReadStream("./src/examples/file.txt", {
  highWaterMark: 64,
});

// changes paused mode into flowing mode
stream.resume();

setTimeout(() => {
  stream.on("data", (chunk) => {
    console.log(chunk.toString());
  });
}, 3);
