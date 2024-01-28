import { request } from "http";

const req = request(
  {
    hostname: "jsonplaceholder.typicode.com",
    path: "/todos/1",
    method: "GET",
  },
  (response) => {
    console.log(`Status Code: ${response.statusCode}`);
    console.log(`Status Message: ${response.statusMessage}`);

    response.on("data", (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
  }
);

req.on("error", (err) => {
  console.log("Error:", err);
});

req.end();
