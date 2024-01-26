import { parentPort, MessagePort } from "worker_threads";

interface Data {
  port: MessagePort;
  value: number[];
}

function factorial(n: number): number {
  if (n === 1 || n === 0) {
    return 1;
  }
  return factorial(n - 1) * n;
}

parentPort.on("message", (data: Data) => {
  const { port, value } = data;

  console.log("Message received on worker thread with factorial value", value);

  value.forEach((number: number) => {
    port.postMessage(factorial(number));
  });
});
