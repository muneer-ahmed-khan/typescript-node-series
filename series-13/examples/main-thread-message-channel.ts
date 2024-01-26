import { Worker, MessageChannel } from "worker_threads";
const { port1, port2 } = new MessageChannel();

const worker = new Worker("./worker.js", {
  workerData: {
    path: "./examples/worker-thread-message-channel.ts",
  },
});

port1.on("message", async (result) => {
  console.log("Message received on Main thread with factorial result", result);
  await worker.terminate();
});

worker.postMessage({ port: port2, value: 15 }, [port2]);
