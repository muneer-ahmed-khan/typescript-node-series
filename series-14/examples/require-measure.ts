import { performance, PerformanceObserver } from "perf_hooks";
require = performance.timerify(require);

const performanceObserver = new PerformanceObserver((list, observer) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    console.log(entry);

    console.log(`require('${(entry as any)[0]}')`, entry.duration);
  });
  observer.disconnect();
});
performanceObserver.observe({ entryTypes: ["function"], buffered: true });

import "child_process";
import "worker_threads";
