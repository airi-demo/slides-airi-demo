/**
 */

/*browserWebSocket.min.js*/
//!function(e){function n(o){if(t[o])return t[o].exports;var s=t[o]={exports:{},id:o,loaded:!1};return e[o].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){!function(e){"function"==typeof self.define&&self.define.amd&&self.define(e);var n=document.getElementsByTagName("script"),t=n[n.length-1],o=t.getAttribute("id");o&&(self[o]=e())}(function(){return t(1)})},function(e,n){function t(e,n){return"undefined"==typeof WebSocket?!1:this===function(){return this}()?new t(e,n):(this.url=e,this.ws=new WebSocket(e),this.debugging=n,this.events={open:[],close:[],error:[],message:[]},void(n&&(this.on("open",function(){console.log("connect successful: %s ...",this.url)}),this.on("close",function(){console.log("connection interrupted ...")}),this.on("error",function(){console.log("something error ...")}),this.on("message",function(e){var n=e.data;console.log("received message: <-- %s ...",n)}))))}t.prototype={on:function(e,n){if(!e||!n)throw new Error("Not enough arguments");if(!this.events.hasOwnProperty(e))throw new Error("Only accept [open, close, error, message] event");!this.events[e].indexOf(n)>-1&&(this.events[e]=this.events[e].concat(n)),this.ws.addEventListener(e,n)},off:function(e,n){var t=this.events[e].indexOf(n);0>t||(this.ws.removeEventListener(e,n),this.events[e].splice(t,1))},emit:function(e){1!==this.ws.readyState&&console.log("connection is not established, please wait ..."),this.debugging&&console.log("send message: --> %s ...",e),this.ws.send(e)},close:function(){this.debugging&&console.log("close connection ..."),this.ws.close()},reconnect:function(){this.debugging&&console.log("try to reconnect ...");var e=this.events,n=new WebSocket(this.url),t=this;for(var o in e)if(e.hasOwnProperty(o))for(var s in e[o])n.addEventListener(o,e[o][s]);n.addEventListener("open",function(){t.ws=n})}},e.exports=t}]);

(function(){

    var ws = new BrowserWebSocket('wss://gc-airi-demo.keyma.kr/alexa-skill-ws');
    //var ws = new BrowserWebSocket('ws://127.0.0.1:4004');
    //var ws = new BrowserWebSocket('ws://172.30.1.110:4004');

    ws.on('open', function() {
	console.log('### simple-remote:', 'websocket connected');
    });

    ws.on('message', function(e) {
	var message = e.data;
	console.log('### simple-remote:', 'websocket message:', message);
	if (message === 'next') {
	    Reveal.navigateNext();
	}
	if (message === 'back') {
	    Reveal.navigatePrev();
	}
    });

})();

