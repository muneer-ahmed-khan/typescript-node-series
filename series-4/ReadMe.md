### Usage
- The ```examples``` folder contain multiple example of readable streams. 

- Uncomment the import statement of any imported utils file in ```main.js``` to see the result.

- run the program with command
``` npm start ```

### Main Points
- You can encounter streams, for example, when working with files or dealing with HTTP requests.
- Streams handle collections of data that might not be available all at once.
- This makes them efficient for large data sets as they don't need to fit in memory.
- Also, you can start working with the data as soon as you have a part of it, rather than waiting for the entire set.
- ```fs.readFile``` loads the entire file into memory before taking any actions.
- A better approach is to use ```fs.createReadableStream``` to create a readable stream.
- Each stream is an instance of EventEmitter This allows us to easily listen for any incoming data using the EventEmitter API.
- Readable Streams are event-driven. They emit events such as 'data' when new data is available and 'end' when there is no more data to read.
- Each chunk is represented as a Buffer instance. The larger the file, the more chunks we get.
- To convert the buffer to a string, we can use the ```toString``` method or directly use the ```StringDecoder``` class on the buffers.
- The readable stream has two modes: paused and flowing.
- Readable Streams start in the paused mode by default. This means you need to actively initiate reading.
- To switch a Readable Stream to flowing mode, you can add a ```'data'``` event listener or use methods like ```resume()```.
- Readable Streams are designed to handle back pressure, meaning they adjust the rate of data flow based on the consumer's ability to process it.
- Back pressure in the context of a readable stream refers to a mechanism used to manage the flow of data between a readable stream and a writable stream when the writable stream is not able to keep up with the rate at which data is being provided by the readable stream. It's a way to prevent overwhelming the writable stream with more data than it can handle, avoiding potential issues like increased memory usage or slowdowns.
- The ```Readable``` class is a core class in the stream module. It serves as the foundation for creating custom readable 
streams. You can extend this class to implement your own logic for reading and emitting data.
- The ```createReadStream``` method is part of the fs module. It is specifically designed for creating readable streams for reading from files.
- ```Readable``` class is a general-purpose class for creating custom readable streams with complete flexibility, ```createReadStream``` is a specialized method focused on simplifying the creation of readable streams for file reading tasks. 
- ```Readable``` Class Overview:
- Creation:
    - You can create an instance of the Readable class using the createReadStream method from the fs module for reading from files, or you can extend the Readable class to create your custom readable stream.
- Events:
    - data: Emitted when data is available to be read.
    - end: Emitted when there is no more data to be read.
    - error: Emitted when an error occurs.
    - close: Emitted when the stream and any associated resources are closed.
- Methods:
    - read(size): Reads and returns a chunk of data with the specified size. If no size is provided, it reads all available data.
    - setEncoding(encoding): Sets the encoding for the stream.
    - pause(): Pauses the stream, switching it to paused mode.
    - resume(): Resumes a paused stream, switching it to flowing mode.





