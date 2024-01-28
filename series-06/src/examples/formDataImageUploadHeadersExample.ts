import FormData from "form-data";
import { createReadStream } from "fs";

const readStream = createReadStream("./photo.jpg");

const form = new FormData();
form.append("photo", readStream);
form.append("firstName", "Muneer");
form.append("lastName", "Ahmed");

// console.log("Content: ", form);

console.log(
  "HTTP headers in image upload with boundary string ",
  form.getHeaders()
);
