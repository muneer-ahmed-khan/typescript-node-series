# [Series #11: HTTP/2 in Node.js](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-12)

Welcome to the Node.js TypeScript [Series #11: HTTP/2 in Node.js](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-12), focusing on Node.js **http2** module. This is the 11th series following [Series-11](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-11)



# HTTP/2 Implementation in Node.js

## Brief History of HTTP Protocol

The HTTP protocol has evolved over the years to address the increasing complexity of web pages and the growing amount of data transferred. Here's a brief history:

### HTTP/0.9
- Year: 1991
- Basic HTML transfer.
- Limited to the GET method, lacked headers, and had no status codes.
- Server responses included HTML error descriptions.

### HTTP/1.0
- Year: 1996
- Significant enhancements.
- Introduced status codes, additional methods like POST, and headers.
- Enabled transmission of various file types using Content-Type header.

### HTTP/1.1
- Year: 1997
- Further improvements.
- Added methods like OPTIONS and the Keep-Alive header.

### HTTP/2
- Year: 2015
- Introduced multiplexing, allowing concurrent requests and responses over a single connection, addressing head-of-line blocking.
- Added support for additional HTTP methods.
- Improved header compression using the HPACK algorithm.

## Implementing HTTP/2 in Node.js

To implement HTTP/2 in Node.js, a TLS connection over HTTPS is required, as browsers do not support unencrypted HTTP/2. Here's an example of starting an HTTP/2 server in Node.js:

```javascript
import * as http2 from 'http2';
import * as fs from 'fs';
import * as util from 'util';
 
const readFile = util.promisify(fs.readFile);
 
async function startServer() {
  const [key, cert] = await Promise.all([
    readFile('key.pem'),
    readFile('certificate.pem')
  ]);
  
  const server = http2.createSecureServer({ key, cert })
    .listen(8080, () => {
      console.log('Server started');
    });
 
  server.on('stream', (stream, headers) => {
    stream.respond({
      'content-type': 'text/html',
      ':status': 200
    });
    stream.end('<h1>Hello World</h1>');
  });
 
  server.on('error', (err) => console.error(err));
}
 
startServer();
```

### Solving the Head-of-Line Blocking Issue

In complex applications, even with six parallel connections in HTTP/1.1, head-of-line blocking can still be an issue. HTTP/2 addresses this by allowing one connection to handle multiple requests simultaneously. In Node.js, the 'stream' event is used to respond to incoming requests:

```javascript
server.on('stream', (stream, headers) => {
  // Handling incoming requests with stream
});
```

### Header Compression with HPACK

HTTP/2 introduces a new header compression algorithm called HPACK. It improves security and speed compared to the previous header compression used in SPDY. The example implementation in Node.js automatically utilizes HPACK.

```javascript
server.on('stream', (stream, headers) => {
  // Handling incoming requests with stream
});
```

### Caching Data Using Server Push
HTTP/2 enables server push, allowing data to be pushed to the client's cache before it's requested. This is beneficial in scenarios where multiple resources are required. In the example below, the server pushes the 'style.css' file along with the 'index.html' file:

```javascript
server.on('stream', (stream, headers) => {
  const path = headers[":path"];
  switch(path) {
    case '/': {
      stream.pushStream({ ':path': '/style.css' }, (err, pushStream) => {
        if (err) throw err;
        pushStream.respond({
          'content-type': 'text/css',
          ':status': 200
        });
        pushStream.end(`
          body {
            color: red;
          }
        `);
      });
      // Responding to the main request
      stream.respond({
        'content-type': 'text/html',
        ':status': 200
      });
      stream.end(` 
        <head>
          <link rel="stylesheet" type="text/css" href="style.css">
        </head>
        <body>
          <h1>Hello World</h1>
        </body>
      `);
      break;
    }
    // Handling other paths
  }
});
```



### Main Points

- **HTTP/1.1** allowed a single connection for multiple requests, leading to **head-of-line blocking** issues.
- **Head-of-line blocking** occurs when requests on a single connection are processed sequentially, causing delays for subsequent requests if one is blocked.
- **HTTP/2** addresses head-of-line blocking by enabling a single connection to handle multiple requests simultaneously.
- HTTP/2 introduces the **HPACK** header compression algorithm, enhancing security and speed compared to SPDY.
- **Server Push** in HTTP/2 allows data to be pushed to the client's cache before it's requested.
- HTTP/2 aims to improve performance, especially for complex web pages.


### Usage
- The ```examples``` folder contain multiple example of http/2 protocol.

- Uncomment the import statement of any imported examples file in ```main.js``` to see the result.

- run the program with command
``` npm start ```


Explore advanced topics and continue your learning journey by visiting [Series-13](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-13). While this series provides **http2** module Node.js, [Series-13](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-13) focus on ```Worker Threads module``` in Node.js. **Enjoy coding!**