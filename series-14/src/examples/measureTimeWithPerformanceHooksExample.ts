import { performance, PerformanceObserver } from "perf_hooks";

const performanceObserver = new PerformanceObserver((items, observer) => {
  const entry = items.getEntriesByName("setTimeout").pop();
  console.log(`${entry.name}: ${entry.duration}`);
  observer.disconnect();
});
performanceObserver.observe({ entryTypes: ["measure"] });

performance.mark("start");
setTimeout(() => {
  performance.mark("stop");
  performance.measure("setTimeout", "start", "stop");
}, 500);
