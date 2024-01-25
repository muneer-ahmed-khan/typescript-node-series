import { readFile } from "fs";

console.time("myTimer");
console.log("read the file.txt");

readFile("./file.txt", () => {
  console.log("file read complete");

  console.timeEnd("myTimer");
  process.exit();
});
