/*
Loads all models here 
*/ 
var vm = require('../viewModels/destinationViewModel');
user.model = require('../models/User');
var Cookies= require('js-cookie');

/*
view model initialized
*/
vm.init();

/*
onsubmit methods
*/
var destinationClick= function(){
	vm.destinationNo();
	return false;
}

var login= function(){
	vm.logOne();	
}
/*
onsubmit methods ends here
*/

/**********************
Home Page view with nav
*********************/
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
/********************************
Home Page view with nav ends here
*********************************/

/*Empty model method object.*/
var user={};
/*module gets user controller and view*/
var mainModule={controller: user.controller, view: userView};
/*initialize the application*/
m.route(document.getElementById('First'),"/",{
		"/":mainModule
});


module.exports = userView;

