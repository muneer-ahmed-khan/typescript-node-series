import * as fs from "fs";

const readable = fs.createReadStream("./file.txt");
const writable = fs.createWriteStream("./file1.txt");

readable.on("data", (chunk) => {
  writable.write(chunk);
});
