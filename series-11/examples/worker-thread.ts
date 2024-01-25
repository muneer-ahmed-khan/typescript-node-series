import cluster from "cluster";

if (cluster.isPrimary) {
  const worker = cluster.fork();

  worker.on("online", () => {
    console.log(`Worker ${worker.process.pid} started`);
    worker.disconnect();
  });
  worker.on("exit", () => {
    console.log(`worker ${worker.process.pid} stopped working`);
    cluster.fork();
  });
  worker.on("message", (text) => {
    console.log(text);
  });
} else {
  process.send("Hello!");
}
