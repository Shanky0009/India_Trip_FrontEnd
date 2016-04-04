
var vm = require('../viewModels/userViewModel');

vm.init()

var reset= function(){
	vm.PReset();
	return false;
}

var resetView=function()
{
		return m("div[id=reset]",[
				m("form",{onsubmit:reset},[
						m("input",{onchange:m.withAttr("value", vm.emailID), value:vm.emailID(), placeholder:"Enter Email ID"}),
						m("br"),
						m("input",{onchange:m.withAttr("value", vm.answer), value:vm.answer(),placeholder:"Enter Your Answer"}),
						m("br"),
						m("button","Reset"),
						m("br")
						
					]),
				m("h1",vm.token),
				m("a",{config:m.route,href:"/forgot"},"Click to Change Password if you have Token")

				])
};



module.exports=resetView;