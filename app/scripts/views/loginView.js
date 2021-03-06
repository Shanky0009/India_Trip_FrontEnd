/*
Loads view models here 
*/
var vm = require('../viewModels/userViewModel');

/*
view model initialized
*/
vm.init()

/*
onsubmit method
*/
var loginsubmit= function(){
	vm.login();
	return false;
}
/*
onsubmit method ends here
*/


/**********************************
Login page view and password reset
***********************************/
var loginView=function()
{
	return m("div[id=login]",[
		m("div[id=SignImg]",[
			m("a[href='http://127.0.0.1:9000/']",[
				m("img[src=/images/peacock_logo.png]")
			])
		]),
		m("div[class=clear]"),
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
		]),
		m("div[class=clear]")
	])
};
/*******************************************
Login page view and password reset ends here
********************************************/

module.exports=loginView;