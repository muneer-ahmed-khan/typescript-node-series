console.time("setTimeout");

// 100 milliseconds is not grantee it is the time after that it can pop from queue
setTimeout(() => {
  console.log("Timer went off");
  console.timeEnd("setTimeout");
}, 100);

setTimeout(() => {
  for (let i = 0; i < 10000000; ++i);
}, 95);
