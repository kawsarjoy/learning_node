
const path = require('path');

console.log(__filename);

console.log(__dirname);


// base file name

console.log(path.basename(__filename));

// directory name

console.log(path.dirname(__filename));

// file extention

console.log(path.extname(__filename));

// create path object

console.log(path.parse(__filename));

// concatenate path

console.log(path.join(__dirname, 'test', 'hello.html'));