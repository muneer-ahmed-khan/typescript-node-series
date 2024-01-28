import { fork } from "child_process";

const child = fork("./src/child.ts");

child.send(20);

child.on("message", (message: number) => {
  console.log("Result: ", message);
});
