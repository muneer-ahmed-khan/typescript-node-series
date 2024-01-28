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
    response.on("data", (chunk) => {
      console.log(`Response: ${chunk}`);
    });

    response.on("end", () => {
      console.log("Request complete.", req);
    });
    console.log(response.statusCode); // 200/ 200
  }
);

req.write(
  JSON.stringify({
    author: "Muneer",
    title: "Test title",
    content: "Test Content",
  })
);

req.end();
