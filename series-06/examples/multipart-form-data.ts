import FormData from "form-data";
import { request } from "http";
import { createReadStream, createWriteStream } from "fs";

const readStream = createReadStream("./photo.jpg");
const writeStream = createWriteStream("./photo1.jpg");

// const form = new FormData();
// form.append("photo", readStream);
// form.append("firstName", "Muneer");
// form.append("lastName", "Ahmed");

// const req = request(
//   {
//     host: "jsonplaceholder.typicode.com",
//     path: "/todos/1",
//     method: "GET",
//     headers: form.getHeaders(),
//   },

//   (response) => {
//     console.log(response.statusCode); // 200
//   }
// );

readStream.pipe(writeStream);

// Handle events (optional)
readStream.on("error", (err) => {
  console.error("Error reading input image:", err);
});

writeStream.on("finish", () => {
  console.log("Image write operation complete.");
});

writeStream.on("error", (err) => {
  console.error("Error writing output image:", err);
});
