 
var vm = require('../viewModels/userViewModel');

vm.init()

<<<<<<< HEAD
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

=======
var submit= function(){
	vm.add();
	
	return false;
}
var showsubmit=function()
{
	vm.show();
	return false;
}
  

var loginsubmit = function()
{
	vm.login();
	return false;
}
>>>>>>> 1a68a825554129fc9a2cc969bca9c56d8fc44ad6


var userView=function() {

	
	return m("html",[
				m("body",[
					m("div[id=First]",[
						m("a[class=Main]",{href:"?/"},"Home"),
						

						m("a",{href:"?/sign-up"},"Sign-Up"),
						

						m("a",{href:"?/show"},"Show"),
						
<<<<<<< HEAD

						m("a",{href:"?/login"},"Login"),
					])
					
			]) 
	])

	
=======
					]),
					
					m("form",{onsubmit:showsubmit},[
						m("button","Show")
                    ]),
					
				m("form",{onsubmit:showsubmit},[
					     m("input" ,{onchange:m.withAttr("value",vm.username),value:vm.username(), placeholder:"Enter Username"}),
					     m("input",{onchange:m.withAttr("value",vm.password),value:vm.password(), placeholder:"Enter Password"}),
					    // m("br"),
					     m("button","login"),
				     ])
					
		]) 
	]);
>>>>>>> 1a68a825554129fc9a2cc969bca9c56d8fc44ad6
};





module.exports = userView;

