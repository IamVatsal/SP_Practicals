const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// --------------------------------------------------
// a. Register a listener with custom event
// --------------------------------------------------

function welcomeListener() {
    console.log('Welcome to Node.js!');
}

eventEmitter.on('welcome', welcomeListener);

console.log('a. Custom event:');
eventEmitter.emit('welcome');

// --------------------------------------------------
// b. Create multiple listeners for a specific event
// --------------------------------------------------

function listener1() {
    console.log('Listener 1 executed');
}

function listener2() {
    console.log('Listener 2 executed');
}

function listener3() {
    console.log('Listener 3 executed');
}

eventEmitter.on('message', listener1);
eventEmitter.on('message', listener2);
eventEmitter.on('message', listener3);

console.log('\nb. Multiple listeners:');
eventEmitter.emit('message');

// --------------------------------------------------
// c. Remove a specific listener
// --------------------------------------------------

eventEmitter.removeListener('message', listener2);

console.log('\nc. After removing Listener 2:');
eventEmitter.emit('message');

// --------------------------------------------------
// d. Remove all listeners
// --------------------------------------------------

eventEmitter.removeAllListeners('message');

console.log('\nd. After removing all message listeners:');
console.log('Number of listeners:', eventEmitter.listenerCount('message'));

// --------------------------------------------------
// e. Get maximum number of listeners
// --------------------------------------------------

console.log('\ne. Maximum listeners allowed:');
console.log(eventEmitter.getMaxListeners());

// --------------------------------------------------
// f. Change maximum number of listeners
// --------------------------------------------------

eventEmitter.setMaxListeners(20);

console.log('\nf. New maximum listeners:');
console.log(eventEmitter.getMaxListeners());

// --------------------------------------------------
// g. Find names of active listeners
// --------------------------------------------------

eventEmitter.on('login', function userLogin() {
    console.log('User logged in');
});

eventEmitter.on('login', function adminLogin() {
    console.log('Admin logged in');
});

console.log('\ng. Active listener names:');

const listeners = eventEmitter.listeners('login');

listeners.forEach((listener) => {
    console.log(listener.name);
});

// --------------------------------------------------
// h. Find number of listeners for an event
// --------------------------------------------------

console.log('\nh. Number of login listeners:');
console.log(eventEmitter.listenerCount('login'));

// --------------------------------------------------
// i. Change execution position of listeners
// --------------------------------------------------

function firstListener() {
    console.log('First listener');
}

function secondListener() {
    console.log('Second listener');
}

eventEmitter.on('order', firstListener);
eventEmitter.on('order', secondListener);

// Move firstListener to the beginning
eventEmitter.prependListener('order', firstListener);

console.log('\ni. Listener execution order:');
eventEmitter.emit('order');
