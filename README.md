node-eventer
============
A node.js module for Easy Pub/Sub events:

```bash
$ npm install node-eventer
```

Then import it into your project:

```js
var nodeEventer = require('node-eventer').init();

nodeEventer.subscribe('helloworld', function(data){
	console.log('received Data ==>', data);	
});

nodeEventer.publish('helloworld', {"message": " This is the JSON Message"});

```
