import * as fs from "fs";

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log("set timeout");
  }, 0);
  setImmediate(() => {
    console.log("set immediate");
  });
});
