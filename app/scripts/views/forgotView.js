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
var forgot= function(){
	vm.PUpdate();
	return false;
}
/*
onsubmit method ends here
*/

/********************
Update password view
********************/
var forgotView=function()
{
	return m("div[id=forgot]",[
		m("h",vm.token),
		m("form",{onsubmit:forgot},[
			m("input",{onchange:m.withAttr("value",vm.token1), value:vm.token1(),placeholder:"Enter Your Token"}),
			m("input",{onchange:m.withAttr("value",vm.emailID), value:vm.emailID(),placeholder:"Enter Your Email ID"}),
			m("input",{onchange:m.withAttr("value", vm.password), value:vm.password(), placeholder:"Enter New Password"}),
			m("br"),
			m("button","Submit"),
			m("br")			
		])
	])
};
/******************************
Update password view ends here
*******************************/

module.exports=forgotView;