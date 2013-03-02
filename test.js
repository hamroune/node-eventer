//Initilze The Node Eventer
var nodeEventer = require('./lib/node-eventer.js').init();

//Subscribe from any piece of your code
nodeEventer.subscribe('helloworld', function(data){
	console.log('received Data ==>', data);	
});

//Then Publish a message to the Event key 'Helloworld'
nodeEventer.publish('helloworld', {"message": " This is the JSON Message"});