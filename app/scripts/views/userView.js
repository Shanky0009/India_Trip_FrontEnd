 
var vm = require('../viewModels/destinationViewModel');

vm.init()

var destinationClick= function(){
	vm.destinationNo();
	return false;
}

var userView=function() { 

	
	return	m("div[id=First]",[

						m("a[href='http://127.0.0.1:9000/']","India Trip!"),

						m("a[href='/sign-up']",{config:m.route},"Register Here"),
						

						m("a[href='/show']",{config:m.route},"Get Hotel"),
						
						
						m("a[href='/login']",{config:m.route},"User Login"),

						m("a[href='#']",{config:m.route,onclick:destinationClick},"Destinations"),

						m("a[href='/about']",{config:m.route},"About Us"),
						m("br"),
						m("hr"),
						m("h3","Welcome to India Trip")
					])

};

var user={};

user.model = require('../models/User');

var mainModule={controller: user.controller, view: userView};

m.route(document.getElementById('First'),"/",{
		"/":mainModule
	});


module.exports = userView;

