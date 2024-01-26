### Usage
- The ```examples``` folder contain multiple example of http/2 protocol.

- Uncomment the import statement of any imported examples file in ```main.js``` to see the result.

- run the program with command
``` npm start ```


- # Evolution of HTTP

## HTTP/0.9 (1991)
- Initial version for basic HTML transfer.
- Limited to GET method, lacked headers, and had no status codes.
- Server responses included HTML error descriptions.

## HTTP/1.0 (1996)
- Significant enhancements.
- Introduced status codes, additional methods (e.g., POST), and headers.
- Enabled transmission of various file types using Content-Type header.

## HTTP/1.1 (1997)
- Introduced further improvements.
- Added methods like OPTIONS and Keep-Alive header.

## HTTP/2 (2015)
- Introduced multiplexing, allowing concurrent requests and responses over a single connection, aiming to reduce latency.

## HTTP/3 (2020)
- Latest version based on QUIC, focusing on performance and security with default multiplexing and encryption.

### Main Points
- ``````HTTP/1.1`````` Allowed a single connection for multiple requests, addressing **head-of-line blocking**.
- **Head-of-line blocking** is a phenomenon that occurs in network communication, particularly in the context of ```HTTP/1.1```.
- It refers to the situation where requests made over a single connection are processed sequentially, and if one request is delayed or blocked, it holds up the processing of subsequent requests.
- In ```HTTP/1.1```, multiple requests can be sent over a single connection.
- However, if one of these requests encounters a delay, for example, due to a complex server-side operation or a slow response, the subsequent requests must wait in line behind the delayed request.
- This waiting creates a **"head-of-line"** effect, where the first request in line becomes a bottleneck, blocking the progress of others.
- HTTP/2 solves **head-of-line-blocking** this issue by allowing one connection to handle multiple requests at once.
- HTTP/2 uses a new header compression algorithm that we call HPACK. HTTP/2 more secure, but it is also faster in some cases.
- With the Server Push, we can now populate data in a client cache.
- HTTP/2 aims to improve performance by meeting the needs of web pages that get more complex
