import { Worker } from "worker_threads";

const worker = new Worker("./src/worker.js", {
  workerData: {
    value: 15,
    path: "./examples/workerThreadExample.ts",
  },
});

worker.on("message", (result) => {
  console.log(result);
});
