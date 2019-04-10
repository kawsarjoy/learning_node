// const person = require('./person');

// console.log(person); 

// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log('called listener : ',data));

// logger.log('Hello world');

const http = require('http');
const path = require('path');
const fs = require('fs');
const PORT = 8080;

const server = http.createServer((req, res) => {

    // if(req.url == '/'){

    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {

    //         if(err) throw err;

    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.end(content);

    //     });

    // } 

    // if(req.url == '/about'){

    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {

    //         if(err) throw err;

    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.end(content);

    //     });

    // } 


    if(req.url == '/api/users'){

        const  users = [
            { name: 'Bob', age: 200 },
            { name: 'Jhon', age: 200 }
        ]

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));

    } 
    // build file path
    let filepath = path.join(__dirname, 'public',  req.url == '/' ? 'index.html' : req.url);

    // extension of file

    let extname = path.extname(filepath);

});

server.listen(PORT, () => console.log(`Server running on: ${PORT}`));