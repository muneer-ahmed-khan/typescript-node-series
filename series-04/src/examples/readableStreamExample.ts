import * as fs from "fs";
import { StringDecoder } from "string_decoder";

const stream = fs.createReadStream(__dirname + "/file.txt", {
  highWaterMark: 64,
});

// even can specify the encoding while reading the file
// const stream = fs.createReadStream(__dirname + "/file.txt", {
//   encoding: "utf8",
//   highWaterMark: 64,
// });

stream.on("data", (chunk: Buffer) => {
  const bufferChunk = chunk;
  const stringChunk = chunk.toString();

  const decoder = new StringDecoder("utf-8");
  const stringDecoderChunk = decoder.write(chunk);

  console.log("New chunk of data:", stringDecoderChunk);
  console.log("string chunk of data:", stringChunk);
});
