### Usage
- The ```examples``` folder contain multiple example of writable streams. 

- Uncomment the import statement of any imported utils file in ```main.js``` to see the result.

- run the program with command
``` npm start ```

### Main Points
- A ```Writable``` stream is a stream that represents a destination to which data can be written.
- It is part of the built-in Stream module in Node.js and is designed for handling output operations.
- ```Writable``` streams are commonly used when you want to write data to an external destination, such as a file, network socket, or another stream.
- The ```Writable``` class is a core class in the stream module of Node.js. It can be extended to create custom writable streams with specific behavior.
- The ```Writable``` class is more general and allows you to create custom writable streams for various output destinations, while ```fs.createWriteStream``` is a specialized function for creating writable streams specifically tailored for writing data to files in the file system.
- Data can be written to a writable stream using the ```write``` method. You can write strings, buffers, or any type that can be converted to a buffer.
- To signal the end of data, you can call the ```end``` method on the writable stream.
- ```finish``` event, which is emitted when all data has been flushed to the underlying system. 
- Writable streams also emit ```error``` events. It's important to handle errors to prevent unhandled exceptions.
- The ```write``` method returns a boolean value indicating whether it's okay to write more data hence flow control.
- You can create custom writable streams by extending the ```Writable``` class. Implement the ```_write``` method to define the behavior when data is written to the stream.
- Writable streams in Node.js implement a mechanism known as flow control. This mechanism is designed to handle situations where the writable stream's internal buffer is full, and it needs to pause accepting more data temporarily.
- When ```write``` returns false, it indicates that the writable stream's internal buffer is full, and further writes should be paused until the ```drain``` event is emitted.
- The ```drain``` event is emitted by the writable stream when it is ready to accept more data. This occurs after the internal buffer has been sufficiently drained, allowing for the resumption of writing.
- The ```drain``` event is particularly useful when dealing with scenarios where you're writing large amounts of data to a writable stream, such as when uploading a file or streaming data over a network.
- A Pipe is a mechanism that allows you to connect the output of a readable stream directly into the input of a writable stream. - - This is achieved using the `pipe` method of readable stream.
- There is also a special type of stream called a transform stream. ```Transform``` streams are both readable and writable, allowing you to perform transformations on the data as it passes through.
- In Node.js, standard streams are a way to interact with the input, output, and error streams of a process. Every Node.js process has three standard streams associated with it. ```process.stdin```, ```process.stdout```, ```process.stderr```.
- The  ```process.stdin``` is a readable stream that gathers the data incoming to our process. Using it we can listen for data in the terminal.
- the ```stdin``` stream is in a paused mode by default.
- the exit process in the end we need to pause the flowing stream of ```stdin```.
- The  ```process.stdout``` and  ```process.stderr``` are writable streams. They are used in the  ```console.log()```, and  ```console.error()``` and writing to them results in text appearing in the console.



