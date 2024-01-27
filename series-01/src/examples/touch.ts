// touch is linux terminal command to create a new file
import * as fs from "fs";
import * as util from "util";

const writeFile = util.promisify(fs.writeFile);

export default function touch(path: string) {
  writeFile(path, "")
    .then(() => {
      console.log("File created successfully");
    })
    .catch((error) => console.log(error));
}
