# YoctoEvent

A really tiny event emitter based on event emitter made by Sindre Sorhus [emittery](https://github.com/sindresorhus/emittery).

## How to use

#### Importing
``` javascript
const e = require('yoctoevent');
```

#### Setup event listener
``` javascript
e.on('event', data => {
	// Do something with data
});
```

#### Setup event emitter
``` javascript
e.emit('event', data);
```
