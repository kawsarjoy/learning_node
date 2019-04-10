const EventEmitter = require('events');

// create class

class MyEmitter extends EventEmitter { }

// init class

const myEmitter = new MyEmitter();

// event listener

myEmitter.on('event', () => console.log('Event fired!'));

//init event

myEmitter.emit('event');