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
// npm start -- touch ./file.txt

// import * as fs from "fs";
// import * as util from "util";

// const writeFile = util.promisify(fs.writeFile);

// writeFile("./newFile.txt", null)
//   .then(() => {
//     console.log("File created successfully");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// callback style
// import * as fs from "fs";

// fs.writeFile("./newFile.txt", null, (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File created successfully");
//   }
// });
