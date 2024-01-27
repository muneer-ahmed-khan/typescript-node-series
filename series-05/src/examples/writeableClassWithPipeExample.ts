import * as fs from "fs";
import * as util from "util";
import { Writable } from "stream";

const writeFile = util.promisify(fs.writeFile);

class WritableFileStream extends Writable {
  path: string;

  constructor(path: string) {
    super();
    this.path = path;
  }

  _write(chunk: any, encoding: string, next: (error?: Error) => void) {
    writeFile(this.path, chunk)
      .then(() => next())
      .catch((error) => next(error));
  }
}

const readable = fs.createReadStream("./src/file1.txt");
const writable = new WritableFileStream("./src/file2.txt");

readable.pipe(writable);
