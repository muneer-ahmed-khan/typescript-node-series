import * as fs from "fs";

const stream = fs.createWriteStream("./file.txt");

stream.on("finish", () => {
  console.log("All the data is transmitted");
});

stream.write("Hello ");
stream.write("world!");
stream.end(" something");
