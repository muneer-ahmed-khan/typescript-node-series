const start = new Date().getTime();

setTimeout(() => {
  const end = new Date().getTime();

  console.log("Time diff is ", end - start);
}, 500);
