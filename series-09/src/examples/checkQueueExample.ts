import * as fs from "fs";

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log("set timeout");
  }, 0);
  setImmediate(() => {
    console.log("set immediate");
  });
});

// If we run both  setTimeout and  setImmediate within the I/O cycle (for example in a callback after reading a file), the setImmediate is always called first
