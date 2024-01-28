import { readFile } from "fs";

console.time("File Read Time");

readFile("./file.txt", () => {
  console.log("file read complete");

  console.timeEnd("File Read Time");
  process.exit();
});
