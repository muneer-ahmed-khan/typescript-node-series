# [Series #11: Clustering Processes in Node.js](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-11)

Welcome to the Node.js TypeScript [Series #11: Child Processes](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-11), focusing on Node.js cluster module. This is the 11th series following [Series-10](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-10)




## Node.js Cluster

After discovering that Node.js is inherently single-threaded, it's important to note that the unused processor cores can still be utilized effectively. Explore the Node.js cluster module, which allows the creation of multiple processes, each running on a separate CPU core. This enables the distribution of workload across processes, leading to improved performance and scalability.

### Basics of Node.js Cluster

#### Determining Number of Cores
To determine how many processes to start, the `os` module is used. It provides information about the CPU cores using `os.cpus()`. The number of cores is crucial for deciding how many processes to spawn.

```javascript
import * as os from 'os';

const numberOfCores = os.cpus().length;
```


## Master or Worker

The cluster module has a boolean property `isMaster` or `isPrimary` to determine whether the current process is the master. This property simplifies the identification of the master process.

```javascript
import * as cluster from 'cluster';

if (cluster.isMaster) {
  // Code for the master process
} else {
  // Code for the worker process
}
```

## Using fork() for Worker Processes

The `fork()` function is used to spawn new worker processes. This function can only be called from the master process.

```javascript
import * as cluster from 'cluster';
import * as http from 'http';
import * as os from 'os';

const numberOfCores = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} started`);
  for (let i = 0; i < numberOfCores; i++) {
    cluster.fork();
  }
} else {
  // Code for individual worker process
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Process ${process.pid} says hello!`);
  }).listen(8000);
  console.log(`Worker ${process.pid} started`);
}
```

## Load Balancing and Scheduling Policy

### Default Scheduling Policy

By default, the cluster module uses a round-robin scheduling policy (`cluster.SCHED_RR`). This policy distributes incoming connections across processes in equal portions.

```javascript
console.log(cluster.schedulingPolicy === cluster.SCHED_RR); // true
```

## Customizing Scheduling Policy

The scheduling policy can be changed using `cluster.schedulingPolicy`. Note that on most platforms except Windows, it defaults to round-robin.

### Events in the Cluster

Both the cluster module and individual workers emit events. Useful events include:

- **exit**: Restart workers if they stop working.
- **online**: Log worker activity.

```javascript
import * as cluster from 'cluster';
import * as http from 'http';
import * as os from 'os';

const numberOfCores = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} started`);
  for (let i = 0; i < numberOfCores; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} stopped working`);
    cluster.fork();
  });
  cluster.on('fork', (worker) => {
    console.log(`Worker ${worker.process.pid} started`);
  });
} else {
  // Code for individual worker process
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Process ${process.pid} says hello!`);
  }).listen(8000);
}
```

### Communication Between Master and Workers

#### Using the "message" Event

The `message` event and the `send()` function are employed for communication between the master and workers, similar to child processes.

```javascript
import * as cluster from 'cluster';

if (cluster.isMaster) {
  const worker = cluster.fork();
  worker.on('message', (text) => {
    console.log(text);
  })
} else {
  process.send('Hello!')
}
```

### Child Process Module vs Cluster Module in Node.js

#### Child Process Module:
- **Functionality:**
  - Creates and manages individual child processes.
  - Suitable for executing separate commands or scripts in parallel.
  - Designed for independent tasks within the same application.

- **Communication:**
  - Limited communication between parent and child processes.
  - Utilizes events like 'exit', 'message', and 'error' for basic communication.

- **Use Case:**
  - Appropriate for scenarios where parallel execution of independent tasks is needed.

#### Cluster Module:
- **Functionality:**
  - Creates a cluster of processes, including a master process and multiple worker processes.
  - Primarily used for load balancing and taking advantage of multi-core systems.
  - Distributes incoming connections among worker processes.

- **Communication:**
  - Facilitates communication between the master and worker processes using IPC.
  - Events like 'fork', 'online', 'exit', and 'message' are utilized for communication.

- **Use Case:**
  - Ideal for improving performance and scalability by leveraging multiple CPU cores.
  - Suitable for scenarios where load distribution and coordination among processes are crucial.

#### Interaction:
- **Child Process:**
  - More independent and isolated execution of tasks.
  - Limited interaction between separate child processes.

- **Cluster:**
  - Designed for coordination and communication among a cluster of processes.
  - Emphasizes collaboration between the master and worker processes for enhanced efficiency.

#### Load Balancing:
- **Child Process:**
  - No inherent load balancing features.
  - Each child process operates independently.

- **Cluster:**
  - Inherent load balancing capabilities.
  - Distributes incoming connections among worker processes for improved resource utilization.




### Main Points

- Node.js, by its nature, is single-threaded, but it effectively utilizes additional threads behind the scenes, especially for tasks like file operations handled by libraries such as libuv.

- The `cluster` module in Node.js facilitates the creation of multiple processes, each running on a separate CPU core. Incoming requests to your API are distributed among these child processes by the master process.

- To determine the number of CPU cores, use the `os` module's `os.cpus()` method before deciding the number of processes to start.

- The primary purpose of utilizing the `cluster` module is to balance the load across multiple processes, enhancing the performance and scalability of your application. Child processes created by the `cluster` module can share the same server ports.

- The `cluster` module, a core part of Node.js, provides methods for creating child worker processes, distributing incoming connections among them, and handling communication between the master and worker processes.

- The `fork()` method is used to create a new worker process, essentially spawning a new instance of the current Node.js process, divided into a master process and a worker process.

- Worker processes can communicate with the master process using IPC (Inter-Process Communication) through the `message` event. Similarly, the master process can communicate with workers.

- The cluster module automatically distributes incoming network connections, such as HTTP requests, among worker processes, providing a basic form of load balancing. It also restarts a worker process if it exits unexpectedly.

- In the context of the Node.js cluster module, the scheduling policy refers to how the master process distributes incoming connections among worker processes. The default policy is round-robin, ensuring even distribution of the load.

- Utilizing the cluster module allows building Node.js applications that efficiently leverage available CPU cores, leading to improved performance and scalability.


### Usage
- The ```examples``` folder contain multiple example of Node js Cluster.

- Uncomment the import statement of any imported examples file in ```main.js``` to see the result.

- run the program with command
``` npm start ```


Explore advanced topics and continue your learning journey by visiting [Series-12](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-12). While this series provides cluster module Node.js, [Series-12](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-12) focus on ``` HTTP/2``` in Node.js. **Enjoy coding!**


