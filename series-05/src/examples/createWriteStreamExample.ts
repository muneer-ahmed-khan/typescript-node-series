import * as fs from "fs";

const stream = fs.createWriteStream("./src/file.txt");

stream.write("Hello world!", () => {
  console.log("File created!");
});

stream.on("end", () => {
  console.log("File created!");
});

// call when want to end the writing to stream with or without argument
stream.end("final data");
