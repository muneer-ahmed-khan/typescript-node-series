import * as fs from "fs";

const readable = fs.createReadStream("./file1.txt");

readable.pipe(process.stdout);

// process.stderr.write("testing error bro");
