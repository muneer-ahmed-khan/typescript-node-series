const buffer = new Buffer(5);

buffer[0] = 255;
console.log(buffer[0]); // 255

buffer[1] = 256;
console.log(buffer[1]); // 0

buffer[2] = 260;
console.log(buffer[2]); // 4
console.log(buffer[2] === 260 % 256); // true

buffer[3] = 516;
console.log(buffer[3]); // 4
console.log(buffer[3] === 516 % 256); // true

buffer[4] = -50;
console.log(buffer[4]); // 206
