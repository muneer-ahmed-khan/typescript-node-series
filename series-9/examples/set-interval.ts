let i = 0;

const id = setInterval(() => {
  console.log(++i);
  if (i > 10) clearInterval(id);
}, 50);
