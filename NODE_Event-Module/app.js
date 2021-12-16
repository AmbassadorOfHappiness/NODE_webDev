const Logger = require('./log');
const logger = new Logger();

logger.on('some_event', (args) => {
    const { id, text } = args; //--ДЕСТРУКТУРИЗАЦИЯ
    console.log(id, text);
});

logger.log('User Logger');