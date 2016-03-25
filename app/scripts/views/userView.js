 
var vm = require('../viewModels/userViewModel');

vm.init()

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



var userView=function() {

	
	return m("html",[
				m("body",[
					m("div[id=First]",[
						m("a[class=Main]",{href:"?/"},"Home"),
						

						m("a",{href:"?/sign-up"},"Sign-Up"),
						

						m("a",{href:"?/show"},"Show"),
						


						m("a",{href:"?/login"},"Login"),
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

};





module.exports = userView;

