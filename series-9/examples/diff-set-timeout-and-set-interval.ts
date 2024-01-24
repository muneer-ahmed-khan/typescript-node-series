let i = 0;

function increment() {
  console.log(++i);
  if (i <= 10) {
    setTimeout(increment, 50);
  }
}

increment();
