// import FormData from "form-data";
// import { request } from "http";
import { createReadStream, createWriteStream } from "fs";

const readStream = createReadStream("./src/photo.jpg");
const writeStream = createWriteStream("./src/photo1.jpg");

// we don't have any server right now on port 5000
// const form = new FormData();
// form.append('photo', readStream);
// form.append('firstName', 'Muneer');
// form.append('lastName', 'Ahmed');

// const req = request(
//   {
//     host: 'localhost',
//     port: '5000',
//     path: '/upload',
//     method: 'POST',
//     headers: form.getHeaders(),
//   },
//   response => {
//     console.log(response.statusCode); // 200
//   }
// );

// form.pipe(req);

readStream.pipe(writeStream);

// Handle events (optional)
readStream.on("error", (err) => {
  console.error("Error reading input image:", err);
});

writeStream.on("finish", () => {
  console.log("Image write operation complete.");
});
