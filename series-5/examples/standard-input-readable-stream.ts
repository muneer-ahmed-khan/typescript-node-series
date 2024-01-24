let a: number;
let b: number;

process.stdout.write("Sum of Two numbers \n");
process.stdout.write("Enter the First Number: ");

process.stdin.on("data", (data) => {
  if (a === undefined) {
    a = Number(data.toString());
    process.stdout.write("Enter the Second Number: ");
  } else if (b === undefined) {
    b = Number(data.toString());
    process.stdout.write(`The Result is ${a} + ${b} = ${a + b}`);
    process.stdin.pause();
  }
});
