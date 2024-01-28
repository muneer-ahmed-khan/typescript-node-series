# [Series #07: Create HTTP Server](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-07)

Welcome to the Node.js TypeScript [Series #07: Create HTTP Server](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-07), focusing on creating a HTTP Server. This is the seventh series following [Series-06](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-06)


## Creating a Server and Receiving Requests

To create a simple server in Node.js that listens for requests and responds, you can use the built-in `http` module. The `createServer` function returns an instance of `http.Server`. Here's a basic example:

```typescript
import { createServer, IncomingMessage, ServerResponse } from 'http';

const port = 5000;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
  response.end('Hello world!');
});

server.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server listening on port ${port}`);
  }
});
```

## Handling Requests

You can handle different types of requests based on the URL and HTTP method. Here's an example with a simple routing mechanism:

```typescript
import { createServer, IncomingMessage, ServerResponse } from 'http';

interface Post {
  title: string;
  content: string;
}

const posts: Post[] = [
  {
    title: 'Lorem ipsum',
    content: 'Dolor sit amet'
  }
];

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
  switch (request.url) {
    case '/posts': {
      if (request.method === 'GET') {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(posts));
      } else if (request.method === 'POST') {
        // Handle POST request data
      }
      break;
    }
    default: {
      response.statusCode = 404;
      response.end();
    }
  }
});
```

## Parsing Request Data

To handle POST requests and parse the incoming JSON data, you can create a function to gather data from a readable stream:

```typescript
import { createServer, IncomingMessage, ServerResponse } from 'http';

function getJSONDataFromRequestStream<T>(request: IncomingMessage): Promise<T> {
  return new Promise(resolve => {
    const chunks = [];
    request.on('data', (chunk) => {
      chunks.push(chunk);
    });
    request.on('end', () => {
      resolve(JSON.parse(Buffer.concat(chunks).toString()));
    });
  });
}

// Inside the server
if (request.method === 'POST') {
  getJSONDataFromRequestStream<Post>(request)
    .then(post => {
      // Handle the parsed data
    });
}
```

## Uploading Files

For handling file uploads, you can use the `multiparty` library to parse `multipart/form-data`. Here's an example:

```typescript
import { createServer, IncomingMessage, ServerResponse } from 'http';
import * as multiparty from 'multiparty';
import { writeFile } from 'fs';

// Functions for parsing the form and handling file upload

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
  switch (request.url) {
    case '/upload': {
      if (request.method === 'POST') {
        parseTheForm(request);
      }
      break;
    }
    default: {
      response.statusCode = 404;
      response.end();
    }
  }
});

function parseTheForm(request: IncomingMessage) {
  const form = new multiparty.Form();
  form.parse(request);

  // Handle form parts, including files
}
```







## Usage

The `examples` folder contains multiple examples of creating a server and receiving requests.

1. Uncomment the import statement of any example file in `main.js` to see the result.
2. Run the program with the command `npm start`.

## Main Points

**Creating a Server:**

- Require the built-in `http` module, which provides functionality to create an HTTP server.
- Use `http.createServer` to create an HTTP server. The callback function provided to `createServer` is called for each incoming request.
- In the callback function, use `res.writeHead` to set the HTTP response header with a status code (e.g., 200 OK) and content type.
- Use `res.end` to send the response body.
- Call `server.listen` to start listening on the specified port.

**Server and Request Handling:**

- The `createServer` function returns an instance of an `http.Server`. One of its prototypes is `EventEmitter`.
- Both request and response extend streams and contain valuable information such as headers, URL, and the HTTP method used.
- The request implements a readable stream and is an instance of `IncomingMessage`.
- The response implements a readable stream and is an instance of `ServerResponse`.
- The request has important properties like URL and request methods (GET, POST, etc.) to identify a request.
- The response has important properties like `setHeader` and `end`.
- Both request and response objects are streams.

**Handling File Uploads:**

- To handle file uploads in Node.js, you can use the `multiparty` package.
- The `multiparty` module simplifies the process of parsing and handling form data, including file uploads.




Explore advanced topics and continue your learning journey by visiting [Series-08](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-08). While this series provides creating HTTP server in Node.js, [Series-08](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-08) focus on ```creating HTTPS server  with OpenSSL``` in Node.js. **Enjoy coding!**


