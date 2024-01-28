"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var worker_threads_1 = require("worker_threads");
function factorial(n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    return factorial(n - 1) * n;
}
worker_threads_1.parentPort.postMessage(factorial(worker_threads_1.workerData.value));
