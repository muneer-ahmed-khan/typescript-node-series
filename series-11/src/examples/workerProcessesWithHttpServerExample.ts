import cluster from "cluster";
import * as http from "http";
import * as os from "os";

const numberOfCores = os.cpus().length;

// console.log((cluster as any).schedulingPolicy === (cluster as any).SCHED_RR); // true

if (cluster.isPrimary) {
  console.log(`Master ${process.pid} started`);
  for (let i = 0; i < numberOfCores; i++) {
    cluster.fork();
  }
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      setTimeout(() => {
        res.end(process.pid.toString());
      }, 1000);
    })
    .listen(8000);
  console.log(`Worker ${process.pid} started`);
}
