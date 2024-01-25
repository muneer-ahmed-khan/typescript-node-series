import { readFile } from "fs";

console.time("reading file");
readFile("./file.txt", () => {
  console.timeEnd("reading file");
  process.exit();
});

let i = 0;
setInterval(() => {
  console.log(i++);
}, 10);
