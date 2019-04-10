// const tutorial = require('./tutorial');

// console.log(tutorial.sum(454, 45));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());

// events module

// const EventEmitter = require('events');

// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial', (num1, num2) => { console.log([num1, num2]) });

// eventEmitter.emit('tutorial', 9, 7);

// class Person extends EventEmitter {
//     constructor(name) {
//         super();
//         this._name = name;
//     }

//     get name(){
//         return this._name;
//     }
// }

// let joy = new Person('Joy');
// let joya = new Person('Joya');

// joy.on('name', () => {
//     console.log('my name is ' + joy.name);
// });

// joy.emit('name');

// // readline module

// const readline = require('readline');

// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let num1 = Math.floor((Math.random() * 10) + 1);
// let num2 = Math.floor((Math.random() * 10) + 1);
// let answer = num1 + num2;

// r1.question(`What is ${ num1 } + ${ num2 } ?\n`, 
// (userInput) => {

//     if(userInput.trim() == answer){
//         r1.close();
//     }
//     else {
//         r1.setPrompt('Incorrect answer. Please try again!\n');
//         r1.prompt();
//         r1.on('line', (userInput) => {
//             if(userInput.trim() == answer){
//                 r1.close();
//             }    
//             else {
//                 r1.setPrompt(`Your input ${ userInput } is incorrect. Please try again!\n`);
//                 r1.prompt();
//             }
//         })
//     }
// });

// r1.on('close', () => {
//     console.log("Correct!!!");
// });

// file system module

const fs = require('fs');

// fs.writeFile("example.txt", "This is a text file.", (err) => {
//     if(err) console.log(err);
//     else {
//         console.log("File created");
//         fs.readFile('example.txt', 'utf8',  (err, content) => {
//             if(err) console.log(err);
//             else console.log(content);
//         })
//     }
// });

// fs.rename('example2.txt', 'example3.txt', (err) => {
//     if(err) console.log(err);
//     else console.log("Rename successfull!");
// });

// fs.appendFile('example3.txt', 'Some data appended.', (err) => {
//     if(err) console.log(err);
//     else console.log("Append successfull!");
// });


// fs.unlink('example3.txt', (err) => {
//     if(err) console.log(err);
//     else console.log("unlink successfull!");
// });

// fs.mkdir('tutorial2', (err) => {
//     if(err) console.log(err);
//     else console.log("folder created!");
// });

// fs.rmdir('tutorial', (err) => {
//     if(err) console.log(err);
//     else console.log("folder removed");
// });

// fs.readdir('tutorial2', (err, files) => {
//     if(err) console.log(err);
//     else {
//         for(let file of files)
//         {
//             fs.unlink('./tutorial2/' + file, (err) => {
//                 if(err) console.log(err);
//                 else console.log('file deleted');
//             });
//         }
//     }
// });

// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('example2.txt.gz');

// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);
// });

// const zlib = require('zlib');
// const gzip = zlib.createGzip();

// readStream.pipe(gzip).pipe(writeStream);

// const ungzip = zlib.createGunzip();

// const readStream2 = fs.createReadStream('./example2.txt.gz');
// const writeStream2 = fs.createWriteStream('example3.txt');

// readStream2.pipe(ungzip).pipe(writeStream2);

const http = require('http');

// http.createServer((req, res) => {

    // const readStream = fs.createReadStream('./static/index.html');

    // res.writeHead(200, {'Content-type': 'text/html'});

    // const readStream = fs.createReadStream('./static/example.json');

    // res.writeHead(200, {'Content-type': 'application/json'});

//     const readStream = fs.createReadStream('./static/example.jpg');

//     res.writeHead(200, {'Content-type': 'image/jpg'});

//     readStream.pipe(res);

// }).listen(3000);

const _ = require('lodash');