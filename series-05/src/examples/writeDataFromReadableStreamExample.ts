import * as fs from "fs";

const readable = fs.createReadStream("./src/file.txt");
const writable = fs.createWriteStream("./src/file1.txt");

readable.on("data", (chunk) => {
  writable.write(chunk);
});
