
var vm = require('../viewModels/userViewModel');

vm.init()

// var submit= function(){
// 	vm.add();
// 	return false;
// }
// var loginsubmit=function()
// {
// 	vm.login();
// 	return false;
// }
// var showsubmit=function()
// {
// 	vm.show();
// 	return false;
// }



var userView=function() {

	
	return m("html",[
				m("body",[
					m("div[id=First]",[
						m("a[class=Main]",{href:"?/"},"Home"),
						

						m("a",{href:"?/sign-up"},"Sign-Up"),
						

						m("a",{href:"?/show"},"Show"),
						

						m("a",{href:"?/login"},"Login"),
					])
					
			]) 
	])

	
};





module.exports = userView;

