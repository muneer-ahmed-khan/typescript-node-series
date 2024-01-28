import { spawn } from "child_process";

// spawn allows to run a command and give additional command in second argument
// for advance command we need to enable shell option
// shell isn't efficient

// const child = spawn("ls");
// const child = spawn("ls", ["-la", "./node_modules"]);
// const child = spawn("ls", ["|", "grep", ".txt"], { shell: true });
const child = spawn("./src/script.sh");

child.stdout.on("data", (data) => {
  console.log(data.toString());
});

child.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
