function factorial(n: number): number {
  if (n === 1 || n === 0) {
    return 1;
  }
  return factorial(n - 1) * n;
}

process.on("message", (n: number) => {
  process.send(factorial(n));
  process.disconnect();
});
