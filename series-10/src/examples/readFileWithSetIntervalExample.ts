import { readFile } from "fs";

console.time("read file time");
readFile("./file.txt", () => {
  console.timeEnd("read file time");
  process.exit();
});

let i = 0;
setInterval(() => {
  console.log(i++);
}, 10);
