import { parentPort, workerData } from "worker_threads";

function factorial(n: number): number {
  if (n === 1 || n === 0) {
    return 1;
  }
  return factorial(n - 1) * n;
}

parentPort.postMessage(factorial(workerData.value));
