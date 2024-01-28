import { spawn, exec, execFile } from "child_process";

// don't create a shell and result in stream
// const spawnStream = spawn("./script.sh");
// spawnStream.stdout.on("data", (data: Buffer) => {
//   console.log("check result ", data.toString());
// });

// create a shell and result in error first callback
// exec("./script.sh", (error, response) => {
//   console.log("check result ", response);
// });

// don't a shell and result in error first callback
execFile("./script.sh", (error, response) => {
  console.log("check response ", response);
});
