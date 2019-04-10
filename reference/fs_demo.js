
const fs = require('fs');
const path = require('path');

// create folder

// fs.mkdir(path.join(__dirname, 'test'), {}, err => {

//     if(err) throw err;

//     console.log('file created...');
// });

// write to file

// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello world!', err => {

//     if(err) throw err;

//     console.log('file written to...');

//     // append to file

//     fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ' I love node.js', err => {

//         if(err) throw err;
    
//         console.log('file append to...');
//     });

// });

// read file

// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {

//     if(err) throw err;

//     console.log(data);
// });


// rename file

fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'helloworld.txt'), err => {

    if(err) throw err;

    console.log('file rename');
});