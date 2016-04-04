var vm = require('../viewModels/userViewModel');

vm.init()

var forgot= function(){
	vm.PUpdate();
	return false;
}

var forgotView=function()
{
		return m("div[id=forgot]",[
				m("h",vm.token),
				m("form",{onsubmit:forgot},[
						m("input",{onchange:m.withAttr("value",vm.token), value:vm.token(),placeholder:"Enter Your Token"}),
						m("input",{onchange:m.withAttr("value",vm.emailID), value:vm.emailID(),placeholder:"Enter Your Email ID"}),
						m("input",{onchange:m.withAttr("value", vm.password), value:vm.password(), placeholder:"Enter New Password"}),
						m("br"),
						m("button","Submit"),
						m("br")
						
					])
				])
};

module.exports=forgotView;