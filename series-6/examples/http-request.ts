import { request } from "http";

const req = request(
  {
    host: "jsonplaceholder.typicode.com",
    path: "/todos/1",
    method: "GET",
  },
  (response) => {
    console.log(response); // 200
  }
);

req.end();
