import FormData from "form-data";
import { createReadStream, createWriteStream } from "fs";

const readStream = createReadStream("./src/photo.jpg");
const writeStream = createWriteStream(
  __dirname + "/formDataImageUploadContent.txt"
);

const form = new FormData();
form.append("photo", readStream);
form.append("firstName", "Muneer");
form.append("lastName", "Ahmed");

console.log(form.getHeaders());

form.pipe(writeStream);
