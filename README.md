node-eventer
============
A node.js module for Easy Pub/Sub events:

```bash
$ npm install node-eventer
```

Then import it into your project:

```js
//Initilze The Node Eventer
var nodeEventer = require('node-eventer').init();

//Subscribe from any piece of your code
nodeEventer.subscribe('helloworld', function(data){
	console.log('received Data ==>', data);	
});

//Then Publish a message to the Event key 'Helloworld'
nodeEventer.publish('helloworld', {"message": " This is the JSON Message"});
```
