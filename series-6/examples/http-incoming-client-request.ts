import { request } from "http";

const req = request(
  {
    host: "jsonplaceholder.typicode.com",
    path: "/todos/1",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  },
  (response) => {
    console.log(response.statusCode); // 200/ 200
  }
);

req.write(
  JSON.stringify({
    author: "Marcin",
    title: "Lorem ipsum",
    content: "Dolor sit amet",
  })
);

req.end();
