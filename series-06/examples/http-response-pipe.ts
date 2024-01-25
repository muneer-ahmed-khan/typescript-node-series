import { request } from "http";
import { createWriteStream } from "fs";

const fileStream = createWriteStream("./file.txt");

const req = request(
  {
    host: "jsonplaceholder.typicode.com",
    path: "/todos/1",
    method: "GET",
  },
  (response) => {
    response.pipe(fileStream);
  }
);

req.end();
