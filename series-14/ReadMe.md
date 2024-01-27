### Usage
- The ```examples``` folder contain multiple example of performance hooks.

- Uncomment the import statement of any imported examples file in ```main.js``` to see the result.

- run the program with command
``` npm start ```

### Main Points
- The ```perf_hooks``` module in Node.js provides a set of APIs for accessing the performance measurement features. 
- Performance Hooks, also called the Performance Timing API. The module is a part of the Node.js standard library.
- It allows you to measure the duration of operations in your code with high precision, making it useful for performance analysis and optimization.
- This module is particularly helpful when you need precise measurements of the execution time of specific parts of your application for performance analysis and optimization.
- The  ```performance.mark``` creates a PerformanceMark entry in the Performance Timeline. We can use such marks later to measure the time between them.
- The  ```performance.measure``` adds a PerformanceMeasure entry to the Performance Timeline. We provide it with the name of the measurement and the names of performance marks.
- ```performance.getEntries()``` Returns an array of performance entries.
- There are also other more generic methods  ```getEntries``` and  ```getEntriesByType```.
- With ```Performance Observers```, we can attach callbacks to changes made to the Performance Timeline.
- Because the PerformanceObserver adds extra work for performance, it's a good idea to use the observer.disconnect function as soon as it's not needed anymore. 
- The  ```timerify``` method wraps our function with a timer.
- Our PerformanceObserver must subscribe to the ```function``` event type to access the timing details.
