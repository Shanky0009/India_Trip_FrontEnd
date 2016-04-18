 
var vm = require('../viewModels/destinationViewModel');


var Cookies= require('js-cookie');

vm.init();


var destinationClick= function(){
	vm.destinationNo();
	return false;
}

var login= function(){
	vm.logOne();	
}


var userView=function() 
{ 
	return	m("div[id=First]",[
		m("nav",[
			m("a[href='http://localhost:9000/']","India Trip!"),
			m("a[href='/sign-up']",{config:m.route},"Register Here"),
			m("a[href='/search']",{config:m.route},"Get Hotel"),
			m("a[href='#']",{onclick:login},"User Login"),
			m("a[href='#']",{config:m.route,onclick:destinationClick},"Destinations"),
			m("a[href='/about']",{config:m.route},"About Us")
		]),
		m("br"),
		m("hr")
	])
};

var user={};
user.model = require('../models/User');
var mainModule={controller: user.controller, view: userView};
m.route(document.getElementById('First'),"/",{
		"/":mainModule
});


module.exports = userView;

