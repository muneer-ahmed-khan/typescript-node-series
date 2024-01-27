const { Transform } = require("stream");
const fs = require("fs");

// Create a readable stream (source)
const readableStream = fs.createReadStream("./src/input.txt");

// Create a writable stream (destination)
const writableStream = fs.createWriteStream("./src/output.txt");

// Create a transform stream for uppercase conversion
const uppercaseTransform = new Transform({
  transform(chunk: Buffer, encoding: any, callback: any) {
    callback(null, chunk.toString().toUpperCase());
  },
});

// Pipe the data through the transform stream to the writable stream
readableStream.pipe(uppercaseTransform).pipe(writableStream);
