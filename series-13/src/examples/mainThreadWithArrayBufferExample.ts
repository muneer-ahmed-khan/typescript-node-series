import { Worker, MessageChannel } from "worker_threads";
const { port1, port2 } = new MessageChannel();

const worker = new Worker("./src/worker.js", {
  workerData: {
    path: "./examples/workerThreadWithArrayBufferExample.ts",
  },
});

port1.on("message", async (result) => {
  console.log("Message received on Main thread with factorial result", result);
  await worker.terminate();
});

// array is cloned hence more computational power
// const numbers: number[] = [11, 12, 13, 14, 15];
// worker.postMessage({ port: port2, value: numbers }, [port2]);

// not clone and work fine but after byte 256 it start from 0 again
const array = new Uint8Array([11, 12, 13, 14, 15]);
worker.postMessage({ port: port2, value: array }, [port2, array.buffer]);

// it is detected from here
// console.log(array.buffer);
