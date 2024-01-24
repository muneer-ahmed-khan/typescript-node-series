import FormData from "form-data";
import { createReadStream, createWriteStream } from "fs";

const readStream = createReadStream("./photo.jpg");
const writeStream = createWriteStream(__dirname + "/file.txt");

const form = new FormData();
form.append("photo", readStream);
form.append("firstName", "Muneer");
form.append("lastName", "Ahmed");

console.log(form.getHeaders());

form.pipe(writeStream);
