console.time("setTimeout");

setTimeout(() => {
  console.log("Timer went off");
  console.timeEnd("setTimeout");
}, 100);

setTimeout(() => {
  for (let i = 0; i < 10000000; ++i);
}, 95);
