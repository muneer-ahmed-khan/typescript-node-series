const start = new Date().getTime();

setTimeout(() => {
  const end = new Date().getTime();
  console.log("check ", start, end);

  console.log(end - start);
}, 500);
