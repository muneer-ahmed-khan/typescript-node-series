### Usage
- The ```examples``` folder contain multiple example of buffers. 

- Uncomment the import statement of any imported examples file in ```main.js``` to see the result.

- run the program with command
``` npm start ```

### Main Points
- The buffer exists in Node.js to help us manipulate binary data.
- The buffer is an array of bytes, where an element has a value from 0 to 255.
- The buffer is a chunk of memory and it is similar to an array of numbers.
- The computer represents data in binary: ones and zeros. To store a number, the machine first converts it to a binary representation.
- UTF-8 (Unicode Transformation Format, 8-bit) is a variable-width character encoding that can represent every character in the Unicode character set.
- ```0b``` is how you write a binary number in JavaScript.
- The StringDecoder ensures that the decoded string does not contain any incomplete multi byte characters by holding the incomplete character in an internal buffer until the next call to the ```decoder.write()```.
- buffer can be created using ```new Buffer()``` and fill each index separately.
- buffer can be used using ```Buffer.aloc(size,default_value)``` to allocate a buffer.
- buffer cna be created using ```Buffer.from([1,2,3])``` as a buffer having three values.
- buffer can be also created from a string ```Buffer.from('Hello world')``` and be changes to string as ```toString()``` method.




