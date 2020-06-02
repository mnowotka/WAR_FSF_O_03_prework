const EventEmitter = require('events');

const shouter = new EventEmitter();

// Here shouter shouts different phrases. You need to wait around 2s to get all the phrases
setTimeout(() => shouter.emit('shout', 'Get apples today'), 1890);
setTimeout(() => shouter.emit('yell', 'Do not run when I offer you my wares!'), 40);
setTimeout(() => shouter.emit('yell', 'Can\'t get any better than my prices!'), 1500);
setTimeout(() => shouter.emit('shout', 'I don\'t compromise when it comes to my products!'), 5);
setTimeout(() => shouter.emit('shout', 'Generous discount from me if you don\'t buy from my competition!'), 200);
setTimeout(() => shouter.emit('yell', 'Best in country, hell, the best in the world!'), 300);
setTimeout(() => shouter.emit('shout', 'My carpets are the fluffiest in the market!'), 250);
setTimeout(() => shouter.emit('yell', 'You will love my herbs!'), 1800);

let lastTypeOfShout;
let secretPhrase = [];

// Add your code to these handlers - remember about gathering the secret phrase properly!
shouter.on('yell', phrase => {
});

shouter.on('shout', phrase => {
});

setTimeout(() => console.log(secretPhrase), 2000);
