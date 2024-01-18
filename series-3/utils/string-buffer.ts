const buffer1 = Buffer.from("Hello world!");

console.log(buffer1.toString()); // Hello world!

// Hello 🌎 world!
const buffers = [
  Buffer.from("Hello "),
  Buffer.from([0b11110000, 0b10011111]),
  Buffer.from([0b10001100, 0b10001110]),
  Buffer.from(" world!"),
];

let result = "";
buffers.forEach((buffer) => {
  result += buffer.toString();
});

console.log(result); // Hello ��� world!
