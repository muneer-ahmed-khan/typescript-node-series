import { spawn } from "child_process";

const child = spawn("ls | grep .txt", {
  shell: true,
});

child.stdout.on("data", (result) => {
  console.log("Result:", result.toString());
});
