var vm = require('../viewModels/userViewModel');

vm.init()

var loginsubmit= function(){
	vm.login();
	return false;
}



var loginView=function()
{
		return m("div[id=login]",[

				m("div[id=SignImg]",[
					m("a[href='http://127.0.0.1:3000/']",[
						m("img[src=/images/peacock_logo.png]")
					])
				]),

				m("div[id=SignHead]",[
					m("h1","Sign In To India Trip!"),

					m("div[id=Signup]",[
						m("form",{onsubmit:loginsubmit},[
								m("label[for='emailID']","Email ID"),
								m("input[name=emailID]",{onchange:m.withAttr("value",vm.emailID),value:vm.emailID(),placeholder:"Enter Email ID"}),
								m("label[for='password']","Password"),
								m("input[name=password]",{onchange:m.withAttr("value",vm.password),value:vm.password(),placeholder:"Enter Your Password"}),
								m("br"),
								m("button","Login")
							]),
						
						m("h",vm.response1),
						m("br"),
						m("a",{config:m.route,href:"/reset"},"Reset Password")
					])
				])
		])
};


module.exports=loginView;