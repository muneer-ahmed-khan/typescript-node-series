import { createServer, IncomingMessage, ServerResponse } from "http";

const port = 5000;

const server = createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    console.log("check request.url ", request.url);

    response.end("Hello world!");
  }
);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

server.on("error", () => {
  console.log("error on server");
});
