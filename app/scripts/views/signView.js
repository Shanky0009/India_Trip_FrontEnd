var vm = require('../viewModels/userViewModel');
var Cookies= require('js-cookie');

vm.init()

var submit= function(){
	vm.add();
	return false; 
}

var signView=function()
{
	return m("div[id=signIn]",[
		m("h1","Register Here"),
		m("form",{onsubmit:submit},[
			m("input[required]",{onchange:m.withAttr("value", vm.username), value:vm.username(), placeholder:"Enter Username"}),
			m("br"),
			m("input[required]",{onchange:m.withAttr("value", vm.emailID), value:vm.emailID(),placeholder:"Enter EmailID"}),
			m("br"),
			m("input[required]",{onchange:m.withAttr("value", vm.password), value:vm.password(),placeholder:"Enter Password"}),
			m("br"),
			m("label[for='answer']","Who was your first teacher?"),
			m("input[required],[name=answer]",{onchange:m.withAttr("value", vm.answer), value:vm.answer(),placeholder:"Enter Answer"}),
			m("br"),
			m("button","Submit"),
			m("br")		
		]),
		m("h",vm.response1)
	])	
};

module.exports=signView;