var vm = require('../viewModels/userViewModel');
vm.init()

var loginsubmit= function(){
	vm.login();
	return false;
}


var loginView=function()
{
		return m("html",[
			m("body",[
				m("form",{onsubmit:loginsubmit},[
						m("input",{onchange:m.withAttr("value",vm.Username),value:vm.Username(),placeholder:"Enter Username"}),
						m("input",{onchange:m.withAttr("value",vm.Password),value:vm.Password(),placeholder:"Enter Your Password"}),
						m("button","Login")
					]),
				m("h",vm.response),
				m("br"),
				m("a",{href:"?/reset"},"Reset Password")
			])
		])	
};

module.exports=loginView;