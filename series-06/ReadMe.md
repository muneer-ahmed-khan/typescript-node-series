# [Series #06: Sending HTTP Request](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-06)

Welcome to the Node.js TypeScript [Series #06: Sending HTTP Request](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-06), focusing on Sending HTTP request. This is the sixth series following [Series-05](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-05)



### Making Basic HTTP GET Request

To send a basic HTTP GET request, you can use the http module in Node.js. Here's an example:

```typescript 
import { request } from 'http';

const req = request(
  {
    host: 'jsonplaceholder.typicode.com',
    path: '/todos/1',
    method: 'GET',
  },
  response => {
    console.log(response.statusCode); // 200
  }
);

req.end();
```

This code sends a GET request to 'jsonplaceholder.typicode.com' to fetch the todo with ID 1.

### Handling Response: Saving to a File

To handle the response, you can use the readable stream. In this example, the response is piped directly to a file:

```typescript 
import { request } from 'http';
import { createWriteStream } from 'fs';

const fileStream = createWriteStream('./file.txt');

const req = request(
  {
    host: 'jsonplaceholder.typicode.com',
    path: '/todos/1',
    method: 'GET',
  },
  response => {
    response.pipe(fileStream);
  }
);

req.end();

```

This code saves the response data to a file named 'file.txt'.

### Handling Response: Storing in a Variable

If you want to store the response body in a variable, you can collect data chunks and concatenate them:

```typescript 
import { request } from 'http';

const req = request(
  {
    host: 'jsonplaceholder.typicode.com',
    path: '/todos/1',
    method: 'GET',
  },
  response => {
    const chunks = [];
    response.on('data', (chunk) => {
      chunks.push(chunk);
    });
    response.on('end', () => {
      const result = Buffer.concat(chunks).toString();
      console.log(result);
    });
  }
);

req.end();

```

This code logs the response body to the console.

### Promisified HTTP Request

To simplify the process, you can wrap the request logic in a function that returns a Promise:

```typescript 
import { request } from 'http';

interface Response {
  data: object,
  headers: IncomingHttpHeaders
}

function performRequest(options: RequestOptions): Promise<Response> {
  return new Promise((resolve, reject) => {
    request(
      options,
      function(response) {
        const { statusCode } = response;
        if (statusCode >= 300) {
          reject(new Error(response.statusMessage));
        }
        const chunks = [];
        response.on('data', (chunk) => {
          chunks.push(chunk);
        });
        response.on('end', () => {
          const result = Buffer.concat(chunks).toString();
          resolve({
            data: JSON.parse(result),
            headers: response.headers,
          });
        });
      }
    ).end();
  });
}

// Example usage:
performRequest(
  {
    host: 'jsonplaceholder.typicode.com',
    path: '/todos/1',
    method: 'GET',
  },
)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });



```

This code demonstrates making a request and handling it using Promises.


### Uploading Files with Multipart/Form-Data

To upload files using multipart/form-data, you can use the form-data library. Here's an example:


```typescript 
import * as FormData from 'form-data';
import { request } from 'http';
import { createReadStream } from 'fs';

const readStream = createReadStream('./src/photo.jpg');
const form = new FormData();

form.append('photo', readStream);
form.append('firstName', 'Muneer');
form.append('lastName', 'Ahmed');

const req = request(
  {
    host: 'localhost',
    port: '5000',
    path: '/upload',
    method: 'POST',
    headers: form.getHeaders(),
  },
  response => {
    console.log(response.statusCode); // 200
  }
);

form.pipe(req);
```

This code uploads a file named 'photo.jpg' along with additional form fields to 'localhost:5000/upload'.

### Understanding Multipart/Form-Data

The form.getHeaders() method generates appropriate headers for multipart/form-data:

```typescript
import * as FormData from 'form-data';
import { createReadStream } from 'fs';

const fileStream = createReadStream('./src/photo.jpg');
const form = new FormData();

form.append('photo', fileStream);
form.append('firstName', 'Muneer');
form.append('lastName', 'Ahmed');

console.log(form.getHeaders());
```

This code outputs the headers needed for a multipart/form-data request.

## Usage

- The `examples` folder contains multiple examples of sending HTTP requests.

- Uncomment the import statement of any imported examples file in `main.js` to see the result.

- Run the program with the command:

```bash
npm start
```


## Main Points

- **HTTP** is a protocol allowing you to fetch resources such as JSON data and HTML documents. Two sides of the connection, the client and the server, communicate by exchanging messages. The message sent by the client is a request, and the message sent by the server is a response.

- The `http.request` function is used to make HTTP requests, and it is a part of the built-in `http` module.

- It returns an instance of the `http.ClientRequest` class, which is a writable stream.

- The `data` event is emitted when a chunk of data is received in the response, and the `end` event is emitted when the entire response has been received.

- The `error` event is emitted if there is an error in the HTTP request.

- The request must be explicitly ended using `req.end()` to signal that the request is complete.

- The last argument of a request function is a callback. Its first argument is an instance of `IncomingMessage` representing the response, which holds information about the response, such as the status code.

- Using `multipart/form-data` is essential when dealing with file uploads in web applications, as it allows for the correct transmission of both text and binary data.

- `FormData` provides a way to construct key/value pairs that represent form fields and values.

- When using the browser, `FormData()` constructor can be used. Since Node.js does not provide it, we use an external package called `form-data`.

- **Multipart** originates from **MIME**, a standard extending the format of emails standing for Multipurpose Internet Mail Extensions.

- Requests of that type combine one or more sets of data into a single body, separated by boundaries.

- `multipart/form-data` is one of the subtypes of Multipart and is widely supported on the web.

- The **boundary** refers to a unique string used to separate different parts of the payload. It is specified in the `Content-Type` header of the HTTP request and helps distinguish one part of the payload from another.

- The boundary is specified in the ```Content-Type``` header of the HTTP request and helps distinguish one part of the payload from another.














Explore advanced topics and continue your learning journey by visiting [Series-07](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-07). While this series provides sending HTTP request in Node.js, [Series-07](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-07) focus on ``creating HTTP server ``` in Node.js. **Enjoy coding!**