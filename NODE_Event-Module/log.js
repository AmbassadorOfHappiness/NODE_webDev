const EventEmitter = require('events');
const util = require('util');

class Logger extends EventEmitter {
log = (msg) => {
    console.log(msg);
    this.emit('some_event', { id: 1, text: 'Event test text'});
};
};

util.inherits(Logger, EventEmitter);

module.exports = Logger;

// https://www.youtube.com/watch?v=RFh85sV8080&list=PLNkWIWHIRwMFtsaJ4b_wwkJDHKJeuAkP0&index=6