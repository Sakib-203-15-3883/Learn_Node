//In Node.js, core modules refer to the set of built-in modules that come bundled with the Node.js runtime environment. These modules provide essential functionality to work with different aspects of the operating system, file system, network, and more. They are readily available for use without the need for additional installation or external dependencies.

//  fs: File System module for working with files and directories.

    //1. Reading a File:

//In this example, we start by importing the fs module using the require function. The fs module provides file system-related functionality.
//Next, we use the readFile function provided by the fs module to read the contents of a file named file.txt. The readFile function takes three arguments:

// The first argument is the path to the file we want to read. In this case, we provide 'file.txt' as the file path. You can modify this to match the actual path and filename you want to read.

// The second argument is the encoding of the file. In this example, we specify 'utf8' encoding to read the file as a text file. If you omit the encoding parameter, the data will be returned as a buffer.

// The third argument is a callback function that gets executed once the file reading operation is complete. The callback function takes two parameters: err and data.

// If an error occurs during the file reading process, the err parameter will contain the error object. In this case, we log the error to the console using console.error and return from the callback function.
// If the file is successfully read, the data parameter will contain the contents of the file. We log the data to the console using console.log.
// The readFile function is asynchronous, which means it doesn't block the execution of other code while reading the file. It takes the callback function as an argument and executes it once the file reading is complete.

// By running this code, you will read the contents of the specified file (file.txt in this case) and log the contents to the console.

const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
    console.error(err);
    return;
    }
    console.log(data);
});


    //2. Writing to a File:

    //This is the content that will be written to the file.
    const content = 'clear your concepts';
//The writeFile function is used to write content to a file. It takes three arguments:

// The first argument is the path to the file you want to write to. In this case, 'file.txt' is provided as the file path. You can modify this to match the actual path and filename you want to write to. If the file doesn't exist, it will be created. If it already exists, its contents will be overwritten.

// The second argument is the content to be written to the file. In this case, we pass the content variable, which contains the string 'Hello, world!'.

// The third argument is a callback function that gets executed once the writing operation is complete. The callback function takes one parameter, err, which represents any error that occurred during the writing process. If an error occurs, the error will be passed as the err parameter.

// Inside the callback function, we check if the err parameter is truthy (indicating an error occurred). If so, we log the error to the console using console.error and return from the callback function to stop further execution.
// If no error occurs, we log the message 'File saved successfully.' to the console using console.log

    fs.writeFile('file.txt', content, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File saved successfully.');
    });

    //3. Appending to a File:

    
const contentForAppend = 'This will be appended to the file.';

fs.appendFile('file.txt', contentForAppend, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Content appended to the file.');
});


    //4.Renaming a File:


fs.rename('file.txt', 'newFile.txt', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File renamed successfully.');
});


    //5. Deleting a File:


fs.unlink('file1.txt', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File deleted successfully.');
});

    //6. Checking if a File Exists:

//he second argument is the mode or constant that specifies the type of accessibility check. In this example, fs.constants.F_OK is used, which checks for the existence of the file. Other modes include fs.constants.R_OK (readable), fs.constants.W_OK (writable), and fs.constants.X_OK (executable).

fs.access('file.txt', fs.constants.F_OK, (err) => {
    if (err) {
    console.error('File does not exist.');
    return;
    }
    console.log('File exists.');
});

