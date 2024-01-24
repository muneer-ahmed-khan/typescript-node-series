import * as fs from "fs";

const readable = fs.createReadStream("./file1.txt", { end: -1 });
const writable = fs.createWriteStream("./file2.txt");

writable.on("finish", () => {
  console.log("The end!");
});

readable.pipe(writable);
