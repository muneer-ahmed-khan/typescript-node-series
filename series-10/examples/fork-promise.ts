import { fork } from "child_process";

factorial(20)
  .then((result) => {
    console.log("Result: ", result);
  })
  .catch(() => {
    console.log("An error occured");
  });

function factorial(n: number) {
  return new Promise((resolve, reject) => {
    const child = fork("./child.ts");
    child.send(n);
    child.on("message", (result: number) => {
      resolve(result);
    });
    child.on("error", () => {
      reject();
    });
  });
}
