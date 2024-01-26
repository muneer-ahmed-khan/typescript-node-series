import { Worker } from "worker_threads";

const worker = new Worker("./worker.js", {
  workerData: {
    value: 15,
    path: "./examples/worker-thread.ts",
  },
});

worker.on("message", (result) => {
  console.log(result);
});
