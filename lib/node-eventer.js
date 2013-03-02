var sys;
try {
	//Retro-compatibilty
  sys    = require('util'); 
} catch (e) {
  sys    = require('sys');
}

//Global Vars
var events = require('events'),
    fs     = require('fs'),
    color  = require('bash-color');


//Used Vars
var options;
var UNDEFINED;
var ANTI_COLLUSION_KEY = 'node-eventer';

/*
* Simple Logger, useful for dev env
*/
Log = function(){
    this.log = function(args0,args1){
    	if(options && options.debug== true){
    		if(args1){  		
    			console.log(args0,args1);
	    	}else{
	    		console.log(args0);    		
	    	}
    	}
    }
};

var logger = new Log();
/**
* Eventer Main Class
*/
Eventer = function(){

  events.EventEmitter.call(this);

  /*
   * Publish an Message data to EventKey
   */
  this.publish = function(eventKey, data){
  	logger.log( color.yellow('event published'), options);
	this.emit(ANTI_COLLUSION_KEY+eventKey, data);  
  };

  /*
   *  Subscribe to an Event defined by Key, and the Handler fn 
   */
  this.subscribe = function(eventKey, fn){
  	logger.log( color.yellow('subscribed to ')+color.red(eventKey)+color.yellow(' event'));
  	this.on(ANTI_COLLUSION_KEY+eventKey, fn);  
  }

};

//Extend EventEmiter's properties
sys.inherits(Eventer, events.EventEmitter);

var instance;
//Return The Eventer Instance
module.exports.init = function(args){
	options =args;
	//Ensure that is Singleton
	if(instance == UNDEFINED){
		instance = new Eventer();
	}
	return instance;	
};
