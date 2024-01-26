import { Worker, MessageChannel } from "worker_threads";
const { port1, port2 } = new MessageChannel();

const worker = new Worker("./worker.js", {
  workerData: {
    path: "./examples/worker-thread-message-channel-shared-array-buffer.ts",
  },
});

port1.on("message", async (result) => {
  console.log("Message received on Main thread with factorial result", result);
  await worker.terminate();
});

const sharedArrayBuffer = new SharedArrayBuffer(2);
const array = new Uint8Array(sharedArrayBuffer);

array[0] = 11;
array[1] = 12;

worker.postMessage({ port: port2, value: array }, [port2]);

// it is detected from here
console.log(array.buffer);
