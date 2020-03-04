const EventEmitter = require('events')
class Emissor extends EventEmitter {

}

const emisor = new Emissor();
const eventName = 'user:click';

emisor.on(eventName, click => {
    console.log('A user clicked on', click)
});

setInterval(() => {
    let i = 0;
    emisor.emit(eventName, `button ${i++} times`);
}, 500)