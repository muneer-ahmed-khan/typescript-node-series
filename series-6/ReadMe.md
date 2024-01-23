### Usage
- The ```utils``` folder contain multiple example of sending HTTP requests 

- Uncomment the import statement of any imported utils file in ```main.js``` to see the result.

- run the program with command
``` npm start ```

### Main Points
- The HTTP is a protocol allowing you to fetch resources such as JSON data and HTML documents.
- The message sent by the client is a **request**. The message sent by the server is a **response**.
- the ```http.request``` function is used to make HTTP requests. It is a part of the built-in ```http``` module.
- ```options``` object that defines the details of the HTTP request.
- Returns an instance of the ```http.ClientRequest``` class, which is a writable stream.
- `data` Event emitted when a chunk of data is received in the response. This event may be emitted multiple times.
- `end` Event emitted when the entire response has been received.
- `error` Event emitted if there is an error in the HTTP request.
- The request must be explicitly ended using ```req.end()``` to signal that the request is complete.
- The last argument of a **request** function is a callback. Its first argument is an instance of IncomingMessage representing the response. It holds information about the response that we got such as the status code.
- Using ```multipart/form-data``` is essential when dealing with file uploads in web applications, as it allows for the correct transmission of both text and binary data. 
- FormData provides a way to construct key/value pairs that represent form fields and values.
- When we use the browser, we can easily create it with the ```FormData()```  constructor. Since Node.js does not provide it, we use an external package called ```form-data```.
- **Multipart** originates from **MIME**, a standard extending the format of emails standing for Multipurpose Internet Mail Extensions.
- Requests of that type combine one or more sets of data into a single body, separated by boundaries.
- **multipart/form-data** which is one of the subtypes of Multipart and is widely supported on the web.
- The **multipart/form-data** encoding allows the transmission of binary data, such as files, along with regular form data in an HTTP request.
- The **"boundary"** refers to a unique string that is used to separate different parts of the payload. 
- The boundary is specified in the ```Content-Type``` header of the HTTP request and helps distinguish one part of the payload from another.

