### Usage
- The ```examples``` folder contain multiple example of Node js Cluster.

- Uncomment the import statement of any imported examples file in ```main.js``` to see the result.

- run the program with command
``` npm start ```

### Main Points
- Node.js is in its nature is single-threaded, and while it may seem like the unused processor cores go to waste, this is not entirely accurate. Node.js effectively leverages additional threads behind the scenes. For instance, libraries like libuv create separate threads for tasks such as reading and writing files.
- In Node.js, a ```cluster``` is a module that allows the creation of multiple processes, each running on a separate core of the CPU. 
- When someone makes a request to your API, the master process accepts new connections and distributes them across the child processes.
- Use the ```os``` module to determine the number of CPU cores with ```os.cpus()``` before deciding how many processes to start.
- The cluster module in Node.js allows you to balance the load over multiple processes, handling a large number of users connecting to your API. Child processes created by the cluster module can share same server ports.
- The primary purpose of using clusters is to take advantage of multi-core systems and improve the application's performance and scalability.
- The ```cluster``` module is part of the Node.js core and is used to create and manage clusters.
- It provides methods for creating child worker processes, distributing incoming connections among them, and handling communication between the master process and worker processes.
- There is a master process and multiple worker processes.
- Determine if the current process is a master using the ```isMaster``` property from the cluster module,
- The master process manages the creation and termination of worker processes.
- The ```fork()``` method is used to create a new worker process. It forks the current process into a master process (if not already a master) and a worker process.
-  This ```fork()``` method essentially spawns a new instance of the current Node.js process, dividing it into two separate processes: a master process and a worker process.
- The ```online``` event is emitted when a worker process is forked and becomes online.
- Worker processes and the master process can communicate with each other using **IPC (Inter Process Communication) **. The ```message``` event is emitted when a worker sends a message to the master, and vice versa.
- By default, the cluster module automatically distributes incoming network connections (e.g., HTTP requests) among the worker processes, providing a simple form of load balancing.
- The cluster module automatically restarts a worker process if it exits unexpectedly. WE can also handle worker exit events and implement custom restart strategies.
- In the Node.js cluster module, the scheduling policy refers to the way in which the master process distributes incoming connections among the worker processes.
- The default policy is round-robin, where each new connection is assigned to the next available worker in a circular order.
- This helps distribute the load evenly across all worker processes.
- Using the cluster module, we can build Node.js applications that efficiently utilize available CPU cores, resulting in improved performance and better scalability.








