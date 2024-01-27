import * as fs from "fs";

const readable = fs.createReadStream("./src/file1.txt", { end: 1 });
const writable = fs.createWriteStream("./src/file2.txt");

writable.on("finish", () => {
  console.log("The end!");
});

readable.pipe(writable);
