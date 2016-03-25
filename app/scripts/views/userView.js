 
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
					m("form",{onsubmit:submit},[
						m("input",{onchange:m.withAttr("value", vm.username), value:vm.username(), placeholder:"Enter Username"}),
						m("br"),
						m("input",{onchange:m.withAttr("value", vm.emailID), value:vm.emailID(),placeholder:"Enter EmailID"}),
						m("br"),
						m("input",{onchange:m.withAttr("value", vm.password), value:vm.password(),placeholder:"Enter Password"}),
						m("br"),
						m("input",{onchange:m.withAttr("value", vm.answer), value:vm.answer(),placeholder:"Enter Answer"}),
						m("br"),
						m("button","Submit"),
						m("br")
						
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