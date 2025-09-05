import {EventEmitter} from "events";

const emitter = new EventEmitter();

emitter.addListener("event",(name) => {
    console.info('Hallo ' + (name));
})

emitter.addListener("event",(name) => {
    console.info(`Hai ${name}`);
})

emitter.emit("event","Ubaiboy");

