import { createServer, IncomingMessage, ServerResponse } from "http";

interface Post {
  title: string;
  content: string;
}

const posts: Post[] = [
  {
    title: "Test Post",
    content: "Test Post Content",
  },
];

const port = 3000;

const server = createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    switch (request.url) {
      case "/posts": {
        if (request.method === "GET") {
          response.setHeader("Content-Type", "application/json");
          response.end(JSON.stringify(posts));
        }
        break;
      }
      default: {
        response.statusCode = 404;
        response.end();
      }
    }
  }
);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

server.on("error", (error) => {
  console.log("error on server", error);
});
