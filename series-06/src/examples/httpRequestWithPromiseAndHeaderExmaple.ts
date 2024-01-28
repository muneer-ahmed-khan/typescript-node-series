import { request, RequestOptions, IncomingHttpHeaders } from "http";

interface Response {
  data: object;
  headers: IncomingHttpHeaders;
}

function performRequest(options: RequestOptions) {
  return new Promise((resolve, reject) => {
    request(options, function (response) {
      const { statusCode, headers } = response;
      if (statusCode >= 300) {
        reject(new Error(response.statusMessage));
      }
      const chunks: Buffer[] = [];
      response.on("data", (chunk) => {
        chunks.push(chunk);
      });
      response.on("end", () => {
        const data = Buffer.concat(chunks).toString();
        const result: Response = {
          data: JSON.parse(data),
          headers,
        };
        resolve(result);
      });
    }).end();
  });
}

performRequest({
  host: "jsonplaceholder.typicode.com",
  path: "/todos/1",
  method: "GET",
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
