### Usage
- The ```examples``` folder contain multiple example of Creating a server, receiving requests.

- Uncomment the import statement of any imported utils file in ```main.js``` to see the result.

- run the program with command
``` npm start ```

### Main Points
- Require the built-in ```http``` module, which provides functionality to create an HTTP server.
- Use ```http.createServer``` to create an HTTP server. The callback function provided to ```createServer``` is called for each incoming request.
- In the callback function, use ```res.writeHead``` to set the HTTP response header with a status code (e.g., 200 OK) and content type.
- Use ```res.end``` to send the response body.
- Call ```server.listen``` to start listening on the specified port.
- The  createServer function returns an instance of an ```http.Server```. One of its prototypes is EventEmitter.
- Both ```request``` and ```response``` extend streams and contain valuable information such as headers, URL that is requested and the HTTP method that is used.
- The **request** implements a readable stream and instance of **IncomingMessage**.
- The **response** implements a readable stream and instance of **ServerResponse**.
- The **request** has important properties like URL and request methods **GET**, **POST** etc to identify a request.
- The **response** has important properties like **setHeader**, **end**.
- The **request** and **response** objects are streams.
- To handle file uploads in Node.js, you can use the ```multiparty``` package. The ```multiparty``` module simplifies the process of parsing and handling form data, including file uploads.



