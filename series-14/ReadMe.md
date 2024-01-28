# [Series #14: Performance Hooks in Node.js](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-14)

Welcome to the Node.js TypeScript [Series #14: Performance Hooks in Node.js](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-14), focusing on Node.js **Performance Hooks** module. This is the last series following [Series-13](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-13)

# Overview of Performance Hooks

## Introduction
Performance Hooks, also known as the Performance Timing API, is a module in Node.js that provides APIs for accessing performance measurement features. It enables precise measurement of the duration of operations in your code, making it useful for performance analysis and optimization.

## Measuring Time with Date Object
While using the Date object is a valid solution for measuring time, it may lack precision in complex situations.

```javascript
const start = (new Date()).getTime();
 
setTimeout(() => {
  const end = (new Date()).getTime();
  console.log(end - start);
}, 500);
```

## Entries in the Performance Timeline

Performance Hooks provide a sophisticated method for measuring time through the Performance Timeline. Marks and measures are used to calculate durations.

```javascript
import { performance, PerformanceObserver } from 'perf_hooks';

performance.mark('start');
setTimeout(() => {
  performance.mark('stop');
  performance.measure('setTimeout', 'start', 'stop');
}, 500);
```

## Listening for Changes

Performance Observers enable the attachment of callbacks to changes in the Performance Timeline. Specific types of entries to listen for can be specified.

```javascript
import { PerformanceObserver } from 'perf_hooks';

const performanceObserver = new PerformanceObserver((items, observer) => {
  const entry = items.getEntriesByName('setTimeout').pop();
  console.log(`${entry.name}: ${entry.duration}`);
  observer.disconnect();
});
performanceObserver.observe({ entryTypes: ['measure'] });
```

## Measuring Function Execution

Performance Hooks enable the measurement of function execution duration using `timerify`. Functions can be wrapped with a timer to track their execution time.

```javascript
import { performance, PerformanceObserver } from 'perf_hooks';
require = performance.timerify(require);

const performanceObserver = new PerformanceObserver((list, observer) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    console.log(`require('${(entry as any)[0]}')`, entry.duration);
  });
  observer.disconnect();
});
performanceObserver.observe({ entryTypes: ['function'], buffered: true });
```

## Comparing Child Processes and Worker Threads

Performance Hooks can be used to compare the performance of child processes and worker threads. The example compares the time taken for a factorial calculation.

```typescript
import { performance, PerformanceObserver } from 'perf_hooks';
import { fork } from 'child_process';
import { Worker } from 'worker_threads';

// ... (code for measuring child process and worker thread)

Result from child process: 2432902008176640000
child process: 960.897252
Result from worker thread: 2432902008176640000
worker thread: 934.154146
```

## Performance Optimization

To achieve the best performance when using TypeScript, precompile Child Process and Worker Thread files. This can be done in the `package.json` file:

```json
"scripts": {
  "start": "npm run precompile && ts-node ./main.ts",
  "precompile": "tsc ./child.ts && tsc ./worker.ts"
}
```


## Main Points

- The `perf_hooks` module in Node.js provides a set of APIs for accessing the performance measurement features.
- Performance Hooks, also called the Performance Timing API, is part of the Node.js standard library.
- It allows you to measure the duration of operations in your code with high precision, making it useful for performance analysis and optimization.
- This module is particularly helpful when you need precise measurements of the execution time of specific parts of your application for performance analysis and optimization.
- The `performance.mark` creates a `PerformanceMark` entry in the Performance Timeline. We can use such marks later to measure the time between them.
- The `performance.measure` adds a `PerformanceMeasure` entry to the Performance Timeline. We provide it with the name of the measurement and the names of performance marks.
- `performance.getEntries()` returns an array of performance entries.
- There are also other more generic methods like `getEntries` and `getEntriesByType`.
- With Performance Observers, we can attach callbacks to changes made to the Performance Timeline.
- Because the `PerformanceObserver` adds extra work for performance, it's a good idea to use the `observer.disconnect` function as soon as it's not needed anymore.
- The `timerify` method wraps our function with a timer.
- Our `PerformanceObserver` must subscribe to the `function` event type to access the timing details.

### Usage
- The ```examples``` folder contain multiple example of performance hooks.

- Uncomment the import statement of any imported examples file in ```main.js``` to see the result.

- run the program with command
``` npm start ```


---

🚀 [Explore more series](https://github.com/muneer-ahmed-khan/typescript-node-series)

Connect with me on [LinkedIn](https://www.linkedin.com/in/muneer-ahmed-a59362140/)